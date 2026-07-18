"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface BaseProps {
  label?: string;
  containerClassName?: string;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  varient: "login" | "default";
  error?: FieldError;
  register?: UseFormRegisterReturn;
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
    error,
    register,
    errorClassName,
    as = "input",
    ...rest
  } = props;

  return (
    <div className={cn("relative flex flex-col gap-3", containerClassName)}>
      {label?.trim() && (
        <label
          className={cn(
            "text-foreground ps-1.5 text-sm font-semibold",
            labelClassName,
          )}
        >
          {label}
        </label>
      )}

      {error && (
        <p className={cn("text-xs text-red-400", errorClassName)}>
          {error.message}
        </p>
      )}

      {as === "textarea" ? (
        <textarea
          {...(rest as TextareaProps)}
          {...register}
          className={cn(
            "text-foreground h-32 w-full resize-none rounded-lg border px-4 py-4 transition-colors outline-none rtl:text-right",

            varient === "default" &&
              (error
                ? "bg-secondary-bg placeholder:text-muted-foreground border-red-500 focus:border-red-500"
                : "border-foreground/8 bg-secondary-bg placeholder:text-muted-foreground focus:border-primary"),

            varient === "login" &&
              (error
                ? "border-red-500 bg-white text-[#1f2937] placeholder:text-[#9ca3af] focus:border-red-500 dark:border-red-500 dark:bg-[#1c2128] dark:text-white dark:placeholder:text-[#3d444d]"
                : "border-[#d7dde4] bg-white text-[#1f2937] placeholder:text-[#9ca3af] focus:border-[#21a9a1] dark:border-[#2d333a] dark:bg-[#1c2128] dark:text-white dark:placeholder:text-[#3d444d] dark:focus:border-[#21a9a1]"),

            className,
          )}
        />
      ) : (
        <input
          {...(rest as InputProps)}
          {...register}
          className={cn(
            "text-foreground h-12 w-full rounded-lg border px-4 transition-colors outline-none rtl:text-right",

            varient === "default" &&
              (error
                ? "bg-secondary-bg placeholder:text-muted-foreground border-red-500 focus:border-red-500"
                : "border-foreground/8 bg-secondary-bg placeholder:text-muted-foreground focus:border-primary"),

            varient === "login" &&
              (error
                ? "border-red-500 bg-white text-[#1f2937] placeholder:text-[#9ca3af] focus:border-red-500 dark:border-red-500 dark:bg-[#1c2128] dark:text-white dark:placeholder:text-[#3d444d]"
                : "border-[#d7dde4] bg-white text-[#1f2937] placeholder:text-[#9ca3af] focus:border-[#21a9a1] dark:border-[#2d333a] dark:bg-[#1c2128] dark:text-white dark:placeholder:text-[#3d444d] dark:focus:border-[#21a9a1]"),

            className,
          )}
        />
      )}
    </div>
  );
};
