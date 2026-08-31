"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const DiagnosticChecklist = () => {
  const questions = [
    "¿Tus ventas dependen de que el dueño o una persona clave esté presente?",
    "¿Usás más de 3 herramientas que no se hablan entre sí (copiar y pegar datos)?",
    "¿Te cuesta más de 5 minutos saber exactamente cuánto ganaste ayer?",
    "¿Tus procesos están en la cabeza de la gente y no en un sistema auditable?"
  ];

  return (
    <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight"
        >
          ¿Tu negocio es una <span className="text-[#3b82f6]">estructura</span> o una apuesta?
        </motion.h2>

        <div className="space-y-6">
          {questions.map((q, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="mt-1">
                <CheckCircle2 className="text-zinc-700" size={20} />
              </div>
              <p className="text-lg text-zinc-300">{q}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-[0.2em]">
            Si marcaste más de dos, el azar tiene el control de tu empresa. <br />
            <span className="text-white">Nosotros te lo devolvemos.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticChecklist;