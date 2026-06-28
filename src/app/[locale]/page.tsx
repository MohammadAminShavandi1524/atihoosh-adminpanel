import OverViewBox from "@/components/landing/OverViewBox";
import OverViewBoxes from "@/components/landing/OverViewBoxes";
import RecentActivities from "@/components/landing/RecentActivities";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ThemeButton } from "@/components/theme/ThemeButton";
import { cn } from "@/lib/utils";
import { MessagesSquare } from "lucide-react";

import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { use } from "react";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <div className="flex flex-col px-12 pt-8">
      {/* header */}
      <div className="mb-4 flex justify-between pb-8">
        <div>
          <div className="text-2xl mb-2">Hi, Ali 👋</div>
          <div className="text-muted-foreground text-xl">
            A quick summary of what's happening at Ati Hoosh today
          </div>
        </div>
        <div className="flex items-center gap-x-2 pe-10">
          <LanguageSwitcher defaultLocale={locale} />
          <ThemeButton />
        </div>
      </div>

      {/* overviewBoxes */}
      <OverViewBoxes />
      {/* recent activities */}
      <RecentActivities />
    </div>
  );
}
