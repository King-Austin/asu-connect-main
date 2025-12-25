import { BookOpen, Users, Heart, Calendar, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const programs = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Workshops, seminars, and mentorship programs to enhance academic performance and career development.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description:
      "Training and opportunities for students to develop leadership skills and take on responsibilities.",
  },
  {
    icon: Heart,
    title: "Welfare & Support",
    description:
      "Support systems for student welfare including financial assistance and counseling services.",
  },
  {
    icon: Calendar,
    title: "Cultural Events",
    description:
      "Celebration of Akpu culture through festivals, traditional events, and community gatherings.",
  },
  {
    icon: Award,
    title: "Awards & Recognition",
    description:
      "Recognition of outstanding students and alumni who excel in academics and community service.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description:
      "Platform for students to showcase innovative ideas and entrepreneurial ventures.",
  },
];

export const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            ASU offers a wide range of programs designed to support student development,
            academic excellence, and cultural preservation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <Card
                key={program.title}
                className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
