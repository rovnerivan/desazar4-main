"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

const Positioning = () => {
  const points = [
    { title: "No hacemos trucos", text: "No prometemos 'magia' ni resultados de la noche a la mañana." },
    { title: "No alquilamos software", text: "Lo que construimos te pertenece legal y técnicamente." },
    { title: "No improvisamos", text: "Cada línea de código tiene un porqué financiero y operativo." }
  ];

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Nada enlatado, <br /><span className="text-zinc-500">buscamos lo que funciona.</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {points.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5"
          >
            <XCircle className="text-red-500 shrink-0" size={32} />
            <div>
              <h3 className="text-xl font-bold mb-1">{p.title}</h3>
              <p className="text-zinc-400">{p.text}</p>
            </div >
          </motion.div>
        ))}
      </div >
    </section>
  );
};

export default Positioning;