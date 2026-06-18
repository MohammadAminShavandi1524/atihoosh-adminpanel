"use client";

import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {}

const Nav = ({}: NavProps) => {
  const t = useTranslations("Header.Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  console.log("🚀 ~ Nav ~ pathname:", pathname);
  return (
    <nav>
      <ul className="flex items-center gap-x-9 ps-12 text-lg">
        <li>
          <Link
            className={cn(
              "hover:text-custom-primary transition-all",
              pathname === `/${locale}/whatWeDo` && "text-custom-primary",
            )}
            href={`/${locale}/whatWeDo`}
          >
            {t("whatWeDo")}
          </Link>
        </li>

        <li>
          <Link
            className={cn(
              "hover:text-custom-primary transition-all",
              pathname === `/${locale}/aboutUs` && "text-custom-primary",
            )}
            href={`/${locale}/aboutUs`}
          >
            {t("aboutUs")}
          </Link>
        </li>

        <li>
          <Link
            className="hover:text-custom-primary transition-all"
            href={`/${locale}`}
          >
            {t("blog")}
          </Link>
        </li>

        <li>
          <Link
            className="hover:text-custom-primary transition-all"
            href={`/${locale}`}
          >
            {t("projectStart")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
