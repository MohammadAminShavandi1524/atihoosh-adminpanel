"use client";

import { useLocale, useTranslations } from "next-intl";
import AnimatedArrowButton from "../AnimatedArrowButton";
import { cn } from "@/lib/utils";

interface CTAProps {}

const CTA = ({}: CTAProps) => {
  const t = useTranslations("HomePage.CTASection");
  const locale = useLocale();
  return (
    <div className="mt-50 flex w-full flex-col items-center">
      {/* title */}
      <div className="font-space mb-12 text-[120px] font-semibold">
        <span className={cn(locale === "fa" && "text-[#219ebc]")}>
          {t("title.part1")}
        </span>
        <span className={cn(locale === "en" && "text-[#219ebc]")}>
          {t("title.part2")}
        </span>
        <span>{t("title.part3")}</span>
      </div>

      {/* description */}
      <div className="font-playfair mb-15 flex flex-col items-center text-[40px]">
        <span>{t("description.line1")}</span>
        <span>{t("description.line2")}</span>
      </div>

      {/* button */}
      <AnimatedArrowButton label={t("button")} />
    </div>
  );
};

export default CTA;
