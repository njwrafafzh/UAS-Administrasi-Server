import AdminHeader from "@/components/admin/AdminHeader";
import StatsCard from "@/components/admin/StatsCard";
import DataTable from "@/components/admin/DataTable";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [ecosystemCountRow] = await query<{ count: number }>(
    "SELECT COUNT(*) AS count FROM ecosystems"
  );
  const [projectCountRow] = await query<{ count: number }>(
    "SELECT COUNT(*) AS count FROM projects"
  );
  const [contactCountRow] = await query<{ count: number }>(
    "SELECT COUNT(*) AS count FROM contacts"
  );
  const recentProjects = await query<{
    id: number;
    title: string;
    status: string;
    unit: string;
  }>(
    "SELECT id, title, status, unit FROM projects ORDER BY id DESC LIMIT 5"
  );

  const ecosystemCount = ecosystemCountRow?.count ?? 0;
  const projectCount = projectCountRow?.count ?? 0;
  const contactCount = contactCountRow?.count ?? 0;

  return (
    <div className="space-y-8">
      <AdminHeader title="Dashboard Toko Kue" description="Ringkasan data utama Toko Kue Anagata." />

      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard title="Jenis Kue" value={ecosystemCount} trend="Data live dari database" />
        <StatsCard title="Daftar Kue" value={projectCount} trend="Data live dari database" />
        <StatsCard title="Kontak" value={contactCount} trend="Data live dari database" />
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900">Kue Terbaru</h2>
            <p className="text-sm text-neutral-500">Lihat daftar kue terbaru yang tersimpan di database.</p>
          </div>
        </div>

        <DataTable
          columns={[
            { key: "id", label: "ID" },
            { key: "title", label: "Judul Kue" },
            { key: "status", label: "Status" },
            { key: "unit", label: "Jenis" },
          ]}
          rows={recentProjects}
          addHref="/admin/projects/new"
        />
      </div>
    </div>
  );
}
