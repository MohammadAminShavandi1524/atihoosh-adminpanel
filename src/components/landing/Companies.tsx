"use client";

import { Building2 } from "lucide-react";

interface CompaniesProps {}

const Companies = ({}: CompaniesProps) => {
  return (
    <div className="flex items-center px-22 py-12 gap-x-8 text-[#757575] bg-black">
      <span className="text-xl">company 1</span>
      <Building2 className="size-6"/>
    </div>
  );
};

export default Companies;
