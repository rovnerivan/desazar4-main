"use client";

import React from 'react';
import { CustomCursor } from '../components/CustomCursor';
import { SmoothScroll } from '../components/SmoothScroll';
import { BackgroundEffects } from '../components/BackgroundEffects';
import Navbar from '../components/Navbar';
import { Hero } from '../components/Hero';

// Nuevas secciones simplificadas
import ServicesShowcase from '../components/Home/ServicesShowcase';
import ProblemasQueResolvemos from '../components/Home/ProblemasQueResolvemos';
import SimpleCTA from '../components/Home/SimpleCTA';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#ededed]">
      <SmoothScroll />
      <CustomCursor />
      <BackgroundEffects />
      <Navbar />
      
      <main>
        {/* 1. HERO — Lo que vendés, claro y directo */}
        <Hero />

        {/* 2. SERVICIOS — Las 3 cards principales (reemplaza propuesta de valor antigua) */}
        <div id="servicios">
          <ServicesShowcase />
        </div>

        {/* 3. PROBLEMAS QUE RESOLVEMOS */}
        <ProblemasQueResolvemos />

        {/* 4. CTA FINAL */}
        <SimpleCTA />

        {/* FOOTER */}
        <footer className="py-12 flex justify-center">
           <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em]">
             © {new Date().getFullYear()} DesAzar Systems // Engineering Certainty
           </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
