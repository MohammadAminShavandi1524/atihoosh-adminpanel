"use client";

import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";
import Logo from "../Logo";
import { ThemeButton } from "../theme/ThemeButton";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const locale = useLocale();
  const t = useTranslations("login.header");

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-x-4">
        <Logo size={16} />

        <div className="flex flex-col pt-0.5">
          <div className="text-xl font-medium">{t("title")}</div>
          <div className="text-muted-foreground">{t("subtitle")}</div>
        </div>
      </div>

      <div className="flex items-center gap-x-1">
        <LanguageSwitcher defaultLocale={locale} />
        <ThemeButton />
      </div>
    </div>
  );
};

export default Header;
