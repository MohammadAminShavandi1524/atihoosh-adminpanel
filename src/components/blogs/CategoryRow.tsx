"use client";

import Link from "next/link";

import { Edit, Trash } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

import { CustomHoldButton } from "../ui/custom-button";
import { customButtonVariants } from "../ui/custom-button/custom-button-variants";

interface CategoryRowProps {
  id: string;
  label: string;
  lang: "fa" | "en";
  onDelete: () => void;
}

const CategoryRow = ({ id, label, lang, onDelete }: CategoryRowProps) => {
  const locale = useLocale();
  const t = useTranslations("blogs.actions");

  return (
    <div className="group border-border-secondary bg-secondary-bg hover:border-primary/20 hover:bg-secondary/30 relative mb-2 grid h-16 w-full grid-cols-4 items-center rounded-lg border px-4 shadow-sm transition-all duration-200 last:mb-0 hover:shadow-md">
      {/* ID */}
      <div className="text-muted-foreground font-mono text-sm">#{id}</div>

      {/* Category */}
      <div>
        <span
          className={cn(
            "text-foreground font-medium",
            lang === "fa" && "font-IRANYekanX",
          )}
        >
          {label}
        </span>
      </div>

      {/* Language */}
      <div>
        <span className="bg-primary/10 text-primary rounded-md px-2.5 py-1 text-sm font-medium">
          {lang === "fa" ? "FA" : "EN"}
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-x-2.5">
        <Link
          href={`/${locale}/blogs/categories/edit/${lang}/${id}`}
          className={cn(
            customButtonVariants({
              intent: "info",
              variant: "soft",
            }),
            "gap-1",
          )}
        >
          <Edit className="size-4.5" />
          <span>{t("edit")}</span>
        </Link>

        <CustomHoldButton
          intent="destructive"
          variant="soft"
          duration={1200}
          onComplete={onDelete}
          className="group"
          leftSection={
            <Trash className="size-4.5 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-6" />
          }
        >
          {t("delete")}
        </CustomHoldButton>
      </div>

      {/* Accent Line */}
      <div className="bg-primary absolute top-2 bottom-2 w-1 rounded-r-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 ltr:left-0 rtl:right-0" />
    </div>
  );
};

export default CategoryRow;
