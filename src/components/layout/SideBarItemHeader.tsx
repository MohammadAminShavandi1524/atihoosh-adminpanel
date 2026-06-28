"use client";

interface SideBarItemHeaderProps {
  label: string;
}

const SideBarItemHeader = ({ label }: SideBarItemHeaderProps) => {
  return (
    <div className="text-muted-foreground ps-4.5 pb-2 text-base">{label}</div>
  );
};

export default SideBarItemHeader;
