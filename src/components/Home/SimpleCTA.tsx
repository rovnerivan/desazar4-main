"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SimpleCTA = () => {
  const whatsappLink = "https://wa.me/5491172393498?text=Hola!%20Quiero%20consultar%20por%20los%20servicios%20de%20DesAzar.";

  return (
    <section className="py-32 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          ¿Hablamos?
        </h2>
        <p className="text-zinc-400 text-lg mb-12 max-w-md mx-auto leading-relaxed">
          Contanos qué necesitás y te decimos cómo podemos ayudarte. Sin compromiso.
        </p>

        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 bg-[#3b82f6] text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]"
        >
          Hablemos por WhatsApp
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m7 9 3-3 3 3"/></svg>
        </a>
      </motion.div>
    </section>
  );
};

export default SimpleCTA;
