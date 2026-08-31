import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ManifestoProps {
  text: string;
}

export const CinematicManifesto = ({ text }: ManifestoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(' ');

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tighter">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="cursor-default hover:text-primary transition-colors duration-300"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </section>
  );
};
