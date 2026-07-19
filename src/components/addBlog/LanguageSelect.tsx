"use client";

import CustomSelect from "@/components/ui/custom-select/CustomSelect";

interface LanguageSelectProps {
  value: "fa" | "en";

  onChange: (value: "fa" | "en") => void;
}

const LanguageSelect = ({ value, onChange }: LanguageSelectProps) => {
  return (
    <CustomSelect<"fa" | "en">
      label="Language"

      value={value}

      onChange={onChange}

      options={[
        {
          label: "Persian",
          value: "fa",
        },
        {
          label: "English",
          value: "en",
        },
      ]}
    />
  );
};

export default LanguageSelect;
