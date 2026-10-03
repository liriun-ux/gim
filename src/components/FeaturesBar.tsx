import React from 'react';
import { Dumbbell, ShowerHead, QrCode, HeartHandshake } from 'lucide-react';

export const FeaturesBar: React.FC = () => {
  const differentiators = [
    {
      icon: Dumbbell,
      title: "Toneladas de Equipamiento",
      description: "Máquinas de musculación, jaulas de potencia y caminadoras de última generación sin esperas.",
      accent: "text-purple-700 bg-purple-100/80",
    },
    {
      icon: ShowerHead,
      title: "Duchas & Lockers Impecables",
      description: "Vestidores limpios, casilleros seguros y duchas con agua caliente continuas a gas domiciliario.",
      accent: "text-blue-700 bg-blue-100/80",
    },
    {
      icon: QrCode,
      title: "Facilidad de Pago Inmediata",
      description: "Aceptamos efectivo, transferencias directas y Pago por QR Simple de cualquier banco de Bolivia.",
      accent: "text-amber-700 bg-amber-100/80",
    },
    {
      icon: HeartHandshake,
      title: "Ambiente Cómodo y Accesible",
      description: "Espacio seguro y empático tanto para personas que inician como para deportistas avanzados.",
      accent: "text-emerald-700 bg-emerald-100/80",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="bg-white rounded-3xl clean-card-shadow border border-slate-200/80 p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`pt-5 first:pt-0 md:pt-0 ${idx > 0 ? 'md:pl-6 lg:pl-8' : ''} flex flex-col justify-start space-y-3 group`}
              >
                <div className={`w-12 h-12 rounded-2xl ${item.accent} flex items-center justify-center transition-transform group-hover:scale-110 duration-200 shadow-xs`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900 font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
