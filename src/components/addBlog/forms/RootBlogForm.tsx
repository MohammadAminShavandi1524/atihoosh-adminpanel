"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { FormField } from "@/components/FormField";

import SubmitButton from "../SubmitButton";

const RootBlogForm = () => {
  const t = useTranslations("addBlog");

  const schema = z.object({
    title: z
      .string()
      .trim()
      .min(1, t("forms.rootBlog.validation.required"))
      .max(255, t("forms.rootBlog.validation.max")),
  });

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("/api/blog/root", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create root blog");
      }

      reset(); // پاک شدن فرم

      toast.success(t("toast.rootBlog.success"));
    } catch (error) {
      console.error(error);

      toast.error(t("toast.rootBlog.error"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondary-bg relative flex h-full flex-col gap-y-6 rounded-xl p-7"
    >
      <FormField
        varient="default"
        label={t("forms.rootBlog.title")}
        placeholder={t("forms.rootBlog.titlePlaceholder")}
        register={register("title")}
        error={errors.title}
        as="input"
      />

      <SubmitButton current="rootBlog" disabled={isSubmitting} />
    </form>
  );
};

export default RootBlogForm;
