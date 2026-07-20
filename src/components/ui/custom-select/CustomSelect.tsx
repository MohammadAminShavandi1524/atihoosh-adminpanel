"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import CustomSelectItem from "./CustomSelectItem";
import { CustomSelectProps } from "./types";
import { ScrollArea } from "../scroll-area";
import { useLocale } from "next-intl";

const CustomSelect = <T extends string>({
  label,
  placeholder = "Select...",
  options,
  value,
  onChange,
  disabled = false,
  className,
}: CustomSelectProps<T>) => {
  const locale = useLocale();

  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const selectedOption = useMemo(
    () => options.find((item) => item.value === value),
    [options, value],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {label && (
        <label className="text-foreground ps-1.5 text-sm font-semibold">
          {label}
        </label>
      )}

      <div ref={ref} className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "bg-secondary-bg border-foreground/8 flex h-12 w-full cursor-pointer items-center justify-between rounded-lg border px-4 transition-all outline-none",
            "focus:border-primary",
            disabled && "cursor-not-allowed opacity-60",
          )}
        >
          <span
            className={cn(
              "truncate",
              selectedOption ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {selectedOption?.label ?? placeholder}
          </span>

          <motion.div
            animate={{
              rotate: open ? 180 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <ChevronDown className="text-muted-foreground size-4" />
          </motion.div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -6,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -6,
                scale: 0.98,
              }}
              transition={{
                duration: 0.18,
              }}
              className="bg-secondary-bg border-border-secondary absolute z-50 mt-2 w-full overflow-hidden rounded-xl border py-2 pe-2 shadow-xl"
            >
              <ScrollArea
                dir={locale === "en" ? "ltr" : "rtl"}
                className={cn("h-auto", options.length > 5 && "h-64")}
              >
                <div className="flex flex-col gap-1 p-2 pe-4">
                  {options.map((option) => (
                    <CustomSelectItem
                      key={option.value}
                      option={option}
                      selected={option.value === value}
                      onSelect={(value) => {
                        onChange(value as T);
                        setOpen(false);
                      }}
                    />
                  ))}
                </div>
              </ScrollArea>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CustomSelect;
