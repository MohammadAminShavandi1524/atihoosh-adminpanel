import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("========== LOGIN ==========");
    console.log("NODE_ENV:", process.env.NODE_ENV);
    console.log("API_URL:", process.env.NEXT_PUBLIC_API_URL);
    console.log("REQUEST BODY:", body);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/accounts/login/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    console.log("STATUS:", response.status);
    console.log("STATUS TEXT:", response.statusText);

    const text = await response.text();

    console.log("RAW RESPONSE:", text);

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      console.log("Response is not JSON");
      data = { detail: text };
    }

    console.log("PARSED RESPONSE:", data);

    if (!response.ok) {
      console.log("LOGIN FAILED");

      return NextResponse.json(data, {
        status: response.status,
      });
    }

    console.log("LOGIN SUCCESS");
    console.log("TOKEN:", data.token);

    const cookieStore = await cookies();

    cookieStore.set("token", data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });

    console.log("COOKIE SAVED");

    return NextResponse.json({
      detail: data.detail,
      first_login: data.first_login,
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return NextResponse.json(
      {
        detail: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
