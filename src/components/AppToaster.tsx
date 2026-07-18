"use client";

import { Toaster } from "sonner";
import { useLocale } from "next-intl";

export default function AppToaster() {
  const locale = useLocale();

  return (
    <Toaster
      position={locale === "fa" ? "top-right" : "top-left"}
      closeButton
      expand
      toastOptions={{
        classNames: {
          toast: "bg-background text-foreground border border-border shadow-lg",
          title: "text-foreground font-semibold",
          description: "text-muted-foreground",
          actionButton: "bg-primary text-primary-foreground",
          cancelButton: "bg-secondary text-secondary-foreground",
          closeButton:
            "border-border bg-background text-muted-foreground hover:text-foreground",
          success:
            "!bg-green-500/10 !border-green-500/30 !text-green-600 dark:!text-green-400",
          error:
            "!bg-red-500/10 !border-red-500/30 !text-red-600 dark:!text-red-400",
          warning:
            "!bg-yellow-500/10 !border-yellow-500/30 !text-yellow-600 dark:!text-yellow-400",
          info: "!bg-blue-500/10 !border-blue-500/30 !text-blue-600 dark:!text-blue-400",
        },
      }}
    />
  );
}
