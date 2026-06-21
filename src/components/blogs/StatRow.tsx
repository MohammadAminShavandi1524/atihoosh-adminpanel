"use client";

interface StatRowProps {
  number: string;
  label: string;
}

const StatRow = ({number,label}: StatRowProps) => {
  return (
    <div className="bg-background flex flex-col gap-y-2 items-center w-90">
      <span dir="ltr" className="text-[36px] text-primary">{number}</span>
      <span className="text-lg text-muted-foreground">{label}</span>
    </div>
  );
};

export default StatRow;
