"use client";

import { useLocale } from "next-intl";

interface TimeLineProps {
  year: number;
  title: string;
  description: string;
}

const TimeLine = ({ description, title, year }: TimeLineProps) => {
  const locale = useLocale();

  return (
    <div className="relative flex flex-col ps-10">
      {/* dot */}
      <div className="bg-custom-primary absolute top-[-8px] left-[-6px] size-3 rounded-full" />

      {/* year */}
      <div className="text-custom-primary text-lg">{year}</div>

      {/* title */}
      <div
        style={locale === "en" ? { fontFamily: "var(--font-playfair)" } : {}}
        className="text-xl"
      >
        {title}
      </div>

      {/* description */}
      <div className="font-extralight text-[#474747]">{description}</div>
    </div>
  );
};

export default TimeLine;
