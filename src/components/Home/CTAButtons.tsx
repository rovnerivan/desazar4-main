"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CTAButtons = () => {
  const whatsappBase = "https://wa.me/5491172393498?text=";
  
  const manifestoLink = `${whatsappBase}${encodeURIComponent("Hola! Quiero consultar por los servicios de DesAzar Systems. Me interesa leer el Manifiesto y conocer su metodología.")}`;
  const servicesLink = `${whatsappBase}${encodeURIComponent("Hola! Quiero consultar por los servicios de DesAzar Systems. Me interesa conocer sus servicios de ingeniería y desarrollo.")}`;

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight"
        >
          ¿Listo para dejar de apostar?
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Botón Manifiesto */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href={manifestoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-10 py-5 bg-transparent border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:border-[#007AFF]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#007AFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">
                Consultar Manifiesto
              </span >
            </a>
          </motion.div>

          {/* Botón Servicios */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href={servicesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-10 py-5 bg-[#007AFF] rounded-full overflow-hidden shadow-[0_0_30px_rgba(0,122,255,0.3)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,122,255,0.5)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />
              <span className="relative z-10 font-bold text-sm md:text-base uppercase tracking-[0.1em] text-white">
                Conocer Servicios
              </span >
            </a>
          </motion.div>
        </div >
      </div>
    </section>
  );
};

export default CTAButtons;