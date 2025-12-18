import { Calendar, BookOpen, Trophy, PartyPopper, GraduationCap, Monitor } from "lucide-react";

const pastPrograms2024 = [
  {
    title: "Easter Symposium",
    month: "April 2024",
    description: "Public Health Enlightenment & Administration awareness program.",
    icon: BookOpen,
  },
  {
    title: "Online Mastermind Fiesta",
    month: "July 2024",
    description: "Online Quiz competition on Akpu History.",
    icon: GraduationCap,
  },
  {
    title: "Free Computer Training",
    month: "October 2024",
    description: "One-month intensive computer training for students.",
    icon: Monitor,
  },
  {
    title: "ASU Night Party",
    month: "December 28, 2024",
    description: "Annual end-of-year celebration and gathering.",
    icon: PartyPopper,
  },
];

const programs2025 = [
  {
    title: "ASU One-Month Program",
    month: "April 2025",
    description: "Extended student development and engagement program.",
    icon: Calendar,
  },
  {
    title: "Mentorship Program & Football Tournament",
    month: "August 2025",
    description: "Leadership mentorship combined with sports competition.",
    icon: Trophy,
  },
  {
    title: "ASU One-Week Program",
    month: "December 22-28, 2025",
    description: "Week-long series of activities and events.",
    icon: Calendar,
  },
  {
    title: "ASU Night Party",
    month: "December 28, 2025",
    description: "Annual celebration to close the year.",
    icon: PartyPopper,
  },
];

const currentPrograms = [
  {
    title: "ASU Library Day",
    date: "December 23, 2025",
    description: "A day dedicated to reading, learning, and academic excellence for all ASU members.",
    isCurrent: true,
  },
  {
    title: "ASU Night Party",
    date: "December 28, 2025",
    description: "The grand annual celebration bringing together all Akpu students for an unforgettable night.",
    isCurrent: false,
  },
];

export const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Calendar
          </span>
          <h2 className="section-title">Programs & Activities</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="section-subtitle">
            Explore our lineup of events and programs designed to enrich student life and foster community.
          </p>
        </div>

        {/* Current Programs Highlight */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            Present ASU Programs (2025)
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {currentPrograms.map((program) => (
              <div
                key={program.title}
                className={`relative overflow-hidden rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ${
                  program.isCurrent
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border"
                }`}
              >
                {program.isCurrent && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary-foreground/20 rounded-full text-xs font-semibold">
                    Current Program
                  </span>
                )}
                <h4 className="text-xl font-bold mb-2">{program.title}</h4>
                <p className={`text-sm font-medium mb-3 ${program.isCurrent ? "text-primary-foreground/80" : "text-primary"}`}>
                  {program.date}
                </p>
                <p className={program.isCurrent ? "text-primary-foreground/90" : "text-muted-foreground"}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs 2025 */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-foreground mb-6">Programs 2025</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs2025.map((program, index) => (
              <div
                key={program.title}
                className="group bg-card rounded-xl p-6 border border-primary/20 hover:border-primary shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <program.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {program.title}
                </h4>
                <p className="text-primary font-medium text-sm mb-3">{program.month}</p>
                <p className="text-muted-foreground text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Programs 2024 */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-6">Past Programs (2024)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastPrograms2024.map((program, index) => (
              <div
                key={program.title}
                className="group bg-card/50 rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 animate-slide-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <program.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="text-base font-bold text-foreground mb-1">
                  {program.title}
                </h4>
                <p className="text-muted-foreground font-medium text-sm mb-2">{program.month}</p>
                <p className="text-muted-foreground text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
