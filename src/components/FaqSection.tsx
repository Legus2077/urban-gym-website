import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, MessageSquare, HelpCircle } from 'lucide-react';
import { FAQS_DATA, getWhatsAppUrl } from '../config/urbanGymConfig';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tourWhatsAppUrl = getWhatsAppUrl(
    'Hola Urban GYM, quisiera agendar una visita guiada gratuita en una de sus sedes.'
  );

  return (
    <section className="py-20 md:py-28 bg-[#0a0e16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headline & Guided Tour Card */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-black tracking-widest text-[#84cc16] uppercase mb-1">
                ¿TIENES DUDAS?
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-tight">
                PREGUNTAS FRECUENTES
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Todo lo que necesitas saber antes de iniciar tu primer día de entrenamiento en Urban GYM.
              </p>
            </div>

            {/* In-Person Guided Tour Box */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3.5">
              <h4 className="text-xs font-black uppercase text-[#84cc16] tracking-wider">
                ¿PREFIERES ATENCIÓN TELEFÓNICA O PRESENCIAL?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nuestros recepcionistas están listos para brindarte un recorrido guiado en cualquiera
                de nuestras 3 sedes y resolver tus consultas en vivo.
              </p>
              <a
                href={tourWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-black text-[#84cc16] hover:text-white uppercase tracking-wider group transition-colors pt-1"
              >
                <span>AGENDAR VISITA GUIADA GRATUITA</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-[#0e141f] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:text-[#84cc16] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-[#84cc16]">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
