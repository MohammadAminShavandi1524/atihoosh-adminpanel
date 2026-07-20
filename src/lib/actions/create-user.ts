"use server";

import { serverApi } from "@/lib/server-api";

interface CreateUserPayload {
  email: string;
  user_name: string;
}

export async function createUser(data: CreateUserPayload) {
  return serverApi("/accounts/register/", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
