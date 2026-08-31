"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Cpu, Layers } from 'lucide-react';

const CustomEngineering = () => {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative p-12 md:p-20 rounded-[3rem] bg-[#3b82f6]/[0.03] border border-[#3b82f6]/10 overflow-hidden text-center"
      >
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#3b82f6]/20 to-transparent" />
        
        <div className="relative z-10">
          <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] mb-8">Ingeniería de precisión</h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
            ¿Tu desafío no encaja en estas categorías? <br />
            <span className="text-[#3b82f6]">Diseñamos soluciones desde cero.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Si tienes un problema operativo único que las herramientas estándar no pueden resolver, nosotros construimos la arquitectura específica que tu flujo requiere. Sin adaptaciones forzadas, solo ingeniería pura.
          </p>

          <div className="flex flex-wrap justify-center gap-8 opacity-50">
             <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                <Layers size={14} /> Arquitectura Modular
             </div>
             <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                <Cpu size={14} /> Lógica Custom
             </div>
             <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                <Hammer size={14} /> Implementación Directa
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CustomEngineering;