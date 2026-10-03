import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Clock, Search, MessageCircle } from 'lucide-react';
import { FAQS, GYM_INFO } from '../data/gymData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = searchQuery.trim() === ''
    ? FAQS
    : FAQS.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const crowdSchedule = [
    { time: "06:00 - 08:30", label: "Moderado", status: "medium", color: "bg-amber-400" },
    { time: "09:00 - 12:00", label: "Tranquilo (Ideal)", status: "low", color: "bg-emerald-500" },
    { time: "12:00 - 14:30", label: "Moderado", status: "medium", color: "bg-amber-400" },
    { time: "14:30 - 17:00", label: "Tranquilo (Ideal)", status: "low", color: "bg-emerald-500" },
    { time: "18:00 - 21:00", label: "Horario Pico", status: "high", color: "bg-purple-600" },
    { time: "21:00 - 22:00", label: "Tranquilo", status: "low", color: "bg-emerald-500" },
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 scroll-mt-20 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Live Crowd Meter Widget */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-2">
                Resolvemos tus Dudas
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display text-balance">
                Preguntas Frecuentes
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Todo lo que necesitas saber antes de iniciar tu entrenamiento en Gimnasio El Alto.
              </p>
            </div>

            {/* Medidor de Afluencia (Planet Fitness Crowd Meter pattern) */}
            <div className="bg-white rounded-3xl p-6 clean-card-shadow border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-purple-700" />
                  Medidor de Afluencia por Horas
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  El Alto
                </span>
              </div>

              <div className="space-y-2.5">
                {crowdSchedule.map((slot, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-600 font-medium">{slot.time}</span>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${slot.color}`}></span>
                      <span className="font-semibold text-slate-800">{slot.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Verde = Máxima disponibilidad
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  Morado = Horario pico
                </span>
              </div>
            </div>

            {/* WhatsApp Contact Callout */}
            <div className="p-5 rounded-2xl bg-purple-900 text-white space-y-3">
              <h4 className="font-bold text-base font-display">¿Tienes otra consulta específica?</h4>
              <p className="text-xs text-purple-200 leading-relaxed">
                Escríbenos en recepción por WhatsApp y te respondemos de inmediato con la información que necesites.
              </p>
              <a
                href={`${GYM_INFO.whatsappUrl}?text=${encodeURIComponent('Hola, tengo una pregunta sobre las membresías de Gimnasio El Alto.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-800" />
                <span>Preguntar por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion with Search */}
          <div className="lg:col-span-7 space-y-4">
            {/* Search Input */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar pregunta (ej. requisitos, horarios, QR, entrenadores)..."
                className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl clean-card-shadow border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
              />
            </div>

            {/* FAQ List */}
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
                <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-700">No encontramos resultados para tu búsqueda.</p>
                <p className="text-xs text-slate-500 mt-1">Escríbenos directamente por WhatsApp y te ayudaremos con gusto.</p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl clean-card-shadow border border-slate-200/90 overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base font-display">
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-purple-100 text-purple-700 rotate-180' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
