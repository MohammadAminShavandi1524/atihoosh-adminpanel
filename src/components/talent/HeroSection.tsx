"use client";

import { useTranslations } from "next-intl";
import Stats from "./Stats";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const t = useTranslations("Talent.HeroSection");

  return (
    <div className="border-b-border mb-12 border-b pt-20 pb-20">
      <div className="w90 flex flex-col items-center">
        {/* title */}
        <div className="mb-12 max-w-240 text-center text-[64px]">
          <span>{t("titlePart1")} </span>
          <span className="text-primary">{t("titlePart2")} </span>
          <span>{t("titlePart3")}</span>
        </div>

        {/* description */}
        <div className="text-muted-foreground mx-auto mb-10 w-5/10 max-w-155 text-center text-lg">
          {t("description")}
        </div>

        <Stats />
      </div>
    </div>
  );
};

export default HeroSection;
