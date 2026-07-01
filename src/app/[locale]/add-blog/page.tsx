"use client";

import AnimatedForm from "@/components/addBlog/AnimatedForm";
import { CategorySelect } from "@/components/addBlog/CategorySelect";
import Header from "@/components/addBlog/Header";
import SubmitButton from "@/components/addBlog/SubmitButton";
import { Tab } from "@/components/addBlog/Tab";
import { TagOption, TagSelector } from "@/components/addBlog/TagSelector";
import { FormField } from "@/components/FormField";
import { tags } from "@/data/admins";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface PageProps {}

export type BlogTab = "category" | "parentBlog" | "blog";

const Page = ({}: PageProps) => {
  const t = useTranslations("addBlog");

  const [current, setCurrent] = useState<BlogTab>("parentBlog");
  const [selectedTags, setSelectedTags] = useState<TagOption[]>([]);

  const tabOrder: Record<BlogTab, number> = {
    category: 0,
    parentBlog: 1,
    blog: 2,
  };

  const [previous, setPrevious] = useState(current);
  const direction = tabOrder[current] > tabOrder[previous] ? 1 : -1;

  const renderForm = () => {
    switch (current) {
      case "category":
        return (
          <form className="bg-secondary-bg relative flex h-full flex-col gap-y-6 rounded-xl p-7">
            <FormField
              label={t("forms.category.label")}
              placeholder={t("forms.category.placeholder")}
              as="input"
            />

            <SubmitButton current={current} />
          </form>
        );

      case "parentBlog":
        return (
          <form className="bg-secondary-bg relative flex h-full flex-col gap-y-6 rounded-xl p-7">
            <CategorySelect label={t("forms.parentBlog.category")} />

            <TagSelector
              label={t("forms.parentBlog.tags")}
              options={tags}
              value={selectedTags}
              onChange={setSelectedTags}
              placeholder={t("forms.parentBlog.tagsPlaceholder")}
            />

            <FormField
              label={t("forms.parentBlog.title")}
              placeholder={t("forms.parentBlog.titlePlaceholder")}
              as="input"
            />

            <FormField
              label={t("forms.parentBlog.featuredImage")}
              placeholder={t("forms.parentBlog.featuredImagePlaceholder")}
              as="input"
            />

            <FormField
              label={t("forms.parentBlog.description")}
              placeholder={t("forms.parentBlog.descriptionPlaceholder")}
              as="input"
            />

            <SubmitButton current={current} />
          </form>
        );

      case "blog":
        return (
          <form className="bg-secondary-bg relative flex h-full flex-col gap-y-6 rounded-xl p-7">
            <FormField
              label={t("forms.blog.title")}
              placeholder={t("forms.blog.titlePlaceholder")}
              as="input"
            />

            <FormField
              label={t("forms.blog.featuredImage")}
              placeholder={t("forms.blog.featuredImagePlaceholder")}
              as="input"
            />

            <FormField
              label={t("forms.blog.description")}
              placeholder={t("forms.blog.descriptionPlaceholder")}
              as="input"
            />

            <SubmitButton current={current} />
          </form>
        );
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <Header current={current} />

      {/* content */}
      <div className="flex flex-1 flex-col px-10 pb-10">
        {/* tabs */}
        <div className="border-b-border-secondary mt-10 mb-6 flex border-b text-sm">
          <Tab
            label="category"
            current={current}
            setCurrent={(value) => {
              setPrevious(current);
              setCurrent(value);
            }}
          />
          <Tab
            label="parentBlog"
            current={current}
            setCurrent={(value) => {
              setPrevious(current);
              setCurrent(value);
            }}
          />
          <Tab
            label="blog"
            current={current}
            setCurrent={(value) => {
              setPrevious(current);
              setCurrent(value);
            }}
          />
        </div>

        <AnimatedForm formKey={current} direction={direction}>
          {renderForm()}
        </AnimatedForm>
      </div>
    </div>
  );
};

export default Page;
