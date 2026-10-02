import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SedesSection } from './components/SedesSection';
import { GallerySection } from './components/GallerySection';
import { PlansSection } from './components/PlansSection';
import { PromotionsSection } from './components/PromotionsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MapsGroundingModal } from './components/MapsGroundingModal';
import { SedeInfo, SEDES_DATA } from './config/urbanGymConfig';

export default function App() {
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'belaunde' | 'universitaria' | 'mexico'>('all');
  const [isMapsModalOpen, setIsMapsModalOpen] = useState(false);
  const [selectedSedeForMaps, setSelectedSedeForMaps] = useState<SedeInfo | undefined>(undefined);

  const handleFilterGalleryFromSedes = (sedeId: 'belaunde' | 'universitaria' | 'mexico') => {
    setGalleryFilter(sedeId);
  };

  const handleOpenMapsAdvisor = (sede?: SedeInfo) => {
    setSelectedSedeForMaps(sede || SEDES_DATA[0]);
    setIsMapsModalOpen(true);
  };

  const handleScrollToSedes = () => {
    const el = document.getElementById('sedes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-[#84cc16] selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onScrollToSedes={handleScrollToSedes} />

        {/* Sedes Section */}
        <SedesSection
          onFilterGalleryBySede={handleFilterGalleryFromSedes}
          onOpenMapsAdvisor={handleOpenMapsAdvisor}
        />

        {/* Interactive Gallery Section */}
        <GallerySection
          activeFilter={galleryFilter}
          onFilterChange={setGalleryFilter}
        />

        {/* Memberships & Plans Section */}
        <PlansSection />

        {/* Special Promotions Section with Countdown */}
        <PromotionsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Google Maps Grounding Routing Modal */}
      <MapsGroundingModal
        isOpen={isMapsModalOpen}
        onClose={() => setIsMapsModalOpen(false)}
        initialSede={selectedSedeForMaps}
      />
    </div>
  );
}
