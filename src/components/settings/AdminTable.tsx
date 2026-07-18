"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import AdminRow from "./AdminRow";
import { getUsers } from "@/services/users";
import { AddMemberForm } from "./AddMemberForm";
import { useForm } from "react-hook-form";
import {
  AddMemberFormValues,
  addMemberSchema,
} from "@/lib/validations/add-member-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "@/lib/actions/create-user";
import { toast } from "sonner";

interface User {
  id: string;
  email: string;
  user_name: string;
  request: boolean;
  resume: boolean;
  chat: boolean;
  blog: boolean;
}

export default function AdminTable() {
  const [users, setUsers] = useState<User[]>([]);
  console.log("🚀 ~ Page ~ users:", users);
  const locale = useLocale();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const t = useTranslations("Settings.AdminTable");

  // add member section

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddMemberFormValues>({
    resolver: zodResolver(addMemberSchema),
    defaultValues: {
      email: "",
      user_name: "",
    },
  });

  const onSubmit = async (data: AddMemberFormValues) => {
    try {
      await createUser(data);

      toast.success(t("Toast.createSuccess"));

      reset();
    } catch (error: any) {
      toast.error(t("Toast.createFailed"));

      console.error(error);
    }
  };

  return (
    <div className="border-border-secondary h-full overflow-hidden rounded-2xl border">
      <div className="flex h-full flex-col justify-between overflow-x-auto">
        <div className="border-border bg-background overflow-hidden rounded-xl border">
          {/* Header */}
          <div className="bg-tertiary border-border border-b">
            <div className="grid grid-cols-[3fr_0.8fr_0.8fr_0.8fr_0.8fr_2fr] items-center">
              <div className="text-muted-foreground px-6 py-4 text-sm font-medium">
                {t("headers.admin")}
              </div>

              <div className="text-muted-foreground px-4 py-4 text-center text-sm font-medium">
                {t("headers.request")}
              </div>

              <div className="text-muted-foreground px-4 py-4 text-center text-sm font-medium">
                {t("headers.resume")}
              </div>

              <div className="text-muted-foreground px-4 py-4 text-center text-sm font-medium">
                {t("headers.chat")}
              </div>

              <div className="text-muted-foreground px-4 py-4 text-center text-sm font-medium">
                {t("headers.blog")}
              </div>

              <div className="text-muted-foreground px-6 py-4 text-center text-sm font-medium">
                {t("headers.actions")}
              </div>
            </div>
          </div>

          {/* Body */}
          <ScrollArea
            dir={locale === "en" ? "ltr" : "rtl"}
            className="h-[500px]"
          >
            <div>
              {users.map((user) => (
                <AdminRow
                  key={user.id}
                  id={user.id}
                  email={user.email}
                  userName={user.user_name}
                  request={user.request}
                  resume={user.resume}
                  chat={user.chat}
                  blog={user.blog}
                />
              ))}
            </div>
          </ScrollArea>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <AddMemberForm register={register} errors={errors} />
        </form>
      </div>
    </div>
  );
}
