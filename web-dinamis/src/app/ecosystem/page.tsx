import Link from "next/link";
import { query } from "@/lib/db";
import { slugify } from "@/lib/slug";

export const dynamic = "force-dynamic";

type EcosystemItem = {
  id: number;
  name: string;
  description: string;
  image: string;
};

async function getEcosystems() {
  return await query<EcosystemItem>(
    "SELECT id, name, description, image FROM ecosystems ORDER BY id ASC"
  );
}

export default async function EcosystemPage() {
  let items: EcosystemItem[] = [];
  let errorMessage: string | null = null;

  try {
    items = await getEcosystems();
  } catch (error: unknown) {
    console.error("[EcosystemPage] Failed to load ecosystems:", error);
    errorMessage =
      error instanceof Error ? error.message : "Gagal memuat data jenis kue.";
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-primary-900 mb-4">
        Jenis Kue Kami
      </h1>
      <p className="text-lg text-neutral-600 mb-16 max-w-3xl">
        Pilihan kue istimewa dengan tampilan elegan dan cita rasa lezat yang
        cocok untuk momen ulang tahun, perayaan, dan kejutan spesial Anda.
      </p>

      {errorMessage ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-10 text-center text-red-700">
          <p className="text-lg font-semibold">Gagal memuat jenis kue.</p>
          <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center text-neutral-500">
              Tidak ada data jenis kue.
            </div>
          ) : (
            items.map((item) => (
              <Link
                key={item.id}
                href={`/ecosystems/${slugify(item.name)}`}
                className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-primary-900 mb-2">
                    {item.name}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </main>
  );
}
