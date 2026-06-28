"use client";

import { admins } from "@/data/admins";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AdminTable() {
  const t = useTranslations("Settings.AdminTable");

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const roleStyles = {
    "Super Admin":
      "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",

    "Sales Admin": "bg-blue-500/15 text-blue-400 border border-blue-500/20",

    "HR Admin": "bg-orange-500/15 text-orange-400 border border-orange-500/20",

    "Content Writer":
      "bg-violet-500/15 text-violet-400 border border-violet-500/20",
  };

  return (
    <div className="border-border-secondary overflow-hidden rounded-2xl border">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="border-b-border bg-tertiary border-b">
            <tr className="text-muted-foreground text-left text-sm">
              <th className="px-6 py-4 font-medium">{t("headers.admin")}</th>

              <th className="px-4 py-4 text-center font-medium">
                {t("headers.sales")}
              </th>

              <th className="px-4 py-4 text-center font-medium">
                {t("headers.team")}
              </th>

              <th className="px-4 py-4 text-center font-medium">
                {t("headers.chat")}
              </th>

              <th className="px-4 py-4 text-center font-medium">
                {t("headers.blog")}
              </th>

              <th className="px-6 py-4 text-center font-medium">
                {t("headers.actions")}
              </th>
            </tr>
          </thead>

          <tbody>
            {admins.map((admin) => (
              <tr
                key={admin.id}
                className="border-b-border border-b transition-colors"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">
                      {admin.initials}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{admin.name}</h4>

                        <span
                          className={cn(
                            "rounded-full px-2.5 py-1 text-[11px] font-medium",
                            roleStyles[admin.role],
                          )}
                        >
                          {admin.role === "Super Admin" &&
                            t("roles.superAdmin")}

                          {admin.role === "Sales Admin" &&
                            t("roles.salesAdmin")}

                          {admin.role === "HR Admin" && t("roles.hrAdmin")}

                          {admin.role === "Content Writer" &&
                            t("roles.contentWriter")}
                        </span>
                      </div>

                      <p className="text-muted-foreground mt-1 text-sm">
                        {admin.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="text-center">
                  <input
                    type="checkbox"
                    defaultChecked={admin.permissions.sales}
                    className="h-4 w-4 cursor-pointer accent-emerald-500"
                  />
                </td>

                <td className="text-center">
                  <input
                    type="checkbox"
                    defaultChecked={admin.permissions.team}
                    className="h-4 w-4 cursor-pointer accent-emerald-500"
                  />
                </td>

                <td className="text-center">
                  <input
                    type="checkbox"
                    defaultChecked={admin.permissions.chat}
                    className="h-4 w-4 cursor-pointer accent-emerald-500"
                  />
                </td>

                <td className="text-center">
                  <input
                    type="checkbox"
                    defaultChecked={admin.permissions.blog}
                    className="h-4 w-4 cursor-pointer accent-emerald-500"
                  />
                </td>

                <td className="px-6">
                  <div className="flex justify-end gap-2">
                    <button className="text-muted-foreground border-border-secondary bg-tertiary cursor-pointer rounded-lg border px-3 py-2 text-sm transition">
                      {t("buttons.changeEmail")}
                    </button>

                    <button className="cursor-pointer rounded-lg border border-red-400 bg-red-500/10 px-3 py-2 text-sm text-red-400 transition">
                      {t("buttons.remove")}
                    </button>

                    <button className="text-muted-foreground hover:bg-secondary-bg cursor-pointer rounded-lg p-2">
                      <MoreHorizontal size={24} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-100 px-6 py-6">
              <input
                placeholder={t("placeholders.email")}
                className="border-foreground/8 bg-secondary-bg text-foreground placeholder:text-muted-foreground focus:border-primary h-12 w-full rounded-lg border px-4 text-sm transition-colors outline-none rtl:text-right"
              />
            </div>

            <div className="relative w-60">
              <select
                defaultValue=""
                className="border-foreground/8 bg-secondary-bg text-foreground focus:border-primary h-12 w-full appearance-none rounded-lg border px-4 pr-10 text-sm transition-colors outline-none rtl:pr-4 rtl:pl-10"
              >
                <option value="" disabled>
                  {t("placeholders.selectRole")}
                </option>

                <option value="Super Admin">{t("roles.superAdmin")}</option>

                <option value="Sales Admin">{t("roles.salesAdmin")}</option>

                <option value="HR Admin">{t("roles.hrAdmin")}</option>

                <option value="Content Writer">
                  {t("roles.contentWriter")}
                </option>
              </select>

              <ChevronDown className="text-muted-foreground pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 rtl:right-auto rtl:left-4" />
            </div>
          </div> 

          <div className="px-6 pe-6">
            <button className="border-primary bg-secondary text-primary cursor-pointer rounded-xl border px-5 py-3 text-sm font-medium transition">
              {t("buttons.addAdmin")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
