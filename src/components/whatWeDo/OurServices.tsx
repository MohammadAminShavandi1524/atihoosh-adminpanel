"use client";

import WWOCard from "./WWOCard";

interface OurServicesProps {}

const OurServices = ({}: OurServicesProps) => {
  return (
    <div className="w90 mt-20 flex flex-col px-40">
      {/* title */}
      <div className="text-custom-primary mb-10 text-xl">Our Services</div>
      {/* description */}
      <div className="mb-12 text-[45px]">What We Offer</div>
      {/* what we offer boxes */}
      <div className="grid grid-cols-2 gap-14 2xl:gap-20">
        <WWOCard
          indexNumber="01"
          title="Web Application Development"
          description="We build fast, scalable, and modern web applications from scratch — tailored to your business logic and goals."
          tags={["Frontend", "Backend", "Full Stack"]}
        />
        <WWOCard
          indexNumber="02"
          title="Mobile App Development"
          description="Native and cross-platform mobile apps that deliver smooth experiences on both iOS
          and Android."
          tags={["iOS", "Android", "Cross-platform"]}
        />
        <WWOCard
          indexNumber="03"
          title="AI Integration"
          description="We integrate intelligent AI features into your existing software — chatbots, 
          automation,data analysis and more."
          tags={["Machine Learning", "Automation", "Chatbot"]}
        />
        <WWOCard
          indexNumber="04"
          title="Software Consulting"
          description="Not sure where to start? We help you plan, architect, and choose the right tech
          stack for your project."
          tags={["Strategy", "Architecture", "Tech Stack"]}
        />
      </div>
    </div>
  );
};

export default OurServices;
