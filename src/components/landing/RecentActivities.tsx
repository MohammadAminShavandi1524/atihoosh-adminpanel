"use client";

import ActivityItem from "./ActivityItem";

interface RecentActivitiesProps {}
type RequestItem = {
  profileImage?: string;
  userName: string;
  RequestType: "Client request" | "Job request";
  status: "New" | "In progress" | "Done";
  Date: string;
  time: string;
};
const requests: RequestItem[] = [
  {
    userName: "John Carter",
    RequestType: "Client request",
    status: "New",
    Date: "Jun 21",
    time: "01:38 PM",
  },
  {
    userName: "Sara Adams",
    RequestType: "Job request",
    status: "New",
    Date: "Jun 21",
    time: "12:18 PM",
  },
  {
    userName: "Parsian Trading Co.",
    RequestType: "Client request",
    status: "In progress",
    Date: "Jun 21",
    time: "09:18 AM",
  },
  {
    userName: "Nora Hill",
    RequestType: "Client request",
    status: "Done",
    Date: "Jun 20",
    time: "02:18 PM",
  },
  {
    userName: "Michael Reyes",
    RequestType: "Job request",
    status: "In progress",
    Date: "Jun 20",
    time: "08:18 AM",
  },
];

const RecentActivities = ({}: RecentActivitiesProps) => {
  return (
    <div className="bg-secondary-bg border-border-secondary flex min-h-125 w-full flex-col rounded-xl border">
      <div className="border-b-border-secondary flex items-center justify-between border-b p-5">
        <div>
          <div className="text-lg">Recent Activity</div>
          <div className="text-muted-foreground text-base">
            Latest requests and updates
          </div>
        </div>
        <button className="border-primary bg-secondary text-primary cursor-pointer rounded-md border px-4 py-1.5 text-sm">
          Refresh
        </button>
      </div>
      <div className="flex flex-col gap-y-2.5 px-5 pt-2.5 pb-4">
        {requests.map(
          (
            { Date, RequestType, status, time, userName, profileImage },
            index,
          ) => {
            return (
              <ActivityItem
                key={index}
                userName={userName}
                RequestType={RequestType}
                status={status}
                Date={Date}
                time={time}
              />
            );
          },
        )}
      </div>
    </div>
  );
};

export default RecentActivities;
