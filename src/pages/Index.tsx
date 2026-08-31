"use client";

import React from 'react';
import { CustomCursor } from '../components/CustomCursor';
import { SmoothScroll } from '../components/SmoothScroll';
import { BackgroundEffects } from '../components/BackgroundEffects';
import Navbar from '../components/Navbar';

// Componentes de la página
import CostOfImprovisation from '../components/Home/CostOfImprovisation';
import DiagnosticChecklist from '../components/Home/DiagnosticChecklist';
import IntellectualProperty from '../components/Home/IntellectualProperty';
import CustomEngineering from '../components/Home/CustomEngineering';
import ImpactAreas from '../components/Home/ImpactAreas';
import FrictionAudit from '../components/Home/FrictionAudit';
import Positioning from '../components/Home/Positioning';
import ProblemSolver from '../components/Home/ProblemSolver';
import { Hero } from '../components/Hero';
import CTAButtons from '../components/Home/CTAButtons';

const Index = () => {
  // Función para generar el link de WhatsApp con mensaje personalizado
  const getWhatsAppLink = (context: string) => {
    const base = "https://wa.me/5491172393498?text=";
    const message = encodeURIComponent(`Hola! Quiero consultar por los servicios de DesAzar Systems. Me interesa el área de: ${context}`);
    return `${base}${message}`;
  };

  // Nota: Como CTAButtons es un componente separado, lo ideal sería pasarle la función o 
  // actualizarlo directamente. Voy a actualizar el componente CTAButtons en el siguiente paso.

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#ededed]">
      <SmoothScroll />
      <CustomCursor />
      <BackgroundEffects />
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* SECCIÓN A: EL COSTO DE LA IMPROVISACIÓN */}
        <CostOfImprovisation />

        {/* SECCIÓN B: CHECKLIST DE DIAGNÓSTICO */}
        <DiagnosticChecklist />

        {/* SECCIÓN C: TU CÓDIGO ES TU CAPITAL */}
        <IntellectualProperty />

        {/* NUEVA SECCIÓN: SOLUCIONES A MEDIDA */}
        <CustomEngineering />

        {/* SECCIÓN D: ÁREAS DE IMPACTO */}
        <ImpactAreas />

        {/* SECCIÓN E: AUDITORÍA DE FRICCIÓN */}
        <FrictionAudit />

        {/* SECCIÓN F: LO QUE NO HACEMOS */}
        <Positioning />

        {/* SECCIÓN G: PROBLEMAS QUE RESOLVEMOS */}
        <ProblemSolver />

        {/* BOTONES FINALES CTA - Pasamos la lógica de contexto si fuera necesario, 
            pero para mantener simplicidad y evitar refactorizar todo el árbol, 
            actualizaré el componente CTAButtons directamente. */}
        <CTAButtons />

        <footer className="py-12 flex justify-center">
           <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em]">
             © {new Date().getFullYear()} DesAzar Systems // Engineering Certainty
           </div >
        </footer>
      </main>
    </div>
  );
};

export default Index;