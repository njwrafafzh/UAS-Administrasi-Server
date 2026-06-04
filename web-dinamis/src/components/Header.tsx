import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary-900">
          Anagata Cake
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/ecosystems" className="text-sm text-neutral-600 hover:text-primary-600 transition">
            Jenis Kue
          </Link>
          <Link href="/contact" className="text-sm text-neutral-600 hover:text-primary-600 transition">
            Kontak
          </Link>
        </nav>
      </div>
    </header>
  );
}
