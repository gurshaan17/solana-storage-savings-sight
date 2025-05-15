
import React, { useEffect } from 'react'; // Added useEffect
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Apply the 'dark' class to the html element to enable dark mode
    document.documentElement.classList.add('dark');
    // Optionally, you might want to remove it on component unmount if needed,
    // but for an always-dark theme, this is sufficient.
    // return () => document.documentElement.classList.remove('dark');
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Use only one toast provider, not both */}
        {/* <Toaster /> */}
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
