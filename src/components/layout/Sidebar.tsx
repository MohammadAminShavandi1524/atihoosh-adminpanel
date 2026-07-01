"use client";

import {
  LayoutDashboard,
  ClipboardList,
  BriefcaseBusiness,
  MessagesSquare,
  Newspaper,
  ShieldCheck,
  FilePenLine,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import Logo from "../Logo";
import SideBarItemHeader from "./SideBarItemHeader";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const t = useTranslations("Sidebar");
  const locale = useLocale();
  const pathname = usePathname();

  const userName = "Sohrab Ahmadi";

  const profileWords = userName
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <aside className="border-e-border-secondary flex h-screen w-75 flex-col border-e">
      {/* header */}
      <div className="mb-6 px-6">
        <div className="border-b-border-secondary flex w-full items-center gap-x-3 border-b ps-1 pt-6 pb-6">
          <div>
            <Logo />
          </div>

          <div className="flex flex-col pt-0.5">
            <div className="text-lg">{t("logoTitle")}</div>
            <div className="text-muted-foreground">{t("logoSubtitle")}</div>
          </div>
        </div>
      </div>

      {/* body */}
      <nav className="flex flex-1 flex-col gap-y-4 px-6">
        {/* Overview */}
        <div>
          <SideBarItemHeader label={t("overview")} />

          <SidebarItem
            href={`/${locale}`}
            title={t("dashboard")}
            icon={LayoutDashboard}
            active={pathname === `/${locale}`}
          />
        </div>

        {/* Requests */}
        <div>
          <SideBarItemHeader label={t("requests")} />

          <SidebarItem
            href={`/${locale}/client-requests`}
            title={t("clientRequests")}
            icon={ClipboardList}
            active={pathname === `/${locale}/client-requests`}
          />

          <SidebarItem
            href={`/${locale}/job-applications`}
            title={t("jobApplications")}
            icon={BriefcaseBusiness}
            active={pathname === `/${locale}/job-applications`}
          />
        </div>

        {/* Team Collaboration */}
        <div>
          <SideBarItemHeader label={t("teamCollaboration")} />

          <SidebarItem
            href={`/${locale}/team-chat`}
            title={t("teamChat")}
            icon={MessagesSquare}
            active={pathname === `/${locale}/team-chat`}
          />

          <SidebarItem
            href={`/${locale}/blogs`}
            title={t("blogs")}
            icon={Newspaper}
            active={pathname.startsWith(`/${locale}/blogs`)}
          />

          <SidebarItem
            href={`/${locale}/add-blog`}
            title={t("addBlog")}
            icon={FilePenLine}
            active={pathname.startsWith(`/${locale}/add-blog`)}
          />
        </div>

        {/* System */}
        <div>
          <SideBarItemHeader label={t("system")} />

          <SidebarItem
            href={`/${locale}/settings`}
            title={t("settings")}
            icon={ShieldCheck}
            active={pathname === `/${locale}/settings`}
          />
        </div>
      </nav>

      {/* footer */}
      <div dir="ltr" className="px-6">
        <div className="border-t-border-secondary border-t">
          <div className="bg-tertiary mt-5 mb-5 flex w-full items-center gap-x-2.5 rounded-lg px-4 py-2.5">
            <div className="bg-secondary text-primary border-primary flex size-10 items-center justify-center rounded-full border pt-0.5 text-base">
              {profileWords}
            </div>

            <div>
              <div className="text-sm">{userName}</div>
              <div className="text-muted-foreground text-[13px]">
                super.admin@atihoosh.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
