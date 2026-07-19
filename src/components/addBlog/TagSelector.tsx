"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { useLocale, useTranslations } from "next-intl";

export interface TagOption {
  id: string;
  label: string;
}

interface TagSelectorProps {
  label: string;
  options: TagOption[];

  value: TagOption[];

  onChange: (tags: TagOption[]) => void;

  placeholder: string;

  className?: string;

  lang?: "fa" | "en";
}

export const TagSelector = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  className,
  lang = "fa",
}: TagSelectorProps) => {
  const [open, setOpen] = useState(false);
  const [availableTags, setAvailableTags] = useState<TagOption[]>(options);
  const [creating, setCreating] = useState(false);
  const [newTag, setNewTag] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const t = useTranslations("addBlog");

  useEffect(() => {
    setAvailableTags(options);
  }, [options]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setCreating(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isSelected = (tag: TagOption) => value.some((t) => t.id === tag.id);

  const toggleTag = (tag: TagOption) => {
    if (isSelected(tag)) {
      onChange(value.filter((t) => t.id !== tag.id));
      return;
    }

    onChange([...value, tag]);
  };

  const removeTag = (id: string) => {
    onChange(value.filter((t) => t.id !== id));
  };

  const createTag = () => {
    const text = newTag.trim();

    if (!text) return;

    const exists = availableTags.find(
      (t) => t.label.toLowerCase() === text.toLowerCase(),
    );

    if (exists) {
      toggleTag(exists);
      setNewTag("");
      setCreating(false);
      return;
    }

    const created: TagOption = {
      id: crypto.randomUUID(),
      label: text,
    };

    setAvailableTags((prev) => [...prev, created]);

    onChange([...value, created]);

    setNewTag("");

    setCreating(false);
  };

  return (
    <div ref={wrapperRef} className={cn("flex flex-col gap-3", className)}>
      <label className="text-foreground ps-1.5 text-sm font-semibold">
        {label}
      </label>

      <div className="relative">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "border-foreground/8 bg-secondary-bg",
            "focus:border-primary cursor-pointer",
            "min-h-12 w-full rounded-lg border px-4 py-2",
            "transition-colors outline-none",
            "flex items-center justify-between gap-3",
          )}
        >
          <div className="flex flex-1 flex-wrap items-center gap-2">
            <AnimatePresence>
              {value.length === 0 && (
                <span className="text-muted-foreground text-sm">
                  {placeholder}
                </span>
              )}

              {value.map((tag) => (
                <motion.div
                  key={tag.id}
                  layout
                  initial={{
                    scale: 0.8,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={{
                    scale: 0.8,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                  className="bg-primary/10 text-primary flex items-center gap-2 rounded-full px-3 py-1 text-sm"
                >
                  <span className="">{tag.label}</span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTag(tag.id);
                    }}
                    className="hover:text-destructive pt-0.50 cursor-pointer transition-colors"
                  >
                    <X size={14} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <ChevronDown
            size={18}
            className={cn(
              "transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </div>{" "}
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
              className={cn(
                "bg-secondary-bg border-foreground/8 absolute top-[calc(100%+8px)] right-0 left-0 z-50 overflow-hidden rounded-xl border shadow-xl",
              )}
            >
              <div className="flex flex-col gap-y-1.5 overflow-y-auto p-2 pb-3">
                <ScrollArea
                  dir={locale === "fa" ? "rtl" : "ltr"}
                  className="font-IRANYekanX h-50"
                >
                  {availableTags.map((tag) => {
                    const selected = isSelected(tag);

                    return (
                      <button
                        key={tag.id}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={cn(
                          "flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors",
                          selected
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-foreground/5",
                        )}
                      >
                        <span>{tag.label}</span>

                        <AnimatePresence mode="wait">
                          {selected && (
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
                </ScrollArea>

                <div className="bg-foreground/8 my-1 h-px" />

                {!creating ? (
                  <button
                    type="button"
                    onClick={() => setCreating(true)}
                    className="text-primary hover:bg-primary/10 flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors"
                  >
                    <Plus size={16} />
                    {t("forms.parentBlog.createTag")}
                  </button>
                ) : (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="space-y-2 overflow-hidden"
                  >
                    <input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          createTag();
                        }

                        if (e.key === "Escape") {
                          setCreating(false);
                          setNewTag("");
                        }
                      }}
                      autoFocus
                      placeholder={t("forms.parentBlog.tagNamePlaceholder")}
                      className={cn(
                        "border-foreground/8 bg-secondary-bg text-foreground",
                        "focus:border-primary mb-2 h-11 w-full rounded-lg border px-3 transition-colors outline-none",
                      )}
                    />

                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setCreating(false);
                          setNewTag("");
                        }}
                        className="border-foreground/10 hover:bg-foreground/5 cursor-pointer rounded-lg border px-4 py-2 text-sm transition-colors"
                      >
                        {t("forms.parentBlog.cancel")}
                      </button>

                      <button
                        type="button"
                        onClick={createTag}
                        disabled={!newTag.trim()}
                        className={cn(
                          "bg-primary rounded-lg px-4 py-2 text-sm font-semibold text-[#f8fafc] transition-opacity dark:text-[#06151a]",
                          !newTag.trim()
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer hover:opacity-90",
                        )}
                      >
                        {t("forms.parentBlog.save")}
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
