import AdminHeader from "@/components/admin/AdminHeader";
import { EcosystemForm } from "@/components/admin/AdminForm";

export default function AdminEcosystemNewPage() {
  return (
    <div className="space-y-6">
      <AdminHeader title="Tambah Ecosystem" description="Tambahkan unit bisnis baru ke database." />
      <EcosystemForm mode="create" />
    </div>
  );
}
