import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface TermsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl clean-card-shadow border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-purple-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-base font-display">
              {isPrivacy ? 'Políticas de Privacidad' : 'Términos y Convivencia'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="text-purple-200 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-600 leading-relaxed">
          {isPrivacy ? (
            <>
              <p className="font-semibold text-slate-800 text-sm">Protección de Datos Personales</p>
              <p>
                En <strong>Gimnasio El Alto</strong> tratamos tus datos de contacto (nombre, teléfono y preferencias de entrenamiento) con absoluta confidencialidad bajo estándares de privacidad bolivianos. No compartimos tu información con terceras entidades.
              </p>
              <p className="font-semibold text-slate-800 text-sm">Comunicaciones vía WhatsApp</p>
              <p>
                Al contactarnos por WhatsApp o enviar tu solicitud de inscripción, autorizas a nuestro equipo de recepción a brindarte información sobre tu membresía, horarios y promociones vigentes.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-800 text-sm">Zona Libre de Críticas y Respeto Mutuo</p>
              <p>
                Inspirados en una cultura inclusiva, en Gimnasio El Alto fomentamos un ambiente libre de juicios e intimidaciones donde todos los socios, sin importar su nivel de condición física, son bienvenidos.
              </p>
              <p className="font-semibold text-slate-800 text-sm">Uso de Instalaciones y Seguridad</p>
              <p>
                - Es obligatorio el uso de toalla personal y calzado deportivo adecuado en sala.<br />
                - Regresar mancuernas y barras a sus racks tras su uso.<br />
                - El uso de casilleros es diurno mediante candado propio del usuario.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-purple-900 text-white rounded-lg text-xs font-semibold hover:bg-purple-800 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
