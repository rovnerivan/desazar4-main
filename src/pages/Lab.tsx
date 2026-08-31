"use client";
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WebWorldInteraction from '../components/WebWorldInteraction';
import EfficiencyEngine from '../components/EfficiencyEngine';
import SystemsMetaphor from '../components/SystemsMetaphor';
import { BrainCircuit, ArrowDown } from 'lucide-react';
import Navbar from '../components/Navbar';

interface LabSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  onExplore?: () => void;
  exploreText?: string;
  color?: string;
}

const LabSection = ({ title, subtitle, children, onExplore, exploreText, color = "#007AFF" }: LabSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6 relative border-b border-white/5 last:border-none">
      {/* Header de la sección */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 z-10"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 block mb-2">{subtitle}</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{title}</h2>
      </motion.div>

      {/* Contenedor de la Experiencia */}
      <div className="w-full max-w-5xl aspect-video md:aspect-[21/9] relative flex items-center justify-center overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl group">
        {/* Glow de fondo que reacciona al hover */}
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40"
          style={{ background: `radial-gradient(circle at center, ${color}22, transparent 70%)` }}
        />
        
        <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
          {children}
        </div >
      </div>

      {/* Botón de acción o indicador */}
      <div className="mt-12 z-10">
        {onExplore ? (
          <button
            onClick={onExplore}
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:bg-[#007AFF] hover:text-white hover:border-[#007AFF] transition-all duration-500"
          >
            {exploreText}
            <span className="group-hover:translate-x-1 transition-transform">→</span >
          </button>
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-30">
            <span className="text-[8px] font-mono uppercase tracking-[0.2em]">Scroll para siguiente sistema</span>
            <ArrowDown size={16} className="animate-bounce" />
          </div >
        )}
      </div >
    </section>
  );
};

const Lab = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed]">
      <Navbar />
      
      {/* Hero de la página Lab */}
      <header className="pt-40 pb-20 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/20 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#007AFF] animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#007AFF]">Entorno de Pruebas Activo</span>
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">DesAzar <span className="text-zinc-500">Lab</span></h1>
        <p className="text-zinc-500 max-w-xl mx-auto text-sm md:text-base font-light">
          Explora nuestras capacidades tecnológicas a través de simulaciones interactivas. 
          Cada módulo representa un pilar de nuestra infraestructura digital.
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* 1. DesAzar Web */}
        <LabSection 
          title="DesAzar Web" 
          subtitle="Protocolo de Despliegue"
          color="#007AFF"
          onExplore={() => navigate('/lab/web')}
          exploreText="Ver Experiencia Web"
        >
          <WebWorldInteraction />
        </LabSection>

        {/* 2. DesAzar Auto */}
        <LabSection 
          title="DesAzar Auto" 
          subtitle="Motor de Automatización"
          color="#25D366"
          onExplore={() => navigate('/lab/auto')}
          exploreText="Ver Experiencia Auto"
        >
          <EfficiencyEngine />
        </LabSection>

        {/* 3. DesAzar Sistemas */}
        <LabSection 
          title="DesAzar Sistemas" 
          subtitle="Arquitectura de Datos"
          color="#3b82f6"
          onExplore={() => navigate('/systems')}
          exploreText="Ver Experiencia Sistemas"
        >
           <SystemsMetaphor />
        </LabSection>

        {/* 4. DesAzar IA (Placeholder) */}
        <LabSection 
          title="DesAzar IA" 
          subtitle="Inteligencia Predictiva"
          color="#a855f7"
        >
           <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-4">
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute w-32 h-32 md:w-64 md:h-64 bg-purple-500/20 blur-[60px] rounded-full"
              />
              <motion.div 
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute w-24 h-24 md:w-48 md:h-48 bg-blue-500/20 blur-[40px] rounded-full"
              />
              <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                 <BrainCircuit size={48} className="text-purple-400 opacity-80" />
                 <p className="text-[10px] md:text-xs font-mono text-purple-200/70 uppercase tracking-widest max-w-[250px] leading-tight">
                   Descubriendo lo que a simple vista no ves, pero ya tienes en tu negocio
                 </p>
              </div >
           </div >
        </LabSection>
      </main>

      <footer className="py-24 flex justify-between items-center border-t border-white/5 px-6 max-w-7xl mx-auto">
         <Link to="/" className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-[#007AFF] transition-colors">
           [ Volver al Sistema ]
         </Link>
         <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em]">
           Lab_Environment // v.2.0.4
         </div >
      </footer>
    </div>
  );
};

export default Lab;