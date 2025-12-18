import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    caption: "ASU Night Party 2024",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1559223607-180d0c16a87b?w=800&h=600&fit=crop",
    caption: "Mr & Miss ASU Winner 2024",
    category: "Awards",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
    caption: "ASU Mentorship Program & Tournament (August 2025)",
    category: "Programs",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    caption: "ASU Executives with Igwe Ezeukwu II",
    category: "Leadership",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    caption: "Easter Symposium Health Personnel (April 2024)",
    category: "Programs",
  },
  {
    src: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&h=600&fit=crop",
    caption: "ASU Cyber Café & Global Enterprise (CAC)",
    category: "Initiatives",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    caption: "Graduating Pupils of Nkem Emeka Onuigbo Nursery & Primary School",
    category: "Education",
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    caption: "ASU Cultural Event",
    category: "Culture",
  },
];

export const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Memories
          </span>
          <h2 className="section-title">Photo Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="section-subtitle max-w-2xl mx-auto">
            Browse through captured moments from our various events and activities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-card shadow-md hover:shadow-xl transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "forwards" }}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
                  {image.category}
                </span>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <p className="text-primary-foreground font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-muted/50 text-foreground hover:bg-muted transition-colors z-10"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={24} />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 md:left-8 p-3 rounded-full bg-muted/50 text-foreground hover:bg-muted transition-colors z-10"
            onClick={handlePrev}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute right-4 md:right-8 p-3 rounded-full bg-muted/50 text-foreground hover:bg-muted transition-colors z-10"
            onClick={handleNext}
          >
            <ChevronRight size={28} />
          </button>

          {/* Image Container */}
          <div 
            className="max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedIndex].src}
              alt={filteredImages[selectedIndex].caption}
              className="w-full h-full object-contain bg-card"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <div className="bg-card/90 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg">
              <p className="text-foreground font-medium">{filteredImages[selectedIndex].caption}</p>
              <p className="text-muted-foreground text-sm mt-1">
                {selectedIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
