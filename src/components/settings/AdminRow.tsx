"use client";

import { deleteUser } from "@/lib/actions/delete-user";
import { superuserResetPassword } from "@/lib/actions/superuser-reset-password";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { toast } from "sonner";

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
  const locale = useLocale();

  const avatarColors = [
    "bg-emerald-600",
    "bg-blue-600",
    "bg-violet-600",
    "bg-rose-600",
    "bg-amber-500",
    "bg-cyan-600",
    "bg-indigo-600",
    "bg-fuchsia-600",
    "bg-orange-600",
    "bg-teal-600",
  ];

  const color =
    avatarColors[
      userName.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) %
        avatarColors.length
    ];

  // ? reset password

  const handleResetPassword = async () => {
    try {
      await superuserResetPassword(id);

      toast.success(t("Toast.passwordSent"));
    } catch (error) {
      console.error(error);

      toast.error(t("Toast.passwordSentFailed"));
    }
  };

  // ? delete user

  const handleDeleteUser = async () => {
    try {
      await deleteUser(id);
      toast.success(t("Toast.deleteSuccess"));
    } catch (error) {
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
            {/* <h4 className="font-medium">Admin #{id}</h4> */}
            <h4 className="font-medium">{userName}</h4>
            <p className="text-muted-foreground mt-1 text-sm">{email}</p>
          </div>
        </div>
      </div>
      {/* request */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          defaultChecked={request}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>
      {/* resume */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          defaultChecked={resume}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>
      {/* Chat */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          defaultChecked={chat}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>
      {/* Blog */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          defaultChecked={blog}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
      </div>
      {/* Actions */}
      <div className="px-6">
        <div className="flex justify-center gap-2">
          {/* save btn */}
          <button className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-teal-700 hover:shadow-md focus-visible:ring-2 focus-visible:ring-teal-500/40 focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50">
            {t("buttons.saveBtn")}
          </button>

          {/* change password */}
          <button
            onClick={handleResetPassword}
            className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-blue-400 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500 transition-all duration-200 hover:border-blue-500 hover:bg-blue-500/20 active:scale-[0.98]"
          >
            {t("buttons.changePassword")}
          </button>

          {/* remove btn */}
          <button
            onClick={handleDeleteUser}
            className="cursor-pointer rounded-lg border border-red-400 bg-red-500/10 px-3 py-2 text-sm text-red-400 transition hover:bg-red-500/20 active:scale-[0.98]"
          >
            {t("buttons.remove")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminRow;
