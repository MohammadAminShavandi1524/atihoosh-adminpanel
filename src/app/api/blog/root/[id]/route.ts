import { serverApi } from "@/lib/server-api";
import { NextResponse } from "next/server";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_: Request, { params }: Params) {
  try {
    const { id } = await params;

    const data = await serverApi(`/get_blog/root/${id}/`);

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.body ?? "Internal Server Error",
      },
      {
        status: error.status ?? 500,
      },
    );
  }
}
