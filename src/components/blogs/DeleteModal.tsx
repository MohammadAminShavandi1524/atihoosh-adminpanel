"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Trash2 } from "lucide-react";

interface DeleteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  onConfirm: () => void;
  loading?: boolean;
}

const DeleteModal = ({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
  loading = false,
}: DeleteModalProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-secondary-bg border-border-secondary max-w-[440px] overflow-hidden rounded-2xl border p-0 shadow-2xl">
        <div className="flex flex-col items-center px-8 pt-8">
          <div className="flex size-18 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
            <Trash2 className="size-8 text-red-500" />
          </div>

          <AlertDialogHeader className="mt-6 space-y-3 text-center">
            <AlertDialogTitle className="text-foreground text-2xl font-semibold">
              {title}
            </AlertDialogTitle>

            <AlertDialogDescription className="text-muted-foreground text-sm leading-7">
              {description}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="mt-5 w-full rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
            <p className="text-center text-sm font-medium text-red-500">
              This action cannot be undone.
            </p>
          </div>
        </div>

        <AlertDialogFooter className="bg-tertiary border-border-secondary mt-8 border-t p-5">
          <AlertDialogCancel className="border-border-secondary bg-secondary hover:bg-muted h-11 flex-1 rounded-xl border transition-all">
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={onConfirm}
            disabled={loading}
            className="h-11 flex-1 rounded-xl bg-red-600 text-white transition-all hover:scale-[1.02] hover:bg-red-700 active:scale-[0.98]"
          >
            {loading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;
