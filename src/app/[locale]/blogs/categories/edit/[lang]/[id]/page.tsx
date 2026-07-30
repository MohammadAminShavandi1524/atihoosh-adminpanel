"use client";

import HeaderLayout from "@/components/layout/HeaderLayout";
import { FormField } from "@/components/FormField";
import { CustomButton } from "@/components/ui/custom-button";

import { cn } from "@/lib/utils";

import { z } from "zod";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{
    lang: string;
    id: string;
  }>;
}

interface Category {
  id: number;
  name: string;
}

const Page = ({ params }: PageProps) => {
  const t = useTranslations("editCategory");

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const schema = z.object({
    name: z
      .string()
      .trim()
      .min(1, t("form.validation.required"))
      .max(30, t("form.validation.max")),
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
      name: "",
    },
  });

  // get category
  useEffect(() => {
    const getCategory = async () => {
      const { lang, id } = await params;

      try {
        const res = await fetch(`/api/blog/category/${lang}`);

        if (!res.ok) {
          throw new Error();
        }

        const data: Category[] = await res.json();

        const category = data.find((item) => item.id === Number(id));

        if (category) {
          reset({
            name: category.name,
          });
        }
      } catch (error) {
        console.error(error);

        toast.error(t("toast.loadError"));
      } finally {
        setLoading(false);
      }
    };

    getCategory();
  }, [params, reset, t]);

  // update category
  const onSubmit = async (data: FormValues) => {
    const { lang, id } = await params;

    try {
      const res = await fetch(`/api/blog/category/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          lang,
        }),
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success(t("toast.success"));

      router.push(`/${lang}/blogs`);
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
            label={t("form.name.label")}
            placeholder={t("form.name.placeholder")}
            register={register("name")}
            error={errors.name}
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
