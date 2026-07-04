"use client";

import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";
import { ThemeButton } from "../theme/ThemeButton";
import { BlogsTab } from "@/types/objectTypes";

interface HeaderProps {
  current: BlogsTab;
}

const Header = ({ current }: HeaderProps) => {
  const locale = useLocale();

  return (
    <div className="border-b-border-secondary flex justify-between border-b px-8 py-6">
      <div>
        <h1 className="mb-2 text-2xl font-semibold">Blogs</h1>

        <p className="text-muted-foreground text-lg">test description test description test description</p>
      </div>

      <div className="flex items-center gap-x-2 pe-10">
        <LanguageSwitcher defaultLocale={locale} />
        <ThemeButton />
      </div>
    </div>
  );
};

export default Header;
