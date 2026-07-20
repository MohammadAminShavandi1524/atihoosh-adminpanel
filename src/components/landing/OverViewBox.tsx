"use client";

import { LucideIcon } from "lucide-react";

interface OverViewBoxProps {
  Icon: LucideIcon;
  title: string;
  qty: string;
  label: string;
}

const OverViewBox = ({ Icon, label, qty, title }: OverViewBoxProps) => {
  return (
    <div className="bg-secondary-bg border-border-secondary flex flex-col rounded-xl border p-5">
      <div className="flex items-center justify-between">
        <div className="bg-secondary text-primary flex size-12 items-center justify-center rounded-md">
          <Icon className="size-6" />
        </div>
        <div className="text-primary text-base">{label}</div>
      </div>
      <div className="mt-4 text-3xl font-medium ps-0.5 mb-2">{qty}</div>
      <div className="text-muted-foreground">{title}</div>
    </div>
  );
};

export default OverViewBox;
