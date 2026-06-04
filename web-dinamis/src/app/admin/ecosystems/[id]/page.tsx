import AdminHeader from "@/components/admin/AdminHeader";
import { query } from "@/lib/db";
import { notFound } from "next/navigation";
import { EcosystemForm } from "@/components/admin/AdminForm";

export const dynamic = "force-dynamic";

export default async function AdminEcosystemEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const rows = await query<{
    id: number;
    name: string;
    description: string;
    image: string;
  }>("SELECT id, name, description, image FROM ecosystems WHERE id = ?", [id]);

  if (rows.length === 0) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <AdminHeader title="Edit Ecosystem" description="Ubah data unit bisnis." />
      <EcosystemForm mode="edit" initialData={rows[0]} />
    </div>
  );
}
