"use client";

interface WWOCardProps {
  indexNumber: string;
  title: string;
  description: string;
  tags: string[];
}

const WWOCard = ({ description, indexNumber, tags, title }: WWOCardProps) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl">
      <div className="h-60 w-full bg-[#0B313B]"></div>
      {/* content */}
      <div className="flex min-h-[210px] flex-col gap-y-3 bg-[#101010] px-6 py-6">
        {/* index */}
        <div className="text-custom-primary text-sm">{indexNumber}</div>
        {/* title */}
        <div className="text-lg">{title}</div>
        {/* description */}
        <div className="text-base text-[#ffffff73]">{description}</div>
        {/* tags */}
        <div className="flex items-center gap-x-3">
          {tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="border-custom-primary text-custom-primary rounded-lg border bg-[#0B313B] px-2.5 py-1.25 text-base"
              >
                {tag}
              </div>
            );
          })}
        </div>
        {/* Learn more  */}
        <div className="text-custom-primary cursor-pointer text-base">
          Learn more
        </div>
      </div>
    </div>
  );
};

export default WWOCard;
