"use client";

import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { customButtonVariants } from "../ui/custom-button/custom-button-variants";
import { cn } from "@/lib/utils";
import { CustomHoldButton } from "../ui/custom-button";

interface ChildBlogRowProps {
  id: string;
  title: string;
  description: string;
  parentId: string;
  onDelete?: () => void;
}

const ChildBlogRow = ({
  id,
  title,
  description,
  parentId,
  onDelete,
}: ChildBlogRowProps) => {
  const locale = useLocale();
  const t = useTranslations("blogs.actions");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{
        duration: 0.2,
        layout: {
          type: "spring",
          stiffness: 450,
          damping: 35,
        },
      }}
      className="relative pl-6"
    >
      <div className="bg-secondary/40 hover:bg-secondary/30 border-border flex items-center justify-between rounded-xl border p-4 transition-all duration-200 hover:shadow-sm">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary rounded-md px-2 py-1 text-xs font-semibold">
              #{id}
            </span>

            <h3 className="text-foreground font-medium">{title}</h3>
          </div>

          <p className="text-muted-foreground max-w-3xl text-sm leading-6">
            {description}
          </p>
        </div>

        <div className="ml-6 flex shrink-0 gap-2">
          <Link
            href={`/${locale}/blogs/edit/${parentId}/${id}`}
            className={cn(
              customButtonVariants({
                intent: "info",
                variant: "soft",
              }),
              "gap-1",
            )}
          >
            <Edit className="size-4" />
            {t("edit")}
          </Link>

          <CustomHoldButton
            intent="destructive"
            variant="soft"
            duration={1200}
            onComplete={onDelete}
            leftSection={<Trash className="size-4" />}
            className="group"
          >
            {t("delete")}
          </CustomHoldButton>
        </div>
      </div>
    </motion.div>
  );
};

export default ChildBlogRow;
