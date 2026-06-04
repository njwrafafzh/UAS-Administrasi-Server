import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-primary-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ingin memesan kue?
        </h2>
        <p className="text-lg text-primary-200 max-w-2xl mx-auto mb-8">
          Pilih kue favorit Anda, tanyakan detail dekorasi, atau buat pesanan
          khusus untuk momen perayaan yang berkesan.
        </p>
        <Link
          href="/contact"
          className="inline-flex rounded-lg bg-white px-6 py-3 text-primary-900 font-semibold hover:bg-neutral-100 transition"
        >
          Hubungi Kami
        </Link>
      </div>
    </section>
  );
}
