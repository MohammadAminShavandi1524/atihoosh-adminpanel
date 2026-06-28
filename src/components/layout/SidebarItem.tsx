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
        "mb-1 flex h-12 items-center gap-3 rounded-xl px-4 transition-all",
        active
          ? "from-primary via-primary to-primary-hover shadow-primary/20 bg-gradient-to-r text-white shadow-lg"
          : "text-muted-foreground hover:bg-muted-foreground hover:text-foreground",
      )}
    >
      <Icon size={20} />

      <span className="font-medium">{title}</span>
    </Link>
  );
};

export default SidebarItem;
