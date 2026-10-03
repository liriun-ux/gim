import React from 'react';
import { 
  Dumbbell, 
  HeartPulse, 
  Users, 
  Compass, 
  ShoppingBag, 
  Check, 
  ArrowRight,
  CalendarDays
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/gymData';

interface ServicesSectionProps {
  onOpenClassesModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenClassesModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-purple-700" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-600" />;
      case 'Users': return <Users className="w-6 h-6 text-amber-600" />;
      case 'Compass': return <Compass className="w-6 h-6 text-emerald-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-blue-600" />;
      default: return <Dumbbell className="w-6 h-6 text-purple-700" />;
    }
  };

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-2">
            Nuestros Espacios y Disciplinas
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display text-balance">
            Todo lo que necesitas para alcanzar tus objetivos
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Instalaciones pensadas para tu progreso y bienestar, equipadas con marcas líderes y diseñadas para que nunca te sientas fuera de lugar.
          </p>
        </div>

        {/* Bento Grid / Modern Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const isMarquee = service.id === 'musculacion' || service.id === 'clases';
            return (
              <div
                key={service.id}
                className={`bg-white rounded-3xl p-7 clean-card-shadow clean-card-shadow-hover border border-slate-200/90 flex flex-col justify-between ${
                  isMarquee ? 'lg:col-span-1 border-purple-200/80' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold text-purple-700 mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 mb-6">
                    {service.equipmentHighlight.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer action */}
                <div className="pt-2">
                  {service.id === 'clases' ? (
                    <button
                      onClick={onOpenClassesModal}
                      className="w-full py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-bold transition-colors flex items-center justify-center gap-2 border border-purple-200 cursor-pointer"
                    >
                      <CalendarDays className="w-4 h-4" />
                      <span>Ver Horarios de Clases</span>
                    </button>
                  ) : (
                    <a
                      href="#planes"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-purple-700 transition-colors group"
                    >
                      <span>Incluido en membresías</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
