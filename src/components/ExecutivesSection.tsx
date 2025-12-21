import { ExecutiveCard } from "./ExecutiveCard";
import presidentImg from "@/assets/image-gallery/Comrade Nwankwo Nzube Timothy -ASU PRESIDENT.jpg";
import vicePresidentImg from "@/assets/image-gallery/Name Okolinwazi Chizoba Jacinta -Position Vice president.jpg";
import generalSecretaryImg from "@/assets/image-gallery/Ike-Ibe Charity Chinyere -General Secretary.jpg";
import financialSecretaryImg from "@/assets/image-gallery/Onuigbo Favour -Financial Secretary.jpg";
import directorWelfareImg from "@/assets/image-gallery/Name Okoli Chibuike Victory -Position Director of welfare.jpg";
import provostImg from "@/assets/image-gallery/Name Okeke Adanne Maryann -Position Provost.jpg";

const executives = [
  {
    name: "Comr. Nwankwo Nzube Timothy",
    position: "President",
    image: presidentImg,
  },
  {
    name: "Comr. Okolinwazi Chizoba Jacinta",
    position: "Vice President",
    image: vicePresidentImg,
  },
  {
    name: "Comr. Ike-Ibe Charity Chinyere",
    position: "General Secretary",
    image: generalSecretaryImg,
  },
  {
    name: "Comr. Onuigbo Favour",
    position: "Financial Secretary",
    image: financialSecretaryImg,
  },
  {
    name: "Comr. Okoli Chibuike Victory",
    position: "Director of Welfare",
    image: directorWelfareImg,
  },
  {
    name: "Comr. Okeke Adanne Maryann",
    position: "Provost",
    image: provostImg,
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
