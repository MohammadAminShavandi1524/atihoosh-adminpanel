"use client";

import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { BlogTab } from "@/types/objectTypes";


interface TabProps {
  label: BlogTab;
  current: BlogTab;
  setCurrent: Dispatch<SetStateAction<BlogTab>>;
}

export const Tab = ({ label, current, setCurrent }: TabProps) => {
  const t = useTranslations("addBlog.tabs");

  const active = label === current;

  return (
    <button
      type="button"
      onClick={() => setCurrent(label)}
      className="relative cursor-pointer px-6 py-2.5"
    >
      <span
        className={cn(
          "transition-colors duration-300",
          active
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {t(label)}
      </span>

      {active && (
        <motion.div
          layoutId="tab-indicator"
          className="bg-primary absolute right-0 bottom-0 left-0 h-0.5 rounded-full"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        />
      )}
    </button>
  );
};
