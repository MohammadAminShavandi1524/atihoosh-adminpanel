"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

interface ExpSectionProps {
  number: string;
  label: string;
  topLineClassName?: string;
}

const ExpSection = ({ label, number, topLineClassName }: ExpSectionProps) => {
  const locale = useLocale();
  return (
    <div className="flex flex-col">
      {/* top Line */}
      <span
        className={cn(
          topLineClassName,
          "h-1.25 w-8.25 bg-[#1e9dbd] 2xl:w-12.25",
        )}
      ></span>
      {/* number */}
      <span className="mt-1  text-[48px] 2xl:text-[56px]">{number}</span>
      {/* label */}
      <span
        style={locale === "en" ? { fontFamily: "var(--font-playfair)" } : {}}
        className="ms-0.75 text-lg 2xl:text-xl text-white/70"
      >
        {label}
      </span>
    </div>
  );
};

export default ExpSection;
