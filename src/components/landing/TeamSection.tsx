"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedArrowButton from "../AnimatedArrowButton";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function TeamSection() {
  const t = useTranslations("HomePage.TeamSection");
  const locale = useLocale();
  const isRtl = locale === "fa";

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.15, 0.55],
    ["100vw", "100vw", "48vw"],
  );

  const imageTop = useTransform(
    scrollYProgress,
    [0, 0.15, 0.55],
    ["0vh", "0vh", "15vh"],
  );

  // direction-aware animation
  const textX = useTransform(
    scrollYProgress,
    [0.58, 0.8],
    isRtl ? [-80, 0] : [80, 0],
  );

  const textOpacity = useTransform(scrollYProgress, [0.58, 0.8], [0, 1]);

  return (
    <section ref={sectionRef} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* IMAGE */}
        <motion.div
          style={{
            width: imageWidth,
            top: imageTop,
          }}
          className="absolute aspect-[3/2] overflow-hidden will-change-transform"
        >
          <Image
            src="/teamSample1.jpg"
            alt="Team"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          style={{
            opacity: textOpacity,
            x: textX,
          }}
          className={cn(
            "absolute top-[22vh] w-[26vw] text-white",
            isRtl ? "left-[6vw] text-right" : "right-[6vw] text-left",
          )}
        >
          <span className="mb-8 block text-lg font-medium tracking-[0.15em] text-white/70 uppercase">
            {t("badge")}
          </span>

          <h2 className="mb-10 text-5xl leading-tight font-bold">
            {t("title")}
          </h2>

          <p className="font-playfair mb-9 text-[28px] text-white/90">
            {t("description")}
          </p>

          <AnimatedArrowButton label={t("button")} labelClassName="text-xl" />
        </motion.div>
      </div>
    </section>
  );
}
