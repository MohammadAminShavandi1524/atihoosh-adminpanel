import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  href: string;
  icon: LucideIcon;
  title: string;
  active?: boolean;
}

const SidebarItem = ({ href, icon: Icon, title, active }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-12 items-center gap-3 rounded-xl px-4 transition-all",
        active
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-foreground",
      )}
    >
      <Icon size={20} />

      <span className="font-medium">{title}</span>
    </Link>
  );
};

export default SidebarItem;
