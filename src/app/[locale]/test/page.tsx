"use client";

import HeaderLayout from "@/components/layout/HeaderLayout";
import { CustomButton, CustomHoldButton } from "@/components/ui/custom-button";

import { Trash, Save, Check, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { toast } from "sonner";

export default function TestPage() {
  const [user, setUser] = useState(null);
  // console.log("🚀 ~ TestPage ~ user:", user)

  useEffect(() => {
    async function getUser() {
      const res = await fetch("/api/me");
      const data = await res.json();

      setUser(data);
    }

    getUser();
  }, []);
  return (
    <div className="flex min-h-screen flex-col gap-8 p-10">
      <HeaderLayout title="test page" descrption="" />

      {/* <CustomHoldButton
        intent="destructive"
        variant="soft"
        duration={1500}
        onComplete={() => {
          toast.error("Deleted");
        }}
        className="w-fit"
      >
        Delete User
      </CustomHoldButton>

      <CustomHoldButton
        intent="primary"
        variant="solid"
        duration={1500}
        onComplete={() => {
          toast.success("Saved");
        }}
        className="w-fit"
      >
        Save
      </CustomHoldButton>

      <CustomHoldButton
        intent="success"
        variant="soft"
        duration={1500}
        onComplete={() => {
          toast.success("Confirmed");
        }}
        className="w-fit"
      >
        Confirm
      </CustomHoldButton>

      <CustomHoldButton
        intent="warning"
        variant="soft"
        duration={1500}
        onComplete={() => {
          toast.info("Warning");
        }}
        className="w-fit"
      >
        Warning
      </CustomHoldButton> */}
    </div>
  );
}
