import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesBar } from './components/FeaturesBar';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { FacilitiesTour } from './components/FacilitiesTour';
import { FaqSection } from './components/FaqSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { QrModal } from './components/QrModal';
import { ClassesModal } from './components/ClassesModal';
import { LightboxModal } from './components/LightboxModal';
import { TermsModal } from './components/TermsModal';
import { Plan, FacilityPhoto, FACILITIES, GYM_INFO } from './data/gymData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedQrPlan, setSelectedQrPlan] = useState<Plan | null>(null);
  const [isClassesModalOpen, setIsClassesModalOpen] = useState(false);
  const [lightboxPhoto, setLightboxPhoto] = useState<FacilityPhoto | null>(null);
  const [termsModalType, setTermsModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenWhatsApp = () => {
    window.open(`${GYM_INFO.whatsappUrl}?text=${encodeURIComponent('¡Hola Gimnasio El Alto! Deseo más información sobre las inscripciones.')}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col antialiased selection:bg-purple-600 selection:text-white">
      {/* 1. Header Sticky */}
      <Navbar onOpenWhatsApp={handleOpenWhatsApp} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Barra de Ventajas y Confianza (Diferenciadores) */}
        <FeaturesBar />

        {/* 4. Sección de Servicios y Disciplinas */}
        <ServicesSection onOpenClassesModal={() => setIsClassesModalOpen(true)} />

        {/* 5. Planes y Membresías */}
        <PricingSection onOpenQrModal={(plan) => setSelectedQrPlan(plan)} />

        {/* 6. Tour Virtual e Instalaciones */}
        <FacilitiesTour onOpenLightbox={(photo) => setLightboxPhoto(photo)} />

        {/* 7. Preguntas Frecuentes (FAQ) & Medidor de Afluencia */}
        <FaqSection />

        {/* 8. Ubicación, Horarios y Contacto Directo */}
        <LocationContactSection />
      </main>

      {/* 9. Pie de Página */}
      <Footer onOpenTerms={(type) => setTermsModalType(type)} />

      {/* Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <a
          href={`${GYM_INFO.whatsappUrl}?text=${encodeURIComponent('¡Hola Gimnasio El Alto! Quiero información para empezar a entrenar.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white"
          aria-label="Chatear con recepción por WhatsApp"
        >
          <div className="relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <MessageCircle className="w-5 h-5 text-white relative" />
          </div>
          <span className="hidden sm:inline font-bold text-xs tracking-wide">
            Chatear con Recepción
          </span>
        </a>
      </div>

      {/* Modals */}
      {selectedQrPlan && (
        <QrModal
          plan={selectedQrPlan}
          onClose={() => setSelectedQrPlan(null)}
        />
      )}

      {isClassesModalOpen && (
        <ClassesModal
          isOpen={isClassesModalOpen}
          onClose={() => setIsClassesModalOpen(false)}
        />
      )}

      {lightboxPhoto && (
        <LightboxModal
          photo={lightboxPhoto}
          photos={FACILITIES}
          onClose={() => setLightboxPhoto(null)}
          onSelectPhoto={(photo) => setLightboxPhoto(photo)}
        />
      )}

      {termsModalType && (
        <TermsModal
          type={termsModalType}
          onClose={() => setTermsModalType(null)}
        />
      )}
    </div>
  );
}
