import AdminHeader from "@/components/admin/AdminHeader";
import DataTable from "@/components/admin/DataTable";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  const rows = await query<{
    id: number;
    title: string;
    status: string;
    unit: string;
  }>(
    "SELECT id, title, description, status, unit FROM projects ORDER BY id DESC"
  );

  return (
    <div className="space-y-6">
      <AdminHeader title="Projects" description="Kelola proyek dan program Konfigura." />
      <DataTable
        columns={[
          { key: "id", label: "ID" },
          { key: "title", label: "Judul" },
          { key: "status", label: "Status" },
          { key: "unit", label: "Unit" },
        ]}
        rows={rows}
        addHref="/admin/projects/new"
        editHrefPrefix="/admin/projects"
        deleteApiPath="/api/projects"
      />
    </div>
  );
}
