import { Search, Sun } from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  locale: "en" | "fa";
}

const Header = ({ locale }: HeaderProps) => {
  const t = useTranslations("Header.Navigation");

  return (
    <div>
      <div
        style={locale === "en" ? { fontFamily: "var(--font-inter)" } : {}}
        className="w90 flex items-center justify-between py-4"
      >
        {/* logo */}
        <Link href={`/${locale}`}>
          <Image src="/logo.png" alt="logo" width={56} height={56} />
        </Link>

        {/* nav */}
        <nav>
          <ul className="flex items-center gap-x-9 ps-12 text-lg">
            <li>
              <Link href={`/${locale}`}>{t("whatWeDo")}</Link>
            </li>

            <li>
              <Link href={`/${locale}/aboutUs`}>{t("aboutUs")}</Link>
            </li>

            <li>
              <Link href={`/${locale}`}>{t("blog")}</Link>
            </li>

            <li>
              <Link href={`/${locale}`}>{t("projectStart")}</Link>
            </li>
          </ul>
        </nav>

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
            <Sun strokeWidth="3px" color="#ffde21" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
