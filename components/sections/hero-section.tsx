"use client";

import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(215,55%,15%)] via-[hsl(215,50%,28%)] to-[hsl(210,60%,35%)] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="section-container relative z-10 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/80 text-sm font-medium">
            Academic Session 2024/2025
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Akpu Students Union
        </h1>

        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-2xl md:text-3xl font-bold text-white/90">(ASU)</span>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto italic">
          &quot;To Restore the Dignity of Our Ethics&quot;
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("#about")}
            className="min-w-[200px] bg-white text-primary hover:bg-white/90"
          >
            Explore ASU
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#programs")}
            className="min-w-[200px] bg-white text-primary hover:bg-white/90"
          >
            View Programs
          </Button>
        </div>
      </div>
    </section>
  );
};
