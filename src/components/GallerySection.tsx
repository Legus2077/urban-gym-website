import React, { useState } from 'react';
import { Eye, X, MessageSquare, Dumbbell, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, getWhatsAppUrl } from '../config/urbanGymConfig';

interface GallerySectionProps {
  activeFilter: 'all' | 'belaunde' | 'universitaria' | 'mexico';
  onFilterChange: (filter: 'all' | 'belaunde' | 'universitaria' | 'mexico') => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.sedeId === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'TODAS LAS SEDES' },
    { id: 'belaunde', label: 'SEDE BELAÚNDE' },
    { id: 'universitaria', label: 'SEDE UNIVERSITARIA' },
    { id: 'mexico', label: 'SEDE AV. MÉXICO' },
  ];

  return (
    <section id="galeria" className="py-20 md:py-28 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-black tracking-widest text-[#84cc16] uppercase mb-1">
              INFRAESTRUCTURA REAL
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-tight">
              GALERÍA DE INSTALACIONES
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
              Espacios diseñados para el esfuerzo máximo, equipados con barras de competición,
              mancuernas de hasta 60kg y ambientes limpios.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onFilterChange(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#84cc16] text-[#0a0f17] shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 cursor-pointer hover:border-[#84cc16]/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/40 to-transparent" />

                {/* Sede Pill Tag */}
                <div className="absolute top-3 left-3 bg-[#0a0f17]/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-black tracking-widest text-[#84cc16] uppercase border border-slate-800">
                  {item.sedeName}
                </div>

                {/* Hover Eye Zoom Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 p-2 rounded-lg text-white">
                  <Eye className="w-4 h-4 text-[#84cc16]" />
                </div>
              </div>

              {/* Title & Info Bar */}
              <div className="p-4 bg-[#0e141f] border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-white font-heading tracking-wide group-hover:text-[#84cc16] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {item.category}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#84cc16] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Fallback (if any filter has 0 items) */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            No se encontraron fotos para el filtro seleccionado.
          </div>
        )}

      </div>

      {/* Interactive Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#111723] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-slate-300 hover:text-white hover:bg-black transition-colors"
              aria-label="Cerrar vista"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-16/10 bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded text-xs font-black tracking-widest text-[#84cc16] uppercase border border-slate-700">
                {selectedPhoto.sedeName}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-black uppercase text-white font-heading">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-[#84cc16] font-bold uppercase mt-1">
                  Categoría: {selectedPhoto.category}
                </p>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex justify-end">
                <a
                  href={getWhatsAppUrl(`Hola Urban GYM, vi la foto de ${selectedPhoto.title} en ${selectedPhoto.sedeName} y deseo consultar sobre esta sede.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#84cc16] hover:bg-[#96ea20] text-black font-black text-xs uppercase tracking-wider transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  CONSULTAR SOBRE ESTA SEDE
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
