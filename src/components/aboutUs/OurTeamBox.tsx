"use client";

import { FileImage, Instagram, Linkedin } from "lucide-react";
import Image from "lucide-react";

interface OurTeamBoxProps {
  imageSrc?: string;
  imageAlt?: string;
  EmployeeName: string;
  EmployeeStatus: string;
  instaLink?: string;
  linkdinLink?: string;
}

const OurTeamBox = ({
  EmployeeName,
  EmployeeStatus,
  imageAlt,
  imageSrc,
  instaLink,
  linkdinLink,
}: OurTeamBoxProps) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg">
      {/* image */}
      {/* <div>
        <Image src={""} alt="" fill />
      </div> */}

      {/* image placeholder */}
      <div className="flex h-50 w-full items-center justify-center bg-[#1a7d9366]">
        <FileImage className="size-6 text-[#757575]" />
      </div>

      {/*  */}
      <div className="flex flex-col bg-[#101010] px-5.5 py-5">
        {/* EmployeeName */}
        <div className="text-[22px]">{EmployeeName}</div>
        {/* EmployeeStatus */}
        <div className="text-custom-primary mb-3 text-lg">{EmployeeStatus}</div>
        {/* socials */}
        <div className="flex items-center gap-x-3">
          <Instagram className="size-4 text-[#757575]" />

          <Linkedin className="size-4 text-[#757575]" />
        </div>
      </div>
    </div>
  );
};

export default OurTeamBox;
