import AnimatedArrowButton from "@/components/AnimatedArrowButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import CTA from "@/components/landing/CTA";
import HeroSection from "@/components/landing/HeroSection";
import OurCustomers from "@/components/landing/OurCustomers";
import Services from "@/components/landing/Services";
import StickyTitle from "@/components/landing/StickyTitle";
import TeamSection from "@/components/landing/TeamSection";
import { cn } from "@/lib/utils";

import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { use } from "react";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <div>
      {/* hero section */}
      <HeroSection />

      {/* services */}
      <Services />

      {/* style={locale === "en" ? { fontFamily: "var(--font-inter)" } : {}} */}
      {/* style={locale === "en" ? { fontFamily: "var(--font-playfair)" } : {}} */}
      {/* style={locale === "en" ? { fontFamily: "var(--font-space)" } : {}} */}

      {/* Entrust Your Project To Us */}
      <CTA />

      {/* read more carousel  */}
      <OurCustomers />

      {/* How We Run Software Project  stiky title !!*/}

      <StickyTitle />

      {/* team section */}

      <TeamSection />
    </div>
  );
}
