import Link from "next/link";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/#about", label: "About Us" },
  { href: "/#ecosystem", label: "Jenis Kue" },
  { href: "/#projects", label: "Daftar Kue" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-primary-900 tracking-tight"
          >
            Anagata Cake
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/login"
            className="hidden md:inline-flex rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:border-primary-500 hover:text-primary-700 transition"
          >
            Login Admin
          </Link>
        </div>
      </div>
    </header>
  );
}
