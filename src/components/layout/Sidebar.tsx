"use client";

import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  MessageCircle,
  ClipboardList,
  BriefcaseBusiness,
  MessagesSquare,
  Newspaper,
  ShieldCheck,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import Logo from "../Logo";
import SideBarItemHeader from "./SideBarItemHeader";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const locale = useLocale();
  const pathname = usePathname();

  console.log(pathname);

  return (
    <aside className="border-e-border-secondary flex h-screen w-75 flex-col border-e">
      {/* اheader */}
      <div className="mb-6 px-6">
        <div className="border-b-border-secondary flex w-full items-center gap-x-3 border-b ps-1 pt-8 pb-8">
          <div>
            <Logo />
          </div>
          <div className="flex flex-col pt-0.5">
            <div className="text-lg">Ati Hoosh</div>
            <div className="text-muted-foreground">Admin Panel</div>
          </div>
        </div>
      </div>
      {/* body */}
      <nav className="flex flex-1 flex-col gap-y-5 px-6">
        {/* Overview */}
        <div className="">
          <SideBarItemHeader label="Overview" />
          <SidebarItem
            href={`/${locale}`}
            title="Dashboard"
            icon={LayoutDashboard}
            active={pathname === `/${locale}`}
          />
        </div>

        {/* Requests */}
        <div>
          <SideBarItemHeader label="Requests" />

          <SidebarItem
            href={`/${locale}/client-requests`}
            title="Client Requests"
            icon={ClipboardList}
            active={pathname === `/${locale}/client-requests`}
          />

          <SidebarItem
            href={`/${locale}/job-applications`}
            title="Job Applications"
            icon={BriefcaseBusiness}
            active={pathname === `/${locale}/job-applications`}
          />
        </div>

        {/* Team Collaboration */}
        <div>
          <SideBarItemHeader label="Team Collaboration" />

          <SidebarItem
            href={`/${locale}/team-chat`}
            title="Team Chat"
            icon={MessagesSquare}
            active={pathname === `/${locale}/team-chat`}
          />

          <SidebarItem
            href={`/${locale}/blog`}
            title="Blog"
            icon={Newspaper}
            // active={pathname === `/${locale}/blog`}
            active={pathname.startsWith(`/${locale}/blog`)}
          />
        </div>

        {/* System */}
        <div>
          <SideBarItemHeader label="System" />

          <SidebarItem
            href={`/${locale}/settings`}
            title="Settings & Permissions"
            icon={ShieldCheck}
            active={pathname === `/${locale}/settings`}
          />
        </div>
      </nav>
      {/* footer */}
      <div className="border-border-secondary border-t pt-6">
        <div className="text-muted-foreground text-sm">Admin User</div>

        <div className="font-medium">mmd</div>
      </div>
    </aside>
  );
};

export default Sidebar;
