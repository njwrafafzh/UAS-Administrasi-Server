export interface Ecosystem {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const ecosystems: Ecosystem[] = [
  {
    slug: "tech",
    title: "Konfigura Tech",
    subtitle: "Transformasi Digital",
    description:
      "Solusi teknologi modern untuk mendorong transformasi digital dan efisiensi bisnis.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    slug: "farm",
    title: "Konfigura Farm",
    subtitle: "Pertanian Berkelanjutan",
    description:
      "Pengelolaan pertanian dan peternakan berkelanjutan untuk ketahanan pangan nasional.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
  },
  {
    slug: "institute",
    title: "Konfigura Institute",
    subtitle: "Pendidikan Terbuka",
    description:
      "Institusi pendidikan untuk mendidik dan melatih generasi unggul dengan pendekatan praktis.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  },
  {
    slug: "foundation",
    title: "Konfigura Foundation",
    subtitle: "Pemberdayaan Masyarakat",
    description:
      "Fondasi untuk pemberdayaan sosial, pendidikan, dan peningkatan kualitas hidup masyarakat.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
  },
];
