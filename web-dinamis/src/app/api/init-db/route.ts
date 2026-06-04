import { initializeDatabase, seedDummyData } from "@/lib/init-db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await initializeDatabase();
    await seedDummyData();
    return NextResponse.json({ status: "ok", message: "Database initialized and seeded." });
  } catch (error) {
    return NextResponse.json({ status: "error", message: String(error) }, { status: 500 });
  }
}
