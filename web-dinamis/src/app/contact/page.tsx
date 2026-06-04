import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-4xl font-bold text-primary-900 mb-4">Kontak</h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Hubungi Anagata Cake untuk memesan kue, konsultasi dekorasi, atau
              permintaan khusus untuk hari spesial Anda. Tim kami siap membantu.
            </p>
          </div>
        </section>
        <section className="bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
                <form
                  action="/api/contact"
                  method="POST"
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-1.5">
                      Nama
                    </label>
                    <input
                      name="name"
                      className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-1.5">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
                      placeholder="email@contoh.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-1.5">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
                      placeholder="Tulis pesan Anda"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary-600 py-3 text-white font-semibold hover:bg-primary-700 transition"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                  <p className="text-sm text-neutral-500 mb-1">Email</p>
                  <p className="text-neutral-900 font-medium">info@anagata.cake</p>
                </div>
                <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                  <p className="text-sm text-neutral-500 mb-1">Alamat</p>
                  <p className="text-neutral-900 font-medium">
                    Jl. Sudirman No. 88, Jakarta Selatan, Indonesia
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                  <p className="text-sm text-neutral-500 mb-1">Telepon</p>
                  <p className="text-neutral-900 font-medium">+62 21 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
