import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExecutivesSection } from "@/components/sections/executives-section";
import { SubCommitteeSection } from "@/components/sections/subcommittee-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import { EventsSection } from "@/components/sections/events-section";
import { GallerySection } from "@/components/sections/gallery-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ExecutivesSection />
      <SubCommitteeSection />
      <ProgramsSection />
      <EventsSection />
      <GallerySection />
    </div>
  );
}
