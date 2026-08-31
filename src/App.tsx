"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Manifesto from "./pages/Manifesto";
import Lab from "./pages/Lab";
import Systems from "./pages/Systems";
import NotFound from "./pages/NotFound";
import WebExperience from "./pages/WebExperience";
import AutoExperience from "./pages/AutoExperience";
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
          {/* PAGINA 1: WORK (Home) */}
          <Route path="/" element={<Index />} />
          
          {/* PAGINA 2: MANIFIESTO */}
          <Route path="/manifesto" element={<Manifesto />} />
          
          {/* PAGINA 3: LAB */}
          <Route path="/lab" element={<Lab />} />
          <Route path="/lab/web" element={<WebExperience />} />
          <Route path="/lab/auto" element={<AutoExperience />} />

          {/* PAGINA 4: SYSTEMS */}
          <Route path="/systems" element={<Systems />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;