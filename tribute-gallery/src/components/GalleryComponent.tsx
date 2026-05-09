"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import Image from "next/image";
import Lightbox from "./Lightbox";

interface GalleryComponentProps {
  images: string[];
}

export default function GalleryComponent({ images }: GalleryComponentProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const breakpointColumnsObj = {
    default: 6,
    1536: 5,
    1280: 4,
    1024: 3,
    768: 2,
    640: 2
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const showNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };
  
  const showPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  // Pre-calculate random rotations so they are stable
  const rotations = useMemo(() => {
    return images.map(() => {
      const min = -3;
      const max = 3;
      return Math.floor(Math.random() * (max - min + 1) + min);
    });
  }, [images]);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 py-12 md:px-8">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-8"
        columnClassName="pl-8 bg-clip-padding"
      >
        {images.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: (index % 5) * 0.15 
            }}
            className="mb-10 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div 
              className="relative group rounded-sm overflow-hidden bg-white border-[12px] border-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgb(0,0,0,0.2)] hover:z-20"
              style={{ transform: `rotate(${rotations[index]}deg)` }}
            >
              <img
                src={src}
                alt={`Memory ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 mix-blend-overlay transition-colors duration-500" />
            </div>
          </motion.div>
        ))}
      </Masonry>

      <Lightbox 
        images={images} 
        currentIndex={lightboxIndex} 
        onClose={closeLightbox} 
        onNext={showNext} 
        onPrev={showPrev} 
      />
    </section>
  );
}
