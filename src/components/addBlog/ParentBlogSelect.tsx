"use client";

import { useEffect, useState } from "react";

import { ControllerRenderProps, FieldError } from "react-hook-form";
import { useTranslations } from "next-intl";

import { CustomSelect } from "@/components/ui/custom-select";

interface ParentBlog {
  id: number;
  title: string;
}

interface ParentBlogSelectProps {
  field: ControllerRenderProps<any, "parent_blog">;
  error?: FieldError;
}

const ParentBlogSelect = ({ field, error }: ParentBlogSelectProps) => {
  const t = useTranslations("addBlog");

  const [parentBlogs, setParentBlogs] = useState<ParentBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParentBlogs = async () => {
      try {
        const res = await fetch("/api/blog/parent", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch parent blogs");
        }

        const data = await res.json();

        setParentBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchParentBlogs();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <CustomSelect
        label={t("forms.blog.parentBlog")}
        placeholder={
          loading
            ? t("forms.blog.loadingParentBlogs")
            : t("forms.blog.parentBlogPlaceholder")
        }
        value={field.value}
        onChange={field.onChange}
        disabled={loading}
        options={parentBlogs.map((item) => ({
          label: item.title,
         value: item.id,
        }))}
      />

      {error && <p className="px-1 text-xs text-red-400">{error.message}</p>}
    </div>
  );
};

export default ParentBlogSelect;
