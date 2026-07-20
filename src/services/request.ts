import { serverApi } from "@/lib/server-api";

export async function getRequests() {
  return serverApi("/support/get_requests/");
}
