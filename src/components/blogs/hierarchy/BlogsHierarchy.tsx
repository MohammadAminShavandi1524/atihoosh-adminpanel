"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SearchX } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import Toolbar from "./Toolbar";

import { ParentBlog, RootBlog } from "./types";
import RootBlogRow from "./RootBlogRow";

const BlogsHierarchy = () => {
  const t = useTranslations("blogs");
  const locale = useLocale();

  const [rootBlogs, setRootBlogs] = useState<RootBlog[]>([]);
  const [parentBlogs, setParentBlogs] = useState<ParentBlog[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [rootRes, parentRes] = await Promise.all([
          fetch("/api/blog/root", {
            cache: "no-store",
          }),
          fetch("/api/blog/parent", {
            cache: "no-store",
          }),
        ]);

        const rootData = await rootRes.json();
        const parentData = await parentRes.json();

        setRootBlogs(rootData);
        setParentBlogs(parentData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredBlogs = useMemo(() => {
    let blogs = [...rootBlogs];

    blogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()),
    );

    blogs.sort((a, b) => (sort === "oldest" ? a.id - b.id : b.id - a.id));

    return blogs;
  }, [rootBlogs, search, sort]);

  return (
    <section className="bg-secondary-bg flex h-full flex-col overflow-hidden rounded-lg">
      <Toolbar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />

      <div className="border-border-secondary m-7 mt-7 flex h-full flex-col overflow-hidden rounded-lg border">
        <div className="bg-tertiary border-border-secondary border-b px-11">
          <div className="text-muted-foreground blog-root-grid grid h-14 items-center text-sm font-semibold uppercase">
            <div className="ps-0.5">{t("blogsTable.table.id")}</div>

            <div className="ps-2">{t("blogsTable.table.title")}</div>

            <div className="ps-1">{t("blogsTable.table.actions")}</div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden ps-6 pe-1.5 pt-4 pb-6">
          <ScrollArea dir={locale === "en" ? "ltr" : "rtl"} className="h-full">
            <AnimatePresence mode="wait">
              {!loading && filteredBlogs.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="flex h-[400px] flex-col items-center justify-center gap-3"
                >
                  <div className="bg-tertiary rounded-full p-4">
                    <SearchX className="text-muted-foreground size-8" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {t("blogsTable.empty.title")}
                  </h3>

                  <p className="text-muted-foreground">
                    {t("blogsTable.empty.description")}
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-3 pe-4.5">
                  {filteredBlogs.map((blog) => (
                    <RootBlogRow
                      key={blog.id}
                      blog={blog}
                      parents={parentBlogs.filter(
                        (parent) => parent.root_blog === blog.id,
                      )}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default BlogsHierarchy;
