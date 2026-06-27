"use client";

import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  MessageCircle,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className="border-border bg-card flex h-screen w-72 flex-col border-r p-6">
      <div className="mb-10">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        <SidebarItem
          href="/admin"
          title="Dashboard"
          icon={LayoutDashboard}
          active
        />

        <SidebarItem href="#" title="Requests" icon={FileText} />

        <SidebarItem href="#" title="Users" icon={Users} />

        <SidebarItem href="#" title="Messages" icon={MessageCircle} />

        <SidebarItem href="#" title="Settings" icon={Settings} />
      </nav>

      <div className="border-border border-t pt-6">
        <div className="text-muted-foreground text-sm">Admin User</div>

        <div className="font-medium">Yasaman</div>
      </div>
    </aside>
  );
};

export default Sidebar;
