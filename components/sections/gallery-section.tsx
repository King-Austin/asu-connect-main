"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery/asu-night-party.jpg",
    caption: "ASU Night Party 2024",
    category: "Events",
  },
  {
    src: "/gallery/teenage-holiday-league.jpg",
    caption: "Akpu Teenagers Holidays League 2025",
    category: "Sports",
  },
  {
    src: "/gallery/asu-cybercafe.jpg",
    caption: "ASU Cyber Café & Business Center",
    category: "Initiatives",
  },
  {
    src: "/gallery/library-day.jpg",
    caption: "ASU Week Program 2025 - Library Day",
    category: "Programs",
  },
  {
    src: "/gallery/computer-training.jpg",
    caption: "Computer Training Workshop",
    category: "Programs",
  },
  {
    src: "/gallery/sporting-event.jpg",
    caption: "Annual Sports Competition",
    category: "Sports",
  },
];

export const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];
  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Memories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Photo Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through captured moments from our various events and activities.
          </p>
        </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-card shadow-md hover:shadow-xl transition-all duration-500"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
                  {image.category}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <p className="text-primary-foreground font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No images found in this category.</p>
          </div>
        )}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-muted/50 text-foreground hover:bg-muted transition-colors z-10"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={24} />
          </button>

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

          <div
            className="max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedIndex].src}
              alt={filteredImages[selectedIndex].caption}
              className="w-full h-full object-contain bg-card"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <div className="bg-card/90 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg">
              <p className="text-foreground font-medium">
                {filteredImages[selectedIndex].caption}
              </p>
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
