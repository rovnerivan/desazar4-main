"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, CreditCard, PackageCheck } from 'lucide-react';

const WebWorldInteraction = () => {
  const [stage, setStage] = useState<'idle' | 'typing' | 'searching' | 'deploying' | 'conversion_start' | 'checkout' | 'completed'>('idle');
  const [text, setText] = useState('');
  const targetText = "tu-negocio.com";
  
  const isSequenceRunning = useRef(false);

  const runSequence = async () => {
    // Reset de estados para el nuevo loop
    setText('');
    setStage('typing');

    // 1. Typing stage
    for (let i = 0; i <= targetText.length; i++) {
      await new Promise(r => setTimeout(r, 100));
      setText(targetText.slice(0, i));
    }

    await new Promise(r => setTimeout(r, 500));
    setStage('searching');

    // 2. Searching stage
    await new Promise(r => setTimeout(r, 700));
    setStage('deploying');

    // 3. Deployment explosion effect
    await new Promise(r => setTimeout(r, 500));
    setStage('conversion_start');

    // 4. Conversion stage (Cart)
    await new Promise(r => setTimeout(r, 1200));
    setStage('checkout');

    // 5. Checkout stage (Payment)
    await new Promise(r => setTimeout(r, 1500));
    setStage('completed');

    // 6. Wait 3 seconds then RESTART the loop
    await new Promise(r => setTimeout(r, 3000));
    runSequence();
  };

  useEffect(() => {
    if (!isSequenceRunning.current) {
      isSequenceRunning.current = true;
      runSequence();
    }
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#050505] rounded-xl">
      <AnimatePresence mode="wait">
        {(stage === 'idle' || stage === 'typing' || stage === 'searching') && (
          <motion.div
            key="search-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ 
              scale: 2.5, 
              opacity: 0,
              transition: { duration: 0.5, ease: "circOut" } 
            }}
            className="relative flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/[0.02] rounded-full backdrop-blur-sm"
          >
            <Search className="w-4 h-4 text-zinc-500" />
            <div className="min-w-[120px] font-mono text-xs md:text-sm tracking-tight">
              {text}
              {stage === 'typing' && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-[2px] h-4 bg-[#007AFF] ml-1 align-middle"
                />
              )}
            </div >
            <motion.div
              animate={stage === 'searching' ? { scale: [1, 0.9, 1], backgroundColor: "#007AFF" } : {}}
              className="ml-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-[#007AFF]/50 text-[#007AFF] rounded-md"
            >
              Buscar
            </motion.div>
          </motion.div>
        )}

        {stage === 'conversion_start' && (
          <motion.div
            key="cart-stage"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative">
              <ShoppingCart className="w-16 h-16 text-[#007AFF]" />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -top-2 -right-2 bg-white text-[#050505] text-[8px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
              >
                1
              </motion.div>
            </div >
            <p className="text-[10px] font-mono text-[#007AFF] uppercase tracking-widest">Producto Añadido</p>
          </motion.div>
        )}

        {stage === 'checkout' && (
          <motion.div
            key="checkout-stage"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <CreditCard className="w-16 h-16 text-[#007AFF]" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-[#007AFF]/30 rounded-full"
              />
            </div >
            <div className="flex flex-col items-center gap-2">
               <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Procesando Pago</p>
               <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full bg-[#007AFF]"
                  />
               </div >
            </div >
          </motion.div>
        )}

        {stage === 'completed' && (
          <motion.div
            key="success-stage"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <motion.div 
              initial={{ rotate: -20, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', damping: 12 }}
              className="w-20 h-20 bg-[#007AFF] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,122,255,0.5)]"
            >
              <PackageCheck className="text-white w-10 h-10" />
            </motion.div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white tracking-tight">¡Compra Completada!</h3>
              <p className="text-[10px] font-mono text-[#007AFF] uppercase tracking-widest">Transacción Verificada</p>
            </div >
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage === 'deploying' && (
          <motion.div
            key="explosion"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 5, opacity: 0 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="absolute w-20 h-20 bg-[#007AFF] rounded-full blur-3xl z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {stage === 'completed' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#007AFF,transparent_70%)]" 
        />
      )}
    </div >
  );
};

export default WebWorldInteraction;