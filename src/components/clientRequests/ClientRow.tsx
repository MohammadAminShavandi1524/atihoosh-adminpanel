"use client";

import { motion } from "framer-motion";
import { Trash } from "lucide-react";
import { formatDate } from "../blogs/CategoryRow";
import { CustomHoldButton } from "../ui/custom-button";

interface ClientRowProps {
  id: number;
  fullName: string;
  phoneNumber: string;
  services: string[];
  description: string;
  // date: string;
  onDelete: () => void;
}

const ClientRow = ({
  id,
  fullName,
  phoneNumber,
  services,
  // date,
  description,
  onDelete,
}: ClientRowProps) => {
  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.98 }}
      transition={{
        layout: {
          type: "spring",
          stiffness: 380,
          damping: 32,
        },
        opacity: {
          duration: 0.2,
        },
        y: {
          duration: 0.2,
        },
        scale: {
          duration: 0.2,
        },
      }}
      className="mb-3 last:mb-0"
    >
      <div className="group border-border-secondary bg-secondary-bg hover:border-primary/20 group hover:bg-secondary/30 relative grid min-h-16 grid-cols-[90px_1.5fr_1.5fr_2fr_1.75fr_140px_120px] items-center rounded-xl border px-5 py-3 shadow-sm transition-all duration-200 hover:shadow-md">
        {/* ID */}
        <div className="text-muted-foreground font-mono text-sm">#{id}</div>

        {/* Full Name */}
        <div className="">
          <p className="text-foreground font-medium">{fullName}</p>
        </div>

        {/* Phone */}
        <div className="text-muted-foreground text-sm">{phoneNumber}</div>

        {/* Services */}
        <div className="flex flex-wrap gap-1.5">
          {services.map((service) => (
            <span
              key={service}
              className="bg-primary/10 text-primary hover:bg-primary/15 rounded-md px-2 py-1 text-xs font-medium transition-colors"
            >
              {service}
            </span>
          ))}
        </div>

        {/* description */}
        <div className="text-muted-foreground pe-4 text-justify text-sm">
          {description}
        </div>

        {/* Date */}
        {/* <div className="text-muted-foreground text-center text-sm">
          {formatDate(date)}
        </div> */}

        {/* Actions */}
        <div className="flex justify-center">
          <CustomHoldButton
            intent="destructive"
            variant="soft"
            duration={800}
            onComplete={onDelete}
            leftSection={<Trash className="size-4" />}
            className="group border-destructive/30 text-destructive hover:border-destructive/50 hover:bg-destructive/10"
          >
            Delete
          </CustomHoldButton>
        </div>

        {/* Left Indicator */}
        <div className="bg-primary absolute top-2 bottom-2 w-1 rounded-r-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 ltr:left-0 rtl:right-0" />
      </div>
    </motion.div>
  );
};

export default ClientRow;
