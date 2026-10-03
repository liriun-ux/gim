import React, { useState } from 'react';
import { X, Clock, User, Calendar, Flame, CheckCircle2 } from 'lucide-react';
import { GROUP_CLASSES_SCHEDULE, GYM_INFO } from '../data/gymData';

interface ClassesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectClass?: (className: string) => void;
}

export const ClassesModal: React.FC<ClassesModalProps> = ({ isOpen, onClose, onSelectClass }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  if (!isOpen) return null;

  const categories = ['Todas', 'Spinning', 'Zumba', 'Cross-Training'];

  const filteredSchedule = activeCategory === 'Todas'
    ? GROUP_CLASSES_SCHEDULE
    : GROUP_CLASSES_SCHEDULE.filter(c => c.class.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl clean-card-shadow border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-purple-900 text-white flex items-center justify-between shrink-0">
          <div>
            <h3 className="font-bold text-lg text-white font-display">
              Cronograma Semanal de Clases Grupales
            </h3>
            <p className="text-xs text-purple-200">
              Incluidas sin costo extra en el Plan VIP / PRO
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-purple-200 hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter controls */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center gap-2 shrink-0">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mr-1">Filtrar:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeCategory === cat
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="p-6 overflow-y-auto space-y-3 divide-y divide-slate-100">
          {filteredSchedule.map((item, idx) => (
            <div key={idx} className="pt-3 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-base">{item.class}</span>
                  <span className="text-xs text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-medium border border-purple-100">
                    {item.level}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-600" />
                    {item.day}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    {item.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    {item.coach}
                  </span>
                </div>
              </div>

              <a
                href={`${GYM_INFO.whatsappUrl}?text=${encodeURIComponent(`Hola Gimnasio El Alto, quisiera reservar un cupo de prueba para la clase de ${item.class} (${item.time}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-800 transition-colors border border-purple-200"
              >
                <span>Reservar Cupo</span>
              </a>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Salas climatizadas con audio envolvente y espejos</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
