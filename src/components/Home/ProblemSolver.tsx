"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ProblemSolver = () => {
  const solutions = [
    { q: "¿Tu web no convierte?", a: "La transformamos en una herramienta de venta predecible." },
    { q: "¿Mucho trabajo manual?", a: "Creamos flujos donde la información se mueve sola." },
    { q: "¿Software que no te sirve?", a: "Construimos la herramienta que tu proceso específico necesita." }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 rounded-[2rem] bg-[#3b82f6]/5 border border-[#3b82f6]/10 flex flex-col justify-between"
          >
            <h3 className="text-2xl font-bold mb-6 leading-tight">{s.q}</h3>
            <div className="flex items-center gap-3 text-[#3b82f6]">
              <CheckCircle2 size={20} />
              <span className="font-medium">{s.a}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSolver;