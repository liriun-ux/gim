import React, { useState } from 'react';
import { Check, Flame, MessageCircle, QrCode, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { PLANS, Plan, GYM_INFO } from '../data/gymData';

interface PricingSectionProps {
  onOpenQrModal: (plan: Plan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenQrModal }) => {
  const [showComparison, setShowComparison] = useState(false);

  const getWhatsAppEnrollUrl = (plan: Plan) => {
    const text = encodeURIComponent(
      `¡Hola Gimnasio El Alto! Deseo inscribirme con el *${plan.name}* (Bs. ${plan.price}/${plan.period}). ¿Cuáles son los pasos a seguir?`
    );
    return `${GYM_INFO.whatsappUrl}?text=${text}`;
  };

  const comparisonRows = [
    { feature: "Acceso ilimitado a sala de pesas y máquinas", clasico: true, vip: true, pareja: true },
    { feature: "Zona cardiovascular completa (caminadoras, bicis, elípticas)", clasico: true, vip: true, pareja: true },
    { feature: "Lockers de seguridad y vestidores limpios", clasico: true, vip: true, pareja: true },
    { feature: "Duchas con agua caliente continua garantizada", clasico: true, vip: true, pareja: true },
    { feature: "Rutina inicial guiada por instructor de sala", clasico: true, vip: true, pareja: true },
    { feature: "Sin contrato de permanencia obligatoria", clasico: true, vip: true, pareja: true },
    { feature: "Clases grupales ilimitadas (Spinning, Zumba, Cross-training)", clasico: false, vip: true, pareja: false },
    { feature: "Pase de invitado gratis (2 veces por mes)", clasico: false, vip: true, pareja: false },
    { feature: "10% de descuento en suplementos deportivos", clasico: false, vip: true, pareja: false },
    { feature: "Descuento en carnet universitario / 2 personas", clasico: false, vip: false, pareja: true },
  ];

  return (
    <section id="planes" className="py-16 lg:py-24 bg-slate-50 scroll-mt-20 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <p className="text-xs font-bold text-purple-700 uppercase tracking-widest">
            Membresías Claras y Accesibles
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display text-balance">
            Elige la membresía que mejor se adapte a ti
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Sin contratos complicados ni letras chicas.
          </p>
        </div>

        {/* Pricing Cards Grid (Planet Fitness pattern) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => {
            const isVip = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isVip
                    ? 'clean-featured-shadow border-2 border-purple-600 lg:-translate-y-3'
                    : 'clean-card-shadow clean-card-shadow-hover border border-slate-200'
                }`}
              >
                {/* Popular / Best Value Banner */}
                {isVip && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-700 text-amber-300 font-extrabold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>MÁS POPULAR / MEJOR VALOR</span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="border-b border-slate-100 pb-6 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-black text-slate-950 font-display">
                        {plan.name}
                      </h3>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${
                        isVip ? 'bg-amber-100 text-amber-900 border border-amber-200' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {plan.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 mb-5 min-h-[32px]">
                      {plan.tagline}
                    </p>

                    {/* Price tag */}
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-slate-500">Bs.</span>
                      <span className="text-4xl sm:text-5xl font-black text-slate-950 font-display tabular-nums tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 ml-1">
                        / {plan.period}
                      </span>
                    </div>

                    <p className="text-[11px] text-emerald-700 font-semibold mt-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Inscripción 0 Bs este mes de apertura
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Incluye:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          isVip ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <a
                    href={getWhatsAppEnrollUrl(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group active:scale-95 text-center ${
                      isVip
                        ? 'bg-purple-700 hover:bg-purple-800 text-white shadow-md shadow-purple-700/25'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {isVip ? (
                      <Flame className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
                    ) : (
                      <MessageCircle className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
                    )}
                    <span>{plan.ctaLabel}</span>
                  </a>

                  {/* Pagar por QR Button */}
                  <button
                    onClick={() => onOpenQrModal(plan)}
                    className="w-full py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100/80 text-purple-900 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-purple-200/80 cursor-pointer"
                  >
                    <QrCode className="w-3.5 h-3.5 text-purple-700" />
                    <span>Pagar por QR Simple (Bolivia)</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle Detailed Comparison Table */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-purple-700 transition-colors bg-white px-4 py-2 rounded-xl clean-card-shadow border border-slate-200 cursor-pointer"
          >
            <span>{showComparison ? 'Ocultar comparativa detallada' : 'Comparar beneficios lado a lado'}</span>
            {showComparison ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Expanded Comparison Table */}
        {showComparison && (
          <div className="mt-8 bg-white rounded-3xl clean-card-shadow border border-slate-200 overflow-hidden animate-in fade-in duration-300">
            <div className="p-6 bg-slate-900 text-white">
              <h3 className="text-lg font-bold font-display">Matriz Comparativa de Beneficios</h3>
              <p className="text-xs text-slate-300">Consulta en detalle qué incluye cada membresía sin sorpresas</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                    <th className="py-3 px-4 font-bold">Beneficio / Característica</th>
                    <th className="py-3 px-4 text-center font-bold">Plan Clásico<br/><span className="text-xs font-normal text-slate-500">Bs. 130</span></th>
                    <th className="py-3 px-4 text-center font-bold text-purple-700 bg-purple-50/50">Plan VIP / PRO<br/><span className="text-xs font-normal text-purple-600">Bs. 180</span></th>
                    <th className="py-3 px-4 text-center font-bold">Plan Pareja<br/><span className="text-xs font-normal text-slate-500">Bs. 220</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 font-medium">{row.feature}</td>
                      <td className="py-3 px-4 text-center">
                        {row.clasico ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <span className="text-slate-300">—</span>}
                      </td>
                      <td className="py-3 px-4 text-center bg-purple-50/30">
                        {row.vip ? <Check className="w-4 h-4 text-purple-700 mx-auto font-bold" /> : <span className="text-slate-300">—</span>}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.pareja ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <span className="text-slate-300">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
