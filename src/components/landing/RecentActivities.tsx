"use client";

import { useTranslations } from "next-intl";
import ActivityItem from "./ActivityItem";

interface RecentActivitiesProps {}

type RequestItem = {
  profileImage?: string;
  userName: string;
  RequestType: string;
  status: string;
  date: string;
  time: string;
};

const requests: RequestItem[] = [
  {
    userName: "John Carter",
    RequestType: "client",
    status: "new",
    date: "Jun 21",
    time: "01:38 PM",
  },
  {
    userName: "Sara Adams",
    RequestType: "job",
    status: "new",
    date: "Jun 21",
    time: "12:18 PM",
  },
  {
    userName: "Parsian Trading Co.",
    RequestType: "client",
    status: "inProgress",
    date: "Jun 21",
    time: "09:18 AM",
  },
  {
    userName: "Nora Hill",
    RequestType: "client",
    status: "done",
    date: "Jun 20",
    time: "02:18 PM",
  },
  {
    userName: "Michael Reyes",
    RequestType: "job",
    status: "inProgress",
    date: "Jun 20",
    time: "08:18 AM",
  },
];

const RecentActivities = ({}: RecentActivitiesProps) => {
  const t = useTranslations("Dashboard.recentActivities");

  return (
    <div className=" bg-secondary-bg border-border-secondary flex min-h-125 w-full flex-col rounded-xl border">
      <div className="border-b-border-secondary flex items-center justify-between border-b p-5">
        <div>
          <div className="text-lg">{t("title")}</div>

          <div className="text-muted-foreground text-base">
            {t("description")}
          </div>
        </div>

        {/* <button className="border-primary bg-secondary text-primary cursor-pointer rounded-md border px-4 py-1.5 text-sm">
          {t("refresh")}
        </button> */}

      </div>

      <div className="flex flex-col gap-y-2.5 px-5 pt-2.5 pb-4">
        {requests.map(
          ({ date, RequestType, status, time, userName }, index) => (
            <ActivityItem
              key={index}
              userName={userName}
              RequestType={t(`requestTypes.${RequestType}`)}
              status={t(`status.${status}`)}
              Date={date}
              time={time}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default RecentActivities;
