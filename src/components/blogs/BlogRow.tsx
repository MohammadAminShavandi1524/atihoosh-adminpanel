"use client";

import { Edit, Tag, Trash } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { formatDate } from "./CategoryRow";
import { motion } from "framer-motion";
import { ChildBlog } from "@/data/admins";
import ChildBlogRow from "./ChildBlogRow";

interface BlogRowProps {
  id: string;
  category: string;
  tags: string[];
  title: string;
  date: string;
  children: ChildBlog[];
  onDelete: () => void;
}

const BlogRow = ({
  category,
  date,
  id,
  tags,
  title,
  onDelete,
  children,
}: BlogRowProps) => {
  const locale = useLocale();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.985 }}
      transition={{
        layout: {
          type: "spring",
          stiffness: 450,
          damping: 35,
        },
        duration: 0.2,
      }}
      className="mb-3 last:mb-0"
    >
      {/* Parent */}
      <div className="group border-border-secondary bg-secondary-bg hover:border-primary/20 hover:bg-secondary relative grid min-h-16 grid-cols-[70px_2fr_1fr_1.5fr_140px_300px] items-center rounded-xl border px-5 py-3 shadow-sm transition-all duration-200 hover:shadow-md">
        {/* ID */}
        <div className="text-muted-foreground font-mono text-sm">#{id}</div>

        {/* Title */}
        <div className="pr-4">
          <p className="text-foreground line-clamp-2 font-medium">{title}</p>
        </div>

        {/* Category */}
        <div>
          <span className="bg-primary/10 text-primary rounded-md px-2.5 py-1 text-xs font-medium">
            {category}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-muted text-muted-foreground inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs"
            >
              <Tag className="size-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Date */}
        <div className="text-muted-foreground text-sm">{formatDate(date)}</div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/${locale}/blogs/edit/${id}`}
            className="flex items-center gap-1 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition-all hover:bg-blue-100 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300"
          >
            <Edit className="size-4" />
            Edit
          </Link>

          <button
            onClick={onDelete}
            className="group/delete flex cursor-pointer items-center gap-1 rounded-lg border border-red-400 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-500 transition-all hover:bg-red-500/20"
          >
            <Trash className="size-4 transition-transform group-hover/delete:scale-110 group-hover/delete:-rotate-6" />
            Delete
          </button>

          <button className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition-all hover:bg-blue-100 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
            More
          </button>
        </div>

        <div className="bg-primary absolute top-2 bottom-2 left-0 w-1 rounded-r-full opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* Children */}
      {children.length > 0 && (
        <div className="relative mt-3 ml-8">
          {/* Line */}
          <div className="bg-border absolute top-0 bottom-0 left-2 w-px" />

          <div className="space-y-2">
            {children.map((child) => (
              <ChildBlogRow key={child.id} {...child} parentId={id} />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BlogRow;
