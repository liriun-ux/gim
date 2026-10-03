import React, { useState } from 'react';
import { X, Check, Copy, MessageCircle, ShieldCheck, Download } from 'lucide-react';
import { Plan, GYM_INFO } from '../data/gymData';

interface QrModalProps {
  plan: Plan | null;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ plan, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!plan) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `¡Hola Gimnasio El Alto! Acabo de generar mi pago por QR para el *${plan.name}* (Bs. ${plan.price}). Adjunto mi comprobante para activar mi membresía.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl clean-card-shadow border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-purple-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <h3 className="font-bold text-base tracking-tight text-white font-display">
              Pago Rápido por QR Simple
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="text-purple-200 hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="bg-purple-50/60 border border-purple-100 rounded-xl p-3.5 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-purple-700 uppercase tracking-wider">Plan Seleccionado</p>
              <p className="font-bold text-slate-900 text-base">{plan.name}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">Monto total</p>
              <p className="font-black text-xl text-purple-900 tabular-nums">Bs. {plan.price}</p>
            </div>
          </div>

          {/* QR Display */}
          <div className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-xl shadow-inner text-center">
            {/* Bolivian Simple QR Code stylized representation */}
            <div className="relative p-3 bg-white rounded-lg border-2 border-dashed border-purple-300">
              <svg 
                viewBox="0 0 200 200" 
                className="w-48 h-48 rounded"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="200" height="200" fill="#FFFFFF"/>
                {/* QR Pattern Corners */}
                <rect x="15" y="15" width="45" height="45" rx="4" fill="#581C87" />
                <rect x="23" y="23" width="29" height="29" rx="2" fill="#FFFFFF" />
                <rect x="29" y="29" width="17" height="17" rx="1" fill="#581C87" />

                <rect x="140" y="15" width="45" height="45" rx="4" fill="#581C87" />
                <rect x="148" y="23" width="29" height="29" rx="2" fill="#FFFFFF" />
                <rect x="154" y="29" width="17" height="17" rx="1" fill="#581C87" />

                <rect x="15" y="140" width="45" height="45" rx="4" fill="#581C87" />
                <rect x="23" y="148" width="29" height="29" rx="2" fill="#FFFFFF" />
                <rect x="29" y="154" width="17" height="17" rx="1" fill="#581C87" />

                {/* Simulated Matrix Pixels */}
                <rect x="70" y="20" width="12" height="12" fill="#581C87" />
                <rect x="90" y="20" width="12" height="24" fill="#581C87" />
                <rect x="110" y="20" width="18" height="12" fill="#581C87" />
                <rect x="70" y="45" width="25" height="12" fill="#581C87" />
                <rect x="105" y="45" width="15" height="15" fill="#581C87" />
                
                <rect x="20" y="75" width="20" height="12" fill="#581C87" />
                <rect x="50" y="75" width="15" height="15" fill="#581C87" />
                <rect x="75" y="70" width="30" height="15" fill="#581C87" />
                <rect x="115" y="75" width="15" height="12" fill="#581C87" />
                <rect x="140" y="75" width="20" height="15" fill="#581C87" />
                <rect x="170" y="75" width="12" height="20" fill="#581C87" />

                <rect x="20" y="100" width="15" height="20" fill="#581C87" />
                <rect x="45" y="105" width="25" height="12" fill="#581C87" />
                <rect x="80" y="95" width="40" height="40" rx="8" fill="#F59E0B" />
                <path d="M93 115L98 120L108 108" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="130" y="100" width="15" height="15" fill="#581C87" />
                <rect x="155" y="105" width="25" height="12" fill="#581C87" />

                <rect x="75" y="145" width="20" height="15" fill="#581C87" />
                <rect x="105" y="145" width="25" height="12" fill="#581C87" />
                <rect x="140" y="140" width="15" height="20" fill="#581C87" />
                <rect x="165" y="145" width="18" height="15" fill="#581C87" />

                <rect x="70" y="170" width="20" height="15" fill="#581C87" />
                <rect x="100" y="170" width="15" height="12" fill="#581C87" />
                <rect x="125" y="170" width="30" height="15" fill="#581C87" />
                <rect x="165" y="170" width="15" height="15" fill="#581C87" />
              </svg>
            </div>
            <p className="mt-2 text-xs font-medium text-slate-600">
              Escanea desde la app de tu banco (Banco Unión, BCP, BNB, Banco Sol, Fie, etc.)
            </p>
          </div>

          {/* Bank Details & Copy */}
          <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Beneficiario:</span>
              <span className="font-semibold text-slate-800">Gimnasio El Alto S.R.L.</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Banco de destino:</span>
              <span className="font-semibold text-slate-800">Banco Unión / BCP</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Cuenta Corriente:</span>
              <div className="flex items-center gap-1.5 font-mono font-medium text-slate-800">
                <span>10000038927401</span>
                <button
                  onClick={() => handleCopy("10000038927401")}
                  className="text-purple-700 hover:text-purple-900 p-1 hover:bg-purple-100 rounded transition-colors"
                  title="Copiar número de cuenta"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2.5 pt-1">
            <a
              href={`${GYM_INFO.whatsappUrl}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm shadow-emerald-700/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar comprobante por WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-xl transition-colors text-center"
            >
              Cerrar y pagar después en recepción
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1 border-t border-slate-100">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
            <span>Pago seguro avalado por la red financiera de Bolivia (ASFI)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
