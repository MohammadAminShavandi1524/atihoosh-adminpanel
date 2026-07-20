import "../globals.css";
import "../../Webfonts/fontiran.css";

import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import {
  Inter,
  Playfair_Display,
  Space_Grotesk,
  Noto_Serif,
} from "next/font/google";

import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/Providers";

import Sidebar from "@/components/layout/Sidebar";
import AppToaster from "@/components/AppToaster";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">,
): Promise<Metadata> {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "LocaleLayout",
  });

  return {
    title: t("title"),

    icons: {
      icon: [
        {
          url: "/favicon.ico",
          type: "image/x-icon",
        },
        {
          url: "/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32",
        },
        {
          url: "/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16",
        },
      ],
      apple: "/apple-touch-icon.png",
    },

    manifest: "/manifest.json",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      dir={locale === "en" ? "ltr" : "rtl"}
      suppressHydrationWarning
    >
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          space.variable,
          notoSerif.variable,
          locale === "fa" ? "font-IRANYekanX" : inter.className,
        )}
      >
        <NextIntlClientProvider>
          <ThemeProvider>
            <AppToaster />

            <div className="bg-background text-foreground flex h-screen overflow-hidden">
              <Sidebar />

              <div className="flex flex-1 flex-col overflow-hidden">
                {children}
              </div>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
