"use client";

import HWWStep from "./HWWStep";

interface HowWeWorkProps {}

const HowWeWork = ({}: HowWeWorkProps) => {
  return (
    <div className="mt-20 border-y-1 border-y-[#131313] px-40 pt-15 pb-25">
      <div className="w90 flex flex-col">
        {/* title */}
        <div className="text-custom-primary mb-10 text-xl">How We Work</div>
        {/* description */}
        <div className="mb-16 text-[45px]">Our Process</div>
        {/* steps */}
        <div className="relative flex items-center justify-between gap-x-10">
          {/* line */}
          <div className="bg-custom-primary absolute top-6 left-1/2 h-px w-[78%] -translate-x-1/2" />
          {/* steps */}
          <HWWStep
            title="Discovery"
            description="We listen to your idea and understand your goals"
          />
          <HWWStep
            title="Design"
            description="Wireframes, prototypes and UI design"
          />
          <HWWStep
            title="Development"
            description="Clean code, agile sprints, regular updates"
          />
          <HWWStep
            title="Launch"
            description="Deploy, test and support after delivery"
          />
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
