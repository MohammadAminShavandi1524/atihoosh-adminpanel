"use client";

import { cn } from "@/lib/utils";
import { BlogTab } from "@/types/objectTypes";
import { useTranslations } from "next-intl";
import { CustomButton } from "../ui/custom-button";

interface SubmitButtonProps {
  current: BlogTab;
}

const SubmitButton = ({ current }: SubmitButtonProps) => {
  const t = useTranslations("addBlog.submitButton");

  return (
    <CustomButton
      type="submit"
      intent="primary"
      variant="solid"
      className="absolute right-7 bottom-7 h-12 px-5 font-semibold"
    >
      {t(current)}
    </CustomButton>
  );
};

export default SubmitButton;
