import { ExecutiveCard } from "@/components/executive-card";

const executives = [
  {
    name: "Nwankwo Nzube Timothy",
    position: "President",
    image: "/executives/president.jpg",
  },
  {
    name: "Okolinwazi Chizoba Jacinta",
    position: "Vice President",
    image: "/executives/vice-president.jpg",
  },
  {
    name: "Ike-Ibe Charity Chinyere",
    position: "General Secretary",
    image: "/executives/general-secretary.jpg",
  },
  {
    name: "Onuigbo Favour",
    position: "Financial Secretary",
    image: "/executives/financial-secretary.jpg",
  },
  {
    name: "Okoli Chibuike Victory",
    position: "Director of Welfare",
    image: "/executives/director-welfare.jpg",
  },
  {
    name: "Okeke Adanne Maryann",
    position: "Provost",
    image: "/executives/provost.jpg",
  },
];

export const ExecutivesSection = () => {
  return (
    <section id="executives" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            ASU Executives 2024/2025
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Meet the dedicated leaders steering the Akpu Students Union towards excellence and student empowerment.
          </p>
        </div>

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
