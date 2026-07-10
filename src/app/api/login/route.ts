import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/accounts/login/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, {
        status: response.status,
      });
    }

    const cookieStore = await cookies();

    cookieStore.set("token", data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });

    return NextResponse.json({
      detail: data.detail,
      first_login: data.first_login,
    });
  } catch {
    return NextResponse.json(
      {
        detail: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}