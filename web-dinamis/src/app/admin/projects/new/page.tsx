import AdminHeader from "@/components/admin/AdminHeader";
import { ProjectForm } from "@/components/admin/AdminForm";

export default function AdminProjectsNewPage() {
  return (
    <div className="space-y-6">
      <AdminHeader title="Tambah Project" description="Tambahkan proyek baru ke database." />
      <ProjectForm mode="create" />
    </div>
  );
}
