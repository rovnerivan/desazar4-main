"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EfficiencyEngine from '../components/EfficiencyEngine';
import { Settings, Cpu, Activity, CheckCircle2, Terminal, ShieldAlert, BarChart3, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';

const AutoExperience = () => {
  const navigate = useNavigate();
  const whatsappLink = `https://wa.me/5491172393498?text=${encodeURIComponent("Hola! Estoy viendo la experiencia de DesAzar Auto y quiero consultar por automatizar mis procesos operativos.")}`;

  // Variants for consistent animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] overflow-x-hidden">
      {/* Header de Navegación */}
      <nav className="fixed top-0 w-full z-[110] p-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#25D366]">
          <Activity size={14} />
          <span className="animate-pulse">NÚCLEO_DE_AUTOMATIZACIÓN_ACTIVO</span>
        </div >
        <button 
          onClick={() => navigate('/lab')}
          className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors cursor-pointer"
        >
          [ Volver al Lab ]
        </button>
      </nav>

      <Navbar />

      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* 1. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
              Autonomía <br />
              <span className="text-[#25D366]">del Sistema.</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed mb-8">
              Eliminamos la intervención humana en procesos repetitivos, transformando el caos operativo en un flujo constante de resultados.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Settings, label: "Configuración" },
                { icon: Cpu, label: "Procesamiento" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  <item.icon size={14} className="text-[#25D366]" />
                  {item.label}
                </div >
              ))}
            </div >
          </motion.div>

          {/* El Componente de Interacción (Motor Industrial) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square md:aspect-video lg:aspect-square w-full max-w-[500px] mx-auto bg-[#0a0a0a] rounded-3xl border border-[#25D366]/20 shadow-[0_0_50px_rgba(37,211,102,0.1)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-8 bg-zinc-900/50 border-b border-[#25D366]/10 flex items-center px-4 gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#25D366]/50" />
              <span className="ml-4 text-[8px] font-mono text-[#25D366]/50 uppercase tracking-widest">Motor_Industrial_v4.0</span>
            </div >
            <div className="absolute inset-0 pt-8 flex items-center justify-center">
               <EfficiencyEngine />
            </div >
          </motion.div>
        </div>

        {/* 2. CORE SECTION: INGENIERÍA DE FLUJOS (BACKBONE) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-40 relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#25D366] to-transparent opacity-30 hidden md:block" />
          
          <div className="md:pl-12">
            <div className="flex items-center gap-3 mb-8 text-[#25D366]">
              <Terminal size={28} />
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">Ingeniería de Flujos (Backbone Operativo)</h2>
            </div >

            <div className="space-y-8 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-4xl">
              <p>
                La automatización en DesAzar no es simplemente <span className="text-white font-medium">"conectar aplicaciones"</span>; es rediseñar la médula espinal de tu operación. 
              </p>
              <p>
                Realizamos una <span className="text-[#25D366] font-medium">Auditoría de Fricción</span> para detectar exactamente dónde tu equipo está perdiendo horas en tareas mecánicas que una máquina ejecuta con mayor precisión. Construimos flujos de trabajo inteligentes utilizando <span className="text-white font-medium">Python y lógica avanzada</span> para que la información no solo se mueva, sino que se procese con intención.
              </p>
              <p>
                Diseñamos desde Pruebas de Concepto para automatizar tareas críticas inmediatas, hasta sistemas de backend complejos que gestionan facturación, logística y atención al cliente sin que nadie tenga que tocar un botón. 
              </p>
              <div className="p-6 rounded-2xl bg-[#25D366]/5 border border-[#25D366]/20 italic text-zinc-300">
                "El objetivo es que tu talento piense y tu sistema ejecute."
              </div>
            </div >
          </div>
        </motion.section>

        {/* 3. MÓDULOS DEL SISTEMA (INTEGRACIÓN, LÓGICA, MONITOREO) */}
        <section className="mb-40">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center tracking-tight">Módulos de <span className="text-[#25D366]">Control Operativo</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Integración */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#25D366]/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold">Integración</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Hacemos que tu ecosistema digital hable el mismo idioma. Eliminamos los silos de información y nos aseguramos de que cada dato capturado en un punto de la empresa se replique instantáneamente donde se necesita.
              </p>
              <div className="text-[10px] font-mono text-[#25D366]/50 uppercase tracking-widest">
                Status: Sync_Active
              </div>
            </motion.div>

            {/* Lógica */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#25D366]/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <Settings size={28} />
                </div>
                <h3 className="text-xl font-bold">Lógica</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                No creamos secuencias lineales simples. Diseñamos sistemas con ramificaciones lógicas capaces de tomar decisiones basadas en condiciones específicas, asegurando la máxima eficiencia según el contexto.
              </p>
              <div className="text-[10px] font-mono text-[#25D366]/50 uppercase tracking-widest">
                Engine: Decision_Logic_v2
              </div>
            </motion.div>

            {/* Monitoreo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#25D366]/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <BarChart3 size={28} />
                </div>
                <h3 className="text-xl font-bold">Monitoreo</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Lo que no se mide, no se controla. Te entregamos un panel de control donde podés ver en tiempo real cuántas tareas está ejecutando tu sistema y el tiempo ahorrado.
              </p>
              <div className="text-[10px] font-mono text-[#25D366]/50 uppercase tracking-widest">
                Telemetry: RealTime_Stream
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. FINAL CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="py-32 text-center rounded-[3rem] bg-gradient-to-b from-[#25D366]/10 to-transparent border border-[#25D366]/20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">¿Querés que tu negocio trabaje por vos?</h2>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,211,102,0.4)]"
          >
            Automatizar mi operación
            <Zap className="group-hover:animate-pulse" size={20} />
          </a>
        </motion.section>
      </main>
    </div >
  );
};

export default AutoExperience;