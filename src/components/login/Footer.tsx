"use client";

import { useTranslations } from "next-intl";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const t = useTranslations("login");
  return (
    <div className="mt-8 flex items-center justify-between border-t border-[#e5e7eb] pt-3 text-xs text-[#6b7280] dark:border-[#3a4048] dark:text-[#9ca3af]">
      <div className="flex items-center gap-x-3">
        <span>{t("footer.security")}</span>
        <span>•</span>
        <span>{t("footer.adminOnly")}</span>
      </div>

      <div>V2.4.1-LTS</div>
    </div>
  );
};

export default Footer;
