"use client";

import { Phone } from "lucide-react";
import { useLocale } from "next-intl";

import { formatDate } from "@/lib/utils";

interface ActivityItemProps {
  id: number;
  userName: string;
  phone: string;
  created: string;
}

const ActivityItem = ({
  id,
  userName,
  phone,
  created,
}: ActivityItemProps) => {
  const locale = useLocale();

  const initials = userName
    .split(" ")
    .slice(0, 2)
    .map((item) => item[0])
    .join("")
    .toUpperCase();

  return (
    <div className=" border-border-secondary hover:border-primary/20 hover:bg-secondary/70 flex items-center justify-between rounded-xl border px-5 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="from-primary/20 to-primary/5 text-primary flex size-12 items-center justify-center rounded-xl bg-gradient-to-br text-sm font-bold">
          {initials}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary rounded-md px-2 py-0.5 text-[11px] font-semibold">
              #{id}
            </span>

            <span className="text-foreground font-semibold">
              {userName}
            </span>
          </div>

          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Phone className="size-3.5" />
            <span>{phone}</span>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 text-primary  rounded-lg px-3 py-2 text-xs font-medium">
        {formatDate(created, locale)}
      </div>
    </div>
  );
};

export default ActivityItem;