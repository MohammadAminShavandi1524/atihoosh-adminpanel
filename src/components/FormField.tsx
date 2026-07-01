"use client";

import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, InputHTMLAttributes } from "react";

interface BaseProps {
  label: string;
  containerClassName?: string;
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
  const { label, containerClassName, as = "input", ...rest } = props;

  return (
    <div className={cn("flex flex-col gap-3", containerClassName)}>
      <label className="text-foreground ps-1.5 text-sm font-semibold">
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          {...(rest as TextareaProps)}
          className={cn(
            "border-foreground/8 bg-secondary-bg text-foreground placeholder:text-muted-foreground focus:border-primary h-12 w-full rounded-lg border px-4 transition-colors outline-none",
            "h-32 resize-none py-4 rtl:text-right",
          )}
        />
      ) : (
        <input
          {...(rest as InputProps)}
          className={cn(
            "border-foreground/8 bg-secondary-bg text-foreground placeholder:text-muted-foreground focus:border-primary h-12 w-full rounded-lg border px-4 transition-colors outline-none rtl:text-right",
          )}
        />
      )}
    </div>
  );
};
