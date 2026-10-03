import React, { useState, useEffect } from 'react';
import { Dumbbell, MessageCircle, Menu, X } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenWhatsApp?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ubicación / Zonas', href: '#ubicacion' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Planes y Membresías', href: '#planes' },
    { label: 'Instalaciones / Tour', href: '#instalaciones' },
    { label: 'Preguntas Frecuentes', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3' 
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-700 flex items-center justify-center text-white shadow-sm group-hover:bg-purple-800 transition-colors">
              <Dumbbell className="w-5 h-5 text-amber-300 transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-display">
              GIMNASIO <span className="text-purple-700">EL ALTO</span>
            </span>
          </a>

          {/* Zone 2: Anchor Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold text-slate-700 hover:text-purple-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-700 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`${GYM_INFO.whatsappUrl}?text=${encodeURIComponent('¡Hola Gimnasio El Alto! Deseo inscribirme y conocer las promociones disponibles de este mes.')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Inscribirme por WhatsApp"
              className="inline-flex items-center justify-center gap-2 p-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-700/25 hover:shadow-lg hover:shadow-purple-700/35 transition-all whitespace-nowrap active:scale-95"
            >
              <MessageCircle className="w-5 h-5 sm:w-4 sm:h-4 text-emerald-300" />
              <span className="hidden sm:inline">Inscribirme por WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-purple-800 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 pb-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-purple-50 hover:text-purple-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-3 text-xs text-slate-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Abierto hoy de 06:00 a 22:00 · Ceja de El Alto</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
