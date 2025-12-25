import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

// Example events data (in production, fetch from API/CMS)
const events = [
  {
    slug: "orientation-week-2024",
    title: "Orientation Week 2024",
    date: "2024-09-15",
    time: "10:00 AM",
    location: "ASU Main Hall, Akpu Town",
    description:
      "Welcome new students to ASU with a comprehensive orientation program covering academic expectations, cultural heritage, and community values.",
    attendees: 150,
    image: "/events/orientation.jpg",
  },
  {
    slug: "cultural-festival-2024",
    title: "Akpu Cultural Festival 2024",
    date: "2024-12-20",
    time: "2:00 PM",
    location: "Akpu Town Square",
    description:
      "Annual celebration of Akpu culture featuring traditional dances, music, cuisine, and recognition of outstanding students and community members.",
    attendees: 300,
    image: "/events/cultural-festival.jpg",
  },
  {
    slug: "academic-excellence-awards",
    title: "Academic Excellence Awards",
    date: "2025-03-10",
    time: "4:00 PM",
    location: "ASU Convention Center",
    description:
      "Recognizing and rewarding students who have excelled academically and contributed to the community.",
    attendees: 200,
    image: "/events/awards.jpg",
  },
];

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: event.title,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: "article",
      publishedTime: event.date,
      images: [event.image],
    },
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardContent className="p-0">
              <div className="h-64 md:h-96 bg-gradient-to-br from-primary to-primary/70 rounded-t-xl flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                  {event.title}
                </h1>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-semibold">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-semibold">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Expected Attendees</p>
                      <p className="font-semibold">{event.attendees}+ people</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {event.description}
                  </p>
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    For more information or to RSVP, please contact the ASU secretariat
                    at <span className="font-semibold">info@asuconnect.org</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
