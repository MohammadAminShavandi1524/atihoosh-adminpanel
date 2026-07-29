"use client";

import { motion } from "framer-motion";
import { ArrowDownUp, Search } from "lucide-react";
import { useTranslations } from "next-intl";

interface BlogsToolbarProps {
  search: string;
  setSearch: (value: string) => void;
  sort: "newest" | "oldest";
  setSort: (value: "newest" | "oldest") => void;
}

const BlogsToolbar = ({
  search,
  setSearch,
  sort,
  setSort,
}: BlogsToolbarProps) => {
  const t = useTranslations("blogs");

  return (
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
          onChange={(e) => setSort(e.target.value as "newest" | "oldest")}
          className="bg-tertiary border-border-secondary focus:border-primary focus:ring-primary/15 hover:border-primary/30 h-12 min-w-[180px] cursor-pointer appearance-none rounded-xl border pr-9 pl-11 text-sm transition-all duration-300 outline-none focus:ring-4"
        >
          <option value="newest">{t("blogsTable.newestFirst")}</option>
          <option value="oldest">{t("blogsTable.oldestFirst")}</option>
        </select>
      </motion.div>
    </motion.div>
  );
};

export default BlogsToolbar;
