"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import CategoryRow from "./CategoryRow";

import { useLocale, useTranslations } from "next-intl";

interface Category {
  id: number;
  name: string;
  lang: "fa" | "en";
}

interface CategoriesSectionProps {
  categories: Category[];
  onDelete: (id: number) => void;
}

const CategoriesSection = ({
  categories,
  onDelete,
}: CategoriesSectionProps) => {
  const t = useTranslations("blogs");
  const locale = useLocale();

  return (
    <section className="bg-secondary-bg relative flex h-full flex-col overflow-hidden rounded-xl">
      <div className="border-b-border-secondary bg-tertiary border-b px-10">
        <div className="text-muted-foreground grid h-14 grid-cols-4 items-center text-sm font-semibold tracking-wider">
          <div>{t("categories.table.id")}</div>

          <div>{t("categories.table.name")}</div>

          <div>{t("categories.table.language")}</div>

          <div>{t("categories.table.actions")}</div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-y-2.5 overflow-y-auto ps-6 pe-1.5 pt-2.5 pb-7">
        <ScrollArea
          dir={locale === "en" ? "ltr" : "rtl"}
          className="h-full w-full"
        >
          <div className="pe-4.5">
            {categories.map((item) => (
              <CategoryRow
                key={`${item.lang}-${item.id}`}
                id={String(item.id)}
                label={item.name}
                lang={item.lang}
                onDelete={() => onDelete(item.id)}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default CategoriesSection;
