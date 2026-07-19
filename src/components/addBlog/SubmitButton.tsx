"use client";

import { cn } from "@/lib/utils";
import { BlogTab } from "@/types/objectTypes";
import { useTranslations } from "next-intl";

import { CustomButton } from "../ui/custom-button";

interface SubmitButtonProps {
  current: BlogTab;
  disabled?: boolean;
  className?: string;
}

const SubmitButton = ({
  current,
  disabled = false,
  className,
}: SubmitButtonProps) => {
  const t = useTranslations("addBlog.submitButton");

  return (
    <CustomButton
      type="submit"
      intent="primary"
      variant="solid"
      disabled={disabled}
      className={cn(
        "absolute right-7 bottom-7 h-12 px-5 font-semibold",
        disabled && "cursor-not-allowed opacity-60",
        className,
      )}
    >
      {t(current)}
    </CustomButton>
  );
};

export default SubmitButton;
