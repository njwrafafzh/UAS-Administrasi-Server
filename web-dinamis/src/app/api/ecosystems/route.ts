import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const rows = await query(
      "SELECT id, name, description, image FROM ecosystems ORDER BY id ASC"
    );
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data ecosystems" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, image } = body;
    const [result] = await query(
      "INSERT INTO ecosystems (name, description, image) VALUES (?, ?, ?)",
      [name, description, image]
    );
    return NextResponse.json({ id: (result as { insertId: number }).insertId }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menambahkan ecosystem" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, name, description, image } = body;
    await query(
      "UPDATE ecosystems SET name = ?, description = ?, image = ? WHERE id = ?",
      [name, description, image, id]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal memperbarui ecosystem" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;
    await query("DELETE FROM ecosystems WHERE id = ?", [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menghapus ecosystem" },
      { status: 500 }
    );
  }
}
