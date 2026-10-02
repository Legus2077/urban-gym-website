import React from 'react';
import { Check, X, Zap, MessageSquare, ShieldAlert } from 'lucide-react';
import { PLANS_DATA, getWhatsAppUrl } from '../config/urbanGymConfig';

export const PlansSection: React.FC = () => {
  return (
    <section id="planes" className="py-20 md:py-28 bg-[#0e131d]/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-black tracking-widest text-[#84cc16] uppercase mb-1">
            MEMBRESÍAS OFICIALES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-tight">
            PLANES ADAPTADOS A TUS METAS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Invierte en tu salud, gana masa muscular y quema grasa con opciones flexibles sin letras
            pequeñas ni cobros sorpresa.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS_DATA.map((plan) => {
            const whatsappUrl = getWhatsAppUrl(plan.whatsappMessage);
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#111827] border-2 border-[#84cc16] shadow-neon-glow lg:-translate-y-2'
                    : 'bg-[#0f141f] border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Callout Top Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#84cc16] text-[#0a0f17] px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md whitespace-nowrap">
                    ★ MÁS POPULAR • AHORRA 20%
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Card Header & Tag */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-black uppercase text-white font-heading tracking-wide">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {plan.description}
                      </p>
                    </div>
                    {plan.tag && (
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                        isPopular 
                          ? 'bg-[#84cc16]/20 text-[#84cc16] border border-[#84cc16]/40' 
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}>
                        {plan.tag}
                      </span>
                    )}
                  </div>

                  {/* Pricing Display */}
                  <div className="pt-2 pb-4 border-b border-slate-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-sm font-bold text-slate-400">
                        {plan.period}
                      </span>
                    </div>
                    {plan.subPrice && (
                      <div className="text-xs font-bold text-[#84cc16] mt-0.5">
                        ({plan.subPrice})
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-2">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        {feature.included ? (
                          <div className="p-0.5 rounded-full bg-[#84cc16]/20 text-[#84cc16] mt-0.5 shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="p-0.5 rounded-full bg-slate-800 text-slate-500 mt-0.5 shrink-0">
                            <X className="w-3.5 h-3.5 stroke-[2]" />
                          </div>
                        )}
                        <span className={feature.included ? 'text-slate-200' : 'text-slate-500 line-through'}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Footer Button */}
                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 ${
                      isPopular
                        ? 'bg-[#84cc16] hover:bg-[#96ea20] text-[#0a0f17] shadow-neon-glow hover:scale-[1.02] active:scale-[0.98]'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    {isPopular ? (
                      <Zap className="w-4 h-4 fill-current" />
                    ) : (
                      <MessageSquare className="w-4 h-4" />
                    )}
                    {plan.ctaText}
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
