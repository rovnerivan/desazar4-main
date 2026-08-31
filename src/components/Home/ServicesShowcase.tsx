"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Code2 } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  cta: string;
  path: string;
  accentColor: string;
}

const ServiceCard = ({ icon, title, description, details, cta, path, accentColor }: ServiceCardProps) => {
  const Icon = icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-zinc-600 transition-all duration-300 flex flex-col"
    >
      {/* Glow de fondo al hover */}
      <div 
        className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 20%, ${accentColor}15, transparent 60%)` }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icono */}
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
          style={{ backgroundColor: `${accentColor}15` }}
        >
          <Icon size={24} style={{ color: accentColor }} />
        </div>

        {/* Título y descripción */}
        <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
        <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-8 flex-grow">
          {description}
        </p>

        {/* Detalles rápidos */}
        <ul className="space-y-2 mb-8">
          {details.map((detail, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
              <span style={{ color: accentColor }}>✓</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a 
          href={path}
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider hover:opacity-80 transition-opacity"
          style={{ color: accentColor }}
        >
          {cta}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m7 9 3-3 3 3"/></svg>
        </a>
      </div>
    </motion.div>
  );
};

const ServicesShowcase = () => {
  const services: ServiceCardProps[] = [
    {
      icon: Globe,
      title: "Páginas Web",
      description: "Diseñamos y desarrollamos sitios que convierten visitantes en clientes. Desde landing pages hasta plataformas web completas.",
      details: [
        "Landing pages de alta conversión",
        "Sitios corporativos profesionales",
        "Plataformas web con funcionalidades custom"
      ],
      cta: "Ver más →",
      path: "/servicios/web",
      accentColor: "#3b82f6"
    },
    {
      icon: Zap,
      title: "Automatización de Procesos",
      description: "Conectamos tus herramientas y eliminamos el trabajo manual repetitivo. Creamos flujos donde la información se mueve sola.",
      details: [
        "Integración entre CRM, email, facturación",
        "Flujos automáticos de atención al cliente",
        "Dashboard en tiempo real para tu equipo"
      ],
      cta: "Ver más →",
      path: "/servicios/auto",
      accentColor: "#25D366"
    },
    {
      icon: Code2,
      title: "Apps a Medida",
      description: "¿Tu proceso no encaja en ningún software existente? Lo construimos desde cero. Herramientas que trabajan exactamente como necesitás.",
      details: [
        "Sistemas internos para tu operación",
        "MVPs y pruebas de concepto rápidas",
        "Software de propiedad 100% tuya"
      ],
      cta: "Ver más →",
      path: "/servicios/apps",
      accentColor: "#a855f7"
    }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      {/* Header de la sección */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-6">
          Lo que hacemos
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Tres servicios, un objetivo:
          <br />
          <span className="text-zinc-400">que tu negocio funcione sin azar.</span>
        </h2>
      </motion.div>

      {/* Cards de servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesShowcase;
