"use client";

import AnimatedForm from "@/components/addBlog/AnimatedForm";
import { CategorySelect } from "@/components/addBlog/CategorySelect";
import BlogForm from "@/components/addBlog/forms/BlogForm";
import CategoryForm from "@/components/addBlog/forms/CategoryForm";
import ParentBlogForm from "@/components/addBlog/forms/ParentBlogForm";
import RootBlogForm from "@/components/addBlog/forms/RootBlogForm";
import SubmitButton from "@/components/addBlog/SubmitButton";
import { Tab } from "@/components/addBlog/Tab";
import { TagOption, TagSelector } from "@/components/addBlog/TagSelector";
import { FormField } from "@/components/FormField";
import HeaderLayout from "@/components/layout/HeaderLayout";
import { tags } from "@/data/admins";
import { BlogTab } from "@/types/objectTypes";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface PageProps {}

const Page = ({}: PageProps) => {
  const t = useTranslations("addBlog");
  const t_header = useTranslations("addBlog.header");

  const [current, setCurrent] = useState<BlogTab>("parentBlog");

  const tabOrder: Record<BlogTab, number> = {
    category: 0,
    rootBlog: 1,
    parentBlog: 2,
    blog: 3,
  };

  const [previous, setPrevious] = useState(current);
  const direction = tabOrder[current] > tabOrder[previous] ? 1 : -1;

  const renderForm = () => {
    switch (current) {
      case "category":
        return <CategoryForm />;

      case "rootBlog":
        return <RootBlogForm />;

      case "parentBlog":
        return <ParentBlogForm />;

      case "blog":
        return <BlogForm />;

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <HeaderLayout
        title={t_header(`${current}.title`)}
        descrption={t_header(`${current}.description`)}
      />

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
            label="rootBlog"
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
