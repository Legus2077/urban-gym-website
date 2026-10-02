import React from 'react';
import { MapPin, Clock, Check, MessageSquare, Images, Navigation, ExternalLink, Compass } from 'lucide-react';
import { SEDES_DATA, SedeInfo, getWhatsAppUrl } from '../config/urbanGymConfig';

interface SedesSectionProps {
  onFilterGalleryBySede: (sedeId: 'belaunde' | 'universitaria' | 'mexico') => void;
  onOpenMapsAdvisor?: (selectedSede?: SedeInfo) => void;
}

export const SedesSection: React.FC<SedesSectionProps> = ({
  onFilterGalleryBySede,
  onOpenMapsAdvisor,
}) => {
  return (
    <section id="sedes" className="py-20 md:py-28 bg-[#0e131d]/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-black tracking-widest text-[#84cc16] uppercase mb-1">
              NUESTRA RED
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-tight">
              SEDES DE ALTO RENDIMIENTO
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
              Instalaciones industriales con amplios metrajes, ventilación forzada y la mejor
              maquinaria biomecánica de la capital.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#84cc16]/40 text-[#84cc16] text-xs font-extrabold uppercase tracking-wide">
              <MapPin className="w-3.5 h-3.5" />
              ACCESO MULTI-SEDE DISPONIBLE
            </div>

            {onOpenMapsAdvisor && (
              <button
                type="button"
                onClick={() => onOpenMapsAdvisor()}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold uppercase transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#84cc16]" />
                Calcular Ruta Google Maps
              </button>
            )}
          </div>
        </div>

        {/* 3 Sede Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SEDES_DATA.map((sede) => {
            const whatsappUrl = getWhatsAppUrl(sede.whatsappMessage);

            return (
              <div
                key={sede.id}
                className="flex flex-col rounded-2xl bg-[#111723] border border-slate-800/90 overflow-hidden hover:border-[#84cc16]/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                {/* Map/Location Visual Header */}
                <div className="relative h-44 overflow-hidden bg-slate-900 border-b border-slate-800">
                  {/* Stylized Map Satellite Overlay Image */}
                  <img
                    src={
                      sede.id === 'belaunde'
                        ? 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80'
                        : sede.id === 'universitaria'
                        ? 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80'
                        : 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80'
                    }
                    alt={`Ubicación de ${sede.name}`}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111723] via-[#111723]/40 to-transparent" />

                  {/* Sede Subtitle Badge */}
                  <div className="absolute top-3 left-3 bg-[#0b0f17]/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-black tracking-widest text-[#84cc16] uppercase border border-slate-700">
                    {sede.subtitle}
                  </div>

                  {/* Pin Indicator */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 p-2 rounded-lg border border-slate-700 text-[#84cc16]">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                </div>

                {/* Sede Details Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Sede Name & Address */}
                    <div>
                      <h3 className="text-2xl font-black uppercase text-white font-heading tracking-wide">
                        {sede.name}
                      </h3>
                      <div className="flex items-start gap-1.5 mt-1 text-slate-300 text-xs font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-[#84cc16] shrink-0 mt-0.5" />
                        <span>{sede.address} - {sede.district}</span>
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5 text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-[#84cc16] uppercase text-[11px]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Horarios de Entrenamiento:</span>
                      </div>
                      <div className="text-slate-300 flex justify-between">
                        <span className="font-semibold text-slate-400">Lun - Sáb:</span>
                        <span className="font-bold text-white">{sede.scheduleWeekday.replace('Lun - Sáb: ', '')}</span>
                      </div>
                      <div className="text-slate-300 flex justify-between">
                        <span className="font-semibold text-slate-400">Domingos:</span>
                        <span className="font-bold text-white">{sede.scheduleSunday.replace('Domingos: ', '')}</span>
                      </div>
                    </div>

                    {/* Exclusive Zones */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                        ZONAS EXCLUSIVAS:
                      </div>
                      <div className="space-y-1.5">
                        {sede.zones.map((zone, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]" />
                            <span className="font-medium">{zone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions / CTA Buttons */}
                  <div className="space-y-2.5 pt-2">
                    {/* Primary WhatsApp Conversion Button */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#84cc16] hover:bg-[#96ea20] text-[#0a0f17] font-black text-xs uppercase tracking-wider transition-all duration-200 hover:shadow-neon-glow"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      CONTACTAR SEDE POR WHATSAPP
                    </a>

                    {/* Secondary Action: Filter Gallery */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          onFilterGalleryBySede(sede.id as 'belaunde' | 'universitaria' | 'mexico');
                          const galleryEl = document.getElementById('galeria');
                          if (galleryEl) {
                            galleryEl.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-[11px] font-bold uppercase transition-colors"
                      >
                        <Images className="w-3.5 h-3.5 text-[#84cc16]" />
                        VER GALERÍA SEDE
                      </button>

                      {/* External Maps Link */}
                      <a
                        href={sede.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-[#84cc16] border border-slate-700/80 transition-colors"
                        title="Ver en Google Maps"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
