import { MapPin, Users, BookOpen, Shield, Heart } from "lucide-react";
import patronImg from "@/assets/image-gallery/CHIEF NKEM EMEKA ONUIGBO, ỤKWỤOMAKPORO ORUMBA (ASU PATRON).jpg";
import patron2Img from "@/assets/image-gallery/PROF STEVE IBENTA (ASU PATRON).jpeg";

const communityBodies = [
  "Akpu Progressive Union (APU)",
  "Akpu Youth Wing",
  "Akpu Students Union (ASU)",
  "Ekenato Women Wing",
  "Ogbuefi Council",
  "Akpu Social Club",
  "Age Grade Council",
  "Akpu Believers",
  "Traditional Believers",
  "Umunna (Villages)",
];

const missionPoints = [
  { icon: BookOpen, text: "Improve learning among Akpu students" },
  { icon: Users, text: "Cultivate camaraderie and unity" },
  { icon: Shield, text: "Protect student welfare" },
  { icon: Heart, text: "Ensure student voices are heard" },
];

const executiveStructure = [
  "President",
  "Vice President",
  "General Secretary",
  "Assistant Secretary",
  "Financial Secretary",
  "Treasurer",
  "Director of Welfare",
  "Director of Social",
  "Academic Coordinator",
  "Provost",
  "Patron / Patroness",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="section-title">Welcome to ASU</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="section-subtitle max-w-3xl mx-auto">
            Akpu Students Union (ASU) is a well-recognized and respected student body representing indigenous students of Akpu Town across various academic institutions and levels of education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* About Akpu Town */}
          <div className="bg-card rounded-xl p-8 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">About Akpu Town</h3>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Akpu Town, also known as Akpujiogu, is one of the indigenous communities in the Orumba region of Anambra State. It is bounded by Ufuma, Nawfija, and Ogboji, and plays host to three communities: Ajalli, Ndiokpalaeze, and Ndiokolo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Akpu is a proud Igbo town with a rich cultural heritage. The town comprises 15 villages and is governed by the traditional ruler <span className="font-semibold text-foreground">Igwe Ezeukwu Akpu</span>, supported by the Onowu, cabinet members, and other recognized traditional institutions.
            </p>
          </div>

          {/* About ASU */}
          <div className="bg-card rounded-xl p-8 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">About ASU</h3>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Akpu Students Union (ASU) is an independent student body operating under the Akpu Town Union. The union brings together Akpu students nationwide, fostering unity, leadership, academic excellence, and community service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              ASU has produced many respected leaders who contribute positively to Akpu Town and society at large. The union serves as a platform for academic development, leadership grooming, cultural preservation, and student welfare.
            </p>
          </div>
        </div>

        {/* Community Bodies, Mission & Executive Structure */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Community Governance Bodies */}
          <div className="bg-secondary/30 rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Community Governance Bodies
            </h3>
            <div className="space-y-2">
              {communityBodies.map((body, index) => (
                <div
                  key={body}
                  className="flex items-center gap-2 text-sm text-muted-foreground animate-slide-up opacity-0"
                  style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "forwards" }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {body}
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Objectives */}
          <div className="bg-primary/5 rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Our Mission & Objectives
            </h3>
            <div className="space-y-4">
              {missionPoints.map((point, index) => (
                <div
                  key={point.text}
                  className="flex items-center gap-4 animate-slide-up opacity-0"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ASU Executive Structure */}
          <div className="bg-card rounded-xl p-8 shadow-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              ASU Executive Structure
            </h3>
            <div className="space-y-2">
              {executiveStructure.map((position, index) => (
                <div
                  key={position}
                  className="flex items-center gap-2 text-sm text-muted-foreground animate-slide-up opacity-0"
                  style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "forwards" }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {position}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Patrons Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-2">ASU Patrons</h3>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Patron 1 */}
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-48 h-48 rounded-full bg-muted border-4 border-primary/30 overflow-hidden shadow-lg">
                  <img
                    src={patronImg}
                    alt="Chief Nkem Emeka Onuigbo - ASU Patron"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Chief Nkem Emeka Onuigbo</h4>
              <p className="text-primary font-semibold mb-2">Ụkwụomakporo Orumba</p>
              <p className="text-sm text-muted-foreground">ASU Patron</p>
            </div>

            {/* Patron 2 */}
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-48 h-48 rounded-full bg-muted border-4 border-primary/30 overflow-hidden shadow-lg">
                  <img
                    src={patron2Img}
                    alt="Prof. Steve Ibenta - ASU Patron"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Prof. Steve Ibenta</h4>
              <p className="text-sm text-muted-foreground">ASU Patron</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
