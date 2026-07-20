import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { serverApi } from "./server-api";

interface TokenPayload {
  user_id?: number;
  id?: number;
}

interface User {
  id: number;
  email: string;
  user_name: string;
}

export async function getCurrentUser(): Promise<User | null> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return null;
  }

  const decoded = jwtDecode<TokenPayload>(token);

  const userId = decoded.user_id ?? decoded.id;

  if (!userId) {
    return null;
  }

  const users = await serverApi("/accounts/get_users/");

  const currentUser = users.find((user: User) => user.id === userId);

  return currentUser ?? null;
}
