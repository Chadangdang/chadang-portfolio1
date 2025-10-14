import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { FooterSection } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ServicesSection } from "@/components/sections/services";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
