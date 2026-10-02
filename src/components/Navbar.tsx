import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, MessageSquare } from 'lucide-react';
import { UrbanGymLogo } from './UrbanGymLogo';
import { getWhatsAppUrl } from '../config/urbanGymConfig';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'INICIO', href: '#inicio' },
    { label: 'SEDES', href: '#sedes' },
    { label: 'GALERÍA', href: '#galeria' },
    { label: 'PLANES', href: '#planes' },
    { label: 'PROMOCIONES', href: '#promociones' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    }
  };

  const registerWhatsAppUrl = getWhatsAppUrl(
    'Hola Urban GYM, deseo inscribirme y empezar mi entrenamiento hoy.'
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-[#0b0f17]/80 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#inicio"
            onClick={() => handleLinkClick('#inicio')}
            className="flex items-center gap-2 group transition-opacity hover:opacity-90"
          >
            <UrbanGymLogo size={42} showText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-xs font-bold tracking-widest text-slate-300 hover:text-[#84cc16] transition-colors uppercase py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#84cc16] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={registerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-md bg-[#84cc16] text-[#0b0f17] font-black text-xs uppercase tracking-wider hover:bg-[#99e622] transition-all duration-200 hover:shadow-neon-glow hover:scale-[1.02] active:scale-[0.98]"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              INSCRÍBETE AQUÍ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={registerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Inscríbete por WhatsApp"
              className="p-2 rounded-md bg-[#84cc16] text-black hover:bg-[#99e622]"
            >
              <Zap className="w-4 h-4 fill-current" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-[#0b0f17]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="px-3 py-2.5 rounded-md text-sm font-bold tracking-wider text-slate-200 hover:text-[#84cc16] hover:bg-slate-900 transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-800/80">
            <a
              href={registerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#84cc16] text-black font-black text-sm uppercase tracking-wider shadow-neon-glow"
            >
              <Zap className="w-4 h-4 fill-current" />
              INSCRÍBETE AQUÍ POR WHATSAPP
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
