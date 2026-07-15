import { NextResponse } from "next/server";
import { serverApi } from "@/lib/server-api"; // مسیر را با پروژه خودت تنظیم کن

export async function GET() {
  try {
    const data = await serverApi("/support/get_all_resume/");

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.body ?? "Internal Server Error",
      },
      {
        status: error.status ?? 500,
      },
    );
  }
}
