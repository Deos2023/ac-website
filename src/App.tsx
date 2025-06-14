import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TypeSelectionPage from "./pages/TypeSelectionPage";
import BrandSelectionPage from "./pages/BrandSelectionPage";
import InverterSelectionPage from "./pages/InverterSelectionPage";
import TonnageSelectionPage from "./pages/TonnagePage";
import StarSelectionPage from "./pages/StarSelectionPage";
import ProductResultsPage from "./pages/ProductResultsPage";
import BrandPage from "./pages/BrandPage";
import ACDetailsPage from "./pages/ACDetailsPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailsPage from "./pages/ProductDetailsPage"; // Add this import
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/select-type" element={<TypeSelectionPage />} />
          <Route path="/select-brand/:type" element={<BrandSelectionPage />} />
          <Route path="/select-inverter/:type/:brand" element={<InverterSelectionPage />} />
          <Route path="/select-tonnage/:type/:brand/:inverter" element={<TonnageSelectionPage />} />
          <Route path="/select-star/:type/:brand/:inverter/:tonnage" element={<StarSelectionPage />} />
          <Route path="/products/:type/:brand/:inverter/:tonnage/:star" element={<ProductResultsPage />} />
          <Route path="/brand/:brandName" element={<BrandPage />} />
          <Route path="/brand/:brandName/ton/:tonValue/star/:starRating" element={<ACDetailsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} /> {/* Add this route */}
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;