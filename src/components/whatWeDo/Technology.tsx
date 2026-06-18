"use client";

import Image from "next/image";

interface TechnologyProps {}

const tags = [
  {
    imageSrc: "/logos/react.png",
    label: "React",
  },
  {
    imageSrc: "/logos/nodejs.png",
    label: "Node.js",
  },
  {
    imageSrc: "/logos/python.png",
    label: "Python",
  },
  {
    imageSrc: "/logos/postgresql.png",
    label: "PostgreSQL",
  },
  {
    imageSrc: "/logos/docker.png",
    label: "Docker",
  },
  {
    imageSrc: "/logos/aws.png",
    label: "AWS",
  },
  {
    imageSrc: "/logos/figma.png",
    label: "Figma",
  },
  {
    imageSrc: "/logos/openai.png",
    label: "OpenAI API",
  },
  {
    imageSrc: "/logos/Jira.png",
    label: "Jira",
  },
];

const Technology = ({}: TechnologyProps) => {
  return (
    <div className="w90 mt-20 flex flex-col px-40 mb-30">
      {/* title */}
      <div className="text-custom-primary mb-10 text-xl">Technology</div>
      {/* description */}
      <div className="mb-12 text-[45px]">Tools We Use</div>
      {/* tags */}
      <div className="flex items-center gap-x-3">
        {tags.map((tag, index) => {
          return (
            <div
              className="flex items-center gap-x-3 border-1 border-[#ffffff14] bg-[#101010] px-4 py-2 rounded-lg"
              key={index}
            >
              <Image
                alt={tag.label}
                src={tag.imageSrc}
                width={20}
                height={20}
              />
              <div>{tag.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;
