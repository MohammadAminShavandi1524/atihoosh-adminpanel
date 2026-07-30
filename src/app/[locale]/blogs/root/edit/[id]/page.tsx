"use client";

import HeaderLayout from "@/components/layout/HeaderLayout";
import { FormField } from "@/components/FormField";
import { CustomButton } from "@/components/ui/custom-button";

import { cn } from "@/lib/utils";

import { z } from "zod";
import { toast } from "sonner";
import { useLocale, useTranslations } from "next-intl";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

interface RootBlog {
  id: number;
  title: string;
}

const Page = ({ params }: PageProps) => {
  const t = useTranslations("editRootBlog");
  const locale = useLocale();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const schema = z.object({
    title: z
      .string()
      .trim()
      .min(1, t("form.validation.required"))
      .max(100, t("form.validation.max")),
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
    },
  });

  useEffect(() => {
    const getRootBlog = async () => {
      const { id } = await params;

      try {
        const res = await fetch(`/api/blog/root/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error();
        }

        const data: RootBlog = await res.json();

        reset({
          title: data.title,
        });
      } catch (error) {
        console.error(error);

        toast.error(t("toast.loadError"));
      } finally {
        setLoading(false);
      }
    };

    getRootBlog();
  }, [params, reset, t]);

  const onSubmit = async (data: FormValues) => {
    const { id } = await params;

    try {
      const res = await fetch(`/api/blog/root/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
        }),
      });

      if (!res.ok) {
        throw new Error();
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
            className="font-IRANYekanX"
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
