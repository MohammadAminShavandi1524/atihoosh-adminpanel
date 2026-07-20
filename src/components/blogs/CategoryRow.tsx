"use client";

import { Edit, Folder, Trash } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";

interface CategoryRowProps {
  id: string;
  label: string;
  date: string;

  onDelete: () => void;
}

const CategoryRow = ({ date, id, label, onDelete }: CategoryRowProps) => {
  const locale = useLocale();
  return (
    <div className="group border-border-secondary bg-secondary-bg hover:border-primary/20 hover:bg-secondary relative mb-2 grid h-16 w-full grid-cols-4 items-center rounded-lg border px-4 shadow-sm transition-all duration-200 last:mb-0 hover:shadow-md">
      {/* ID */}
      <div className="text-muted-foreground font-mono text-sm">#{id}</div>

      {/* Category Name */}
      <div className="text-foreground flex items-center gap-2 font-medium">
        <span>{label}</span>
      </div>

      {/* Date */}
      <div className="text-muted-foreground text-sm">{formatDate(date)}</div>

      {/* Actions */}
      <div className="flex gap-x-2.5">
        <Link
          href={`/${locale}/categories/edit/${id}`}
          className="flex cursor-pointer items-center gap-x-1 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition-all duration-200 hover:border-blue-300 hover:bg-blue-100 hover:shadow-sm active:scale-[0.98] dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-800 dark:hover:bg-blue-900/40"
        >
          <Edit className="size-4.5" />
          <span>Edit</span>
        </Link>

        <button
          onClick={onDelete}
          className="group/delete flex cursor-pointer items-center gap-x-1 rounded-lg border border-red-400 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-500 transition-all duration-200 hover:border-red-500 hover:bg-red-500/20 hover:shadow-sm active:scale-[0.98]"
        >
          <Trash className="size-4.5 transition-transform duration-200 group-hover/delete:scale-110 group-hover/delete:-rotate-6" />
          <span>Delete</span>
        </button>
      </div>

      {/* Accent Line */}
      <div className="bg-primary absolute top-2 bottom-2 left-0 w-1 rounded-r-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </div>
  );
};

export default CategoryRow;

export const formatDate = (date: string, locale: string = "en-US"): string => {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};
