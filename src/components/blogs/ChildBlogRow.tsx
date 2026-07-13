"use client";

import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

interface ChildBlogRowProps {
  id: string;
  title: string;
  description: string;
  parentId: string;
  onDelete?: () => void;
}

const ChildBlogRow = ({
  id,
  title,
  description,
  parentId,
  onDelete,
}: ChildBlogRowProps) => {
  const locale = useLocale();
  const t = useTranslations("blogs.actions");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{
        duration: 0.2,
        layout: {
          type: "spring",
          stiffness: 450,
          damping: 35,
        },
      }}
      className="relative pl-6 "
    >
      <div className="bg-secondary/40 hover:bg-secondary border-border flex items-center justify-between rounded-xl border p-4 transition-all duration-200 hover:shadow-sm">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary rounded-md px-2 py-1 text-xs font-semibold">
              #{id}
            </span>

            <h3 className="text-foreground font-medium">{title}</h3>
          </div>

          <p className="text-muted-foreground max-w-3xl text-sm leading-6">
            {description}
          </p>
        </div>

        <div className="ml-6 flex shrink-0 gap-2">
          <Link
            href={`/${locale}/blogs/edit/${parentId}/${id}`}
            className="flex items-center gap-1 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition-all hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300"
          >
            <Edit className="size-4" />
            {t("edit")}
          </Link>

          <button
            onClick={onDelete}
            className="group/delete flex cursor-pointer items-center gap-1 rounded-lg border border-red-400 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-500 transition-all hover:bg-red-500/20"
          >
            <Trash className="size-4 transition-transform group-hover/delete:scale-110 group-hover/delete:-rotate-6" />
            {t("delete")}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChildBlogRow;
