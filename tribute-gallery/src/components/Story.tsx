"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="w-full max-w-4xl mx-auto px-8 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="space-y-10"
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal/90 leading-relaxed italic drop-shadow-sm">
          &ldquo;Thank you for always bringing smiles to the face of everyone.&rdquo;
        </h2>
        
        <div className="flex justify-center items-center gap-4 py-6">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold" />
          <div className="w-2 h-2 rotate-45 bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold" />
        </div>
        
        <div className="space-y-6 px-4 md:px-12">
          <p className="font-sans text-lg md:text-xl text-charcoal/80 leading-loose font-light">
            Can&apos;t believe it has been 3 years since the 50th anniversary — it felt like it was just yesterday. Time flies so fast... I won&apos;t be able to come there and celebrate with you, but I hope your children won&apos;t do one more drama, but if they do, please enjoy it with popcorn! 😂
          </p>
        </div>
      </motion.div>
    </section>
  );
}
