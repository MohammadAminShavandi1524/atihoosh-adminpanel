"use client";

import { cn } from "@/lib/utils";
import ProcessCard from "./ProcessCard";
import { useLocale, useTranslations } from "next-intl";

export default function ProcessSection() {
  const locale = useLocale();
  const t = useTranslations("HomePage.ProcessSection");

  const cards = [
    {
      key: "structuredExecution",
      title: t("cards.structuredExecution.title"),
      description: t("cards.structuredExecution.description"),
      className: "mr-auto bg-[#0041f0]",
      accentColor: "#60A5FA",
    },
    {
      key: "contractDrivenScope",
      title: t("cards.contractDrivenScope.title"),
      description: t("cards.contractDrivenScope.description"),
      className: "ml-auto bg-[#901a30]",
      accentColor: "#FB7185",
    },
    {
      key: "continuousResponsibility",
      title: t("cards.continuousResponsibility.title"),
      description: t("cards.continuousResponsibility.description"),
      className: "mr-auto ml-60 bg-[#460073]",
      accentColor: "#C084FC",
    },
  ];

  return (
    <section className="relative min-h-[300vh]">
      {/* Sticky Layer */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          style={locale === "en" ? { fontFamily: "var(--font-space)" } : {}}
          className="absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 text-center text-[120px]/[120px] font-semibold"
        >
          {t("title")}
         
        </div>
      </div>

      {/* Cards Layer */}
      <div className="relative z-10 pt-[5vh] pb-[100vh]">
        <div className="mx-auto max-w-[1800px] px-20">
          <div className="flex flex-col gap-40">
            <ProcessCard
              title={cards[0].title}
              description={cards[0].description}
              className="mr-auto bg-[#0041f0]"
              accentColor="#60A5FA"
            />

            <ProcessCard
              title={cards[1].title}
              description={cards[1].description}
              className="ml-auto bg-[#901a30]"
              accentColor="#FB7185"
            />

            <ProcessCard
              title={cards[2].title}
              description={cards[2].description}
              className="mr-auto ml-60 bg-[#460073]"
              accentColor="#C084FC"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
