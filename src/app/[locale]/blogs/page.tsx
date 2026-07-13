"use client";

import AnimatedSections from "@/components/blogs/AnimatedSections";
import BlogRow from "@/components/blogs/BlogRow";
import CategoryRow from "@/components/blogs/CategoryRow";
import Header from "@/components/blogs/Header";
import { Tab } from "@/components/blogs/Tab";
import { ScrollArea } from "@/components/ui/scroll-area";
import { blogs, categories } from "@/data/admins";
import { BlogsTab } from "@/types/objectTypes";
import { ArrowDownUp, Search, SearchX } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeleteModal from "@/components/blogs/DeleteModal";
import { useLocale, useTranslations } from "next-intl";
import HeaderLayout from "@/components/layout/HeaderLayout";

interface pageProps {}

const page = ({}: pageProps) => {
  const t = useTranslations("blogs");
  const locale = useLocale();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState<{
    id: string;
    name: string;
    type: "blog" | "category";
  } | null>(null);

  const handleDelete = () => {
    if (!selectedItem) return;

    // اینجا بعداً API حذف رو صدا می‌زنی

    setIsDeleteModalOpen(false);
    setSelectedItem(null);
  };

  const [current, setCurrent] = useState<BlogsTab>("Blogs");

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

  const renderSection = () => {
    switch (current) {
      case "categories":
        return (
          <section className="bg-secondary-bg relative flex h-full flex-col overflow-hidden rounded-xl">
            <div className="border-b-border-secondary bg-tertiary border-b px-10">
              {/* header */}
              <div className="text-muted-foreground grid h-14 grid-cols-4 items-center text-sm font-semibold tracking-wider uppercase">
                <div className="ltr:ps-0.5">{t("categories.table.id")}</div>
                <div>{t("categories.table.name")}</div>
                <div className="">{t("categories.table.date")}</div>
                <div className="">{t("categories.table.actions")}</div>
              </div>
            </div>

            {/* Rows */}
            <div className="flex w-full flex-col items-center gap-y-2.5 overflow-y-auto ps-6 pe-1.5 pt-2.5 pb-7">
              <ScrollArea
                dir={locale === "en" ? "ltr" : "rtl"}
                className="h-full w-full"
              >
                <div className="pe-4.5">
                  {categories.map(({ date, id, label }, index) => {
                    return (
                      <CategoryRow
                        key={index}
                        id={id}
                        label={label}
                        date={date}

                        onDelete={() => {
                          console.log("clicked");

                          setSelectedItem({
                            id,
                            name: label,
                            type: "category",
                          });

                          setIsDeleteModalOpen(true);
                        }}
                      />
                    );
                  })}
                </div>
              </ScrollArea>
            </div>
          </section>
        );

      case "Blogs":
        return (
          <section className="bg-secondary-bg relative flex h-full flex-col overflow-hidden rounded-xl">
            {/* search and filter */}
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center justify-between gap-5 px-7 pt-7"
            >
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="group relative max-w-xl flex-1"
              >
                <Search className="text-muted-foreground group-focus-within:text-primary absolute top-1/2 left-4 size-5 -translate-y-1/2 transition-all duration-300 group-focus-within:scale-110" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t("blogsTable.searchPlaceholder")}
                  className="bg-tertiary border-border-secondary focus:border-primary focus:ring-primary/15 h-12 w-full rounded-xl border pr-5 pl-12 text-sm transition-all duration-300 outline-none focus:ring-4"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="group relative"
              >
                <ArrowDownUp className="text-muted-foreground group-hover:text-primary absolute top-1/2 left-4 size-4 -translate-y-1/2 transition duration-300 group-hover:rotate-180" />

                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(e.target.value as "newest" | "oldest")
                  }
                  className="bg-tertiary border-border-secondary focus:border-primary focus:ring-primary/15 hover:border-primary/30 h-12 min-w-[180px] cursor-pointer appearance-none rounded-xl border pr-9 pl-11 text-sm transition-all duration-300 outline-none focus:ring-4"
                >
                  <option value="newest">{t("blogsTable.newestFirst")}</option>

                  <option value="oldest">{t("blogsTable.oldestFirst")}</option>
                </select>
              </motion.div>
            </motion.div>

            {/* ************************************* */}

            <div className="border-border-secondary m-7 mt-7 h-full overflow-hidden rounded-xl border">
              {/* header */}
              <div className="border-b-border-secondary bg-tertiary border-b px-7.5">
                <div className="text-muted-foreground grid h-14 grid-cols-[70px_2fr_1fr_1.5fr_140px_300px] items-center text-sm font-semibold tracking-wider uppercase">
                  <div>{t("blogsTable.table.id")}</div>
                  <div>{t("blogsTable.table.title")}</div>
                  <div>{t("blogsTable.table.category")}</div>
                  <div>{t("blogsTable.table.tags")}</div>
                  <div>{t("blogsTable.table.date")}</div>
                  <div>{t("blogsTable.table.actions")}</div>
                </div>
              </div>
              {/* content */}
              <div className="flex h-full w-full flex-col overflow-y-auto ps-2.5 pe-1 pt-2.5 pb-18">
                <ScrollArea
                  dir={locale === "en" ? "ltr" : "rtl"}
                  className="h-full w-full"
                >
                  <AnimatePresence mode="wait">
                    {filteredBlogs.length > 0 ? (
                      <div className="pe-4 space-y-3">
                        {filteredBlogs.map((blog) => (
                          <motion.div
                            key={blog.id}
                            layout
                            initial={{ opacity: 0, y: 12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -12, scale: 0.98 }}
                            transition={{
                              layout: {
                                type: "spring",
                                stiffness: 450,
                                damping: 35,
                              },
                              duration: 0.2,
                            }}
                          >
                            <BlogRow
                              onDelete={() => {
                                setSelectedItem({
                                  id: blog.id,
                                  name: blog.title,
                                  type: "blog",
                                });
                                setIsDeleteModalOpen(true);
                              }}
                              {...blog}
                            />
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        className="flex h-[400px] flex-col items-center justify-center gap-3"
                      >
                        <div className="bg-tertiary rounded-full p-4">
                          <SearchX className="text-muted-foreground size-8" />
                        </div>

                        <h3 className="text-lg font-semibold">
                          {t("blogsTable.empty.title")}
                        </h3>

                        <p className="text-muted-foreground text-sm">
                          {t("blogsTable.empty.description")}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </ScrollArea>
              </div>
            </div>
          </section>
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
      <DeleteModal
        open={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        title={
          selectedItem?.type === "blog"
            ? t("deleteModal.deleteBlog")
            : t("deleteModal.deleteCategory")
        }
        description={t("deleteModal.description", {
          name: selectedItem?.name ?? "",
        })}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default page;
