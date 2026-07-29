"use client";

import { LucideIcon } from "lucide-react";

interface OverViewBoxProps {
  Icon: LucideIcon;
  title: string;
  qty: string;
}

const OverViewBox = ({ Icon, qty, title }: OverViewBoxProps) => {
  return (
    <div className="bg-secondary-bg border-border-secondary hover:border-primary/20 group rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex size-14 items-center justify-center rounded-2xl transition-all duration-200">
          <Icon className="size-7" />
        </div>

        <div className="text-right">
          <div className="text-foreground text-4xl leading-none font-bold">
            {qty}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-muted-foreground text-sm">{title}</p>
      </div>
    </div>
  );
};

export default OverViewBox;
