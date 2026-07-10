"use client";

import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import AdminRow from "./AdminRow";
import { getUsers } from "@/services/users";

interface User {
  id: number;
  email: string;
  request: boolean;
  resume: boolean;
  chat: boolean;
  blog: boolean;
}

export default function AdminTable() {
  const [users, setUsers] = useState<User[]>([]);
  console.log("🚀 ~ Page ~ users:", users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

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
    <div className="border-border-secondary h-full overflow-hidden rounded-2xl border">
      <div className="flex h-full flex-col justify-between overflow-x-auto">
        <div className="border-border bg-background overflow-hidden rounded-xl border">
          {/* Header */}
          <div className="bg-tertiary border-border border-b">
            <div className="grid grid-cols-[3fr_0.8fr_0.8fr_0.8fr_0.8fr_2fr] items-center">
              <div className="text-muted-foreground px-6 py-4 text-sm font-medium">
                {t("headers.admin")}
              </div>

              <div className="text-muted-foreground px-4 py-4 text-center text-sm font-medium">
                request
              </div>

              <div className="text-muted-foreground px-4 py-4 text-center text-sm font-medium">
                resume
              </div>

              <div className="text-muted-foreground px-4 py-4 text-center text-sm font-medium">
                {t("headers.chat")}
              </div>

              <div className="text-muted-foreground px-4 py-4 text-center text-sm font-medium">
                {t("headers.blog")}
              </div>

              <div className="text-muted-foreground px-6 py-4 text-center text-sm font-medium">
                {t("headers.actions")}
              </div>
            </div>
          </div>

          {/* Body */}
          <ScrollArea className="h-[500px]">
            <div>
              {users.map((user) => (
                <AdminRow
                  key={user.id}
                  id={user.id}
                  email={user.email}
                  request={user.request}
                  resume={user.resume}
                  chat={user.chat}
                  blog={user.blog}
                />
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="border-t-border flex items-center justify-between border-t">
          <div className="flex items-center">
            <div className="w-150 px-6 py-6">
              <input
                placeholder={t("placeholders.email")}
                className="border-foreground/8 bg-secondary-bg text-foreground placeholder:text-muted-foreground focus:border-primary h-12 w-full rounded-lg border px-4 text-sm transition-colors outline-none rtl:text-right"
              />
            </div>

            {/*  select === hidden */}
            {/* <div className="relative w-60 hidden">
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
            </div> */}
          </div>

          <div className="px-6 pe-6">
            <button className="border-primary bg-secondary text-primary cursor-pointer rounded-xl border px-5 py-3 text-sm font-medium transition">
              {t("buttons.addMember")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
