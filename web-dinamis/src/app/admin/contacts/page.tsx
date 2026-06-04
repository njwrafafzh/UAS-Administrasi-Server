import AdminHeader from "@/components/admin/AdminHeader";
import DataTable from "@/components/admin/DataTable";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminContactsPage() {
  const rows = await query<{
    id: number;
    name: string;
    email: string;
    createdAt: string;
  }>(
    "SELECT id, name, email, createdAt FROM contacts ORDER BY id DESC"
  );

  return (
    <div className="space-y-6">
      <AdminHeader title="Contacts" description="Pesan masuk dari pengunjung website." />
      <DataTable
        columns={[
          { key: "id", label: "ID" },
          { key: "name", label: "Nama" },
          { key: "email", label: "Email" },
          { key: "createdAt", label: "Tanggal" },
        ]}
        rows={rows}
        addHref="/admin/contacts/new"
        editHrefPrefix="/admin/contacts"
        deleteApiPath="/api/contact"
      />
    </div>
  );
}
