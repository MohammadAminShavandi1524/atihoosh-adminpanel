"use server";

import { serverApi } from "@/lib/server-api";

export async function deleteUser(userId: string) {
  return serverApi(`/accounts/delete_user/${userId}/`, {
    method: "DELETE",
  });
}
