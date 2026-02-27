import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations("IndexPage");

  return (
    <div className="max-w-[590px]">
      <div>
        <LanguageSwitcher defaultLocale={locale} />
      </div>
      <div>{t("title")}</div>
    </div>
  );
}
