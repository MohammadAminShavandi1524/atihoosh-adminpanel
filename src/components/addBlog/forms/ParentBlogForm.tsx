"use client";

import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/components/FormField";
import { ScrollArea } from "@/components/ui/scroll-area";
import { tags } from "@/data/admins";
import { useLocale, useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { CategorySelect } from "../CategorySelect";
import LanguageSelect from "../LanguageSelect";
import RootBlogSelect from "../RootBlogSelect";
import SubmitButton from "../SubmitButton";
import { TagSelector } from "../TagSelector";
import { ParentBlogFormValues, parentBlogSchema } from "../parent-blog.schema";

interface Category {
  id: number;
  name: string;
}

const ParentBlogForm = () => {
  const t = useTranslations("addBlog");
  const locale = useLocale();

  const [categories, setCategories] = useState<Category[]>([]);

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ParentBlogFormValues>({
    resolver: zodResolver(parentBlogSchema(t)),
    defaultValues: {
      root_blog: 0,
      category: "",
      title: "",
      description: "",
      image: "",
      lang: "fa",
      tags: [],
    },
  });

  const lang = watch("lang");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`/api/blog/category/${lang}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data: Category[] = await res.json();

        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, [lang]);

  const onSubmit = async (data: ParentBlogFormValues) => {
    const payload = {
      title: data.title,
      description: data.description,
      image: data.image,
      category: data.category,
      root_blog: data.root_blog,
      tags: data.tags.map((item) => item.label),
      lang: data.lang,
    };

    try {
      const res = await fetch("/api/blog/parent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result?.error ?? t("toast.parentBlog.error"));
        return;
      }

      toast.success(t("toast.parentBlog.success"));
    } catch (error) {
      console.error(error);
      toast.error(t("toast.parentBlog.error"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondary-bg h-full rounded-xl py-7 ps-7 pe-2.5"
    >
      <ScrollArea
        dir={locale === "en" ? "ltr" : "rtl"}
        className="h-full w-full pe-4.5 pb-20"
      >
        <div className="flex flex-col gap-y-6">
          <Controller
            control={control}
            name="root_blog"
            render={({ field }) => (
              <RootBlogSelect field={field} error={errors.root_blog} />
            )}
          />

          <Controller
            control={control}
            name="lang"
            render={({ field }) => (
              <LanguageSelect value={field.value} onChange={field.onChange} />
            )}
          />

          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <CategorySelect
                label={t("forms.parentBlog.category")}
                options={categories.map((item) => ({
                  label: item.name,
                  value: String(item.id),
                }))}
                value={field.value}
                onChange={field.onChange}
                error={errors.category}
              />
            )}
          />

          <Controller
            control={control}
            name="tags"
            render={({ field }) => (
              <TagSelector
                label={t("forms.parentBlog.tags")}
                options={tags[lang]}
                lang={lang}
                value={field.value}
                onChange={field.onChange}
                placeholder={t("forms.parentBlog.tagsPlaceholder")}
              />
            )}
          />

          <FormField
            varient="default"
            label={t("forms.parentBlog.title")}
            placeholder={t("forms.parentBlog.titlePlaceholder")}
            register={register("title")}
            error={errors.title}
            as="input"
          />

          <FormField
            varient="default"
            label={t("forms.parentBlog.featuredImage")}
            placeholder={t("forms.parentBlog.featuredImagePlaceholder")}
            register={register("image")}
            error={errors.image}
            as="input"
          />

          <FormField
            varient="default"
            label={t("forms.parentBlog.description")}
            placeholder={t("forms.parentBlog.descriptionPlaceholder")}
            register={register("description")}
            error={errors.description}
            as="textarea"
          />

          <SubmitButton current="parentBlog" className="bottom-0" />
        </div>
      </ScrollArea>
    </form>
  );
};

export default ParentBlogForm;
