"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { CustomSelect } from "@/components/ui/custom-select";

interface RootBlog {
  id: number;
  title: string;
}

interface RootBlogSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const RootBlogSelect = ({ value, onChange }: RootBlogSelectProps) => {
  const t = useTranslations("addBlog");

  const [rootBlogs, setRootBlogs] = useState<RootBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRootBlogs = async () => {
      try {
        const res = await fetch("/api/blog/root", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch root blogs");
        }

        const data = await res.json();

        setRootBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRootBlogs();
  }, []);

  return (
    <CustomSelect
      label={t("forms.parentBlog.rootBlog")}
      placeholder={
        loading
          ? t("forms.parentBlog.loadingRootBlogs")
          : t("forms.parentBlog.rootBlogPlaceholder")
      }
      value={value}
      onChange={onChange}
      options={rootBlogs.map((item) => ({
        label: item.title,
        value: item.title,
      }))}
      disabled={loading}
    />
  );
};

export default RootBlogSelect;
