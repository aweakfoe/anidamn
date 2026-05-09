"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface LightboxProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "Escape") onClose();
    },
    [currentIndex, onNext, onPrev, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (currentIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/80"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-parchment/70 hover:text-white transition-all hover:rotate-90 focus:outline-none hover:scale-110"
          aria-label="Close lightbox"
        >
          <X className="w-10 h-10 drop-shadow-md" />
        </button>

        <button
          onClick={onPrev}
          className="absolute left-4 md:left-12 z-50 text-parchment/70 hover:text-white transition-transform hover:-translate-x-2 focus:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-14 h-14 drop-shadow-md" />
        </button>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)", position: "absolute" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-full max-w-6xl h-[85vh] px-16 flex items-center justify-center"
        >
          <div className="relative w-full h-full border-[16px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.4)] bg-white rounded-sm overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt={`Tribute Gallery Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </motion.div>

        <button
          onClick={onNext}
          className="absolute right-4 md:right-12 z-50 text-parchment/70 hover:text-white transition-transform hover:translate-x-2 focus:outline-none"
          aria-label="Next image"
        >
          <ChevronRight className="w-14 h-14 drop-shadow-md" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
