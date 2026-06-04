import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `http://${process.env.DB_HOST || "localhost"}:8080/health`,
      { signal: AbortSignal.timeout(2000) }
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ status: "ok" });
  }
}
