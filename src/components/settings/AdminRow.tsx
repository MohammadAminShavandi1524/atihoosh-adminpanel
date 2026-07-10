"use client";

import { AdminRole } from "@/data/admins";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";

interface AdminRowProps {
  id: number;
  email: string;
  request: boolean;
  resume: boolean;
  chat: boolean;
  blog: boolean;
}

const AdminRow = ({
  id,
  email,
  request,
  resume,
  chat,
  blog,
}: AdminRowProps) => {
  const t = useTranslations("Settings.AdminTable");

  
  return (
    <div className="border-border hover:bg-muted/30 grid grid-cols-[3fr_0.8fr_0.8fr_0.8fr_0.8fr_2fr] items-center border-b transition-colors">
      {/* Admin */}
      <div className="px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">
            {email.charAt(0).toUpperCase()}
          </div>

          <div>
            <h4 className="font-medium">Admin #{id}</h4>

            <p className="text-muted-foreground mt-1 text-sm">{email}</p>
          </div>
        </div>
      </div>
      {/* request */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          defaultChecked={request}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>
      {/* resume */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          defaultChecked={resume}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>
      {/* Chat */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          defaultChecked={chat}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>
      {/* Blog */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          defaultChecked={blog}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>
      {/* Actions */}
      <div className="px-6">
        <div className="flex justify-center gap-2">
          <button className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-teal-700 hover:shadow-md focus-visible:ring-2 focus-visible:ring-teal-500/40 focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50">
            {t("buttons.saveBtn")}
          </button>

          <button className="cursor-pointer rounded-lg border border-red-400 bg-red-500/10 px-3 py-2 text-sm text-red-400 transition hover:bg-red-500/20">
            {t("buttons.remove")}
          </button>

          {/* <button className="text-muted-foreground hover:bg-secondary-bg cursor-pointer rounded-lg p-2 transition-colors">
            <MoreHorizontal size={24} />
          </button> */}
        </div>
      </div>{" "}
    </div>
  );
};

export default AdminRow;
