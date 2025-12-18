import { Button } from "@/components/ui/button";
export const HeroSection = () => {
  const scrollToExecutives = () => {
    const element = document.querySelector("#executives");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary-foreground/5 animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-primary-foreground/5 animate-float" style={{
      animationDelay: "1s"
    }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-primary-foreground/5 animate-float" style={{
      animationDelay: "2s"
    }} />

      <div className="section-container relative z-10 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-primary-foreground/80 text-sm font-medium">
            Academic Session 2024/2025
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up">
          Akpu Students Union
        </h1>
        
        {/* Acronym */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-slide-up stagger-1">
          <span className="text-2xl md:text-3xl font-bold text-primary-foreground/90">(ASU)</span>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto animate-slide-up stagger-2 italic">
          "To Restore the Dignity of Our Ethics"
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-3">
          <Button variant="hero" size="xl" onClick={scrollToExecutives} className="min-w-[200px]">
            Explore ASU
          </Button>
          <Button variant="hero-outline" size="xl" onClick={() => document.querySelector("#programs")?.scrollIntoView({
          behavior: "smooth"
        })} className="min-w-[200px]">
            View Programs
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button onClick={scrollToExecutives} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            
          </button>
        </div>
      </div>
    </section>;
};