"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal leading-tight tracking-wide drop-shadow-sm">
          Happy 53rd <br className="hidden md:block" />
          <span className="text-gold italic drop-shadow-md">Anniversary</span>
        </h1>
        <div className="w-24 h-[1px] bg-gold/50 mx-auto my-8" />
        <p className="font-sans text-sm md:text-lg text-charcoal/70 tracking-[0.3em] uppercase font-light">
          May 10, 1973 &ndash; May 10, 2026
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 64 }}
        transition={{ delay: 2.5, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/0 via-gold/50 to-gold" />
      </motion.div>
    </section>
  );
}
