"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const IntellectualProperty = () => {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative p-12 md:p-24 rounded-[3rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5"
      >
        <ShieldCheck className="mx-auto text-[#3b82f6] mb-8" size={48} />
        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Tu Código es tu Capital</h2>
        <p className="text-xl text-zinc-400 leading-relaxed">
          A diferencia de las agencias de marketing o plataformas cerradas, en DesAzar construimos <span className="text-white font-medium">propiedad intelectual</span> para tu empresa. El código, las automatizaciones y los sistemas son activos de tu balance, no una suscripción eterna. Si nosotros desaparecemos, tu sistema sigue funcionando. Eso es control real.
        </p>
      </motion.div>
    </section>
  );
};

export default IntellectualProperty;