"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Manifiesto', path: '/manifesto' },
    { name: 'Servicios', path: '/lab' }, // Apuntando a Lab como sección de servicios/experiencias
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] flex justify-center p-8">
      <div className="flex gap-12 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`transition-colors duration-300 ${
              location.pathname === link.path ? 'text-[#3b82f6]' : 'hover:text-[#3b82f6]'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;