"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import WebWorldInteraction from '../components/WebWorldInteraction';
import { Terminal, Globe, ShieldCheck, Zap, Settings2, Code2, ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';

const WebExperience = () => {
  const navigate = useNavigate();
  const whatsappLink = `https://wa.me/5491172393498?text=${encodeURIComponent("Hola! Estoy viendo la experiencia de DesAzar Web y quiero consultar por el despliegue de mi propia infraestructura digital.")}`;

  // Variants for consistent animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] overflow-x-hidden">
      {/* Header de Navegación */}
      <nav className="fixed top-0 w-full z-[110] p-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#007AFF]">
          <Globe size={14} />
          PROTOCOLO_DE_DESPLIEGUE_WEB
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
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
              Precisión <br />
              <span className="text-[#007AFF]">Digital.</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed mb-8">
              No construimos sitios web; desplegamos infraestructuras digitales de alto rendimiento diseñadas para la conversión masiva.
            </p>
          </motion.div>

          {/* El Componente de Interacción (Terminal) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square md:aspect-video lg:aspect-square w-full max-w-[500px] mx-auto bg-[#0a0a0a] rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-8 bg-zinc-900/50 border-b border-white/5 flex items-center px-4 gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
              <span className="ml-4 text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Terminal_de_Despliegue.sh</span>
            </div >
            <div className="absolute inset-0 pt-8 flex items-center justify-center">
               <WebWorldInteraction />
            </div >
          </motion.div>
        </section>

        {/* 2. CORE SECTION: ARQUITECTURA DESDE EL CÓDIGO */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-40 relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#007AFF] to-transparent opacity-30 hidden md:block" />
          
          <div className="md:pl-12">
            <div className="flex items-center gap-3 mb-8 text-[#007AFF]">
              <Code2 size={28} />
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">Arquitectura desde el Código (Zero-Template)</h2>
            </div>

            <div className="space-y-8 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-4xl">
              <p>
                En DesAzar, la web no es un adorno, es una herramienta de ingeniería. Rechazamos el uso de plantillas genéricas que ralentizan tu negocio y limitan tu crecimiento. 
              </p>
              <p>
                Desarrollamos cada sitio desde cero, utilizando código limpio y optimizado para tus objetivos específicos. Ya sea una <span className="text-white font-medium">Landing Page</span> diseñada para validar un mercado, un <span className="text-white font-medium">Sitio Corporativo</span> que proyecte autoridad absoluta, o una <span className="text-white font-medium">Plataforma Web Compleja</span> con funcionalidades a medida, nuestra metodología garantiza que el diseño siga a la función.
              </p>
              <p className="text-[#007AFF] font-medium italic">
                Construimos activos digitales que te pertenecen por completo, libres de dependencias innecesarias.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 3. QUICK SPECS: SEGURIDAD & VELOCIDAD */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#007AFF]/30 transition-colors group"
          >
            <ShieldCheck className="text-[#007AFF] mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-2xl font-bold mb-4">Seguridad</h3>
            <p className="text-zinc-400 leading-relaxed">
              Protección de datos desde la raíz. Implementamos protocolos de seguridad avanzada para que tu presencia online sea un búnker inexpugnable frente a vulnerabilidades.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#007AFF]/30 transition-colors group"
          >
            <Zap className="text-[#007AFF] mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-2xl font-bold mb-4">Velocidad</h3>
            <p className="text-zinc-400 leading-relaxed">
              El tiempo es dinero. Aplicamos ingeniería de carga para que tu sitio responda de forma instantánea, eliminando la fricción y maximizando la retención de usuarios.
            </p>
          </motion.div>
        </section>

        {/* 4. DEEP DIVE: PROTOCOLO, ALCANCE, OPTIMIZACIÓN */}
        <section className="mb-40">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center tracking-tight">Especificaciones de <span className="text-[#007AFF]">Infraestructura</span></h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Protocolo */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-[#007AFF] font-mono text-sm uppercase tracking-[0.2em]">01 // Protocolo</div>
              <h3 className="text-xl font-bold">Automatización completa desde el diseño hasta el despliegue en la nube.</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Sincronizamos cada etapa del desarrollo para que el lanzamiento sea preciso, sin errores técnicos y con una configuración de servidor optimizada para el tráfico real.
              </p>
            </motion.div>

            {/* Alcance */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="text-[#007AFF] font-mono text-sm uppercase tracking-[0.2em]">02 // Alcance</div>
              <h3 className="text-xl font-bold">Arquitecturas escalables preparadas para tráfico global masivo.</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Tu web no se rompe cuando crecés. Diseñamos sistemas capaces de absorber picos de tráfico sin degradar la experiencia del usuario, garantizando estabilidad total.
              </p>
            </motion.div>

            {/* Optimización */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="text-[#007AFF] font-mono text-sm uppercase tracking-[0.2em]">03 // Optimización</div>
              <h3 className="text-xl font-bold">Cada milisegundo cuenta. Rendimiento optimizado al límite matemático.</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                No nos conformamos con que "funcione". Auditamos cada script, cada imagen y cada línea de código para asegurar que tu infraestructura digital sea la más rápida de tu sector.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 5. FINAL CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="py-32 text-center rounded-[3rem] bg-gradient-to-b from-[#007AFF]/10 to-transparent border border-[#007AFF]/20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">¿Listo para el siguiente nivel?</h2>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#007AFF] text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,122,255,0.4)]"
          >
            Desplegar mi infraestructura
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.section>

      </main>
    </div>
  );
};

export default WebExperience;