"use client";

import { FormField } from "@/components/FormField";
import Header from "@/components/login/Header";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ParticlesBackground from "./Particles";
import LoginBackground from "./LoginBackground";

interface PageProps {}

const Page = ({}: PageProps) => {
  const t = useTranslations("login");

  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden">
      {/* Background */}
      <LoginBackground />
      <ParticlesBackground />

      {/* content */}
      <div className="relative z-20 flex w-[500px] flex-col rounded-2xl border border-[#d8dee6] bg-white p-10 dark:border-[#242930] dark:bg-[#161a21]">
        {/* top line */}
        <div className="absolute -top-0.5 right-1/2 h-0.5 w-full translate-x-1/2 px-10">
          <div className="h-0.5 w-full rounded-full bg-[linear-gradient(90deg,rgba(32,178,170,0)_0%,#20B2AA_50%,rgba(32,178,170,0)_100%)]" />
        </div>

        {/* Header */}
        <Header />

        {/* Body */}
        <div className="mt-6 flex flex-col">
          <div className="mb-2 text-2xl font-medium text-[#111827] dark:text-white">
            {t("title")}
          </div>

          <div className="text-muted-foreground mb-6 text-sm">
            {t("description")}
          </div>

          {/* Form */}
          <form className="flex flex-col gap-y-5">
            <FormField
              containerClassName="gap-2.5"
              labelClassName="ps-0"
              varient="login"
              label={t("form.email")}
              placeholder={t("form.emailPlaceholder")}
            />

            <FormField
              containerClassName="gap-2.5"
              labelClassName="ps-0"
              varient="login"
              label={t("form.password")}
              placeholder={t("form.passwordPlaceholder")}
              type="password"
            />

            {/* Forgot password */}
            <Link
              href=""
              className="self-end pe-1 text-sm text-[#0f8f89] transition-colors hover:text-[#0b7b76] dark:text-[#1fb1aa] dark:hover:text-[#33c6bf]"
            >
              {t("forgotPassword")}
            </Link>

            {/* Submit */}
            <button
              className={cn(
                "flex h-12 cursor-pointer items-center justify-center rounded-xl",
                "bg-gradient-to-r from-[#1da69f] via-[#20b2aa] to-[#29bdb6]",
                "font-semibold text-[#083434] dark:text-[#062728]",
                "shadow-[0_8px_24px_rgba(32,178,170,0.22)]",
                "transition-all duration-300 ease-out",
                "hover:shadow-[0_12px_32px_rgba(32,178,170,0.32)]",
                "hover:brightness-[1.03]",
                "active:translate-y-0 active:scale-[0.98]",
              )}
            >
              {t("submit")}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-[#e5e7eb] pt-3 text-xs text-[#6b7280] dark:border-[#3a4048] dark:text-[#9ca3af]">
          <div className="flex items-center gap-x-3">
            <span>{t("footer.security")}</span>
            <span>•</span>
            <span>{t("footer.adminOnly")}</span>
          </div>

          <div>V2.4.1-LTS</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
