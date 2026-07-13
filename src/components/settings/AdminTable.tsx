"use client";

import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

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
  // console.log("🚀 ~ Page ~ users:", users);
  const locale = useLocale();

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
                {t("headers.request")}
              </div>

              <div className="text-muted-foreground px-4 py-4 text-center text-sm font-medium">
                {t("headers.resume")}
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
          <ScrollArea
            dir={locale === "en" ? "ltr" : "rtl"}
            className="h-[500px]"
          >
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
          <div className="flex items-center gap-x-6 px-6 py-6">
            {/* email */}
            <div className="w-150">
              <input
                placeholder={t("placeholders.email")}
                className="border-foreground/8 bg-secondary-bg text-foreground placeholder:text-muted-foreground focus:border-primary h-12 w-full rounded-lg border px-4 text-sm transition-colors outline-none rtl:text-right"
              />
            </div>

            {/* username */}
            <div className="w-100">
              <input
                placeholder={t("placeholders.username")}
                className="border-foreground/8 bg-secondary-bg text-foreground placeholder:text-muted-foreground focus:border-primary h-12 w-full rounded-lg border px-4 text-sm transition-colors outline-none rtl:text-right"
              />
            </div>
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
