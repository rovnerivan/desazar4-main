"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Globe, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const WebDetail = () => {
  const navigate = useNavigate();
  const whatsappLink = "https://wa.me/5491172393498?text=Hola!%20Quiero%20consultar%20por%20el%20servicio%20de%20p%C3%A1ginas%20web.";

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed]">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-40 pb-32 px-6 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-8">
              Servicio 01 — Páginas Web
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Tu web debería <span className="text-[#3b82f6]">convertir,</span><br />no adornar.
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Diseñamos y desarrollamos sitios web a código limpio — sin plantillas, sin plataformas cerradas. Tu sitio, tu propiedad, sin depender de nadie.
            </p>
          </motion.div>
        </section>

        {/* Qué incluimos */}
        <section className="max-w-5xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {[
              { 
                title: 'Landing Pages', 
                desc: 'Una página única, optimizada para convertir visitantes en leads o clientes. Ideal para validar un producto, servicio o campaña.' 
              },
              { 
                title: 'Sitios Corporativos', 
                desc: 'Múltiples páginas que proyectan autoridad y confianza. Tu presencia digital profesional con navegación clara y contenido estratégico.' 
              },
              { 
                title: 'Plataformas Web', 
                desc: 'Aplicaciones web complejas con funcionalidades a medida: dashboards, sistemas de gestión, marketplaces, etc.' 
              },
              { 
                title: 'Rediseño de Sitios Existentes', 
                desc: '¿Tu sitio actual no convierte? Lo rediseñamos desde cero manteniendo tu SEO y mejorando la experiencia del usuario.' 
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Proceso */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-16 text-center">Nuestro proceso</h2>
            
            <div className="space-y-8 max-w-3xl mx-auto">
              {[
                { step: '01', title: 'Briefing', desc: 'Entendemos tu negocio, tu audiencia y qué querés lograr con el sitio.' },
                { step: '02', title: 'Diseño', desc: 'Creamos wireframes y diseños visuales que validamos juntos antes de programar.' },
                { step: '03', title: 'Desarrollo', desc: 'Código limpio, responsive, optimizado para velocidad y SEO. Sin dependencias innecesarias.' },
                { step: '04', title: 'Deploy', desc: 'Tu sitio en producción con hosting configurado, SSL y monitoreo activo.' }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-6 p-6 rounded-2xl bg-white/[0.01]">
                  <span className="font-mono text-[#3b82f6] text-sm shrink-0">{item.step}</span>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tecnologías */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-[2rem] bg-white/[0.02] border border-white/5"
          >
            <h3 className="text-xl font-bold mb-6">Stack técnico</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-lg mx-auto">
              React, Next.js, TypeScript, Tailwind CSS para el frontend. Node.js o Python para backend. Todo código limpio que te pertenece y puedes llevar a cualquier hosting.
            </p>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Empezamos con tu web?</h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto">
              Contanos qué necesitás y te damos una estimación sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3b82f6] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                Consultar por WhatsApp <ArrowRight size={18} />
              </a>
              <Link 
                to="/servicios" 
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-mono text-sm uppercase tracking-wider"
              >
                ← Volver a Servicios
              </Link>
            </div>
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

export default WebDetail;
