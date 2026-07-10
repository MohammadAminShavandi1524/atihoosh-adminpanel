import { NextResponse } from "next/server";
import { serverApi } from "@/lib/server-api";

export async function GET() {
  try {
    const users = await serverApi("/accounts/get_users/");

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
