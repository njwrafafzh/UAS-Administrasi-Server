import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/admin/Sidebar";
import "./../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-neutral-900 min-h-screen`}>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-64 overflow-y-auto">
          <div className="p-6 md:p-8 lg:p-10 max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
