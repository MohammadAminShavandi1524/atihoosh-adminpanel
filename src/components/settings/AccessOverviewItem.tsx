"use client";

interface AccessOverviewItemProps {
  qty: string;
  label: string;
}

const AccessOverviewItem = ({ label, qty }: AccessOverviewItemProps) => {
  return (
    <div className="flex flex-col p-3 bg-tertiary border border-border-secondary gap-y-0.5 rounded-xl">
      <span className="text-2xl font-bold">{qty}</span>
      <span className="text-muted-foreground text-sm">{label}</span>
    </div>
  );
};

export default AccessOverviewItem;
