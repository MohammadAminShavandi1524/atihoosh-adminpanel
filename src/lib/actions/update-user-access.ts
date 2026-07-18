"use server";

import { serverApi } from "@/lib/server-api";

export interface ChangeAccessPayload {
  request: boolean;
  resume: boolean;
  chat: boolean;
  blog: boolean;
}

export async function updateUserAccess(
  userId: string,
  data: ChangeAccessPayload,
) {
  return serverApi(`/accounts/change_access/${userId}/`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}
