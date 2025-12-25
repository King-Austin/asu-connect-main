const subCommitteeMembers = [
  { name: "Nwafor Amara Favour", image: "/subcommittee/nwafor.jpg" },
  { name: "Okafor Chukwuebuka Emmanuel", image: "/subcommittee/okafor.jpg" },
  { name: "Okeke Francis Chukwuebuka", image: "/subcommittee/okeke.jpg" },
  { name: "Udeh Ozioma Scholastica", image: "/subcommittee/udeh.jpg" },
  { name: "Anayo Somtochukwu Joy", image: "/subcommittee/anayo.jpg" },
];

export const SubCommitteeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-semibold mb-4">
            Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sub-Committee Members
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            The dedicated members working behind the scenes to serve the student body.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {subCommitteeMembers.map((member, index) => (
            <div
              key={member.name}
              className="group text-center animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "forwards" }}
            >
              <div className="relative mb-4 mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-secondary group-hover:border-primary transition-colors duration-300 shadow-card group-hover:shadow-card-hover">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                {member.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
