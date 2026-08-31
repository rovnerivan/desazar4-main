"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronDown, Zap, ShieldCheck, Cpu, Rocket, Code2 } from 'lucide-react';
import Navbar from '../components/Navbar';

const Systems = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const blueprintOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const blueprintScale = useTransform(smoothProgress, [0, 0.2], [1, 0.8]);
  const engineOpacity = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);
  const engineScale = useTransform(smoothProgress, [0.2, 0.4], [0.5, 1]);
  const engineRotate = useTransform(smoothProgress, [0.2, 0.4], [-45, 0]);

  const whatsappLink = `https://wa.me/5491172393498?text=${encodeURIComponent("Hola! Estoy viendo la experiencia de DesAzar Sistemas y quiero consultar por soluciones de arquitectura y desarrollo a medida.")}`;

  return (
    <div ref={containerRef} className="relative bg-[#050505] text-white">
      <nav className="fixed top-0 w-full z-[110] p-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
          Sistemas // Activo
        </div >
        <button 
          onClick={() => navigate('/lab')}
          className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors cursor-pointer"
        >
          [ Volver al Lab ]
        </button>
      </nav>

      <Navbar />
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ opacity: blueprintOpacity, scale: blueprintScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-[#007AFF]/30 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(#007AFF 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
            />
            <div className="absolute w-full h-[1px] bg-[#007AFF]/20 rotate-45" />
            <div className="absolute w-full h-[1px] bg-[#007AFF]/20 -rotate-45" />
            <div className="absolute w-[1px] h-full bg-[#007AFF]/20" />
            <div className="absolute h-[1px] w-full bg-[#007AFF]/20" />
            <div className="text-center z-10">
              <p className="font-mono text-[10px] tracking-[0.5em] text-[#007AFF] uppercase animate-pulse">
                Arquitectando Sistema...
              </p>
            </div >
          </div >
        </motion.div>

        <motion.div 
          style={{ opacity: engineOpacity, scale: engineScale, rotate: engineRotate }}
          className="absolute flex items-center justify-center pointer-events-none"
        >
          <div className="relative group">
            <div className="w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-[#007AFF] to-[#003366] rounded-[3rem] shadow-[0_0_100px_rgba(0,122,255,0.4)] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 border-2 border-white/10 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 border border-[#007AFF]/40 rounded-full"
              />
              <Cpu size={64} className="text-white/80 z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </div >
            <div className="absolute -inset-10 bg-[#007AFF]/10 blur-[60px] rounded-full" />
          </div >
        </motion.div>

        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Scroll para construir</span>
          <ChevronDown className="text-zinc-500 animate-bounce" size={20} />
        </motion.div>
      </div >

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
        
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-[#007AFF] font-mono text-sm tracking-[0.3em] uppercase mb-4">El Motor Central</h3>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Sistemas que no solo funcionan, <br /> 
            <span className="text-zinc-500">impulsan tu escala.</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            No entregamos software; entregamos el motor de tu operación. Diseñamos arquitecturas robustas que transforman procesos lentos en flujos de alta velocidad.
          </p>
        </motion.section>

        {/* --- NUEVO BLOQUE: CORE ENGINEERING (VIBECODING) --- */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#007AFF] to-transparent opacity-50" />
          
          <div className="pl-8 md:pl-12">
            <div className="flex items-center gap-3 mb-6 text-[#007AFF]">
              <Code2 size={24} />
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-[0.2em]">Ingeniería desde la base (Vibecoding)</h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-medium text-white leading-tight tracking-tight">
                Abordamos el desarrollo de software desde la hoja en blanco. No adaptamos tu empresa a las limitaciones de un programa genérico; programamos una solución exclusiva para tus retos específicos.
              </p>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl">
                Nuestro proceso es iterativo y transparente: desde el diseño de <span className="text-white font-medium">Pruebas de Concepto (PoC)</span> para validar ideas críticas sin riesgo, pasando por el desarrollo de <span className="text-white font-medium">MVPs (Productos Mínimos Viables)</span> funcionales en tiempo récord, hasta llegar a sistemas integrales, terminados y listos para escalar. Construimos herramientas que son de tu propiedad, diseñadas para durar.
              </p>
            </div>
          </div>
        </motion.section>
        {/* --- FIN DEL NUEVO BLOQUE --- */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: ShieldCheck, title: "Robustez", desc: "Arquitecturas diseñadas para la tolerancia a fallos y máxima seguridad." },
            { icon: Cpu, title: "Precisión", desc: "Cada módulo se construye con una lógica de adaptación exacta para tu negocio." },
            { icon: Zap, title: "Velocidad", desc: "Optimización de procesos que reduce tiempos de respuesta drásticamente." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 glass"
            >
              <item.icon className="text-[#007AFF] mb-6" size={32} />
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div >

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-20 border-t border-white/5"
        >
          <h3 className="text-2xl font-bold mb-8">¿Listo para construir?</h3>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#007AFF] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Crear mis herramientas
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Systems;