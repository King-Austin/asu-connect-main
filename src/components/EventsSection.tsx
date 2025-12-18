const events = [
  {
    title: "Annual ASU Night Party",
    year: "28th December",
    caption: "The grand annual celebration bringing together Akpu students for an unforgettable night of entertainment, networking, and community bonding.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    title: "Mentorship Programs",
    year: "Annual",
    caption: "Leadership mentorship initiatives connecting experienced professionals with students for career guidance and personal development.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
  },
  {
    title: "Academic & Skill-Based Trainings",
    year: "Ongoing",
    caption: "Comprehensive training programs including computer skills, public speaking, and professional development workshops.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
  },
  {
    title: "Cultural and Social Events",
    year: "Various",
    caption: "Celebrating Igbo heritage through cultural festivals, traditional performances, and community gatherings.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
  },
];

export const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-semibold mb-4">
            Highlights
          </span>
          <h2 className="section-title">Events & Highlights</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="section-subtitle">
            Discover our impactful events that bring the ASU community together.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-500 animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Year Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-semibold">
                  {event.year}
                </span>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {event.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {event.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
