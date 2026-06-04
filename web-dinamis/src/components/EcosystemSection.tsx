import Link from "next/link";
import { query } from "@/lib/db";

export default async function EcosystemSection() {
  let items: Array<{ name: string; description: string; image: string }> = [];
  let errorMessage: string | null = null;

  try {
    items = await query<{
      name: string;
      description: string;
      image: string;
    }>("SELECT name, description, image FROM ecosystems ORDER BY id ASC");
  } catch (error: unknown) {
    console.error("[EcosystemSection] Failed to load ecosystems:", error);
    errorMessage = error instanceof Error ? error.message : "Gagal memuat data ekosistem.";
  }

  return (
    <section id="ecosystem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Jenis Kue Anagata
          </h2>
          <p className="text-lg text-neutral-600">
            Koleksi kue pilihan dengan tampilan manis dan cita rasa lembut yang
            cocok untuk kado, ulang tahun, dan perayaan istimewa.
          </p>
        </div>

        {errorMessage ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-10 text-center text-red-700">
            <p className="text-lg font-semibold">Gagal memuat ekosistem.</p>
            <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.length === 0 ? (
              <div className="col-span-full rounded-2xl border border-neutral-200 bg-white p-10 text-center text-neutral-500">
                Tidak ada data ekosistem.
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.name}
                  className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="/ecosystem"
            className="inline-flex items-center rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 hover:border-primary-500 hover:text-primary-700 transition"
          >
            Lihat Semua Jenis Kue
          </Link>
        </div>
      </div>
    </section>
  );
}
