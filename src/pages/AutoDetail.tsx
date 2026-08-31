"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const AutoDetail = () => {
  const whatsappLink = "https://wa.me/5491172393498?text=Hola!%20Quiero%20consultar%20por%20automatizaciones.";

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
              Servicio 02 — Automatización de Procesos
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Tu equipo debería <span className="text-[#25D366]">pensar,</span><br />no repetir.
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Automatizamos los procesos que roban tiempo a tu equipo. Conectamos tus herramientas, eliminamos el copy-paste y creamos flujos donde la información se mueve sola.
            </p>
          </motion.div>
        </section>

        {/* Qué automatizamos */}
        <section className="max-w-5xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {[
              { 
                title: 'Integración de Herramientas', 
                desc: 'Conectamos tu CRM, email marketing, facturación, hojas de cálculo y cualquier herramienta para que los datos fluyan automáticamente entre ellas.' 
              },
              { 
                title: 'Atención al Cliente Automática', 
                desc: 'Chatbots inteligentes, respuestas automáticas por email o WhatsApp, y sistemas de ticketing que priorizan sin intervención humana.' 
              },
              { 
                title: 'Reportes Automatizados', 
                desc: 'Dashboards en tiempo real que se actualizan solos. Sabé cuánto vendiste, cuántos leads generaste y cuáles son tus márgenes — al instante.' 
              },
              { 
                title: 'Flujos de Ventas', 
                desc: 'Desde la captación del lead hasta el cierre de venta, todo automatizado: seguimiento automático, recordatorios, facturación post-venta.' 
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
                { step: '01', title: 'Auditoría de procesos', desc: 'Analizamos tus flujos actuales para identificar dónde se pierde más tiempo y dinero en tareas manuales.' },
                { step: '02', title: 'Diseño del flujo', desc: 'Diseñamos la automatización ideal, validándola contigo antes de escribir una línea de código.' },
                { step: '03', title: 'Implementación', desc: 'Construimos los flujos con Python y las herramientas adecuadas. Testing exhaustivo para que todo funcione perfecto.' },
                { step: '04', title: 'Monitoreo continuo', desc: 'Te entregamos un dashboard donde podés ver qué está ejecutando tu sistema y cuántas horas ahorrás por semana.' }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-6 p-6 rounded-2xl bg-white/[0.01]">
                  <span className="font-mono text-[#25D366] text-sm shrink-0">{item.step}</span>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Herramientas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-[2rem] bg-white/[0.02] border border-white/5"
          >
            <h3 className="text-xl font-bold mb-6">Trabajamos con tus herramientas</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-lg mx-auto">
              No te obligamos a cambiar de software. Conectamos lo que ya usás: HubSpot, Salesforce, Google Sheets, WhatsApp Business, Slack, Notion, y cualquier API o herramienta con la que trabajes.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Cuántas horas a la semana pierde tu equipo en tareas manuales?</h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto">
              Hagamos juntos esa cuenta. Contactanos y te mostramos cuánto podrías recuperar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)]"
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

export default AutoDetail;
