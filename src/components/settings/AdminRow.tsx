"use client";

import { AdminRole } from "@/data/admins";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";

interface AdminRowProps {
  id: number;
  initials: string;
  name: string;
  role: AdminRole;
  email: string;
  permissions: {
    sales: boolean;
    team: boolean;
    chat: boolean;
    blog: boolean;
  };
}

const AdminRow = ({
  email,
  id,

  initials,
  name,
  permissions,
  role,
}: AdminRowProps) => {
  const t = useTranslations("Settings.AdminTable");

  const roleStyles = {
    "Super Admin":
      "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",

    "Sales Admin": "bg-blue-500/15 text-blue-400 border border-blue-500/20",

    "HR Admin": "bg-orange-500/15 text-orange-400 border border-orange-500/20",

    "Content Writer":
      "bg-violet-500/15 text-violet-400 border border-violet-500/20",
  };

  return (
    <div className="border-border hover:bg-muted/30 grid grid-cols-[3fr_0.8fr_0.8fr_0.8fr_0.8fr_2fr] items-center border-b transition-colors">
      {/* Admin */}
      <div className="px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">
            {initials}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium">{name}</h4>

              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-[11px] font-medium",
                  roleStyles[role],
                )}
              >
                {role === "Super Admin" && t("roles.superAdmin")}

                {role === "Sales Admin" && t("roles.salesAdmin")}

                {role === "HR Admin" && t("roles.hrAdmin")}

                {role === "Content Writer" && t("roles.contentWriter")}
              </span>
            </div>

            <p className="text-muted-foreground mt-1 text-sm">{email}</p>
          </div>
        </div>
      </div>
      {/* Sales */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          defaultChecked={permissions.sales}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>
      {/* Team */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          defaultChecked={permissions.team}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>
      {/* Chat */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          defaultChecked={permissions.chat}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>
      {/* Blog */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          defaultChecked={permissions.blog}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>
      {/* Actions */}
      <div className="px-6">
        <div className="flex justify-end gap-2">
          <button className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-teal-700 hover:shadow-md focus-visible:ring-2 focus-visible:ring-teal-500/40 focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50">
            {t("buttons.saveBtn")}
          </button>

          <button className="cursor-pointer rounded-lg border border-red-400 bg-red-500/10 px-3 py-2 text-sm text-red-400 transition hover:bg-red-500/20">
            {t("buttons.remove")}
          </button>

          <button className="text-muted-foreground hover:bg-secondary-bg cursor-pointer rounded-lg p-2 transition-colors">
            <MoreHorizontal size={24} />
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default AdminRow;
