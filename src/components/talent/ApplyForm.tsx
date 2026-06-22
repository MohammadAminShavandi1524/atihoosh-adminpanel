"use client";

import { cn } from "@/lib/utils";
import { FormField } from "../FormField";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Upload } from "lucide-react";

interface ApplyFormProps {}

const ApplyForm = ({}: ApplyFormProps) => {
  const { theme } = useTheme();
  const t = useTranslations("Talent.ApplyForm");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mt-24 mb-24 flex flex-col items-center">
      <div className="flex max-w-200 flex-col items-center">
        <span className="text-primary text-sm font-medium tracking-[0.15em] uppercase">
          {t("badge")}
        </span>

        <h2 className="mt-5 text-4xl font-bold">{t("title")}</h2>

        <p className="text-muted-foreground mt-4 mb-12 text-lg">
          {t("description")}
        </p>

        {/* form */}
        <form className="bg-secondary-bg border-foreground/8 w-full space-y-6 rounded-xl border p-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              label={t("fullName")}
              placeholder={t("fullNamePlaceholder")}
            />

            <FormField
              label={t("phone")}
              type="tel"
              dir="ltr"
              placeholder={t("phonePlaceholder")}
            />
          </div>

          <FormField
            label={t("email")}
            type="email"
            dir="ltr"
            placeholder={t("emailPlaceholder")}
          />

          <div className="flex flex-col gap-y-3">
            <label className="text-foreground ps-1.5 text-sm font-semibold">
              {t("resume")}
            </label>

            {/* dropbox */}
            <div
              className={cn(
                "border-foreground/20 mb-4 flex h-45 w-full cursor-pointer flex-col items-center rounded-xl border-2 border-dashed pt-8",
                theme === "dark" ? "bg-[#151515]" : "bg-[#F5F5F5]",
              )}
            >
              <div className="bg-primary/50 mb-2 flex size-11 items-center justify-center rounded-lg">
                <Upload className="text-primary size-5" />
              </div>

              <div className="mb-2 text-lg">
                <span>{t("resumeUploadText")} </span>
                <span className="text-primary">{t("resumeUploadAction")}</span>
              </div>

              <div className="text-muted-foreground text-sm">
                {t("resumeHint")}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={cn(
              "bg-primary flex h-13 w-full cursor-pointer items-center justify-center rounded-lg font-semibold transition hover:opacity-90",
              theme === "dark" ? "text-[#06151a]" : "text-[#f8fafc]",
            )}
          >
            {t("button")}
          </button>

          <p className="text-muted-foreground text-center text-sm">
            {t("privacy")}
          </p>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
