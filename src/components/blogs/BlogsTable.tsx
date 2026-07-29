"use client";

import { ScrollArea } from "@/components/ui/scroll-area";


import { AnimatePresence, motion } from "framer-motion";
import { SearchX } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import BlogRow from "./BlogRow";

interface Blog {
  id: string;
  title: string;
  category: string;
  tags: string[];
  date: string;
}

interface BlogsTableProps {
  blogs: Blog[];
  onDelete: (blog: Blog) => void;
}

const BlogsTable = ({ blogs, onDelete }: BlogsTableProps) => {
  const locale = useLocale();
  const t = useTranslations("blogs");

  return (
    <div className="border-border-secondary m-7 mt-7 h-full overflow-hidden rounded-xl border">
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

      <div className="flex h-full w-full flex-col overflow-y-auto ps-2.5 pe-1 pt-2.5 pb-18">
        <ScrollArea
          dir={locale === "en" ? "ltr" : "rtl"}
          className="h-full w-full"
        >
          <AnimatePresence mode="wait">
            {blogs.length > 0 ? (
              <div className="space-y-3 pe-4">
                {blogs.map((blog) => (
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
                    <BlogRow {...blog}  />
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
  );
};

export default BlogsTable;
