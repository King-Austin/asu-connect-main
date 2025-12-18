const subCommitteeMembers = [
  { name: "Comr. Nwafor Amara Favour", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face" },
  { name: "Comr. Okafor Chukwuebuka Emmanuel", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face" },
  { name: "Comr. Okeke Francis Chukwuebuka", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face" },
  { name: "Comr. Udeh Ozioma Scholastica", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face" },
  { name: "Comr. Anayo Somtochukwu Joy", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face" },
];

export const SubCommitteeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-semibold mb-4">
            Team
          </span>
          <h2 className="section-title">Sub-Committee Members</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="section-subtitle">
            The dedicated members working behind the scenes to serve the student body.
          </p>
        </div>

        {/* Members Grid */}
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
