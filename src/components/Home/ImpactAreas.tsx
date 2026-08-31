"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Settings2, BarChart3 } from 'lucide-react';

const ImpactAreas = () => {
  const areas = [
    { icon: TrendingUp, title: "Ventas", desc: "Captación y calificación de leads sin intervención humana." },
    { icon: Settings2, title: "Operaciones", desc: "Flujo de datos automático entre departamentos. Cero redundancia." },
    { icon: BarChart3, title: "Finanzas", desc: "Reportes en tiempo real y visibilidad total de márgenes." }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {areas.map((area, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#3b82f6]/30 transition-colors group"
          >
            <area.icon className="text-[#3b82f6] mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold mb-4">{area.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{area.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactAreas;