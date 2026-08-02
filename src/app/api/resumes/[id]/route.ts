import { serverApi } from "@/lib/server-api";
import { NextResponse } from "next/server";

interface RouteProps {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_: Request, { params }: RouteProps) {
  try {
    const { id } = await params;

    const data = await serverApi(`/support/get_presigned/${id}/`, {
      method: "GET",
    });

    return NextResponse.json(data);
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error: error?.message ?? "Internal Server Error",
      },
      {
        status: error?.status ?? 500,
      },
    );
  }
}
