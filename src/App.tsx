"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import WebDetail from "./pages/WebDetail";
import AutoDetail from "./pages/AutoDetail";
import AppsDetail from "./pages/AppsDetail";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Index />} />
          
          {/* NOSOTROS (antes /manifesto) */}
          <Route path="/nosotros" element={<Nosotros />} />
          
          {/* SERVICIOS — Landing general */}
          <Route path="/servicios" element={<Servicios />} />
          
          {/* DETALLES DE SERVICIO */}
          <Route path="/servicios/web" element={<WebDetail />} />
          <Route path="/servicios/auto" element={<AutoDetail />} />
          <Route path="/servicios/apps" element={<AppsDetail />} />

          {/* REDIRECCIÓN: lab → servicios, manifesto → nosotros */}
          <Route path="/lab" element={<Index />} />
          <Route path="/manifesto" element={<Nosotros />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
