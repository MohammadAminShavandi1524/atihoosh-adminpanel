"use server";

import { serverApi } from "@/lib/server-api";

export async function superuserResetPassword(userId: string) {
  return serverApi(`/accounts/superuser_reset_password/${userId}/`, {
    method: "PATCH",
  });
}