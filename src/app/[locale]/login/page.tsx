"use client";

import { useState } from "react";
import { FormField } from "@/components/FormField";
import Header from "@/components/login/Header";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import ParticlesBackground from "./Particles";
import LoginBackground from "./LoginBackground";
import { login } from "@/services/auth";
import Footer from "@/components/login/Footer";

interface PageProps {}

const Page = ({}: PageProps) => {
  const t = useTranslations("login");
  const locale = useLocale();
  const router = useRouter();
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const isEmailValid = form.email.trim().length > 0;
  const isPasswordValid = form.password.length >= 6;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    setError("");
    try {
      await login(form);
      // router.push(`/${locale}`);
      window.location.href = `/${locale}`;
    } catch {
      setError(t("invalidCredentials"));
    }
  };

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
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
            <FormField
              name="email"
              value={form.email}
              onChange={handleChange}
              containerClassName="gap-2.5"
              labelClassName="ps-0"
              varient="login"
              label={t("form.email")}
              placeholder={t("form.emailPlaceholder")}
            />

            <FormField
              name="password"
              value={form.password}
              onChange={handleChange}
              containerClassName="gap-2.5"
              labelClassName="ps-0"
              varient="login"
              label={t("form.password")}
              placeholder={t("form.passwordPlaceholder")}
              type="password"
            />

            <div className="flex items-center justify-between px-1">
              {/* error */}
              {error ? (
                <div className="text-sm font-medium text-red-600 dark:text-red-400">
                  {error}
                </div>
              ) : (
                <div></div>
              )}
              {/* Forgot password */}
              <Link
                href=""
                className="text-sm text-[#0f8f89] transition-colors hover:text-[#0b7b76] dark:text-[#1fb1aa] dark:hover:text-[#33c6bf]"
              >
                {t("forgotPassword")}
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={cn(
                "flex h-12 items-center justify-center rounded-xl font-semibold transition-all duration-300",

                isFormValid
                  ? [
                      "cursor-pointer",
                      "bg-gradient-to-r from-[#1da69f] via-[#20b2aa] to-[#29bdb6]",
                      "text-[#083434] dark:text-[#062728]",
                      "shadow-[0_8px_24px_rgba(32,178,170,0.22)]",
                      "hover:brightness-[1.03]",
                      "hover:shadow-[0_12px_32px_rgba(32,178,170,0.32)]",
                      "active:scale-[0.98]",
                    ]
                  : [
                      "cursor-not-allowed",
                      "bg-gray-200 dark:bg-zinc-700",
                      "text-gray-500 dark:text-gray-400",
                      "shadow-none",
                    ],
              )}
            >
              {t("submit")}
            </button>
          </form>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Page;
