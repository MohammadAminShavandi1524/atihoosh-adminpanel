import { NextResponse } from "next/server";
import { serverApi } from "@/lib/server-api";

export async function GET() {
  try {
    const data = await serverApi("/support/get_requests/");

    return NextResponse.json(data);
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error,
        message: error.body ?? error.message ?? "Internal Server Error",
      },
      {
        status: error.status ?? 500,
      },
    );
  }
}
