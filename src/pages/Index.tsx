import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExecutivesSection } from "@/components/ExecutivesSection";
import { SubCommitteeSection } from "@/components/SubCommitteeSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { EventsSection } from "@/components/EventsSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExecutivesSection />
        <SubCommitteeSection />
        <ProgramsSection />
        <EventsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
