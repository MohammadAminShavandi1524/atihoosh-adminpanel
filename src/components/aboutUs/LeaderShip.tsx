"use client";

import { useTranslations } from "next-intl";

interface LeadershipSectionProps {}

const LeadershipSection = ({}: LeadershipSectionProps) => {
  const t = useTranslations("AboutPage.LeadershipSection");

  return (
    <section className="border-b-border mb-20 border-b pb-20">
      <div className="w90 flex flex-col 2xl:px-30">
        <div className="text-primary mb-8 text-2xl">{t("badge")}</div>

        <div className="mb-8 text-[48px]">{t("title")}</div>

        {/* line */}
        <div className="bg-primary mb-8 h-0.5 w-12" />

        {/* description */}
        <div className="text-muted-foreground flex flex-col text-justify text-xl">
          <div className="mb-8">{t("paragraph1")}</div>

          <div className="mb-8">{t("paragraph2")}</div>

          <div>{t("paragraph3")}</div>

          {/* line */}
          <div className="bg-border my-8 h-0.5 w-36" />

          <div>
            <div className="text-foreground mb-1 text-2xl font-medium">
              {t("name")}
            </div>

            <div className="text-[22px]">{t("role")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
