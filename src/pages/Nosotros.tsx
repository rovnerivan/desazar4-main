"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Nosotros = () => {
  const whatsappLink = "https://wa.me/5491172393498?text=Hola!%20Acabo%20de%20leer%20sobre%20DesAzar%20y%20quiero%20agendar%20una%20consulta.";

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#ededed] overflow-x-hidden">
      {/* Fondo sutil */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
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
        {/* Hero */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center pt-32">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            El fin de la <span className="text-zinc-500">improvisación.</span>
          </motion.h1>
          <div className="w-24 h-[1px] bg-[#3b82f6]" />
        </section>

        {/* Contenido */}
        <section className="max-w-3xl mx-auto px-6 py-32 space-y-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-xl md:text-2xl font-medium leading-tight text-center"
          >
            No creemos en la suerte.<span className="text-[#3b82f6]"> Creemos en los sistemas.</span>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed"
          >
            Si los resultados de tu empresa dependen de que hoy sea un "buen día", no tenés un negocio, tenés una apuesta. En DesAzar transformamos el caos operativo en estructuras sólidas, escalables y predecibles a través de tecnología.
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed"
          >
            Diseñamos páginas web que convierten, automatizamos procesos que roban tiempo y construimos software que trabaja exactamente como necesitás vos — no como lo impone un programa genérico.
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed"
          >
            Lo que construimos es tuyo. Código fuente, automatizaciones, sistemas — todo propiedad de tu empresa. No somos una agencia que te alquila herramientas y cobra suscripción eterna. Somos tus ingenieros de certidumbre.
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed italic p-8 border-l-2 border-[#3b82f6]"
          >
            Diseñamos las consecuencias de tu crecimiento para que dejes de esperar que las cosas pasen y empieces a decidir cómo ocurren.
          </motion.div>
        </section>

        {/* CTA */}
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
              [ AGENDAR CONSULTA ]
            </span>
          </motion.a>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-zinc-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <span><span className="text-[#3b82f6]">Metodología</span> // Ingeniería de Resultados</span>
            <span><span className="text-[#3b82f6]">Enfoque</span> // Eliminación del Azar Operativo</span>
          </div>
          <div className="text-zinc-700">
            © {new Date().getFullYear()} DESAZAR SYSTEMS
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Nosotros;
