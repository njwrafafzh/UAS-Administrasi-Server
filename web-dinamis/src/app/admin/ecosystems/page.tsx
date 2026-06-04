import AdminHeader from "@/components/admin/AdminHeader";
import DataTable from "@/components/admin/DataTable";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminEcosystemsPage() {
  const rows = await query<{
    id: number;
    name: string;
    description: string;
    image: string;
  }>(
    "SELECT id, name, description, image FROM ecosystems ORDER BY id DESC"
  );

  return (
    <div className="space-y-6">
      <AdminHeader title="Ecosystems" description="Kelola data unit bisnis Konfigura." />
      <DataTable
        columns={[
          { key: "id", label: "ID" },
          { key: "name", label: "Nama" },
          { key: "description", label: "Deskripsi" },
          { key: "image", label: "Gambar" },
        ]}
        rows={rows}
        addHref="/admin/ecosystems/new"
        editHrefPrefix="/admin/ecosystems"
        deleteApiPath="/api/ecosystems"
      />
    </div>
  );
}
