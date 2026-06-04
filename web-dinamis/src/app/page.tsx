import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EcosystemSection from "@/components/EcosystemSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

// 🔥 TAMBAHKAN BARIS INI: Memaksa Next.js membaca database secara live di AWS EC2
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EcosystemSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}