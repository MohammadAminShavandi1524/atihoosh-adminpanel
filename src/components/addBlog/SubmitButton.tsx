"use client";


import { cn } from "@/lib/utils";
import { BlogTab } from "@/types/objectTypes";
import { useTranslations } from "next-intl";

interface SubmitButtonProps {
  current: BlogTab;
}

const SubmitButton = ({ current }: SubmitButtonProps) => {
  const t = useTranslations("addBlog.submitButton");

  return (
    <button
      type="submit"
      className={cn(
        "bg-primary absolute right-7 bottom-7 mt-8 flex h-12 cursor-pointer items-center justify-center gap-x-3 rounded-lg px-5 font-semibold text-[#f8fafc] transition hover:opacity-90 dark:text-[#06151a]",
      )}
    >
      {t(current)}
    </button>
  );
};

export default SubmitButton;
