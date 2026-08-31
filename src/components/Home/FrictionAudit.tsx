"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Clock, Target } from 'lucide-react';

const FrictionAudit = () => {
  const leaks = [
    { icon: Database, title: "Fuga de Datos", desc: "Información perdida en chats, mails y papeles." },
    { icon: Clock, title: "Fuga de Tiempo", desc: "Talento humano desperdiciado en procesos mecánicos." },
    { icon: Target, title: "Fuga de Certeza", desc: "La imposibilidad de predecir el próximo mes." }
  ];

  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-20 text-center"
        >
          Detectamos y eliminamos las tres <br />
          <span className="text-[#3b82f6]">fugas de energía</span> de tu negocio.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leaks.map((leak, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center space-y-4"
            >
              <div className="inline-flex p-4 rounded-full bg-[#3b82f6]/5 text-[#3b82f6] mb-4">
                <leak.icon size={32} />
              </div>
              <h3 className="text-xl font-bold">{leak.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{leak.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrictionAudit;