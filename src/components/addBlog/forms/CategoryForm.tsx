"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

import { FormField } from "@/components/FormField";

import LanguageSelect from "../LanguageSelect";
import SubmitButton from "../SubmitButton";

const CategoryForm = () => {
  const t = useTranslations("addBlog");

  const schema = z.object({
    title: z
      .string()
      .trim()
      .min(1, t("forms.category.validation.required"))
      .max(30, t("forms.category.validation.max")),
    lang: z.enum(["fa", "en"], {
      required_error: t("forms.category.validation.language"),
      invalid_type_error: t("forms.category.validation.language"),
    }),
  });

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      lang: "fa",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("/api/blog/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.title,
          lang: data.lang,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create category");
      }

      toast.success(t("toast.category.success"));

      reset({
        title: "",
        lang: "fa",
      });
    } catch (error) {
      console.error(error);

      toast.error(t("toast.category.error"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondary-bg relative flex h-full flex-col gap-y-6 rounded-xl p-7"
    >
      <Controller
        control={control}
        name="lang"
        render={({ field }) => (
          <LanguageSelect value={field.value} onChange={field.onChange} />
        )}
      />

      <FormField
        varient="default"
        label={t("forms.category.label")}
        placeholder={t("forms.category.placeholder")}
        register={register("title")}
        error={errors.title}
        as="input"
      />

      <SubmitButton current="category" disabled={isSubmitting} />
    </form>
  );
};

export default CategoryForm;
