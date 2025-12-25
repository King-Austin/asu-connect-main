import { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Akpu Students Union (ASU), our mission, history, and the community we serve in Akpu Town, Anambra State.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <AboutSection />
    </div>
  );
}
