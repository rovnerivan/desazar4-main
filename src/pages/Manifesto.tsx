"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Manifesto = () => {
  const whatsappLink = `https://wa.me/5491172393498?text=${encodeURIComponent("Hola! Acabo de leer el Manifiesto de DesAzar y quiero agendar una consulta técnica para mi negocio.")}`;

  // Variantes para animaciones de revelación limpias
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#ededed] selection:bg-[#3b82f6]/30 overflow-x-hidden">
      {/* BACKGROUND: GRID DE INGENIERÍA SUTIL */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <Navbar />

      <main className="relative z-10">
        {/* HERO SECTION: EL FIN DE LA IMPROVISACIÓN */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl"
          >
            El fin de la <span className="text-zinc-500">improvisación.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-24 h-[1px] bg-[#3b82f6]"
          />
        </section>

        {/* BLOQUES DE TEXTO: NARRATIVA DE AUTORIDAD */}
        <section className="max-w-4xl mx-auto px-6 py-32 space-y-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-medium leading-tight text-center"
          >
            "No creemos en la suerte. <br />
            <span className="text-[#3b82f6]">Creemos en los sistemas.</span>"
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-xl md:text-2xl text-zinc-400 leading-relaxed text-center max-w-2xl mx-auto"
          >
            Si los resultados de tu empresa dependen de que hoy sea un "buen día", no tenés un negocio, tenés una apuesta.
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-xl md:text-2xl text-zinc-400 leading-relaxed text-center max-w-2xl mx-auto"
          >
            En DesAzar, transformamos el caos operativo en una estructura sólida, escalable y, sobre todo, predecible a través de herramientas digitales.
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-xl md:text-2xl text-zinc-400 leading-relaxed text-center max-w-2xl mx-auto"
          >
            Diseñamos las consecuencias de tu crecimiento para que dejes de esperar que las cosas pasen y empieces a decidir cómo ocurren.
          </motion.div>
        </section>

        {/* CTA FINAL */}
        <section className="py-32 flex flex-col items-center px-6">
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 bg-transparent border border-[#3b82f6] font-mono text-sm uppercase tracking-[0.3em] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#3b82f6]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 text-[#3b82f6] group-hover:text-white transition-colors duration-300">
              [ AGENDAR CONSULTA TÉCNICA ]
            </span >
          </motion.a>
        </section>
      </main>

      {/* FOOTER: DATOS DE AUTORIDAD */}
      <footer className="relative z-10 w-full border-t border-zinc-900 bg-[#050505] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <div><span className="text-[#3b82f6]">Metodología //</span> Ingeniería de Resultados</div >
            <div><span className="text-[#3b82f6]">Enfoque //</span> Eliminación del Azar Operativo</div >
            <div><span className="text-[#3b82f6]">Entrega //</span> Sistemas de Propiedad del Cliente</div >
          </div >
          <div className="text-zinc-700">
            © {new Date().getFullYear()} DESAZAR SYSTEMS // CONTROL_SISTÉMICO
          </div >
        </div >
      </footer>
    </div>
  );
};

export default Manifesto;