"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/ecosystems", label: "Jenis Kue" },
  { href: "/admin/projects", label: "Daftar Kue" },
  { href: "/admin/contacts", label: "Contacts" },
  { href: "/admin/settings", label: "Settings" },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname() || "";

  const handleLogout = async () => {
    await fetch("/api/auth/signout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  return (
    <aside className="fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-neutral-200 flex flex-col">
      <div className="p-6">
        <Link href="/admin" className="block text-lg font-bold text-primary-900">
          Konfigura Admin
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const active =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-primary-50 text-primary-700"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-neutral-200 space-y-2">
        <Link
          href="/"
          className="block rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-50"
        >
          ← Kembali ke Website
        </Link>
        <button
          onClick={handleLogout}
          className="w-full text-left rounded-lg px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
