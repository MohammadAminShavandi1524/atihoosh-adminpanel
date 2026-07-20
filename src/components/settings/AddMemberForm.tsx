"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { useTranslations } from "next-intl";
import { FormField } from "../FormField";
import { CustomButton } from "../ui/custom-button";

export interface AddMemberFormValues {
  email: string;
  user_name: string;
}

interface AddMemberFormProps {
  register: UseFormRegister<AddMemberFormValues>;
  errors: FieldErrors<AddMemberFormValues>;
}

export const AddMemberForm = ({ register, errors }: AddMemberFormProps) => {
  const t = useTranslations("Settings.AdminTable");

  return (
    <div className="border-t-border flex items-center justify-between border-t">
      <div className="flex gap-x-6 px-6 py-6">
        <div className="w-150">
          <FormField
            label=""
            placeholder={t("placeholders.email")}
            varient="default"
            register={register("email")}
            error={errors.email}
            errorClassName="absolute rtl:left-1.5 ltr:right-1.5 -top-4.75"
          />
        </div>

        <div className="w-100">
          <FormField
            label=""
            placeholder={t("placeholders.username")}
            varient="default"
            register={register("user_name")}
            error={errors.user_name}
            errorClassName="absolute rtl:left-1.5 ltr:right-1.5 -top-4.75"
          />
        </div>
      </div>

      <div className="px-6 pe-6">
        <CustomButton type="submit" intent="primary" size="lg" variant="outline">
          {t("buttons.addMember")}
        </CustomButton>
      </div>
    </div>
  );
};
