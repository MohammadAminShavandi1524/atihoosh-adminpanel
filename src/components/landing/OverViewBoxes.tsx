"use client";

import { useTranslations } from "next-intl";
import { MessagesSquare } from "lucide-react";
import OverViewBox from "./OverViewBox";

interface OverViewBoxesProps {}

const OverViewBoxes = ({}: OverViewBoxesProps) => {
  const t = useTranslations("Dashboard.overviewBoxes");

  return (
    <div className="mb-8 grid grid-cols-4 gap-x-4 gap-y-4 ">
      <OverViewBox
        title={t("clientRequests.title")}
        label={t("clientRequests.label")}
        Icon={MessagesSquare}
        qty="3"
      />

      <OverViewBox
        title={t("jobApplications.title")}
        label={t("jobApplications.label")}
        Icon={MessagesSquare}
        qty="2"
      />

      <OverViewBox
        title={t("teamChat.title")}
        label={t("teamChat.label")}
        Icon={MessagesSquare}
        qty="4"
      />

      <OverViewBox
        title={t("publishedArticles.title")}
        label={t("publishedArticles.label")}
        Icon={MessagesSquare}
        qty="1"
      />
    </div>
  );
};

export default OverViewBoxes;
