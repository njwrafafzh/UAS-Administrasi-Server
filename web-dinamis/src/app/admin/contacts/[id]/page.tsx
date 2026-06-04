import AdminHeader from "@/components/admin/AdminHeader";
import { query } from "@/lib/db";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/admin/AdminForm";

export const dynamic = "force-dynamic";

export default async function AdminContactEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const rows = await query<{
    id: number;
    name: string;
    email: string;
    message: string;
  }>("SELECT id, name, email, message FROM contacts WHERE id = ?", [id]);

  if (rows.length === 0) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <AdminHeader title="Edit Contact" description="Ubah data pesan kontak." />
      <ContactForm mode="edit" initialData={rows[0]} />
    </div>
  );
}
