"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export interface CategoryOption {
  id: string;
  title: string;
}

interface CategorySelectProps {
  label: string;
  placeholder?: string;
  className?: string;
}

const categories: CategoryOption[] = [
  {
    id: "1",
    title: "فناوری",
  },
  {
    id: "2",
    title: "برنامه‌نویسی",
  },
  {
    id: "3",
    title: "هوش مصنوعی",
  },
  {
    id: "4",
    title: "کسب‌وکار",
  },
  {
    id: "5",
    title: "طراحی",
  },
];

export const CategorySelect = ({
  label,
  placeholder,
  className,
}: CategorySelectProps) => {
  const t = useTranslations("addBlog.forms.category");
  const resolvedPlaceholder = placeholder ?? t("selectCategory");
  const [selected, setSelected] = useState<CategoryOption | null>(null);

  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);
  return (
    <div ref={wrapperRef} className={cn("flex flex-col gap-3", className)}>
      <label className="text-foreground ps-1.5 text-sm font-semibold">
        {label}
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "border-foreground/8 bg-secondary-bg cursor-pointer",
            "focus:border-primary",
            "flex min-h-12 w-full items-center justify-between rounded-lg border px-4 transition-colors outline-none",
          )}
        >
          <span
            className={cn(
              selected ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {selected?.title ?? resolvedPlaceholder}
          </span>

          <ChevronDown
            size={18}
            className={cn(
              "transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -8,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -8,
                scale: 0.98,
              }}
              transition={{
                duration: 0.18,
              }}
              className="bg-secondary-bg border-foreground/8 absolute top-[calc(100%+8px)] right-0 left-0 z-50 overflow-hidden rounded-xl border shadow-xl"
            >
              <div className="p-2">
                {categories.map((category) => {
                  const active = selected?.id === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => {
                        setSelected(category);
                        setOpen(false);
                      }}
                      className={cn(
                        "flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors font-IRANYekanX",
                        active
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-foreground/5",
                      )}
                    >
                      {category.title}

                      <AnimatePresence>
                        {active && (
                          <motion.div
                            initial={{
                              scale: 0,
                              opacity: 0,
                            }}
                            animate={{
                              scale: 1,
                              opacity: 1,
                            }}
                            exit={{
                              scale: 0,
                              opacity: 0,
                            }}
                          >
                            <Check size={17} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
