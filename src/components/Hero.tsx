import React, { useState } from 'react';
import { Flame, MessageCircle, MapPin, Clock, CheckCircle2, ChevronRight, Shield, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import gymHero from '../assets/images/gym_hero_facility_1790991293678.jpg';
export const Hero: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<'ceja' | 'satelite'>('ceja');

  const scrollToPlanes = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('planes');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatsappHeroUrl = `${GYM_INFO.whatsappUrl}?text=${encodeURIComponent('¡Hola Gimnasio El Alto! Vi la oferta de apertura (inscripción gratis / 2x1) y quiero información.')}`;

  return (
    <section className="relative bg-gradient-to-b from-purple-50/50 via-white to-slate-50 pt-2 pb-16 lg:pb-24 overflow-hidden border-b border-slate-200/60">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ⚡ Banner Superior Promocional */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-sm flex items-center justify-between flex-wrap gap-2 border border-amber-300">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-900 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
            </span>
            <span className="font-extrabold">{GYM_INFO.promoBanner}</span>
          </div>
          <a
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-extrabold bg-slate-950 text-amber-300 px-3 py-1 rounded-lg hover:bg-slate-900 transition-colors shrink-0"
          >
            <span>Aprovechar Hoy</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines, Location Selector & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Friendly Non-judgmental Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-900 bg-purple-100/80 px-3 py-1.5 rounded-lg border border-purple-200">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Zona Libre de Críticas · Para todos los niveles</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-950 tracking-tight leading-[1.12] text-balance font-display">
              Entrena a tu ritmo en El Alto.{' '}
              <span className="text-purple-700 underline decoration-amber-400 decoration-wavy decoration-2">
                El gimnasio donde todos son bienvenidos.
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Equipamiento completo de musculación y cardio, duchas de agua caliente y entrenadores a tu disposición en la mejor ubicación.
            </p>

            {/* Selector / Confirmador de Ubicación Rápido (Planet Fitness pattern) */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 clean-card-shadow border border-slate-200 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-purple-700" />
                  Tu Club Más Cercano
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Abierto ahora (06:00 - 22:00)
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-purple-50/50 rounded-xl border border-purple-100">
                <div className="space-y-1">
                  <p className="font-bold text-slate-900 text-sm sm:text-base">
                    📍 Sucursal Principal: Ceja de El Alto
                  </p>
                  <p className="text-xs text-slate-600">
                    A pasos del Teleférico (Línea Plateada y Morada) · Av. 6 de Marzo
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-800 bg-white px-3 py-1.5 rounded-lg border border-purple-200 self-start sm:self-auto shrink-0 shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Lun - Vie: 06:00 a 22:00</span>
                </div>
              </div>
            </div>

            {/* Botones Principales de Acción */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={scrollToPlanes}
                className="py-3.5 px-6 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm sm:text-base clean-featured-shadow transition-all flex items-center justify-center gap-2 group active:scale-95 cursor-pointer"
              >
                <Flame className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
                <span>Ver Planes desde Bs. 120/mes</span>
              </button>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm sm:text-base clean-card-shadow border border-slate-300 transition-all flex items-center justify-center gap-2 group active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>Chatear por WhatsApp</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-3 border-t border-slate-200/80 grid grid-cols-3 gap-3 text-center sm:text-left">
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 tabular-nums">0 Bs</p>
                <p className="text-xs text-slate-500">Matrícula este mes</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-purple-700 tabular-nums">100%</p>
                <p className="text-xs text-slate-500">Agua caliente continua</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-amber-600 tabular-nums">+40</p>
                <p className="text-xs text-slate-500">Máquinas de calidad</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with Clean Box Shadow */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden clean-featured-shadow border-4 border-white bg-slate-900 group">
              <img
src={gymHero}
                alt="Instalaciones modernas de Gimnasio El Alto con máquinas de cardio y fuerza"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

              {/* Floating badge inside image */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl clean-card-shadow border border-white/60">
                <p className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">Ceja de El Alto</p>
                <p className="text-xs font-black text-slate-900">A 2 min del Teleférico</p>
              </div>

              {/* Bottom Card callout */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md clean-card-shadow border border-white/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-purple-700" />
                    Sin contratos de permanencia
                  </span>
                  <span className="text-xs font-bold text-purple-800">
                    Cancela cuando quieras
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Entrenadores en sala listos para enseñarte tu rutina desde cero sin costo extra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
