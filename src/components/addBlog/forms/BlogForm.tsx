"use client";

import { FormField } from "@/components/FormField";
import { useTranslations } from "next-intl";

import SubmitButton from "../SubmitButton";

const BlogForm = () => {
  const t = useTranslations("addBlog");

  return (
    <form className="bg-secondary-bg relative flex h-full flex-col gap-y-6 rounded-xl p-7">
      <FormField
        varient="default"
        label={t("forms.blog.title")}
        placeholder={t("forms.blog.titlePlaceholder")}
        as="input"
      />

      <FormField
        varient="default"
        label={t("forms.blog.featuredImage")}
        placeholder={t("forms.blog.featuredImagePlaceholder")}
        as="input"
      />

      <FormField
        varient="default"
        label={t("forms.blog.description")}
        placeholder={t("forms.blog.descriptionPlaceholder")}
        as="input"
      />

      <SubmitButton current="blog" />
    </form>
  );
};
export default BlogForm;
