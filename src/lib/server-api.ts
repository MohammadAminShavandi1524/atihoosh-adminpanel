import { cookies } from "next/headers";

const BASE_URL = process.env.API_URL!;

export async function serverApi(endpoint: string, options: RequestInit = {}) {
  const token = (await cookies()).get("token")?.value;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `${token}`,
    ...options.headers,
  };

  console.log("TOKEN:", token);
  console.log("HEADERS:", headers);

  console.log("URL:", `${BASE_URL}${endpoint}`);
console.log("METHOD:", options.method ?? "GET");

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const text = await response.text();

  console.log("STATUS:", response.status);
  console.log("RESPONSE:", text);

  if (!response.ok) {
    throw {
      status: response.status,
      body: text,
    };
  }

  return JSON.parse(text);
}
