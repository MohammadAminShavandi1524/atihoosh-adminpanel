"use client";

import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { FormField } from "@/components/FormField";
import { useLocale, useTranslations } from "next-intl";

import SubmitButton from "../SubmitButton";
import { CategorySelect } from "../CategorySelect";
import LanguageSelect from "../LanguageSelect";
import { TagOption, TagSelector } from "../TagSelector";
import { tags } from "@/data/admins";
import { ScrollArea } from "@/components/ui/scroll-area";
import RootBlogSelect from "../RootBlogSelect";
import { toast } from "sonner";

interface Category {
  id: number;
  name: string;
}

interface ParentBlogFormProps {
  selectedTags: TagOption[];
  setSelectedTags: Dispatch<SetStateAction<TagOption[]>>;
}

const ParentBlogForm = ({
  selectedTags,
  setSelectedTags,
}: ParentBlogFormProps) => {
  console.log("🚀 ~ ParentBlogForm ~ selectedTags:", selectedTags);
  const t = useTranslations("addBlog");
  const locale = useLocale();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [lang, setLang] = useState<"fa" | "en">("fa");
  const [rootBlog, setRootBlog] = useState("");

  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      image,
      category,
      root_blog: rootBlog,
      tags: selectedTags.map((item) => item.label),
      lang,
    };

    try {
      const res = await fetch("/api/blog/parent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.error ?? "Failed to create blog");
        return;
      }

      toast.success(t("toast.parentBlog.success"));

      console.log(data);
    } catch (error) {
      console.error(error);

      toast.error(t("toast.parentBlog.error"));
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`/api/blog/category/${lang}`, {
          cache: "no-store",
        });

        const text = await res.text();

        console.log("STATUS:", res.status);
        console.log("BODY:", text);

        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data: Category[] = JSON.parse(text);

        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, [lang]);

  useEffect(() => {
    const payload = {
      title,
      description,
      image,
      category,
      root_blog: rootBlog,
      tags: selectedTags.map((item) => item.label),
      lang,
    };

    console.log("BLOG PAYLOAD:", payload);
  }, [rootBlog, category, title, description, image, lang, selectedTags]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-secondary-bg h-full rounded-xl py-7 ps-7 pe-2.5"
    >
      <ScrollArea
        dir={locale === "en" ? "ltr" : "rtl"}
        className="relative h-full w-full pe-4.5 pb-20"
      >
        <div className="flex flex-col gap-y-6">
          <RootBlogSelect value={rootBlog} onChange={setRootBlog} />

          <LanguageSelect value={lang} onChange={setLang} />

          <CategorySelect
            label={t("forms.parentBlog.category")}
            options={categories.map((item) => ({
              label: item.name,
              // value: item.name,
              value: String(item.id),
            }))}
            value={category}
            onChange={setCategory}
          />

          <TagSelector
            label={t("forms.parentBlog.tags")}
            options={tags[lang]}
            lang={lang}
            value={selectedTags}
            onChange={setSelectedTags}
            placeholder={t("forms.parentBlog.tagsPlaceholder")}
          />

          <FormField
            varient="default"
            label={t("forms.parentBlog.title")}
            placeholder={t("forms.parentBlog.titlePlaceholder")}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            as="input"
          />

          <FormField
            varient="default"
            label={t("forms.parentBlog.featuredImage")}
            placeholder={t("forms.parentBlog.featuredImagePlaceholder")}
            value={image}
            onChange={(e) => setImage(e.target.value)}
            as="input"
          />

          <FormField
            varient="default"
            label={t("forms.parentBlog.description")}
            placeholder={t("forms.parentBlog.descriptionPlaceholder")}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
          />

          <SubmitButton current="parentBlog" className="bottom-0" />
        </div>
      </ScrollArea>
    </form>
  );
};

export default ParentBlogForm;
