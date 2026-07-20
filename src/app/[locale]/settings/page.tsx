"use client";

import HeaderLayout from "@/components/layout/HeaderLayout";
import AdminTable from "@/components/settings/AdminTable";
import { useTranslations } from "next-intl";

export const users = [
  {
    id: "1",
    name: "Sohrab A.",
    avatar: "SA",
    role: "Super Admin",
    accessLevel: "fullAccess",
  },
  {
    id: "2",
    name: "Maryam R.",
    avatar: "MR",
    role: "Sales Admin",
    accessLevel: "salesChat",
  },
  {
    id: "3",
    name: "Ali T.",
    avatar: "AT",
    role: "HR Admin",
    accessLevel: "hrChat",
  },
  {
    id: "4",
    name: "Sara K.",
    avatar: "SK",
    role: "Blog Admin",
    accessLevel: "blogChat",
  },
];

interface PageProps {}

const Page = ({}: PageProps) => {
  const t = useTranslations("Settings");

  return (
    <div className="flex">
      {/* body */}
      <div className="flex h-screen flex-1 flex-col">
        {/* header */}
        <HeaderLayout title={t("title")} descrption={t("description")} />

        {/* content */}
        <div className="flex flex-1 flex-col px-10 pb-16">
          {/* tabs */}
          <div className="mt-10 mb-6 pb-3 text-sm">
            <span className="text-primary border-b-primary cursor-pointer border-b-2 px-6 py-2.5 text-lg">
              {t("tabs.users")}
            </span>
          </div>

          {/* admin table */}
          <AdminTable />
        </div>
      </div>
    </div>
  );
};

export default Page;
