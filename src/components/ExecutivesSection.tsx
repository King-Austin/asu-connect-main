import { ExecutiveCard } from "./ExecutiveCard";

const executives = [
  {
    name: "Comr. Nwankwo Nzube Timothy",
    position: "President",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Comr. Okolinwazi Chizoba Jacinta",
    position: "Vice President",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Comr. Ike-Ibe Charity Chinyere",
    position: "General Secretary",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Comr. Onuigbo Favour",
    position: "Financial Secretary",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Comr. Okoli Chibuike Victory",
    position: "Director of Welfare",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Comr. Okeke Adanne Maryann",
    position: "Provost",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

export const ExecutivesSection = () => {
  return (
    <section id="executives" className="py-20 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Leadership
          </span>
          <h2 className="section-title">ASU Executives 2024/2025</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="section-subtitle">
            Meet the dedicated leaders steering the Akpu Students Union towards excellence and student empowerment.
          </p>
        </div>

        {/* Executives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {executives.map((exec, index) => (
            <div
              key={exec.name}
              className="animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <ExecutiveCard {...exec} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
