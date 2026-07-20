"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ActivityItemProps {
  profileImage?: string;
  userName: string;
  RequestType: string;
  status: string;
  Date: string;
  time: string;
}

const ActivityItem = ({
  Date,
  RequestType,
  status,
  time,
  userName,
}: ActivityItemProps) => {
  const profileWords = userName
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="border-border-secondary shadow-secondary flex min-h-14 cursor-pointer items-center justify-between rounded-md border px-4 py-3 shadow-sm transition-colors">
      <div className="flex gap-x-4">
        <div className="bg-secondary text-primary flex size-12 items-center justify-center rounded-lg font-medium">
          {profileWords}
        </div>

        <div className="flex flex-col">
          <div className="font-medium">{userName}</div>

          <div className="text-muted-foreground flex items-center gap-x-2.5 text-sm">
            <span>{RequestType}</span>
            <span>{Date}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>

      {/* status */}
      {/* <div
        className={cn(
          "rounded-full border px-2.5 py-1 text-xs font-medium",

          (status === "New" || status === "جدید") &&
            "border-[#f6d28b] bg-[#fff8ea] text-[#b66b00] dark:border-[#63461f] dark:bg-[#292014] dark:text-[#e8a13a]",

          (status === "In Progress" || status === "در حال بررسی") &&
            "border-[#cfc5ff] bg-[#f5f3ff] text-[#6d4aff] dark:border-[#32275b] dark:bg-[#1c182c] dark:text-[#b8a8ff]",

          (status === "Done" || status === "انجام شده") &&
            "border-[#b8ebcf] bg-[#edfdf3] text-[#15803d] dark:border-[#1a4831] dark:bg-[#13241c] dark:text-[#33c379]",
        )}
      >
        {status}
      </div> */}
    </div>
  );
};

export default ActivityItem;
