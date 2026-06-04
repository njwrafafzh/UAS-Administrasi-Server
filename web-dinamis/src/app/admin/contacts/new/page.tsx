import AdminHeader from "@/components/admin/AdminHeader";
import { ContactForm } from "@/components/admin/AdminForm";

export default function AdminContactsNewPage() {
  return (
    <div className="space-y-6">
      <AdminHeader title="Tambah Kontak" description="Tambahkan kontak baru ke database." />
      <ContactForm mode="create" />
    </div>
  );
}
