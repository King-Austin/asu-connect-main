import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View photos and moments from Akpu Students Union (ASU) events and activities.",
};

const galleryImages = [
  {
    id: 1,
    title: "Orientation Week 2024",
    category: "Events",
    description: "New students being welcomed to ASU",
  },
  {
    id: 2,
    title: "Cultural Festival",
    category: "Culture",
    description: "Traditional dance performance",
  },
  {
    id: 3,
    title: "Academic Awards",
    category: "Academics",
    description: "Celebrating excellence in education",
  },
  {
    id: 4,
    title: "Community Service",
    category: "Outreach",
    description: "ASU members giving back to the community",
  },
  {
    id: 5,
    title: "Leadership Summit",
    category: "Leadership",
    description: "Developing future leaders",
  },
  {
    id: 6,
    title: "Sports Day",
    category: "Sports",
    description: "Annual inter-campus sports competition",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Memories
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Photo Gallery
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Capturing moments and memories from ASU events and activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/20">
                    {image.id}
                  </span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-muted-foreground">{image.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
