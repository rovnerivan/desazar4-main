"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const AppsDetail = () => {
  const whatsappLink = "https://wa.me/5491172393498?text=Hola!%20Quiero%20consultar%20por%20desarrollo%20de%20software%20a%20medida.";

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
              Servicio 03 — Apps a Medida
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              No encuentras software que te sirva? <br />
              <span className="text-[#a855f7]">Lo construimos nosotros.</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Cada negocio tiene procesos únicos. No adaptes tu operación a un software genérico — adaptá el software a tu operación. Código tuyo, funcionalidades exactas, sin pagos mensuales eternos.
            </p>
          </motion.div>
        </section>

        {/* Qué construimos */}
        <section className="max-w-5xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {[
              { 
                title: 'Sistemas de Gestión Interna', 
                desc: 'Dashboards operativos, CRMs custom, sistemas de inventario, planificación de producción — cualquier herramienta que tu operación necesita y no existe en el mercado.' 
              },
              { 
                title: 'MVPs y Pruebas de Concepto', 
                desc: 'Tenés una idea pero no querés invertir meses ni un montón de dinero? Creamos MVPs funcionales en semanas para validar antes de escalar.' 
              },
              { 
                title: 'Integraciones Complejas', 
                desc: '¿Necesitás conectar 5 sistemas que no se hablan entre sí? Diseñamos la arquitectura de integración que los unifica en una sola fuente de verdad.' 
              },
              { 
                title: 'Legacy Modernization', 
                desc: 'Tenés sistemas viejos, lentos o por Excel que ya no dan más? Los modernizamos con tecnología actual manteniendo toda tu lógica de negocio.' 
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
                { step: '01', title: 'Descubrimiento', desc: 'Entendemos tu operación a profundidad. Te seguimos, te observamos y documentamos cada proceso para entender exactamente qué necesitás.' },
                { step: '02', title: 'Arquitectura', desc: 'Diseñamos la solución técnica ideal: base de datos, APIs, frontend, infraestructura. Todo planificado antes de escribir código.' },
                { step: '03', title: 'Desarrollo iterativo', desc: 'Trabajamos en sprints con demos semanales. Ves el producto avanzando y podés pedir cambios — porque tu feedback moldea la solución.' },
                { step: '04', title: 'Entrega completa', desc: 'Código fuente, documentación técnica, capacitación de tu equipo y soporte post-entrega. Todo es tuyo, sin ataduras.' }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-6 p-6 rounded-2xl bg-white/[0.01]">
                  <span className="font-mono text-[#a855f7] text-sm shrink-0">{item.step}</span>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Filosofía */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-[2rem] bg-gradient-to-b from-[#a855f7]/5 to-transparent border border-white/5"
          >
            <Code2 size={40} className="mx-auto text-[#a855f7] opacity-60 mb-6" />
            <h3 className="text-xl font-bold mb-4">Nuestra filosofía</h3>
            <p className="text-zinc-400 text-lg max-w-lg mx-auto leading-relaxed italic">
              "No adaptamos tu empresa a las limitaciones de un programa genérico. Programamos una solución exclusiva para tus retos específicos."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué proceso querés resolver primero?</h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto">
              No importa qué tan complejo sea. Si es un problema operativo, sabemos cómo solucionarlo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#a855f7] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)]"
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

export default AppsDetail;
