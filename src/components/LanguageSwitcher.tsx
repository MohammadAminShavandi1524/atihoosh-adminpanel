"use client";

import { useTransition } from "react";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "next-intl";
import clsx from "clsx";

type Props = {
  defaultLocale: Locale;
};

export default function LanguageSwitcher({ defaultLocale }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  // زبان مقابل رو پیدا می‌کنیم
  const nextLocale = defaultLocale === "fa" ? "en" : "fa";

  function handleToggle() {
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className={clsx(
        "px-4 py-2 rounded border",
        isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        defaultLocale === "fa"
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-black",
      )}
    >
      {defaultLocale !== "fa" ? "فارسی" : "English"}
    </button>
  );
}
