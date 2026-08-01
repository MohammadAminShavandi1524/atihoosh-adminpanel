import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  try {
    const { path } = await params;

    const filePath = decodeURIComponent(path.join("/"))
      .split("?")[0]
      .split("versionId=")[0]
      .replace(/_versionId=.*$/, "");

    const url = `https://atihoosh.s3.ir-thr-at1.arvanstorage.ir/${filePath}`;

  

    const response = await fetch(url);

    if (!response.ok) {
      return new Response("File not found", {
        status: response.status,
      });
    }

    const contentType =
      response.headers.get("content-type") ?? "application/octet-stream";

    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": "inline",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("MEDIA_PROXY_ERROR:", error);

    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
