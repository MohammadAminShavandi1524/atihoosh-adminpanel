"use client";

import Stats from "./Stats";
import { useTranslations } from "next-intl";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const t = useTranslations("Blogs.HeroSection");

  return (
    <div className="border-y-border mb-12 flex flex-col items-center border-y pt-20 pb-20">
      {/* title */}
      <div className="mb-12 text-center text-[58px]">
        <div>
          <span>{t("titlePart1")} </span>
          <span className="text-primary"> {t("titlePart2")} </span>
          <span>{t("titlePart3")}</span>
        </div>

        <div>{t("titlePart4")}</div>
      </div>

      {/* description */}
      <div className="text-muted-foreground mx-auto mb-10 w-5/10 max-w-150 text-center text-lg">
        {t("description")}
      </div>

      <div className="from-background to-primary mb-8 h-16 w-px self-center rounded-full bg-linear-to-t" />

      <Stats />
    </div>
  );
};

export default HeroSection;
