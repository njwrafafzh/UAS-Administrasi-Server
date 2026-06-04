import { query } from "@/lib/db";

export default async function ProjectsSection() {
  let projects: Array<{ title: string; description: string; status: string; unit: string }> = [];
  let errorMessage: string | null = null;

  try {
    projects = await query<{
      title: string;
      description: string;
      status: string;
      unit: string;
    }>("SELECT title, description, status, unit FROM projects ORDER BY id DESC LIMIT 4");
  } catch (error: unknown) {
    console.error("[ProjectsSection] Failed to load projects:", error);
    errorMessage = error instanceof Error ? error.message : "Gagal memuat data projek.";
  }

  return (
    <section id="projects" className="bg-neutral-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Daftar Kue Anagata
          </h2>
          <p className="text-lg text-neutral-600">
            Pilihan kue istimewa dengan kombinasi rasa dan dekorasi yang siap
            memanjakan setiap momen spesial Anda.
          </p>
        </div>

        {errorMessage ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-10 text-center text-red-700">
            <p className="text-lg font-semibold">Gagal memuat proyek.</p>
            <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.length === 0 ? (
              <div className="col-span-full rounded-2xl border border-neutral-200 bg-white p-10 text-center text-neutral-500">
                Tidak ada data proyek.
              </div>
            ) : (
              projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-primary-900">
                      {project.unit}
                    </span>
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-800">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
