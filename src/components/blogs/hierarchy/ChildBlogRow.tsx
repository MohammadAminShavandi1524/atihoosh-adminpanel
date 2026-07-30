"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  Edit,
  FileText,
  Image as ImageIcon,
  Download,
  Trash,
} from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import { CustomHoldButton } from "@/components/ui/custom-button";
import { customButtonVariants } from "@/components/ui/custom-button/custom-button-variants";

import type { ChildBlog } from "./types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Props {
  blog: ChildBlog;
  parentLang: string;
  parentId: number;
}

const ChildBlogRow = ({ blog, parentLang, parentId }: Props) => {
  const locale = useLocale();
  const t = useTranslations("blogs");

  const imageAvailable = Boolean(blog.image);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/blog/child/delete/${blog.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success(t("toast.childBlogDeleteSuccess"));

      setTimeout(() => {
        window.location.reload();
      }, 1800);
    } catch {
      toast.error(t("toast.childBlogDeleteError"));
    }
  };

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -20,
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn("")}
    >
      <div
        className={cn(
          "group border-border-secondary bg-secondary-bg hover:bg-secondary/30 hover:border-primary/30 relative rounded-xl border px-5 py-4 transition-all hover:shadow-md",
        )}
      >
        <div className="flex items-center justify-between gap-5">
          {/* CONTENT */}
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-xl">
              <FileText className="size-5" />
            </div>

            <div className="space-y-2">
              <p
                dir={parentLang === "fa" ? "rtl" : "ltr"}
                className={cn(
                  "font-semibold",
                  parentLang === "fa" && "font-IRANYekanX",
                )}
              >
                {blog.title}
              </p>

              <p
                dir={parentLang === "fa" ? "rtl" : "ltr"}
                className={cn(
                  "text-muted-foreground max-w-3xl text-justify text-sm leading-6",
                  parentLang === "fa" && "font-IRANYekanX",
                )}
              >
                {blog.description}
              </p>

              <div className="text-muted-foreground flex items-center gap-2 text-xs">
                <span>
                  {t("hierarchy.id")}: #{blog.id}
                </span>

                {imageAvailable && (
                  <>
                    <span>•</span>

                    <span className="text-primary flex items-center gap-1">
                      <ImageIcon className="size-3.5" />

                      {t("hierarchy.imageAttached")}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex shrink-0 items-center gap-2">
            {/* EDIT */}
            <Link
              href={`/${locale}/blogs/child/edit/${parentId}/${blog.id}`}
              className={cn(
                customButtonVariants({
                  intent: "info",
                  variant: "soft",
                }),
              )}
            >
              <Edit className="size-4" />

              <span>{t("actions.edit")}</span>
            </Link>

            {/* IMAGE */}
            <a
              href={blog.image ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!imageAvailable}
              className={cn(
                customButtonVariants({
                  intent: "info",
                  variant: "soft",
                }),

                !imageAvailable &&
                  "pointer-events-none cursor-not-allowed opacity-50",
              )}
            >
              <Download className="size-4" />

              <span>{t("actions.downloadImage")}</span>
            </a>

            {/* DELETE */}
            <CustomHoldButton
              intent="destructive"
              variant="soft"
              duration={1200}
              onComplete={handleDelete}
              leftSection={<Trash className="size-4" />}
            >
              {t("actions.delete")}
            </CustomHoldButton>
          </div>
        </div>

        {/* HOVER LINE */}
        <div className="bg-primary absolute top-2 bottom-2 left-0 w-1 rounded-r-full opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};

export default ChildBlogRow;
