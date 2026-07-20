"use client";

import { CustomSelect } from "../ui/custom-select";

interface CategoryOption {
  label: string;
  value: string;
}

interface CategorySelectProps {
  label: string;
  options: CategoryOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const CategorySelect = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select category...",
}: CategorySelectProps) => {
  return (
    <CustomSelect
      label={label}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
