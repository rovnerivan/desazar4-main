"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Globe, Zap, Code2, ArrowRight, CheckCircle2 } from 'lucide-react';

const Servicios = () => {
  const whatsappLink = "https://wa.me/5491172393498?text=Hola!%20Quiero%20consultar%20por%20los%20servicios.";

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed]">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-40 pb-32 px-6 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-8">
              Nuestros Servicios
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              Tecnología que<br />
              <span className="text-zinc-400">funciona sin azar.</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Tres líneas de servicio. Una filosofía: eliminar lo que frena tu negocio y construir lo que lo impulsa.
            </p>
          </motion.div>
        </section>

        {/* Servicios detallados */}
        <div className="max-w-6xl mx-auto px-6 space-y-0">
          
          {/* --- PÁGINAS WEB --- */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-24 border-b border-white/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center">
                    <Globe size={24} className="text-[#3b82f6]" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">01</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Páginas Web</h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                  Tu sitio web no es un adorno — es tu vendedor 24/7. Diseñamos y desarrollamos sitios que convierten visitantes en clientes, sin usar plantillas genéricas que ralentizan tu negocio.
                </p>
                
                <div className="space-y-3 mb-8">
                  {[
                    'Landing pages de alta conversión',
                    'Sitios corporativos profesionales', 
                    'Plataformas web con funcionalidades custom',
                    'Código limpio, sin dependencias de plataformas'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 size={18} className="text-[#3b82f6] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="/servicios/web"
                  className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[#3b82f6] hover:text-white transition-colors"
                >
                  Ver detalles del servicio <ArrowRight size={14} />
                </a>
              </div>

              {/* Visual */}
              <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#3b82f6]/5 to-transparent border border-white/5 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Globe size={48} className="mx-auto text-[#3b82f6] opacity-40" />
                  <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">Infraestructura Digital</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* --- AUTOMATIZACIONES --- */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-24 border-b border-white/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Visual (lado izquierdo en even) */}
              <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#25D366]/5 to-transparent border border-white/5 p-8 flex items-center justify-center order-1 lg:order-none">
                <div className="text-center space-y-4">
                  <Zap size={48} className="mx-auto text-[#25D366] opacity-40" />
                  <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">Motor de Automatización</p>
                </div>
              </div>

              <div className="order-2 lg:order-none">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
                    <Zap size={24} className="text-[#25D366]" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">02</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Automatización de Procesos</h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                  Eliminator la intervención humana en tareas repetitivas. Conectamos tus herramientas y creamos flujos donde la información se mueve sola — desde el primer contacto hasta la facturación.
                </p>
                
                <div className="space-y-3 mb-8">
                  {[
                    'Integración CRM, email, facturación y más',
                    'Flujos automáticos de atención al cliente',
                    'Dashboards en tiempo real para tu equipo',
                    'Python y lógica avanzada personalizada'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 size={18} className="text-[#25D366] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="/servicios/auto"
                  className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[#25D366] hover:text-white transition-colors"
                >
                  Ver detalles del servicio <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.section>

          {/* --- APPS A MEDIDA --- */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 flex items-center justify-center">
                    <Code2 size={24} className="text-[#a855f7]" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">03</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Apps a Medida</h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                  ¿Tu proceso no encaja en ningún software que exista? Lo construimos desde cero. Sistemas robustos, de tu propiedad, diseñados para resolver exactamente lo que necesitás.
                </p>
                
                <div className="space-y-3 mb-8">
                  {[
                    'Sistemas internos para tu operación',
                    'MVPs y pruebas de concepto en tiempo récord',
                    'Arquitecturas escalables para crecimiento',
                    'Código fuente 100% propiedad tuya'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 size={18} className="text-[#a855f7] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="/servicios/apps"
                  className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[#a855f7] hover:text-white transition-colors"
                >
                  Ver detalles del servicio <ArrowRight size={14} />
                </a>
              </div>

              {/* Visual */}
              <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#a855f7]/5 to-transparent border border-white/5 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Code2 size={48} className="mx-auto text-[#a855f7] opacity-40" />
                  <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">Software a tu medida</p>
                </div>
              </div>
            </div>
          </motion.section>

        </div>

        {/* CTA Final */}
        <section className="py-32 px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">¿Cuál necesitás?</h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              O mejor aún: contanos qué problema tenés y te decimos cuál es la solución.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-[#3b82f6] text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              Hablemos por WhatsApp
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center font-mono text-[10px] tracking-[0.5em] text-zinc-600 uppercase">
          © {new Date().getFullYear()} DesAzar Systems // Engineering Certainty
        </div>
      </footer>
    </div>
  );
};

export default Servicios;
