import { Search, Sun } from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";

interface HeaderProps {
  locale: "en" | "fa";
}

const Header = ({ locale }: HeaderProps) => {
  const t = useTranslations("Header.Navigation");

  return (
    <div>
      <div
        style={locale === "en" ? { fontFamily: "var(--font-noto-serif)" } : {}}
        className="w90 flex items-center justify-between py-4"
      >
        {/* logo */}
        <Link
          className="border-custom-primary rounded-lg border bg-[#00304a33] pt-2.5 pr-4.25 pb-3 pl-3.75"
          href={`/${locale}`}
        >
          <Image src="/logo.png" alt="logo" width={56} height={56} />
        </Link>

        {/* nav */}
        <Nav />

        {/* search language and theme buttons container */}
        <div className="flex items-center gap-x-2">
          {/* search */}
          <div className="cursor-pointer px-2 py-3">
            <Search />
          </div>

          {/* language switcher */}
          <LanguageSwitcher defaultLocale={locale} />
          {/* theme button */}
          <button className="cursor-pointer px-2 py-3">
            <Sun strokeWidth="3px" color="#ffffff" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
