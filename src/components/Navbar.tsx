"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Si estamos en la home, mostrar el menú centrado. En otras páginas, también centrado pero con opciones de volver.
  return (
    <nav className="fixed top-0 w-full z-[100]">
      <div className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-bold text-lg tracking-tight">
            Des<span className="text-[#3b82f6] italic">Azar</span>
          </span>
        </Link>

        {/* Links de navegación */}
        <div className="flex items-center gap-8">
          <a 
            href="#servicios" 
            className={`font-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${
              location.pathname === '/' ? 'text-zinc-400 hover:text-white' : 
              location.pathname.includes('/servicios') ? 'text-[#3b82f6]' : 'text-zinc-500 hover:text-[#3b82f6]'
            }`}
          >
            Servicios
          </a>
          <Link 
            to="/nosotros"
            className={`font-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${
              location.pathname === '/nosotros' ? 'text-[#3b82f6]' : 'text-zinc-500 hover:text-[#3b82f6]'
            }`}
          >
            Nosotros
          </Link>
          <a 
            href="https://wa.me/5491172393498?text=Hola!%20Quiero%20consultar%20por%20los%20servicios%20de%20DesAzar."
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#3b82f6] hover:text-white transition-colors border border-[#3b82f6]/30 px-4 py-2 rounded-full hover:bg-[#3b82f6]"
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Línea divisoria sutil */}
      <div className="h-px bg-white/5" />
    </nav>
  );
};

export default Navbar;
