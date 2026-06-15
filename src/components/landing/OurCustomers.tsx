"use client";

import Image from "next/image";
import Companies from "./Companies";

interface OurCustomersProps {}

const OurCustomers = ({}: OurCustomersProps) => {
  return (
    <div className="mt-20 border-t border-t-[#32323261] pt-10">
      <div className="w90 flex flex-col items-center 2xl:px-30">
        <div className="text-custom-primary mb-6 text-center text-[22px]">
          Our customers
        </div>
        <div className="mb-8 text-center text-[48px]">
          Brands that trusted us
        </div>
        <div className="mb-12 text-center text-lg text-[#757575]">
          We're proud to have been with these companies
        </div>
        {/* brands */}
        <div className="mb-22 flex items-center gap-x-20">
          <Image
            className="rounded-full"
            src={"/atiabzar.png"}
            alt="ati-abzar"
            width={100}
            height={100}
          />
          <Image
            className="rounded-full"
            src={"/atiabzar.png"}
            alt="ati-abzar"
            width={100}
            height={100}
          />
          <Image
            className="rounded-full"
            src={"/atiabzar.png"}
            alt="ati-abzar"
            width={100}
            height={100}
          />
        </div>
        {/* companies */}
        <div className="grid grid-cols-3 gap-px bg-[#757575]">
          <Companies />
          <Companies />
          <Companies />
          <Companies />
          <Companies />
          <Companies />
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;
