"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

type ServiceColor = "black" | "white";

type Service = {
  key: string;
  title: string;
  subTitle: string;
  src: string;
  color: ServiceColor;
};

const Services = () => {
  const t = useTranslations("HomePage.ServicesSection");
  const locale = useLocale();
  const _services = [
    {
      key: "aiAgent",
      title: t("aiAgent.title"),
      subTitle: t("aiAgent.subTitle"),
      src: "/1.png",
      color: "black",
    },
    {
      key: "websiteDesign",
      title: t("websiteDesign.title"),
      subTitle: t("websiteDesign.subTitle"),
      src: "/2.png",
      color: "white",
    },
    {
      key: "applicationDesign",
      title: t("applicationDesign.title"),
      subTitle: t("applicationDesign.subTitle"),
      src: "/3.png",
      color: "black",
    },
    {
      key: "logoMotion",
      title: t("logoMotion.title"),
      subTitle: t("logoMotion.subTitle"),
      src: "/4.png",
      color: "white",
    },
  ];

  return (
    <div className="w90 flex justify-between gap-x-16 px-0 pt-20">
      {_services.map((service) => (
        <motion.div
          key={service.key}
          whileHover="hover"
          initial="initial"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.025 },
          }}
          transition={{
            duration: 0.55,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="relative h-140 w-full cursor-pointer overflow-hidden rounded-lg"
        >
          {/* Image */}
          <motion.div
            variants={{
              initial: { opacity: 1, scale: 1 },
              hover: { opacity: 0.2, scale: 1.08 },
            }}
            transition={{
              duration: 0.55,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              fill
              src={service.src}
              alt={service.title}
              className="object-cover"
            />
          </motion.div>

          {/* Background */}
          <motion.div
            variants={{
              initial: { opacity: 0, scale: 0.7 },
              hover: { opacity: 1, scale: 1.15 },
            }}
            transition={{
              duration: 0.6,
              ease: [0.19, 1, 0.22, 1],
            }}
            className={cn(
              "absolute -right-60 -bottom-60 h-282 w-282 rounded-full",
              service.color === "white"
                ? "bg-linear-to-tl from-[#31343e] via-[#1b212d] to-[#0f121b]"
                : "bg-[#d8e1e6]",
            )}
          />

          <div className="relative z-10 flex h-full flex-col p-7">
            {/* Title */}
            <motion.h3
              className={cn(
                "mb-8 min-h-16 text-2xl font-bold",
                service.color === "black" ? "text-black" : "text-white",
              )}
            >
              {service.title}
            </motion.h3>

            {/* sub title */}
            <motion.p
              variants={{
                initial: {
                  opacity: 0,
                  x: 45,
                  transition: { duration: 0.2 },
                },
                hover: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.55,
                    delay: 0.08,
                    ease: [0.19, 1, 0.22, 1],
                  },
                },
              }}
              className={cn(
                "mt-5 max-w-md text-lg ",
                service.color === "black" ? "text-black" : "text-white",
                locale
              )}
            >
              {service.subTitle}
            </motion.p>

            {/* Expand Button */}
            <motion.button
              variants={{
                initial: { opacity: 0, y: 20 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.55,
                ease: [0.19, 1, 0.22, 1],
              }}
              className={cn(
                "mt-auto flex cursor-pointer items-center",
                service.color === "black" ? "text-black" : "text-white",
                locale === "en"
                  ? "gap-x-1.5 self-end text-[22px]"
                  : "gap-x-4 self-end text-lg",
              )}
            >
              <span
                className={cn(
                  "pb-0.5 font-medium",
                  locale === "en"
                    ? "enServicesExpandButton"
                    : "faServicesExpandButton",
                )}
              >
                {t("expandButton")}
              </span>

              <motion.div
                variants={{
                  initial: { x: 0 },
                  hover: { x: 8 },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                <ChevronRight
                  className={cn(locale === "fa" && "rotate-180")}
                  size={24}
                />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
