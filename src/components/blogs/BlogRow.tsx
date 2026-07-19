"use client";

import { useState } from "react";
import { Edit, Tag, Trash, ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { formatDate } from "./CategoryRow";
import { AnimatePresence, motion } from "framer-motion";
import { ChildBlog } from "@/data/admins";
import ChildBlogRow from "./ChildBlogRow";
import { CustomButton, CustomHoldButton } from "../ui/custom-button";
import { customButtonVariants } from "../ui/custom-button/custom-button-variants";
import { cn } from "@/lib/utils";

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
  const t = useTranslations("blogs.actions");

  const [isOpen, setIsOpen] = useState(false);

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
      <div className="group border-border-secondary bg-secondary-bg hover:border-primary/20 hover:bg-secondary/30 relative grid min-h-16 grid-cols-[70px_2fr_1fr_1.5fr_140px_300px] items-center rounded-xl border px-5 py-3 shadow-sm transition-all duration-200 hover:shadow-md">
        {/* ID */}
        <div className="text-muted-foreground font-mono text-sm">#{id}</div>

        {/* Title */}
        <div className="pe-4">
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
              className="bg-primary/10 text-primary hover:bg-primary inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors hover:text-white"
            >
              <Tag className="size-3 shrink-0" />
              <span className="truncate">{tag}</span>
            </span>
          ))}
        </div>

        {/* Date */}
        <div className="text-muted-foreground text-sm">{formatDate(date)}</div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/${locale}/blogs/edit/${id}`}
            className={cn(
              customButtonVariants({
                intent: "info",
                variant: "soft",
                size: "md",
              }),
              "gap-2",
            )}
          >
            <Edit className="size-4" />
            {t("edit")}
          </Link>

          <CustomHoldButton
            intent="destructive"
            variant="soft"
            duration={1200}
            onComplete={onDelete}
            className="group"
            leftSection={<Trash className="size-4" />}
          >
            {t("delete")}
          </CustomHoldButton>

          {children.length > 0 && (
            <CustomButton
              intent="info"
              variant="soft"
              onClick={() => setIsOpen((prev) => !prev)}
              rightSection={
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              }
            >
              {t("more")}
            </CustomButton>
          )}
        </div>

        <div className="bg-primary absolute top-2 bottom-2 left-0 w-1 rounded-r-full opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <AnimatePresence>
        {isOpen && children.length > 0 && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="relative mt-3 ml-8">
              <div className="bg-border absolute top-0 bottom-0 left-2 w-px" />

              <div className="space-y-2">
                {children.map((child) => (
                  <ChildBlogRow key={child.id} {...child} parentId={id} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogRow;
