"use client";

import { useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Edit, FolderTree, Trash } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import { CustomButton, CustomHoldButton } from "@/components/ui/custom-button";
import { customButtonVariants } from "@/components/ui/custom-button/custom-button-variants";

import ParentBlogRow from "./ParentBlogRow";

import type { ParentBlog, RootBlog } from "./types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  blog: RootBlog;
  parents: ParentBlog[];
}

const RootBlogRow = ({ blog, parents }: Props) => {
  const locale = useLocale();

  const t = useTranslations("blogs");

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/blog/root/delete/${blog.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success(t("toast.rootBlogDeleteSuccess"));

      router.refresh();
    } catch {
      toast.error(t("toast.rootBlogDeleteError"));
    }
  };

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className="mb-4 last:mb-0"
    >
      <div className="blog-root-grid group border-border-secondary bg-secondary-bg hover:bg-secondary/30 hover:border-primary/30 relative grid min-h-[72px] items-center rounded-xl border px-6 py-4 transition-all duration-300 hover:shadow-lg">
        {/* ID */}
        <div className="text-muted-foreground ps-1 font-mono text-sm">
          #{blog.id}
        </div>

        {/* TITLE */}
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-xl">
            <FolderTree className="size-5" />
          </div>

          <p className="font-semibold">{blog.title}</p>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-2 pe-1">
          <Link
            href={`/${locale}/blogs/root/edit/${blog.id}`}
            className={cn(
              customButtonVariants({
                intent: "info",
                variant: "soft",
              }),
              "gap-2",
            )}
          >
            <Edit className="size-4" />
            {t("actions.edit")}
          </Link>

          <CustomHoldButton
            intent="destructive"
            variant="soft"
            duration={1200}
            onComplete={handleDelete}
            leftSection={<Trash className="size-4" />}
          >
            {t("actions.delete")}
          </CustomHoldButton>

          {parents.length > 0 && (
            <CustomButton
              intent="info"
              variant="soft"
              onClick={() => setIsOpen((prev) => !prev)}
              rightSection={
                <ChevronDown
                  className={cn(
                    "mt-0.5 size-4.5 transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              }
            >
              {t("actions.more")}
            </CustomButton>
          )}
        </div>

        {/* Hover Indicator */}
        <div className="bg-primary absolute top-3 bottom-3 left-0 w-1 rounded-r-full opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* PARENTS */}
      <AnimatePresence>
        {isOpen && parents.length > 0 && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden"
          >
            <div className="relative ms-6 mt-4 space-y-3">
              <div className="bg-border absolute top-0 bottom-0 left-3 w-px" />

              {parents.map((parent) => (
                <ParentBlogRow key={parent.id} blog={parent} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RootBlogRow;
