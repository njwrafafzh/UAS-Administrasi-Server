import AdminHeader from "@/components/admin/AdminHeader";
import { query } from "@/lib/db";
import { notFound } from "next/navigation";
import { ProjectForm } from "@/components/admin/AdminForm";

export const dynamic = "force-dynamic";

export default async function AdminProjectEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const rows = await query<{
    id: number;
    title: string;
    description: string;
    status: string;
    unit: string;
  }>("SELECT id, title, description, status, unit FROM projects WHERE id = ?", [id]);

  if (rows.length === 0) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <AdminHeader title="Edit Project" description="Ubah data proyek." />
      <ProjectForm mode="edit" initialData={rows[0]} />
    </div>
  );
}
