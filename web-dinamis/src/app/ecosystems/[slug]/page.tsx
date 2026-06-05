import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { query } from "@/lib/db";
import { slugify } from "@/lib/slug";

type Props = { params: Promise<{ slug: string }> };

type EcosystemItem = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const ecosystems = await query<EcosystemItem>(
    "SELECT id, name, description, image FROM ecosystems"
  );
  const eco = ecosystems.find((item) => slugify(item.name) === slug);

  if (!eco) return {}; 

  return {
    title: eco.name,
    description: eco.description,
  };
}

export default async function EcosystemDetailPage({ params }: Props) {
  const { slug } = await params;
  const ecosystems = await query<EcosystemItem>(
    "SELECT id, name, description, image FROM ecosystems"
  );
  const eco = ecosystems.find((item) => slugify(item.name) === slug);

  if (!eco) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative rounded-2xl overflow-hidden mb-12 h-[320px]">
          <img
            src={eco.image}
            alt={eco.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold text-white">{eco.name}</h1>
          </div>
        </div>
        <div className="max-w-3xl">
          <p className="text-lg text-neutral-700 leading-relaxed">{eco.description}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
