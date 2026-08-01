"use client";

import { useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Edit,
  FileText,
  Trash,
  Globe,
  Tag,
  Image as ImageIcon,
  Eye,
  EyeOff,
  Download,
} from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import { CustomButton, CustomHoldButton } from "@/components/ui/custom-button";

import { customButtonVariants } from "@/components/ui/custom-button/custom-button-variants";

import ChildBlogRow from "./ChildBlogRow";

import type { ChildBlog, ParentBlog } from "./types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  blog: ParentBlog;
  onDelete?: (id: number) => void;
}

const ParentBlogRow = ({ blog, onDelete }: Props) => {
  const locale = useLocale();

  const t = useTranslations("blogs");

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [loaded, setLoaded] = useState(false);

  const [children, setChildren] = useState<ChildBlog[]>([]);

  const imagePath = blog.image ? blog.image.split("arvanstorage.ir/")[1] : null;

  const imageUrl = imagePath ? `/api/media/${imagePath}` : null;

  const handleToggle = async () => {
    if (!loaded) {
      try {
        setLoading(true);

        const res = await fetch(`/api/blog/child/${blog.id}`, {
          cache: "no-store",
        });

        const data = await res.json();

        setChildren(Array.isArray(data) ? data : []);

        setLoaded(true);
      } catch (error) {
        console.error(error);

        setChildren([]);
      } finally {
        setLoading(false);
      }
    }

    setOpen((prev) => !prev);
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/blog/parent/delete/${blog.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success(t("toast.parentBlogDeleteSuccess"));

      setTimeout(() => {
        window.location.reload();
      }, 1800);
    } catch {
      toast.error(t("toast.parentBlogDeleteError"));
    }
  };

  const handlePublish = async () => {
    try {
      const res = await fetch(`/api/blog/publish/${blog.id}`, {
        method: "PATCH",
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success(
        blog.published
          ? t("toast.blogUnpublishedSuccess")
          : t("toast.blogPublishedSuccess"),
      );

      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } catch {
      toast.error(t("toast.blogPublishError"));
    }
  };

 

  return (
    <motion.div layout>
      {/* CARD */}
      <div
        className={cn(
          "group border-border-secondary bg-secondary-bg hover:bg-secondary/30 hover:border-primary/30 relative rounded-xl border px-5 py-4 transition-all hover:shadow-md",
        )}
      >
        <div className="flex items-center justify-between gap-5">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-xl">
              <FileText className="size-5" />
            </div>

            <div className="space-y-1.5">
              <div className="flex gap-2">
                <p
                  className={cn(
                    "font-semibold",
                    blog.lang === "fa" && "font-IRANYekanX",
                  )}
                >
                  {blog.title}
                </p>

                {blog.published ? (
                  <div className="flex h-fit items-center gap-1 rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-600">
                    <Eye className="size-3" />
                    <span className="">{t("hierarchy.published")}</span>
                  </div>
                ) : (
                  <div className="flex h-fit items-center gap-1 rounded-full bg-orange-500/10 px-2 py-1 text-xs text-orange-600">
                    <EyeOff className="size-3" />
                    <span>{t("hierarchy.draft")}</span>
                  </div>
                )}
              </div>

              <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-xs">
                <span className="flex items-center gap-1">
                  <Globe className="size-3" />

                  {blog.lang.toUpperCase()}
                </span>

                <span>
                  {t("hierarchy.category")}: {blog.category.name}
                </span>

                <span>
                  {t("hierarchy.id")}: #{blog.id}
                </span>
              </div>

              {blog.tags?.length > 0 && (
                <div className="flex items-center gap-2">
                  <Tag className="text-muted-foreground size-3" />

                  <div className="flex gap-1">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "bg-tertiary rounded-md px-2 py-1 text-xs",
                          blog.lang === "fa" && "font-IRANYekanX",
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            <Link
              href={`/${locale}/blogs/parent/edit/${blog.id}`}
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

            {imageUrl && (
              <a
                href={imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  customButtonVariants({
                    intent: "info",
                    variant: "soft",
                  }),
                )}
              >
                <Download className="size-4" />

                <span>{t("actions.downloadImage")}</span>
              </a>
            )}

            <CustomButton
              onClick={handlePublish}
              intent="success"
              variant="soft"
            >
              {blog.published ? t("actions.unpublish") : t("actions.publish")}
            </CustomButton>

            <CustomHoldButton
              intent="destructive"
              variant="soft"
              duration={1200}
              onComplete={handleDelete}
              leftSection={<Trash className="size-4" />}
            >
              {t("actions.delete")}
            </CustomHoldButton>

            <CustomButton
              intent="info"
              variant="soft"
              loading={loading}
              onClick={handleToggle}
              rightSection={
                <ChevronDown
                  className={cn(
                    "mt-0.5 size-4.5 transition-transform",
                    open && "rotate-180",
                  )}
                />
              }
            >
              {t("actions.more")}
            </CustomButton>
          </div>
        </div>

        {/* DESCRIPTION */}
        {blog.description && (
          <div className="text-muted-foreground border-border-secondary mt-4 flex items-start gap-2 border-t pt-3 text-sm">
            <p
              dir={blog.lang === "fa" ? "rtl" : "ltr"}
              className={cn("", blog.lang === "fa" && "font-IRANYekanX")}
            >
              {blog.description}
            </p>
          </div>
        )}

        <div className="bg-primary absolute top-3 bottom-3 left-0 w-1 rounded-r-full opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* CHILDREN */}
      <AnimatePresence>
        {open && (
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
            className="overflow-hidden"
          >
            <div className="relative ms-6 mt-4 space-y-3">
              <div className="bg-border absolute top-0 bottom-0 left-2 w-px" />

              {children.length > 0 ? (
                children.map((child) => (
                  <ChildBlogRow
                    key={child.id}
                    parentLang={blog.lang}
                    parentId={blog.id}
                    blog={child}
                  />
                ))
              ) : (
                <div className="border-border-secondary bg-secondary/20 text-muted-foreground rounded-xl border p-4 text-sm">
                  {t("hierarchy.noChildBlogs")}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ParentBlogRow;
