"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ProblemasQueResolvemos = () => {
  const problems = [
    { 
      question: "¿Tu web no convierte?", 
      solution: "La transformamos en una herramienta de venta predecible." 
    },
    { 
      question: "¿Mucho trabajo manual?", 
      solution: "Creamos flujos donde la información se mueve sola." 
    },
    { 
      question: "¿Software que no te sirve?", 
      solution: "Construimos la herramienta que tu proceso específico necesita." 
    }
  ];

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-6">
          No vendemos humo, resolvemos problemas
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Problemas que<br />
          <span className="text-zinc-400">resolvemos todos los días</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-zinc-600 transition-colors"
          >
            <h3 className="text-lg font-bold mb-4 text-zinc-300 leading-snug">{p.question}</h3>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-[#3b82f6] mt-1 shrink-0" />
              <span className="text-zinc-400 text-sm leading-relaxed">{p.solution}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProblemasQueResolvemos;
