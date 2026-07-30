"use client";

import { useEffect, useState } from "react";

import {
  FileUser,
  MessagesSquare,
  MessageCircleMore,
  Newspaper,
} from "lucide-react";
import { useTranslations } from "next-intl";

import OverViewBox from "./OverViewBox";
import { ApiRequest } from "@/lib/normalize-services";

interface Resume {
  id: number;
}

interface ParentBlog {
  id: number;
  published: boolean;
}

const OverViewBoxes = () => {
  const t = useTranslations("Dashboard.overviewBoxes");

  const [requestCount, setRequestCount] = useState(0);
  const [resumeCount, setResumeCount] = useState(0);
  const [publishedBlogsCount, setPublishedBlogsCount] = useState(0);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const [requestsRes, resumesRes, blogsRes] = await Promise.all([
          fetch("/api/requests", {
            cache: "no-store",
          }),
          fetch("/api/resumes", {
            cache: "no-store",
          }),
          fetch("/api/blog/parent", {
            cache: "no-store",
          }),
        ]);

        if (!requestsRes.ok || !resumesRes.ok || !blogsRes.ok) {
          throw new Error("Failed to fetch overview data");
        }

        const requests: ApiRequest[] = await requestsRes.json();
        const resumes: Resume[] = await resumesRes.json();
        const blogs: ParentBlog[] = await blogsRes.json();

        setRequestCount(requests.length);

        setResumeCount(resumes.length);

        setPublishedBlogsCount(blogs.filter((blog) => blog.published).length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOverview();
  }, []);

  return (
    <div className="mb-8 grid grid-cols-4 gap-5">
      <OverViewBox
        title={t("clientRequests.title")}
        Icon={MessagesSquare}
        qty={String(requestCount)}
      />

      <OverViewBox
        title={t("jobApplications.title")}
        Icon={FileUser}
        qty={String(resumeCount)}
      />

      <OverViewBox
        title={t("teamChat.title")}
        Icon={MessageCircleMore}
        qty="0"
      />

      <OverViewBox
        title={t("publishedArticles.title")}
        Icon={Newspaper}
        qty={String(publishedBlogsCount)}
      />
    </div>
  );
};

export default OverViewBoxes;
