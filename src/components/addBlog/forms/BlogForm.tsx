"use client";

import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { FormField } from "@/components/FormField";

import ParentBlogSelect from "../ParentBlogSelect";
import SubmitButton from "../SubmitButton";
import { BlogFormValues, blogSchema } from "../blog.schema";

const BlogForm = () => {
  const t = useTranslations("addBlog");

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema(t)),
    defaultValues: {
      parent_blog: 0,
      title: "",
      description: "",
      image: "",
    },
  });

  const onSubmit = async (data: BlogFormValues) => {
    try {
      const payload = {
        blog_id: Number(data.parent_blog),
        title: data.title || null,
        description: data.description || null,
        image: data.image || null,
      };

      const res = await fetch("/api/blog/child", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result?.error ?? t("toast.blog.error"));
        return;
      }

      toast.success(t("toast.blog.success"));

      reset({
        parent_blog: 0,
        title: "",
        description: "",
        image: "",
      });

      console.log(result);
    } catch (error) {
      console.error(error);
      toast.error(t("toast.blog.error"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondary-bg relative flex h-full flex-col gap-y-6 rounded-xl p-7"
    >
      <Controller
        control={control}
        name="parent_blog"
        render={({ field }) => (
          <ParentBlogSelect field={field} error={errors.parent_blog} />
        )}
      />

      <FormField
        varient="default"
        label={t("forms.blog.title")}
        placeholder={t("forms.blog.titlePlaceholder")}
        register={register("title")}
        error={errors.title}
        as="input"
      />

      <FormField
        varient="default"
        label={t("forms.blog.description")}
        placeholder={t("forms.blog.descriptionPlaceholder")}
        register={register("description")}
        error={errors.description}
        as="textarea"
      />

      <FormField
        varient="default"
        label={t("forms.blog.featuredImage")}
        placeholder={t("forms.blog.featuredImagePlaceholder")}
        register={register("image")}
        error={errors.image}
        as="input"
      />

      <SubmitButton current="blog" disabled={isSubmitting} />
    </form>
  );
};

export default BlogForm;
