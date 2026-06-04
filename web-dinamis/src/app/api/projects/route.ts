import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const rows = await query(
      "SELECT id, title, description, status, unit FROM projects ORDER BY id DESC"
    );
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, status, unit } = body;
    const [result] = await query(
      "INSERT INTO projects (title, description, status, unit) VALUES (?, ?, ?, ?)",
      [title, description, status, unit]
    );
    return NextResponse.json({ id: (result as { insertId: number }).insertId }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menambahkan project" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, title, description, status, unit } = body;
    await query(
      "UPDATE projects SET title = ?, description = ?, status = ?, unit = ? WHERE id = ?",
      [title, description, status, unit, id]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal memperbarui project" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;
    await query("DELETE FROM projects WHERE id = ?", [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menghapus project" },
      { status: 500 }
    );
  }
}
