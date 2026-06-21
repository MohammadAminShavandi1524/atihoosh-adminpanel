"use client";

import { useLocale, useTranslations } from "next-intl";

interface GetNewArticleProps {}

const GetNewArticle = ({}: GetNewArticleProps) => {
  const t = useTranslations("Blogs.GetNewArticle");
  const locale = useLocale();
  const isRTL = locale === "fa";
  return (
    <div className="my-40 px-50">
      <div
        className={`relative flex min-h-[220px] items-center justify-between rounded-xl py-16 ps-24 pe-56 ${
          isRTL
            ? "bg-[radial-gradient(circle_600px_at_top_right,color-mix(in_srgb,var(--primary)_8%,transparent)_0%,color-mix(in_srgb,var(--primary)_3%,transparent)_35%,var(--secondary-bg)_75%)]"
            : "bg-[radial-gradient(circle_600px_at_top_left,color-mix(in_srgb,var(--primary)_8%,transparent)_0%,color-mix(in_srgb,var(--primary)_3%,transparent)_35%,var(--secondary-bg)_75%)]"
        }`}
      >
        <div>
          <div className="mb-5 text-[32px]">{t("title")}</div>

          <div className="text-muted-foreground max-w-[368px] text-base">
            {t("description")}
          </div>
        </div>

        <div className="flex items-center gap-x-2.5">
          <button className="text-muted-foreground border-muted-foreground bg-secondary-bg cursor-pointer rounded-lg border px-5 py-2.5">
            {t("inputPlaceholder")}
          </button>

          <button className="bg-primary cursor-pointer rounded-lg px-5 py-2.5">
            {t("button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetNewArticle;
