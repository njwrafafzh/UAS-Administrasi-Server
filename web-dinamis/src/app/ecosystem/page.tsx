import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    title: "Kue Signature",
    description:
      "Kue spesial dengan lapisan rasa premium dan dekorasi mewah untuk momen yang tak terlupakan.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    href: "/ecosystems/tech",
  },
  {
    title: "Kue Cokelat",
    description:
      "Cita rasa cokelat pekat, lembut, dan cocok untuk pesta ulang tahun maupun acara keluarga.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
    href: "/ecosystems/farm",
  },
  {
    title: "Kue Keju",
    description:
      "Kue keju lembut dengan sentuhan manis creamy yang sempurna untuk setiap perayaan.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    href: "/ecosystems/institute",
  },
  {
    title: "Kue Buah",
    description:
      "Kue segar dengan topping buah-buahan premium, ideal untuk acara siang hari yang ceria.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    href: "/ecosystems/foundation",
  },
];

export default function EcosystemPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-primary-900 mb-4">
        Jenis Kue Kami
      </h1>
      <p className="text-lg text-neutral-600 mb-16 max-w-3xl">
        Pilihan kue istimewa dengan tampilan elegan dan cita rasa lezat yang
        cocok untuk momen ulang tahun, perayaan, dan kejutan spesial Anda.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="relative h-64 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-primary-900 mb-2">
                {item.title}
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
