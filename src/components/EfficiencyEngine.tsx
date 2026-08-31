"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, MessageCircle, FileText, Table, Mail } from 'lucide-react';

// --- Sub-componentes de UI para el flujo de negocio ---

const DataCard = ({ icon: Icon, label, color, delay }: { icon: any, label: string, color: string, delay: number }) => (
  <motion.div 
    initial={{ y: -200, opacity: 0 }}
    animate={{ y: 50, opacity: 1 }}
    exit={{ y: 200, opacity: 0 }}
    transition={{ 
      delay: delay,
      duration: 1.2, 
      ease: "easeOut" 
    }}
    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/[0.03] border border-white/10 backdrop-blur-sm min-w-[80px]"
  >
    <div className={`p-1.5 rounded-md ${color} bg-opacity-20`}>
      <Icon size={20} className={color.replace('bg-', 'text-')} />
    </div >
    <span className="text-[7px] font-mono uppercase tracking-tighter text-zinc-500">{label}</span>
  </motion.div>
);

const ActionCard = () => (
  <motion.div
    initial={{ scale: 0.5, opacity: 0, y: -20 }}
    animate={{ scale: 1, opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "backOut" }}
    className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 backdrop-blur-md shadow-[0_0_40px_rgba(37,211,102,0.3)] z-50"
  >
    <div className="p-3 rounded-full bg-[#25D366] text-white shadow-lg">
      <MessageCircle size={36} fill="currentColor" />
    </div >
    <div className="text-center">
      <p className="text-[11px] font-bold text-[#25D366] uppercase tracking-widest">Notificación Enviada</p>
      <p className="text-[9px] font-mono text-zinc-400">WhatsApp Status: Delivered</p>
    </div >
  </motion.div>
);

const EfficiencyEngine = () => {
  // Ciclo de 14 segundos
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => (prev + 1) % 14);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const isProcessing = tick >= 5 && tick <= 7;
  const showInputs = tick >= 1 && tick <= 4;
  const showOutput = tick >= 8 && tick <= 12;

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center overflow-hidden bg-[#050505]/50 rounded-2xl border border-white/5">
      {/* Grid de fondo industrial refinado */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative w-full h-full flex flex-col items-center justify-start pt-12">
        
        {/* LA CINTA TRANSPORTADORA (Vertical Conveyor Belt) */}
        <div className="absolute top-0 w-[1px] h-full bg-zinc-800/50 shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

        {/* 1. ENTRADA DE DATOS (Vertical Sequence) */}
        <AnimatePresence>
          {showInputs && (
            <div className="absolute flex flex-col gap-6 items-center z-10">
              <DataCard icon={FileText} label="PDF" color="bg-red-500" delay={0} />
              <DataCard icon={Table} label="XLS" color="bg-green-600" delay={1.5} />
              <DataCard icon={Mail} label="MAIL" color="bg-blue-500" delay={3} />
            </div >
          )}
        </AnimatePresence>

        {/* 2. EL NÚCLEO DE PROCESAMIENTO (The Intelligence Core) */}
        <motion.div 
          className="relative z-20 flex flex-col items-center mt-12"
          animate={{ 
            filter: showOutput ? "blur(8px)" : "blur(0px)",
            opacity: showOutput ? 0.4 : 1,
            scale: showOutput ? 0.95 : 1
          }}
          transition={{ duration: 0.8 }}
        >
          {/* El núcleo físico */}
          <div className="relative w-24 h-24 bg-zinc-950 border border-white/10 rounded-[1.5rem] flex items-center justify-center shadow-2xl overflow-hidden">
            <AnimatePresence>
              {isProcessing && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#25D366]/20"
                />
              )}
            </AnimatePresence>

            <div className="relative z-10">
              <motion.div
                animate={isProcessing ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 2, repeat: isProcessing ? Infinity : 0, ease: "linear" }}
              >
                <RefreshCw
                  className={`transition-colors duration-500 ${isProcessing ? 'text-[#25D366]' : 'text-zinc-700'}`}
                  size={36}
                />
              </motion.div>
            </div >

            {/* Partículas de procesamiento */}
            {isProcessing && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#25D366] rounded-full"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ 
                      x: (Math.random() - 0.5) * 80, 
                      y: (Math.random() - 0.5) * 80, 
                      opacity: [0, 1, 0] 
                    }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div >
            )}
          </div>

          {/* INDICADOR DE ESTADO */}
          <AnimatePresence>
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: [0.4, 1, 0.4],
                  y: 0 
                }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ 
                  opacity: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 0.5 }
                }}
                className="mt-4 whitespace-nowrap pointer-events-none"
              >
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]">
                  Sincronizando...
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 3. LA SALIDA (WhatsApp Action) */}
        <div className="mt-12 h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {showOutput && (
              <motion.div
                key="output-action"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <ActionCard />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default EfficiencyEngine;