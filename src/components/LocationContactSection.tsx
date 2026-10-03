import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Send, 
  CheckCircle2, 
  Navigation, 
  Train, 
  Bus, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GYM_INFO, PLANS } from '../data/gymData';

export const LocationContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plan: 'Plan VIP / PRO (Bs. 180)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeMapTab, setActiveMapTab] = useState<'map' | 'transit'>('map');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const text = encodeURIComponent(
      `¡Hola Gimnasio El Alto! Mi nombre es *${formData.name}* (Tel: ${formData.phone}). Estoy interesado(a) en el *${formData.plan}*.\n${formData.message ? `Mensaje: ${formData.message}` : ''}`
    );

    window.open(`${GYM_INFO.whatsappUrl}?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="ubicacion" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-2">
            Visítanos y Empieza Hoy
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display text-balance">
            Ubicación y Horarios de Atención
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Estamos ubicados estratégicamente en la Ceja de El Alto, a pasos de las estaciones del Teleférico y paradas de minibús de mayor conexión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Interactive Map & Transit Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Map Tabs (Esquema de Mapa / Conexiones Teleférico) */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
                <button
                  onClick={() => setActiveMapTab('map')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeMapTab === 'map' ? 'bg-white text-purple-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Mapa de la Zona
                </button>
                <button
                  onClick={() => setActiveMapTab('transit')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeMapTab === 'transit' ? 'bg-white text-purple-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Cómo Llegar (Teleférico)
                </button>
              </div>

              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 transition-colors"
              >
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Custom Interactive Map Graphic */}
            <div className="relative rounded-3xl overflow-hidden clean-card-shadow border border-slate-200 bg-slate-900 min-h-[320px] sm:min-h-[380px] flex items-center justify-center">
              {/* Illustrated Map Canvas */}
              <div className="absolute inset-0 bg-[#e5e9ec] p-6 flex flex-col justify-between">
                {/* SVG Road and transit grid illustration */}
                <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                  {/* Street grids */}
                  <line x1="0" y1="90" x2="100%" y2="90" stroke="#cbd5e1" strokeWidth="24" />
                  <line x1="0" y1="230" x2="100%" y2="230" stroke="#cbd5e1" strokeWidth="36" />
                  <line x1="35%" y1="0" x2="35%" y2="100%" stroke="#cbd5e1" strokeWidth="28" />
                  <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#cbd5e1" strokeWidth="20" />
                  {/* Teleferico Cable Lines */}
                  <line x1="10%" y1="10%" x2="90%" y2="85%" stroke="#9333ea" strokeWidth="3" strokeDasharray="8 6" />
                </svg>

                {/* Simulated Street Names */}
                <div className="relative z-10 flex justify-between items-start pointer-events-none">
                  <span className="text-[11px] font-bold text-slate-600 bg-white/85 px-2 py-0.5 rounded shadow-2xs">
                    Av. 6 de Marzo (Ceja)
                  </span>
                  <span className="text-[11px] font-bold text-purple-800 bg-purple-100/90 px-2 py-0.5 rounded border border-purple-200 shadow-2xs">
                    Línea Plateada & Morada
                  </span>
                </div>

                {/* Central Gym Pin */}
                <div className="relative z-20 self-center my-auto flex flex-col items-center">
                  <div className="relative animate-bounce">
                    <div className="w-12 h-12 rounded-2xl bg-purple-700 text-white flex items-center justify-center shadow-xl border-2 border-white">
                      <MapPin className="w-6 h-6 text-amber-300" />
                    </div>
                  </div>
                  <div className="mt-2 bg-slate-950 text-white px-3.5 py-1.5 rounded-xl shadow-lg text-center border border-slate-700">
                    <p className="text-xs font-black tracking-tight font-display">GIMNASIO EL ALTO</p>
                    <p className="text-[10px] text-amber-300">Ceja · A 100m del Teleférico</p>
                  </div>
                </div>

                {/* Nearby landmarks */}
                <div className="relative z-10 flex justify-between items-end pointer-events-none">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700 bg-white/90 px-2.5 py-1 rounded-lg shadow-2xs">
                    <Train className="w-3.5 h-3.5 text-purple-700" />
                    <span>Estación Faro Murillo / Ceja</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700 bg-white/90 px-2.5 py-1 rounded-lg shadow-2xs">
                    <Bus className="w-3.5 h-3.5 text-blue-600" />
                    <span>Parada Minibuses La Paz - El Alto</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact details cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Dirección Central</span>
                </div>
                <p className="font-bold text-slate-900 text-sm">
                  Av. 6 de Marzo N° 450
                </p>
                <p className="text-xs text-slate-600 leading-snug">
                  Zona Ceja de El Alto (entre calle 1 y calle 2, a pasos del Teleférico).
                </p>
              </div>

              {/* Horarios card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Horarios de Atención</span>
                </div>
                <p className="font-bold text-slate-900 text-sm">
                  Lun a Vie: 06:00 a 22:00
                </p>
                <p className="text-xs text-slate-600 leading-snug">
                  Sábados: 08:00 a 18:00 | Domingos cerrado.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Formulario de Contacto Rápido */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 clean-card-shadow border border-slate-200 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                Reserva o Consulta
              </span>
              <h3 className="text-2xl font-black text-slate-950 font-display">
                Envía un mensaje directo a recepción
              </h3>
              <p className="text-xs text-slate-500">
                Completa tus datos y te atenderemos por WhatsApp en menos de 10 minutos.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-slate-900 text-base">¡Mensaje Preparado con Éxito!</h4>
                <p className="text-xs text-slate-600">
                  Se ha abierto la conversación con la recepción de Gimnasio El Alto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Tu Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Ronald Mamani"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                  />
                </div>

                {/* Teléfono / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Teléfono o WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ej. 76543210"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                  />
                </div>

                {/* Plan de Interés */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Plan de Interés (Desplegable)
                  </label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all font-medium"
                  >
                    <option value="Plan Clásico (Bs. 130/mes)">Plan Clásico — Bs. 130 / Mes</option>
                    <option value="Plan VIP / PRO (Bs. 180/mes)">Plan VIP / PRO — Bs. 180 / Mes (Recomendado)</option>
                    <option value="Plan Pareja / Estudiantil (Bs. 220/mes)">Plan Pareja / Estudiantil — Bs. 220 / Mes</option>
                    <option value="Pase Diario o Consulta General">Solo deseo una visita guiada / consulta general</option>
                  </select>
                </div>

                {/* Mensaje Opcional */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Consulta o Mensaje Adicional (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="¿Tienes alguna pregunta sobre horarios, clases o pagos por QR? Escríbela aquí..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-purple-700/25 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Enviar Mensaje a Recepción</span>
                </button>
              </form>
            )}

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-purple-700" />
                <span>Atención directa: +591 76543210</span>
              </span>
              <span>Sin costos de llamada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
