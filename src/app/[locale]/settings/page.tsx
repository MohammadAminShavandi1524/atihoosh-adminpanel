"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import AccessOverviewItem from "@/components/settings/AccessOverviewItem";
import AdminTable from "@/components/settings/AdminTable";
import { ThemeButton } from "@/components/theme/ThemeButton";
import { useLocale, useTranslations } from "next-intl";

export const users = [
  {
    id: "1",
    name: "Sohrab A.",
    avatar: "SA",
    role: "Super Admin",
    accessLevel: "fullAccess",
  },
  {
    id: "2",
    name: "Maryam R.",
    avatar: "MR",
    role: "Sales Admin",
    accessLevel: "salesChat",
  },
  {
    id: "3",
    name: "Ali T.",
    avatar: "AT",
    role: "HR Admin",
    accessLevel: "hrChat",
  },
  {
    id: "4",
    name: "Sara K.",
    avatar: "SK",
    role: "Blog Admin",
    accessLevel: "blogChat",
  },
];

interface PageProps {}

const Page = ({}: PageProps) => {
  const locale = useLocale();
  const t = useTranslations("Settings");

  return (
    <div className="flex">
      {/* body 1*/}
      <div className="flex flex-1 flex-col">
        {/* header */}
        <div className="border-b-border-secondary h-fit w-full border-b px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-2 text-2xl">{t("title")}</div>

              <div className="text-muted-foreground text-xl">
                {t("description")}
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
          {/* tabs */}
          <div className="border-b-border-secondary mt-10 mb-6 border-b pb-3 text-sm">
            <span className="text-primary border-b-primary cursor-pointer border-b-2 px-6 py-2.5">
              {t("tabs.users")}
            </span>

            <span className="cursor-pointer px-6 py-1.5">{t("tabs.blog")}</span>
          </div>

          {/* admin table */}
          <AdminTable />
        </div>

        {/* footer */}
        <div className="bg-tertiary flex w-full items-center justify-between px-10 py-6">
          <div className="text-muted-foreground text-sm">
            {t("footer.description")}
          </div>

          <button className="bg-secondary text-primary border-primary rounded-lg border px-6 py-2">
            {t("footer.save")}
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="border-s-border-secondary h-screen w-75 border-s">
        <div className="border-b-border-secondary border-b px-4 py-4">
          <div className="text-center text-2xl">{t("overview.title")}</div>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 px-5 pt-4">
          <AccessOverviewItem qty="4" label={t("overview.totalAdmins")} />
          <AccessOverviewItem qty="3" label={t("overview.onlineNow")} />
          <AccessOverviewItem qty="9" label={t("overview.activePermissions")} />
          <AccessOverviewItem qty="4" label={t("overview.sections")} />
        </div>

        {/* separator */}
        <div className="bg-border-secondary mx-5 my-8 h-px" />

        {/* Permission summary */}
        <div className="flex flex-col px-5">
          <div className="text-muted-foreground mb-3 ps-1.5 text-sm">
            {t("permissionSummary.title")}
          </div>

          <div className="border-border-secondary overflow-hidden rounded-xl border">
            <div className="bg-tertiary text-muted-foreground flex items-center justify-between px-3 py-2 text-sm">
              <div>{t("permissionSummary.user")}</div>
              <div>{t("permissionSummary.accessLevel")}</div>
            </div>

            <div className="bg-border-secondary flex flex-col gap-y-px">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="bg-background text-foreground flex items-center justify-between px-3 py-3 text-sm"
                >
                  <span>{user.name}</span>

                  <span className="text-primary bg-secondary border-primary rounded-md border px-2 py-1 text-xs">
                    {t(`accessLevels.${user.accessLevel}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
