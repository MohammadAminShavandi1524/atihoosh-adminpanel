"use client";

import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";
import { ThemeButton } from "../theme/ThemeButton";
import { BlogTab } from "@/types/objectTypes";

interface HeaderProps {
  current: BlogTab;
}

const Header = ({ current }: HeaderProps) => {
  const locale = useLocale();
  const t = useTranslations("addBlog.header");

  return (
    <div className="border-b-border-secondary flex justify-between border-b px-8 py-6">
      <div>
        <h1 className="mb-2 text-2xl font-semibold">{t(`${current}.title`)}</h1>

        <p className="text-muted-foreground text-lg">
          {t(`${current}.description`)}
        </p>
      </div>

      <div className="flex items-center gap-x-2 pe-10">
        <LanguageSwitcher defaultLocale={locale} />
        <ThemeButton />
      </div>
    </div>
  );
};

export default Header;
