"use client";

import { useTranslations } from "next-intl";
import HeaderLayout from "../layout/HeaderLayout";
import { useEffect, useState } from "react";

interface DashboardHeaderProps {}
interface CurrentUser {
  id: number;
  email: string;
  user_name: string;
  request: boolean;
  resume: boolean;
  chat: boolean;
  blog: boolean;
}

const DashboardHeader = ({}: DashboardHeaderProps) => {
  const t = useTranslations("Dashboard");

  const [user, setUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch("/api/me");

        if (!response.ok) return;

        const data = await response.json();

        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <div>
      <HeaderLayout
        title={`${t("greeting")}   ${user?.user_name ?? "..."}`}
        descrption={t("subtitle")}
        className="border-b-0 ps-13"
      />
    </div>
  );
};

export default DashboardHeader;
