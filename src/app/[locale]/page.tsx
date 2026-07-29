import OverViewBoxes from "@/components/landing/OverViewBoxes";
import RecentActivities from "@/components/landing/RecentActivities";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HeaderLayout from "@/components/layout/HeaderLayout";
import { ThemeButton } from "@/components/theme/ThemeButton";

import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  const t = useTranslations("Dashboard");

  return (
    <div className="flex flex-col pt-8">
      {/* header */}

      <HeaderLayout
        title={t("greeting")}
        descrption={t("subtitle")}
        className="border-b-0 ps-13"
      />
      <div className="px-12">
        <OverViewBoxes />

        <RecentActivities />
      </div>
    </div>
  );
}
