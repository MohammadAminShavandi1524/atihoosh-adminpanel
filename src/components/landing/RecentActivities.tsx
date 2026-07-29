"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import ActivityItem from "./ActivityItem";

interface ApiRequest {
  id: number;
  full_name: string;
  phone: string;
  created: string;
}

interface ApiResume {
  id: number;
  full_name: string;
  phone: string;
  created: string;
}

interface Activity {
  id: number;
  type: "request" | "resume";
  fullName: string;
  phone: string;
  created: string;
}

const RecentActivities = () => {
  const t = useTranslations("Dashboard.recentActivities");

  const [requests, setRequests] = useState<ApiRequest[]>([]);
  const [resumes, setResumes] = useState<ApiResume[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [requestRes, resumeRes] = await Promise.all([
          fetch("/api/requests", { cache: "no-store" }),
          fetch("/api/resumes", { cache: "no-store" }),
        ]);

        if (requestRes.ok) {
          setRequests(await requestRes.json());
        }

        if (resumeRes.ok) {
          setResumes(await resumeRes.json());
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const activities = useMemo<Activity[]>(() => {
    const requestItems: Activity[] = requests.map((item) => ({
      id: item.id,
      type: "request",
      fullName: item.full_name,
      phone: item.phone,
      created: item.created,
    }));

    const resumeItems: Activity[] = resumes.map((item) => ({
      id: item.id,
      type: "resume",
      fullName: item.full_name,
      phone: item.phone,
      created: item.created,
    }));

    return [...requestItems, ...resumeItems]
      .sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
      )
      .slice(0, 5);
  }, [requests, resumes]);

  return (
    <div className="bg-secondary-bg border-border-secondary flex min-h-125 w-full flex-col rounded-xl border">
      <div className="border-b-border-secondary border-b p-5">
        <div className="text-lg">{t("title")}</div>

        <div className="text-muted-foreground text-base">
          {t("description")}
        </div>
      </div>

      <div className="flex flex-col gap-y-2.5 px-5 pt-2.5 pb-4">
        {activities.map((item) => (
          <ActivityItem
            key={`${item.type}-${item.id}`}
            id={item.id}
            userName={item.fullName}
            phone={item.phone}
            created={item.created}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
