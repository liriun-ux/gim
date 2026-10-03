import React from 'react';
import { Dumbbell } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface FooterProps {
  onOpenTerms: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms }) => {
  const scrollTo = (href: string) => {
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
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-purple-700 flex items-center justify-center text-white shadow-sm">
                <Dumbbell className="w-5 h-5 text-amber-300 transform -rotate-12" />
              </div>
              <span className="text-xl font-black tracking-tight text-white font-display">
                GIMNASIO <span className="text-purple-400">EL ALTO</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              El gimnasio donde todos son bienvenidos. Espacio inclusivo, libre de juicios y equipado con la mejor tecnología de fuerza y cardio en la Ceja de El Alto.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p>📍 {GYM_INFO.address}</p>
              <p>⏰ Lunes a Viernes 06:00 - 22:00 | Sábados 08:00 - 18:00</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => scrollTo('#ubicacion')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Ubicación / Zonas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#servicios')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Servicios y Disciplinas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#planes')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Planes y Membresías
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#instalaciones')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Instalaciones / Tour Virtual
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#faq')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          {/* Social Icons & Legal */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Síguenos en Redes
            </h4>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-purple-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Facebook Gimnasio El Alto"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-purple-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Instagram Gimnasio El Alto"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-purple-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="TikTok Gimnasio El Alto"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.87-4.49V8.62a8.27 8.27 0 0 0 4.84 1.56V6.73a4.85 4.85 0 0 1-.94-.04z"/>
                </svg>
              </a>
            </div>

            {/* Legal Links */}
            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
              <button
                onClick={() => onOpenTerms('privacy')}
                className="hover:text-purple-300 transition-colors underline cursor-pointer"
              >
                Políticas de Privacidad
              </button>
              <button
                onClick={() => onOpenTerms('terms')}
                className="hover:text-purple-300 transition-colors underline cursor-pointer"
              >
                Términos y Convivencia
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar & LIRIUN-UX Seal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Gimnasio El Alto. Todos los derechos reservados.</p>
          
          {/* Required LIRIUN-UX development seal */}
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 text-center sm:text-right">
            <span className="text-slate-400">
              Diseñado y optimizado por <strong className="text-amber-400">LIRIUN-UX</strong> | Web, SEO & AEO Agency
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
