"use client";

import { Search, Sun } from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";
import { ThemeButton } from "../theme/ThemeButton";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const locale = useLocale();

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // bg-linear-to-r from-[#7d7d7d] to-[#000]

  if (pathname === `/${locale}/project-start`)
    return <div className="hidden"></div>;

  return (
    <div className={cn(theme === "dark" ? "customGradient" : "bg-[#e8e8e8]")}>
      <div
        style={locale === "en" ? { fontFamily: "var(--font-noto-serif)" } : {}}
        className="w90 flex items-center justify-between py-4"
      >
        {/* logo */}
        <Logo />

        {/* nav */}
        <Nav />

        {/* search language and theme buttons container */}
        <div className="flex items-center gap-x-2">
          {/* search */}
          <div className="cursor-pointer px-2 py-3 hidden">
            <Search />
          </div>

          {/* language switcher */}
          <LanguageSwitcher defaultLocale={locale} />
          {/* theme button */}
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
