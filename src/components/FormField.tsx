"use client";

import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, InputHTMLAttributes } from "react";

interface BaseProps {
  label: string;
  containerClassName?: string;
  className?: string;
  labelClassName?: string;
  varient: "login" | "default";
}

interface InputProps extends BaseProps, InputHTMLAttributes<HTMLInputElement> {
  as?: "input";
}

interface TextareaProps
  extends BaseProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: "textarea";
}

type FormFieldProps = InputProps | TextareaProps;

export const FormField = (props: FormFieldProps) => {
  const {
    label,
    varient,
    className,
    labelClassName,
    containerClassName,
    as = "input",
    ...rest
  } = props;

  return (
    <div className={cn("flex flex-col gap-3", containerClassName)}>
      <label
        className={cn(
          "text-foreground ps-1.5 text-sm font-semibold",
          labelClassName,
        )}
      >
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          {...(rest as TextareaProps)}
          className={cn(
            "h-12 w-full rounded-lg border px-4 transition-colors outline-none",
            "text-foreground h-32 resize-none py-4 rtl:text-right",
            varient === "default" &&
              "border-foreground/8 bg-secondary-bg placeholder:text-muted-foreground focus:border-primary",
            varient === "login" &&
              "border-[#d7dde4] bg-white text-[#1f2937] placeholder:text-[#9ca3af] focus:border-[#21a9a1] dark:border-[#2d333a] dark:bg-[#1c2128] dark:text-white dark:placeholder:text-[#3d444d] dark:focus:border-[#21a9a1]",
            className,
          )}
        />
      ) : (
        <input
          {...(rest as InputProps)}
          className={cn(
            "text-foreground h-12 w-full rounded-lg border px-4 transition-colors outline-none rtl:text-right",

            varient === "default" &&
              "border-foreground/8 bg-secondary-bg placeholder:text-muted-foreground focus:border-primary",
            varient === "login" &&
              "border-[#d7dde4] bg-white text-[#1f2937] placeholder:text-[#9ca3af] focus:border-[#21a9a1] dark:border-[#2d333a] dark:bg-[#1c2128] dark:text-white dark:placeholder:text-[#3d444d] dark:focus:border-[#21a9a1]",

            className,
          )}
        />
      )}
    </div>
  );
};
