"use client";

import { useTranslations } from "next-intl";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const t = useTranslations("ContactUs.HeroSection");

  return (
    <div className="border-b-border mb-12 border-b pt-20 pb-20">
      <div className="w90 flex flex-col items-center">
        {/* title */}
        <div className="mb-12 text-center text-[80px]">
          <span>{t("titlePart1")} </span>
          <span className="text-primary">{t("titlePart2")} </span>
          <span>{t("titlePart3")}</span>
        </div>

        {/* description */}
        <div className="text-muted-foreground mx-auto mb-10 w-5/10 max-w-150 text-center text-lg">
          {t("description")}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
