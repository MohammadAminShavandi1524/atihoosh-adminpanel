"use client";

interface HWWStepProps {
  title: string;
  description: string;
}

const HWWStep = ({ title, description }: HWWStepProps) => {
  return (
    <div className="z-10 flex flex-col items-center gap-y-4">
      {/* circle */}
      <div className="border-custom-primary size-12 rounded-full border bg-[#0B0F14]" />
      {/* title */}
      <div className="text-[17px] text-white">{title}</div>
      {/* description */}
      <div className="text-center text-[15px] text-[#ffffff73]">
        {description}
      </div>
    </div>
  );
};

export default HWWStep;
