"use client";

import ApplyForm from "@/components/talent/ApplyForm";
import HeroSection from "@/components/talent/HeroSection";


interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <div className="headerPadding">
      <HeroSection />

      <ApplyForm />
    </div>
  );
};

export default page;
