import React, { useState, useEffect } from 'react';
import { Sparkles, Users, Gift, ShieldAlert, MessageSquare, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/urbanGymConfig';

export const PromotionsSection: React.FC = () => {
  // Live ticking countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 29,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const promoWhatsAppUrl = getWhatsAppUrl(
    'Hola Urban GYM, quiero reclamar la promoción vigente del Promo Dúo Urban y matrícula gratis.'
  );

  return (
    <section id="promociones" className="py-20 md:py-28 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Promo Highlight Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#121926] via-[#0d121c] to-[#121926] border border-slate-800 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl">
          
          {/* Ambient Corner Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#84cc16]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Urgent Alert Banner */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-400 text-xs font-black tracking-wider uppercase mb-6 animate-pulse">
            <span className="text-red-400">★</span>
            <span>¡SÓLO QUEDAN 12 CUPOS DISPONIBLES PARA ESTA PROMOCIÓN!</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Promo Information */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white font-heading tracking-tight leading-[0.95]">
                PROMO DÚO URBAN & <br />
                <span className="text-[#84cc16]">MATRÍCULA 100% GRATIS</span> ESTE MES
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Entrena con tu compañero de objetivos. Inscríbete con un amigo o pareja:{' '}
                <strong className="text-white">2 personas entrenan por el precio de 1.5</strong>.
                Además, ambos reciben matrícula exonerada y el polo técnico oficial Urban GYM.
              </p>

              {/* 3 Promo Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-[#84cc16]">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-black uppercase">2X1.5 ESPECIAL</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">
                    Ahorro compartido inmediato
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-[#84cc16]">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-black uppercase">CERO MATRÍCULA</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">
                    Ahorras $25 por persona
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-[#84cc16]">
                    <Gift className="w-4 h-4" />
                    <span className="text-xs font-black uppercase">POLO TÉCNICO</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">
                    Indumentaria de regalo
                  </p>
                </div>
              </div>
            </div>

            {/* Right Countdown Box & WhatsApp Trigger */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="rounded-2xl bg-[#090d14]/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-md">
                
                {/* Timer Header */}
                <div className="text-center">
                  <div className="text-[11px] font-black tracking-widest text-[#84cc16] uppercase">
                    OFERTA POR TIEMPO LIMITADO
                  </div>
                </div>

                {/* Counter Tiles */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                  <div className="p-2 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-black text-white font-heading">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase mt-0.5">
                      DÍAS
                    </span>
                  </div>

                  <div className="p-2 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-black text-white font-heading">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase mt-0.5">
                      HRS
                    </span>
                  </div>

                  <div className="p-2 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-black text-white font-heading">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase mt-0.5">
                      MIN
                    </span>
                  </div>

                  <div className="p-2 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-black text-[#84cc16] font-heading">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase mt-0.5">
                      SEG
                    </span>
                  </div>
                </div>

                {/* Big WhatsApp CTA Button */}
                <a
                  href={promoWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#84cc16] hover:bg-[#96ea20] text-[#0a0f17] font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-neon-glow hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  RECLAMAR PROMOCIÓN WHATSAPP
                </a>

                {/* Subtext */}
                <p className="text-[11px] text-slate-500 text-center leading-normal">
                  Aplican términos y condiciones. Válido en sedes Belaúnde, Universitaria y México.
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
