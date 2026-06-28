"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import AccessOverviewItem from "@/components/settings/AccessOverviewItem";
import AdminTable from "@/components/settings/AdminTable";
import { ThemeButton } from "@/components/theme/ThemeButton";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface pageProps {}

export const users = [
  {
    id: "1",
    name: "Sohrab A.",
    avatar: "SA",
    role: "Super Admin",
    accessLevel: "Full access",
  },
  {
    id: "2",
    name: "Maryam R.",
    avatar: "MR",
    role: "Sales Admin",
    accessLevel: "Sales + chat",
  },
  {
    id: "3",
    name: "Ali T.",
    avatar: "AT",
    role: "HR Admin",
    accessLevel: "HR + chat",
  },
  {
    id: "4",
    name: "Sara K.",
    avatar: "SK",
    role: "Blog Admin",
    accessLevel: "Blog + chat",
  },
];

const page = ({}: pageProps) => {
  const locale = useLocale();

  return (
    <div className="flex">
      {/* body */}
      <div className="flex flex-1 flex-col">
        {/* header */}
        <div className="border-b-border-secondary h-fit w-full border-b px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-2 text-2xl">Settings and permissions</div>

              <div className="text-muted-foreground text-xl">
                Manage admin emails, access matrix for system sections and blog
                articles
              </div>
            </div>

            <div className="flex items-center gap-x-2 pe-10">
              <LanguageSwitcher defaultLocale={locale} />
              <ThemeButton />
            </div>
          </div>
        </div>
        {/* content */}
        <div className="flex flex-1 flex-col px-10">
          {/*  */}
          <div className="border-b-border-secondary mt-10 mb-6 border-b pb-3 text-sm">
            <span className="text-primary border-b-primary cursor-pointer border-b-2 px-6 py-2.5">
              Manage users and permissions
            </span>
            <span className="cursor-pointer px-6 py-1.5">
              Blog article management
            </span>
          </div>
          {/* adminTable */}
          <AdminTable />
        </div>
        {/* footer */}
        <div className="bg-tertiary flex w-full items-center justify-between px-10 py-6">
          <div className="text-muted-foreground text-sm">
            The access matrix is applied in real time — emails will receive
            limited notifications.
          </div>
          <button className="bg-secondary text-primary border-primary rounded-lg border px-6 py-2">
            Save permissions
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="border-s-border-secondary h-screen w-75 border-s">
        <div className="border-b-border-secondary border-b px-4 py-4">
          <div className="text-center text-2xl">Access overview</div>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 px-5 pt-4">
          <AccessOverviewItem qty="4" label="Total admins" />
          <AccessOverviewItem qty="3" label="Online now" />
          <AccessOverviewItem qty="9" label="Active perms" />
          <AccessOverviewItem qty="4" label="Sections" />
        </div>
        {/* seperator */}
        <div className="bg-border-secondary mx-5 my-8 h-px" />

        {/* Permission summary */}
        <div className="flex flex-col px-5">
          <div className="text-muted-foreground mb-3 ps-1.5 text-sm">
            Permission summary
          </div>
          {/* user access table */}
          <div className="border-border-secondary overflow-hidden rounded-xl border">
            <div className="bg-tertiary text-muted-foreground flex items-center justify-between px-3 py-2 text-sm">
              <div>User</div>
              <div>access level</div>
            </div>
            {/* users */}
            <div className="bg-border-secondary flex flex-col gap-y-px">
              {users.map((user, index) => {
                return (
                  <div
                    key={index}
                    className="bg-background text-foreground flex items-center justify-between px-3 py-3 text-sm"
                  >
                    <span>{user.name}</span>
                    <span className="text-primary bg-secondary border-primary rounded-md border px-2 py-1 text-xs">
                      {user.accessLevel}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
