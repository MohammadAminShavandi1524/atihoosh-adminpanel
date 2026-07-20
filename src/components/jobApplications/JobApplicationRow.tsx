"use client";

import { cn, formatDate, formatPhoneNumber } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileText, Trash } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import DeleteModal from "../blogs/DeleteModal";
import { useState } from "react";

interface JobApplicationRowProps {
  id: number;
  full_name: string;
  phone: string;
  email: string;
  file: string;
  checked: boolean;
  created: string;
  onDelete: () => Promise<void>;
}

export default function JobApplicationRow({
  id,
  full_name,
  phone,
  email,
  file,
  created,
  onDelete,
}: JobApplicationRowProps) {
  const locale = useLocale();
  const t = useTranslations("jobApplications");
  const [openDelete, setOpenDelete] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
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
        <div className="group border-border-secondary bg-secondary-bg hover:border-primary/20 hover:bg-secondary relative grid min-h-16 grid-cols-[90px_1.5fr_1.4fr_2fr_2fr_1.5fr] items-center rounded-xl border px-5 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          {/* ID */}
          <div className="text-muted-foreground font-mono text-sm">#{id}</div>

          {/* Full Name */}
          <div className="pr-4">
            <p className="text-foreground truncate font-medium">{full_name}</p>
          </div>

          {/* Phone */}
          <div
            className={cn(
              "text-muted-foreground",
              locale === "en" ? "text-sm" : "text-base",
            )}
          >
            {formatPhoneNumber(phone, locale)}
          </div>

          {/* Email */}
          <div className="text-muted-foreground truncate text-sm">{email}</div>

          {/* Date */}
          <div className="text-muted-foreground text-sm">
            {formatDate(created, locale)}
          </div>

          {/* Resume */}
          <div className="flex justify-center pe-3">
            <a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className="group/pdf bg-tertiary border-border-secondary hover:border-primary hover:bg-primary/10 inline-flex h-10 items-center justify-center gap-2 rounded-xl border px-4 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              <FileText className="text-primary size-4 transition-transform duration-300 group-hover/pdf:scale-110 group-hover/pdf:rotate-6" />
              <span>{t("table.viewPdf")}</span>
            </a>
          </div>

          {/* Delete */}
          {/* <div className="flex justify-center">
            <button
              onClick={() => setOpenDelete(true)}
              className="group/delete flex cursor-pointer items-center gap-1 rounded-lg border border-red-400 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-500 transition-all duration-200 hover:bg-red-500/20 active:scale-95"
            >
              <Trash className="size-4 transition-transform duration-200 group-hover/delete:scale-110 group-hover/delete:-rotate-6" />
              <span> {t("table.delete")}</span>
            </button>
          </div> */}

          <div className="bg-primary absolute top-2 bottom-2 w-1 rounded-r-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 ltr:left-0 rtl:right-0" />
        </div>
      </motion.div>
      {/* modal */}
      {/* <DeleteModal
        open={openDelete}
        onOpenChange={setOpenDelete}
        title={t("delete.title")}
        description={t("delete.description")}
        loading={loading}
        onConfirm={async () => {
          try {
            setLoading(true);

            await onDelete();

            setOpenDelete(false);
          } finally {
            setLoading(false);
          }
        }}
      /> */}
    </>
  );
}
