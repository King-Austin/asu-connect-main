import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover upcoming and past events organized by Akpu Students Union (ASU). Join us in celebrating culture, academic excellence, and community.",
};

const events = [
  {
    slug: "orientation-week-2024",
    title: "Orientation Week 2024",
    date: "2024-09-15",
    location: "ASU Main Hall",
    attendees: 150,
    status: "past",
  },
  {
    slug: "cultural-festival-2024",
    title: "Akpu Cultural Festival 2024",
    date: "2024-12-20",
    location: "Akpu Town Square",
    attendees: 300,
    status: "upcoming",
  },
  {
    slug: "academic-excellence-awards",
    title: "Academic Excellence Awards",
    date: "2025-03-10",
    location: "ASU Convention Center",
    attendees: 200,
    status: "upcoming",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Events
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ASU Events
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Join us at our upcoming events and stay connected with the ASU community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link key={event.slug} href={`/events/${event.slug}`}>
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.status === "upcoming"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {event.status === "upcoming" ? "Upcoming" : "Past Event"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-4">{event.title}</h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {event.attendees}+ attendees
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-primary font-medium">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
