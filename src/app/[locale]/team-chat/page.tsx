"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import HeaderLayout from "@/components/layout/HeaderLayout";
import TeamChat from "@/components/teamChat/TeamChat";
import { ChatMessageType } from "@/components/teamChat/types";
import { ThemeButton } from "@/components/theme/ThemeButton";
import { useLocale, useTranslations } from "next-intl";

interface pageProps {}

const page = ({}: pageProps) => {
  const locale = useLocale();
  const t = useTranslations("TeamChat");

  const messages: ChatMessageType[] = [
    {
      id: "1",
      message:
        "Hi team, we received a request from Parsian Trading Co. that needs a quality review. The client is asking for a high-level service package — please take a look when you can.",
      time: "10:35 AM",
      isCurrentUser: false,
      user: {
        id: "1",
        name: "Maryam Rezaei",
        role: t("roles.salesAdmin"),
        initials: "MR",
        avatarTextColor: "#3fb850",
      },
    },
    {
      id: "2",
      message:
        "Hey Maryam, the project has been reviewed. Initial approval is done — please pass it to the engineering team for the technical details check.",
      time: "10:28 AM",
      isCurrentUser: true,
      user: {
        id: "2",
        name: "Sohrab Ahmadi",
        role: t("roles.superAdmin"),
        initials: "SA",
        avatarTextColor: "#56a3fc",
      },
    },
    {
      id: "3",
      message:
        "Fatemeh Mousavi has sent a very strong resume. I've scheduled an interview for tomorrow at 11 AM. Would be great if you could join, Sohrab.",
      time: "10:22 AM",
      isCurrentUser: false,
      user: {
        id: "3",
        name: "Ali Taqavi",
        role: t("roles.hrAdmin"),
        initials: "AT",
        avatarTextColor: "#f75049",
      },
    },
    {
      id: "4",
      message:
        "Great work, Ali! I'll do my best to join the interview session tomorrow. Block my calendar for that slot.",
      time: "10:21 AM",
      isCurrentUser: true,
      user: {
        id: "2",
        name: "Sohrab Ahmadi",
        role: t("roles.superAdmin"),
        initials: "SA",
        avatarTextColor: "#56a3fc",
      },
    },
    {
      id: "5",
      message:
        "Also, John Carter's client request is still marked as New — should I follow up or wait for engineering?",
      time: "10:18 AM",
      isCurrentUser: false,
      user: {
        id: "1",
        name: "Maryam Rezaei",
        role: t("roles.salesAdmin"),
        initials: "MR",
        avatarTextColor: "#3fb850",
      },
    },
  ];

  return (
    <div className="flex">
      {/* body */}
      <div className="flex flex-1 flex-col">
        {/* header */}

        <HeaderLayout title={t("title")} descrption={t("description")} />

        {/* body */}
        <div className="flex flex-1">
          <TeamChat messages={messages} />
        </div>
      </div>

      {/* right side */}
      <div className="border-s-border-secondary h-screen w-75 border-s">
        <div className="border-b-border-secondary border-b px-4 py-4">
          <div className="text-center text-2xl">{t("adminsTitle")}</div>
        </div>

        <div className="flex flex-col px-4 pt-6">
          <div className="bg-tertiary border-border-secondary text-primary flex w-full items-center gap-x-3 rounded-md border px-4 py-3 text-center text-sm">
            <span className="bg-secondary flex size-6 items-center justify-center rounded-full text-base">
              4
            </span>

            <span>{t("newMessages")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
