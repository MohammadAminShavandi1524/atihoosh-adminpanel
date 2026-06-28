import OverViewBoxes from "@/components/landing/OverViewBoxes";
import RecentActivities from "@/components/landing/RecentActivities";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ThemeButton } from "@/components/theme/ThemeButton";

import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  const t = useTranslations("Dashboard");

  return (
    <div className="flex flex-col px-12 pt-8">
      {/* header */}
      <div className="mb-4 flex justify-between pb-8">
        <div>
          <div className="mb-2 text-2xl">{t("greeting")}</div>

          <div className="text-muted-foreground text-xl">{t("subtitle")}</div>
        </div>

        <div className="flex items-center gap-x-2 pe-10">
          <LanguageSwitcher defaultLocale={locale} />
          <ThemeButton />
        </div>
      </div>

      <OverViewBoxes />

      <RecentActivities />
    </div>
  );
}
