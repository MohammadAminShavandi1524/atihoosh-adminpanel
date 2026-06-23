"use client";

import { LucideIcon } from "lucide-react";

interface OurValuesBoxProps {
  Logo: LucideIcon;
  title: string;
  description?: string;
}

const OurValuesBox = ({ description, Logo, title }: OurValuesBoxProps) => {
  return (
    <div className="bg-secondary-bg flex min-h-[190px] w-full flex-col rounded-xl p-5.5">
      {/* logo */}
      <div className="mb-2">
        <Logo className="text-primary size-6" />
      </div>

      {/* title */}
      <div className="mb-5 text-[28px]">{title}</div>

      {/* description */}
      <div className="text-muted hidden">{description}</div>
    </div>
  );
};

export default OurValuesBox;
