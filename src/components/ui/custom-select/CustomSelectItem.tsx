"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { CustomSelectOption } from "./types";

interface CustomSelectItemProps {
  option: CustomSelectOption;
  selected: boolean;
  onSelect: (value: string) => void;
}

const CustomSelectItem = ({
  option,
  selected,
  onSelect,
}: CustomSelectItemProps) => {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(option.value)}
      className={cn(
        "flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors",
        selected
          ? "bg-primary/10 text-primary"
          : "text-foreground hover:bg-secondary",
      )}
    >
      <span className="truncate">{option.label}</span>

      <Check
        className={cn(
          "size-4 transition-all",
          selected ? "scale-100 opacity-100" : "scale-75 opacity-0",
        )}
      />
    </motion.button>
  );
};

export default CustomSelectItem;
