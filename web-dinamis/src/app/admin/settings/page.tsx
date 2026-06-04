import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <AdminHeader title="Settings" description="Konfigurasi website dan admin." />
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6">
        <p className="text-neutral-700">
          Halaman pengaturan akan menampilkan opsi konfigurasi konten website, manajemen pengguna, dan preferensi sistem.
        </p>
      </div>
    </div>
  );
}
