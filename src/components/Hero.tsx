"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Subtítulo superior — LOS 3 SERVICIOS */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-8"
        >
          {['Páginas Web', 'Automatizaciones', 'Apps a Medida'].map((service, i) => (
            <span
              key={service}
              className="font-mono text-[9px] md:text-xs uppercase tracking-[0.4em] text-zinc-400 border border-white/10 px-4 py-2 rounded-full"
            >
              {service}
            </span>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none mb-6"
        >
          Des<span className="text-[#3b82f6] italic">Azar</span>
        </motion.h1>

        {/* Headline principal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-3xl font-medium tracking-tight text-white mb-6 leading-tight"
        >
          Creamos tecnología que elimina el caos operativo.
        </motion.p>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed mb-12"
        >
          Páginas web que convierten, automatizaciones que ahorran tiempo, y software construido a medida para tu negocio. Sin plantillas, sin suscripciones eternas — solo código tuyo.
        </motion.p>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5491172393498?text=Hola!%20Quiero%20consultar%20por%20los%20servicios%20de%20DesAzar."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-[#3b82f6] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            Hablemos por WhatsApp
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m7 9 3-3 3 3"/></svg>
          </a>
        </motion.div>

        {/* Servicios como links rápidos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
        >
          {[
            { label: 'Páginas Web', path: '/servicios/web' },
            { label: 'Automatizaciones', path: '/servicios/auto' },
            { label: 'Apps a Medida', path: '/servicios/apps' }
          ].map((s) => (
            <a
              key={s.label}
              href={s.path}
              className="text-zinc-500 hover:text-[#3b82f6] transition-colors font-mono text-xs uppercase tracking-wider"
            >
              {s.label} →
            </a>
          ))}
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-[#3b82f6]/40 to-transparent pointer-events-none"
      />
    </section>
  );
};
