"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface GalleryProps {
  images: string[];
  alt: string;
}

export const Gallery = ({ images, alt }: GalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="rounded-lg border overflow-hidden bg-card">
      {/* Main Image */}
      <div className="relative w-full h-80 md:h-[420px] bg-muted">
        <Image
          src={images[selectedIndex]}
          alt={`${alt} ${selectedIndex + 1}`}
          fill
          className="object-cover"
          priority={selectedIndex === 0}
          unoptimized
          crossOrigin="anonymous"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="p-4 border-t bg-background">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`relative h-20 rounded-md overflow-hidden transition-all ${
                selectedIndex === i
                  ? "ring-2 ring-primary ring-offset-2 scale-105"
                  : "hover:opacity-75"
              }`}
            >
              <Image
                src={src}
                alt={`${alt} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                unoptimized
                crossOrigin="anonymous"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};