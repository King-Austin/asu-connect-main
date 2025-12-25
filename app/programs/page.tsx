import { Metadata } from "next";
import { ProgramsSection } from "@/components/sections/programs-section";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Discover the programs offered by Akpu Students Union (ASU) including academic excellence, leadership development, and cultural events.",
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <ProgramsSection />
    </div>
  );
}
