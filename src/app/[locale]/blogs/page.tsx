"use client";

import AnimatedSections from "@/components/blogs/AnimatedSections";
import BlogRow from "@/components/blogs/BlogRow";
import CategoryRow from "@/components/blogs/CategoryRow";
import Header from "@/components/blogs/Header";
import { Tab } from "@/components/blogs/Tab";
import { ScrollArea } from "@/components/ui/scroll-area";
import { blogs } from "@/data/admins";
import { BlogsTab } from "@/types/objectTypes";
import { ArrowDownUp, Search, SearchX } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeleteModal from "@/components/blogs/DeleteModal";
import { useLocale, useTranslations } from "next-intl";
import HeaderLayout from "@/components/layout/HeaderLayout";
import { toast } from "sonner";
import CategoriesSection from "@/components/blogs/CategoriesSection";
import BlogsSection from "@/components/blogs/BlogsSection";

interface Category {
  id: number;
  name: string;
  lang: "fa" | "en";
}

interface pageProps {}

const page = ({}: pageProps) => {
  const t = useTranslations("blogs");
  const locale = useLocale();

  const [selectedItem, setSelectedItem] = useState<{
    id: string;
    name: string;
    type: "blog" | "category";
  } | null>(null);

  const [current, setCurrent] = useState<BlogsTab>("categories");

  const tabOrder: Record<BlogsTab, number> = {
    categories: 0,
    Blogs: 1,
  };

  const [previous, setPrevious] = useState(current);
  const direction = tabOrder[current] > tabOrder[previous] ? 1 : -1;

  //? search and sort
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"newest" | "oldest">("oldest");

  const filteredBlogs = [...blogs]
    .filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const first = new Date(a.date).getTime();
      const second = new Date(b.date).getTime();

      return sort === "newest" ? second - first : first - second;
    });

  // ?

  // *** categories

  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    try {
      const [faRes, enRes] = await Promise.all([
        fetch("/api/blog/category/fa"),
        fetch("/api/blog/category/en"),
      ]);

      const faData = await faRes.json();
      const enData = await enRes.json();

      const merged = [
        ...faData.map((item: any) => ({
          ...item,
          lang: "fa" as const,
        })),
        ...enData.map((item: any) => ({
          ...item,
          lang: "en" as const,
        })),
      ].sort((a, b) => a.id - b.id);

      setCategories(merged);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/blog/category/delete/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      toast.success(t("toast.deleteSuccess"));

      getCategories();
    } catch (error) {
      console.error(error);

      toast.error(t("toast.deleteError"));
    }
  };

  // ****

  const renderSection = () => {
    switch (current) {
      case "categories":
        return (
          <CategoriesSection categories={categories} onDelete={handleDelete} />
        );

      case "Blogs":
        return (
          <BlogsSection
            search={search}
            setSearch={setSearch}
            sort={sort}
            setSort={setSort}
            blogs={filteredBlogs}
            onDelete={(blog) => {
              setSelectedItem({
                id: blog.id,
                name: blog.title,
                type: "blog",
              });
            }}
          />
        );
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <HeaderLayout
        title={t("header.title")}
        descrption={t("header.description")}
      />

      {/* content */}
      <div className="flex flex-1 flex-col px-10 pb-10">
        {/* tabs */}
        <div className="border-b-border-secondary mt-10 mb-6 flex border-b text-sm">
          <Tab
            label="categories"
            current={current}
            setCurrent={(value) => {
              setPrevious(current);
              setCurrent(value);
            }}
          />

          <Tab
            label="Blogs"
            current={current}
            setCurrent={(value) => {
              setPrevious(current);
              setCurrent(value);
            }}
          />
        </div>

        <AnimatedSections formKey={current} direction={direction}>
          {renderSection()}
        </AnimatedSections>
      </div>
    </div>
  );
};

export default page;
