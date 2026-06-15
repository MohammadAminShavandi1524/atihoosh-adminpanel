"use client";

import { LucideIcon } from "lucide-react";

interface OurValuesBoxProps {
  Logo: LucideIcon;
  title: string;
  description: string;
}

const OurValuesBox = ({ description, Logo, title }: OurValuesBoxProps) => {
  return (
    <div className="flex flex-col rounded-xl bg-[#101010] p-5.5">
      {/* logo */}
      <div className="mb-2">
        <Logo className="text-custom-primary size-6" />
      </div>

      {/* title */}
      <div className="mb-5 text-[28px]">{title}</div>

      {/* description */}
      <div className="text-[#8d8d8d]">{description}</div>
    </div>
  );
};

export default OurValuesBox;
