"use client";

import { useTranslations } from "next-intl";
import ExpSection from "../aboutUs/ExpSection";

interface StatsProps {}

const Stats = ({}: StatsProps) => {
  const t = useTranslations("Talent.Stats");

  return (
    <div className="mt-15 flex w-full items-center justify-center gap-x-40 ps-20">
      {/* experience section */}
      <ExpSection
        number="+50"
        label={t("successfulProjects")}
        topLineClassName="ms-1.5"
      />

      <ExpSection number="8" label={t("teamMembers")} />

      <ExpSection
        number="+3"
        label={t("yearsOfExperience")}
        topLineClassName="ms-1.5"
      />
    </div>
  );
};

export default Stats;
