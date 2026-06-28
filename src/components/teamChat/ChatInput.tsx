"use client";

import { useTranslations } from "next-intl";

interface ChatInputProps {}

export const ChatInput = ({}: ChatInputProps) => {
  const t = useTranslations("TeamChat");

  return (
    <div className="border-border border-t p-5">
      <div className="border-border bg-secondary-bg flex items-center gap-4 rounded-xl border p-3">
        <textarea
          placeholder={t("inputPlaceholder")}
          className="flex-1 resize-none bg-transparent outline-none"
        />

        <button className="bg-primary h-fit cursor-pointer rounded-md px-4 py-2 text-base text-white">
          {t("send")}
        </button>
      </div>

      <div className="text-muted-foreground mt-3 flex justify-between text-xs">
        <span>{t("inputHint")}</span>

        <span className="flex items-center gap-2">
          {t("connectionStatus")}
          <span className="h-2 w-2 rounded-full bg-green-500" />
        </span>
      </div>
    </div>
  );
};
