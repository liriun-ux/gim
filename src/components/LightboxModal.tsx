import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FacilityPhoto } from '../data/gymData';

interface LightboxModalProps {
  photo: FacilityPhoto | null;
  photos: FacilityPhoto[];
  onClose: () => void;
  onSelectPhoto: (photo: FacilityPhoto) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, photos, onClose, onSelectPhoto }) => {
  if (!photo) return null;

  const currentIndex = photos.findIndex(p => p.id === photo.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIndex]);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden clean-card-shadow border border-slate-700/30 flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3 bg-slate-900 text-white">
          <div>
            <h4 className="font-bold text-sm sm:text-base font-display">{photo.title}</h4>
            <p className="text-xs text-slate-300">{photo.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Cerrar vista"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="relative bg-slate-950 flex items-center justify-center min-h-[300px] sm:min-h-[440px] max-h-[70vh] overflow-hidden">
          <img
            src={photo.imageSrc}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[65vh]"
          />

          {/* Nav arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-all backdrop-blur-sm"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-all backdrop-blur-sm"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="p-4 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            {photo.description}
          </p>
          <div className="text-xs font-mono text-slate-400 shrink-0">
            {currentIndex + 1} de {photos.length}
          </div>
        </div>
      </div>
    </div>
  );
};
