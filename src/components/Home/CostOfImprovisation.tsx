"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CostOfImprovisation = () => {
  const stats = [
    { label: "Fuga de Tiempo", value: "40%", desc: "de la jornada se pierde en tareas manuales." },
    { label: "Margen de Error", value: "3%", desc: "promedio en traspaso manual de datos." },
    { label: "Costo de Oportunidad", value: "80%", desc: "caída de conversión si el lead no se atiende rápido." }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-l border-[#3b82f6] pl-8 mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
          La improvisación no es gratis.<br />
          <span className="text-zinc-500">Es el impuesto que pagás por no tener un sistema.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="space-y-4"
          >
            <div className="text-[#3b82f6] text-5xl md:text-7xl font-bold tracking-tighter">
              {stat.value}
            </div>
            <div>
              <h3 className="text-lg font-semibold uppercase tracking-widest">{stat.label}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{stat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <p className="text-xl md:text-2xl font-medium italic text-zinc-300">
          "No instalamos herramientas. Tapamos los agujeros por donde se escapa tu rentabilidad."
        </p>
      </motion.div>
    </section>
  );
};

export default CostOfImprovisation;