"use client";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  return (
    <div className="flex flex-col items-center  pt-20 pb-20 border-y-1 border-y-[#131313] mb-12">
      {/* title */}
      <div className="text-[85px] text-center mb-12">
        <div>
          <span>We Build </span>
          <span className="text-custom-primary">Software</span>
        </div>
        <div>That Works</div>
      </div>
      {/* description */}
      <div className="text-2xl/[40px] mx-auto w-5/10 text-center">
        From idea to deployment — we design and develop software solutions
        tailored to your business needs.
      </div>
    </div>
  );
};

export default HeroSection;
