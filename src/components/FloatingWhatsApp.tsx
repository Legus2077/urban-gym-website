import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, MapPin, Dumbbell } from 'lucide-react';
import { getWhatsAppUrl } from '../config/urbanGymConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showQuickMenu, setShowQuickMenu] = useState(false);

  const quickOptions = [
    {
      title: 'Inscripción Inmediata',
      msg: 'Hola Urban GYM, deseo inscribirme ahora y conocer los métodos de pago.',
      icon: Dumbbell,
    },
    {
      title: 'Consultar por Sedes y Horarios',
      msg: 'Hola Urban GYM, quiero consultar horarios y disponibilidad de la sede más cercana.',
      icon: MapPin,
    },
    {
      title: 'Reclamar Promo Dúo 2x1.5',
      msg: 'Hola Urban GYM, quiero reclamar la promoción vigente Promo Dúo con matrícula gratis.',
      icon: Sparkles,
    },
  ];

  const defaultChatUrl = getWhatsAppUrl(
    'Hola Urban GYM, estoy navegando en la web y quisiera más información con un asesor.'
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick Menu Popover */}
      {showQuickMenu && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#0e141f] border border-slate-700 shadow-2xl p-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#84cc16] animate-pulse" />
              <div className="text-xs font-black uppercase text-white tracking-wide">
                Asesoría Urban GYM en Línea
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowQuickMenu(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md"
              aria-label="Cerrar opciones"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-300 py-2.5">
            ¡Hola! Elige cómo podemos ayudarte hoy para conectarte directamente con nuestro equipo:
          </p>

          <div className="space-y-2">
            {quickOptions.map((opt, i) => (
              <a
                key={i}
                href={getWhatsAppUrl(opt.msg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowQuickMenu(false)}
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-left transition-colors group"
              >
                <opt.icon className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-xs font-bold text-white group-hover:text-[#84cc16] transition-colors">
                    {opt.title}
                  </div>
                  <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                    {opt.msg}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800">
            <a
              href={defaultChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowQuickMenu(false)}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#84cc16] text-[#0a0f17] font-black text-xs uppercase tracking-wider hover:bg-[#96ea20] transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              Abrir Chat Libre en WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Button matching Image 2 */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setShowQuickMenu(!showQuickMenu)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#84cc16] text-[#0a0f17] font-black text-xs uppercase tracking-wider shadow-neon-glow hover:bg-[#99ea22] hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Abrir WhatsApp"
        >
          {/* Pulsing indicator ring */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black" />
          </span>

          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="font-heading tracking-wide text-sm font-black">
            CHAT CON ASESOR
          </span>
        </button>
      </div>
    </div>
  );
};
