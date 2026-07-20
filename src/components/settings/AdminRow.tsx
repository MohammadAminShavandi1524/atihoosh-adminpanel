"use client";

import { useState } from "react";
import { deleteUser } from "@/lib/actions/delete-user";
import { superuserResetPassword } from "@/lib/actions/superuser-reset-password";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { CustomButton, CustomHoldButton } from "../ui/custom-button";
import { getAvatarColor } from "@/lib/avatar-color";
import { updateUserAccess } from "@/lib/actions/update-user-access";

interface AdminRowProps {
  id: string;
  userName: string;
  email: string;
  request: boolean;
  resume: boolean;
  chat: boolean;
  blog: boolean;
}

const AdminRow = ({
  id,
  email,
  request,
  resume,
  chat,
  blog,
  userName,
}: AdminRowProps) => {
  const t = useTranslations("Settings.AdminTable");

  const color = getAvatarColor(userName);

  const [permissions, setPermissions] = useState({
    request,
    resume,
    chat,
    blog,
  });

  const [isSaving, setIsSaving] = useState(false);

  const togglePermission = (
    key: keyof typeof permissions,
    checked: boolean,
  ) => {
    setPermissions((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };

  // =========================
  // Save Access
  // =========================

  const handleSave = async () => {
    try {
      setIsSaving(true);

      await updateUserAccess(id, permissions);

      toast.success(t("Toast.accessUpdated"));
    } catch (error) {
      console.error(error);

      toast.error(t("Toast.accessUpdateFailed"));
    } finally {
      setIsSaving(false);
    }
  };

  // =========================
  // Reset Password
  // =========================

  const handleResetPassword = async () => {
    try {
      await superuserResetPassword(id);

      toast.success(t("Toast.passwordSent"));
    } catch (error) {
      console.error(error);

      toast.error(t("Toast.passwordSentFailed"));
    }
  };

  // =========================
  // Delete User
  // =========================

  const handleDeleteUser = async () => {
    try {
      await deleteUser(id);

      toast.success(t("Toast.deleteSuccess"));
    } catch (error) {
      console.error(error);

      toast.error(t("Toast.deleteFailed"));
    }
  };

  return (
    <div className="border-border hover:bg-muted/30 grid grid-cols-[3fr_0.8fr_0.8fr_0.8fr_0.8fr_2fr] items-center border-b transition-colors">
      {/* Admin */}
      <div className="px-6 py-5">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full font-semibold text-white",
              color,
            )}
          >
            {userName.charAt(0).toUpperCase()}
          </div>

          <div>
            <h4 className="font-medium">{userName}</h4>

            <p className="text-muted-foreground mt-1 text-sm">{email}</p>
          </div>
        </div>
      </div>

      {/* Request */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          checked={permissions.request}
          onChange={(e) => togglePermission("request", e.target.checked)}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>

      {/* Resume */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          checked={permissions.resume}
          onChange={(e) => togglePermission("resume", e.target.checked)}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>

      {/* Chat */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          checked={permissions.chat}
          onChange={(e) => togglePermission("chat", e.target.checked)}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>

      {/* Blog */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          checked={permissions.blog}
          onChange={(e) => togglePermission("blog", e.target.checked)}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>

      {/* Actions */}
      <div className="px-6">
        <div className="flex justify-center gap-2">
          <CustomButton
            intent="success"
            variant="solid"
            onClick={handleSave}
            disabled={isSaving}
          >
            {t("buttons.saveBtn")}
          </CustomButton>

          <CustomButton
            intent="info"
            variant="soft"
            onClick={handleResetPassword}
          >
            {t("buttons.changePassword")}
          </CustomButton>

          <CustomHoldButton
            intent="destructive"
            variant="soft"
            duration={800}
            onComplete={handleDeleteUser}
          >
            {t("buttons.remove")}
          </CustomHoldButton>
        </div>
      </div>
    </div>
  );
};

export default AdminRow;
