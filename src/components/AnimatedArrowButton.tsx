"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";

interface AnimatedArrowButtonProps {
  label: string;
  labelClassName?: string;
  className?: string;
}

const AnimatedArrowButton = ({
  label,
  labelClassName,
  className,
}: AnimatedArrowButtonProps) => {

  const locale = useLocale()

  return (
    <button
      className={cn(
        "group flex cursor-pointer items-center gap-x-5",
        className,
      )}
    >
      <span className={cn("text-[28px] font-medium", labelClassName)}>
        {label}
      </span>

      <span className={cn("relative flex h-8 w-8 items-center justify-center overflow-hidden bg-[#219ebc] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] " , locale === "en" ? "group-hover:translate-x-1.5" : "group-hover:-translate-x-1.5")}>
        {/* Hover Layer */}
        <span className="absolute inset-0 origin-left scale-x-0 bg-[#197c95] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />

        {/* Icon */}
        <span className="relative z-10">
          <ChevronRight className={cn(locale === "fa" && "rotate-180")} size={28} />
        </span>
      </span>
    </button>
  );
};

export default AnimatedArrowButton;
