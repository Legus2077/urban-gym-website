import React from 'react';
import { MessageSquare, MapPin, Clock, CheckCircle2, ShieldCheck, Dumbbell, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../config/urbanGymConfig';

interface HeroSectionProps {
  onScrollToSedes?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSedes }) => {
  const heroWhatsAppUrl = getWhatsAppUrl(
    'Hola Urban GYM, deseo información general y asesoría para comenzar mi entrenamiento.'
  );

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Ambience & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Soft Radial Neon Glow */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#84cc16]/10 rounded-full blur-3xl transform -translate-x-1/2" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#84cc16]/5 rounded-full blur-3xl" />
        
        {/* Subtle grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Motivational Copy & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Community Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 w-fit backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#84cc16] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-slate-300 uppercase">
                COMUNIDAD FITNESS #1 DEL DISTRITO URBANO
              </span>
            </div>

            {/* Main Punch Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-heading leading-[0.92]">
              TRANSFORMA <br />
              <span className="text-[#84cc16] drop-shadow-[0_0_20px_rgba(132,204,22,0.3)]">
                TU CUERPO.
              </span> <br />
              DOMINA LA CIUDAD.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Entrena con el equipamiento más avanzado de alto rendimiento, preparadores
              certificados y una atmósfera implacable diseñada para superar tus propios
              límites en 3 sedes estratégicas.
            </p>

            {/* CTA Buttons Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-md bg-[#84cc16] text-[#0a0f17] font-black text-sm uppercase tracking-wider hover:bg-[#96ea20] transition-all duration-200 hover:shadow-neon-glow hover:scale-[1.02] active:scale-[0.98] group"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>HABLAR CON ASESOR WHATSAPP</span>
              </a>

              <a
                href="#sedes"
                onClick={(e) => {
                  if (onScrollToSedes) {
                    e.preventDefault();
                    onScrollToSedes();
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider hover:border-[#84cc16]/60 transition-all duration-200"
              >
                <MapPin className="w-4 h-4 text-[#84cc16]" />
                <span>CONOCER SEDES & HORARIOS</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#84cc16]" />
                <span>Respuesta media del equipo: <strong>&lt; 5 minutos</strong></span>
              </div>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#84cc16]" />
                <span>Asesores disponibles ahora</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Gym Card from Image 2 */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl group">
              {/* Main Gym Photo */}
              <div className="relative aspect-4/3 sm:aspect-16/11 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
                  alt="Atletas entrenando en Urban GYM"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-black/30" />
                
                {/* Motivational Beast Mode Decal */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-[#84cc16]/40 px-2.5 py-1 rounded text-[10px] font-black tracking-widest text-[#84cc16] uppercase">
                  BEAST MODE
                </div>
              </div>

              {/* Olympic Equipment Banner Card */}
              <div className="p-4 sm:p-5 bg-[#0e141f] border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#84cc16]/10 text-[#84cc16] border border-[#84cc16]/30">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black uppercase text-white font-heading tracking-wide">
                      MÁQUINAS HAMMER STRENGTH
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">
                      100% CALIDAD OLÍMPICA
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-[11px] font-extrabold text-[#84cc16] border border-slate-700">
                    3 SEDES
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Four Statistics Pillars Banner from Mockup */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            <div className="flex flex-col items-center p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight">
                +<span className="text-[#84cc16]">500</span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mt-1">
                MIEMBROS ACTIVOS
              </span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#84cc16] font-heading tracking-tight">
                03
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mt-1">
                SEDES ESTRATÉGICAS
              </span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight">
                24<span className="text-[#84cc16]">/</span>7
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mt-1">
                ÁREA FUERZA & BOX
              </span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#84cc16] font-heading tracking-tight">
                100%
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mt-1">
                COACH CERTIFICADO
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
