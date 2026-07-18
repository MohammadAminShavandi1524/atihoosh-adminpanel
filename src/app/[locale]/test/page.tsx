"use client";

import { toast } from "sonner";

export default function TestPage() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4">
      <button
        onClick={() =>
          toast.success("User created successfully.", {
            description: "This is a success toast.",
            duration: Infinity,
          })
        }
        className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white"
      >
        Success Toast
      </button>

      <button
        onClick={() =>
          toast.error("Something went wrong.", {
            description: "This is an error toast.",
            duration: Infinity,
          })
        }
        className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white"
      >
        Error Toast
      </button>
    </div>
  );
}
