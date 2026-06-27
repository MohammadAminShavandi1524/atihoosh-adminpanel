"use client";

import { useTranslations } from "next-intl";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const t = useTranslations("whatWeDo.hero");

  return (
    <div className="border-b-border mb-12 flex flex-col items-center border-b pt-20 pb-20">
      {/* title */}
      <div className="mb-12 text-center text-[85px]">
        <div>
          <span>{t("titlePart1")} </span>
          <span className="text-primary">{t("titleHighlight")}</span>
        </div>
        <div>{t("titlePart2")}</div>
      </div>

      {/* description */}
      <div className="mx-auto w-5/10 text-center text-2xl/[40px]">
        {t("description")}
      </div>
    </div>
  );
};

export default HeroSection;
