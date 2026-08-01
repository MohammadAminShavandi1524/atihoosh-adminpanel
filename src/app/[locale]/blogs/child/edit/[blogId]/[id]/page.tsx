"use client";

import { useEffect, useState } from "react";

import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import HeaderLayout from "@/components/layout/HeaderLayout";
import { FormField } from "@/components/FormField";
import { CustomButton } from "@/components/ui/custom-button";

import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    id: string;
    blogId: string;
  }>;
}

const Page = ({ params }: PageProps) => {
  const t = useTranslations("editChildBlog");

  const locale = useLocale();

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const schema = z.object({
    title: z
      .string()
      .trim()
      .min(1, t("form.validation.titleRequired"))
      .max(100, t("form.validation.titleMax")),

    description: z
      .string()
      .trim()
      .min(1, t("form.validation.descriptionRequired")),

    image: z.string().optional(),
  });

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),

    defaultValues: {
      title: "",
      description: "",
      image: "",
    },
  });

  useEffect(() => {
    const fetchChildBlog = async () => {
      const { id, blogId } = await params;

      try {
        const res = await fetch(`/api/blog/child/${blogId}`, {
          cache: "no-store",
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(JSON.stringify(data));
        }

        const blog = Array.isArray(data)
          ? data.find((item) => String(item.id) === String(id))
          : null;

        if (!blog) {
          throw new Error("Child blog not found");
        }

        reset({
          title: blog.title ?? "",
          description: blog.description ?? "",
          image: blog.image ?? "",
        });
      } catch (error) {
        console.error("FETCH CHILD BLOG ERROR =>", error);

        toast.error(t("toast.loadError"));
      } finally {
        setLoading(false);
      }
    };

    fetchChildBlog();
  }, [params, reset, t]);

  const onSubmit = async (data: FormValues) => {
    const { id } = await params;

    const payload = {
      title: data.title,
      description: data.description,
      image: data.image?.trim() ? data.image : null,
    };

   

    try {
      const res = await fetch(`/api/blog/child/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        console.error(result);

        toast.error(result?.error ?? t("toast.error"));

        return;
      }

      toast.success(t("toast.success"));

      router.push(`/${locale}/blogs`);
    } catch (error) {
      console.error(error);

      toast.error(t("toast.error"));
    }
  };

  return (
    <div className="flex h-full flex-col gap-8">
      <HeaderLayout
        title={t("header.title")}
        descrption={t("header.description")}
      />

      <div className="flex flex-1 flex-col px-10 pb-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-secondary-bg relative flex flex-1 flex-col gap-6 rounded-xl p-7"
        >
          <FormField
            varient="default"
            label={t("form.title.label")}
            placeholder={t("form.title.placeholder")}
            register={register("title")}
            error={errors.title}
            as="input"
          />
          <div className="hidden">
            <FormField
              varient="default"
              label={t("form.image.label")}
              placeholder={t("form.image.placeholder")}
              register={register("image")}
              error={errors.image}
              as="input"
            />
          </div>

          <FormField
            varient="default"
            label={t("form.description.label")}
            placeholder={t("form.description.placeholder")}
            register={register("description")}
            error={errors.description}
            as="textarea"
            className="h-50"
          />

          <CustomButton
            type="submit"
            intent="primary"
            variant="solid"
            disabled={loading || isSubmitting}
            className={cn(
              "absolute end-7 bottom-7 h-12 px-5 font-semibold",
              (loading || isSubmitting) && "cursor-not-allowed opacity-60",
            )}
          >
            {isSubmitting
              ? t("form.actions.saving")
              : t("form.actions.saveChanges")}
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default Page;
