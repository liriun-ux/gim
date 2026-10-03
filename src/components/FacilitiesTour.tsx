import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Maximize2, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  RotateCcw,
  CheckCircle,
  Eye
} from 'lucide-react';
import { FACILITIES, FacilityPhoto } from '../data/gymData';

interface FacilitiesTourProps {
  onOpenLightbox: (photo: FacilityPhoto) => void;
}

export const FacilitiesTour: React.FC<FacilitiesTourProps> = ({ onOpenLightbox }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTourIndex, setActiveTourIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const tourReelItems = [
    {
      title: "Sala de Pesas y Mancuernas",
      tag: "Fuerza Libre",
      description: "Mancuernas completas hasta 50kg, jaulas olímpicas y bancas ergonómicas",
      image: "/src/assets/images/gym_weights_free_1790991305512.jpg",
      highlight: "Equipamiento calibrado sin esperas"
    },
    {
      title: "Deck de Cardio con Pantallas",
      tag: "Cardio",
      description: "Caminadoras con absorción de impacto y escaladoras con vista panorámica",
      image: "/src/assets/images/gym_cardio_zone_1790991316092.jpg",
      highlight: "12 caminadoras siempre listas"
    },
    {
      title: "Salón de Clases & Spinning",
      tag: "Clases Grupales",
      description: "Sonido envolvente, bicicletas de spinning de última generación y piso de madera",
      image: "/src/assets/images/gym_group_fitness_1790991327035.jpg",
      highlight: "Instructores certificados"
    },
    {
      title: "Vestidores & Duchas Calientes",
      tag: "Higiene y Confort",
      description: "Agua caliente continua a gas domiciliario y casilleros seguros de uso diario",
      image: "/src/assets/images/gym_lockers_showers_1790991336512.jpg",
      highlight: "100% agua caliente garantizada"
    }
  ];

  // Auto-advance simulated Reel when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveTourIndex((idx) => (idx + 1) % tourReelItems.length);
            return 0;
          }
          return prev + 2.5; // ~4 seconds per scene
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, tourReelItems.length]);

  const currentReel = tourReelItems[activeTourIndex];

  return (
    <section id="instalaciones" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-2">
            Instalaciones de Primer Nivel
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display text-balance">
            Conoce tu nuevo espacio de entrenamiento
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Un club amplio, iluminado y ventilado en el corazón de El Alto. Explora nuestro tour interactivo y galería de fotos en alta definición.
          </p>
        </div>

        {/* Video Reel + Facilities Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Video Destacado (Reel / TikTok Style Interactive Tour Player) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden clean-featured-shadow border-4 border-slate-900 bg-slate-950 aspect-[9/14] sm:aspect-[9/13] max-w-sm mx-auto lg:max-w-none w-full group">
              {/* Media visual representation */}
              <img
                src={currentReel.image}
                alt={currentReel.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
              />

              {/* Scrim for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40" />

              {/* Top Stories Progress Bars */}
              <div className="absolute top-3 left-3 right-3 flex items-center gap-1.5 z-20">
                {tourReelItems.map((_, i) => (
                  <div key={i} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-amber-400 transition-all duration-100 ${
                        i < activeTourIndex 
                          ? 'w-full' 
                          : i === activeTourIndex 
                            ? 'w-full origin-left' 
                            : 'w-0'
                      }`}
                      style={{
                        width: i === activeTourIndex ? `${progress}%` : i < activeTourIndex ? '100%' : '0%'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Top Controls */}
              <div className="absolute top-7 left-4 right-4 flex items-center justify-between text-white z-20">
                <div className="flex items-center gap-2 bg-slate-950/60 backdrop-blur-md px-3 py-1 rounded-full text-xs">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span className="font-bold">Tour Virtual 360°</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white transition-colors"
                    aria-label={isMuted ? "Activar audio" : "Silenciar audio"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white transition-colors"
                    aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-amber-400" />}
                  </button>
                </div>
              </div>

              {/* Center Play Overlay when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 rounded-full bg-purple-700/90 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    aria-label="Reanudar reproducción"
                  >
                    <Play className="w-8 h-8 fill-current ml-1 text-amber-300" />
                  </button>
                </div>
              )}

              {/* Bottom Reel Details */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-20 space-y-2">
                <span className="inline-block text-[11px] font-bold text-amber-300 bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 px-2.5 py-0.5 rounded-full">
                  {currentReel.tag}
                </span>
                <h3 className="text-xl font-bold font-display leading-tight">
                  {currentReel.title}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2">
                  {currentReel.description}
                </p>
                <div className="pt-2 flex items-center justify-between text-xs border-t border-white/20">
                  <span className="text-amber-300 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {currentReel.highlight}
                  </span>
                  <div className="flex gap-1.5">
                    {tourReelItems.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveTourIndex(idx);
                          setProgress(0);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeTourIndex === idx ? 'bg-amber-400 w-5' : 'bg-white/40'
                        }`}
                        aria-label={`Ver sección ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-slate-500">
              * Toca los puntos para cambiar de zona o pausar la vista guiada
            </p>
          </div>

          {/* Right: Galería de Fotos Grid (4 fotos con lightbox interactivo) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Galería de Instalaciones
              </h3>
              <span className="text-xs font-semibold text-slate-500">
                Haz clic en cualquier imagen para ampliar
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FACILITIES.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => onOpenLightbox(photo)}
                  className="group relative bg-slate-100 rounded-2xl overflow-hidden clean-card-shadow clean-card-shadow-hover border border-slate-200 cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                    <img
                      src={photo.imageSrc}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Expand icon on hover */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 group-hover:bg-white text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm">
                    <Eye className="w-4 h-4 text-purple-700" />
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[10px] font-semibold text-amber-300 uppercase tracking-wide">
                      {photo.subtitle}
                    </p>
                    <h4 className="text-sm font-bold font-display leading-snug">
                      {photo.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Planet Fitness inspired reassurance banner */}
            <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <p className="font-bold text-slate-900 text-sm">
                  ¿Quieres conocer el gimnasio en persona antes de inscribirte?
                </p>
                <p className="text-xs text-slate-600">
                  Visítanos en la Ceja de El Alto y solicita un tour guiado gratuito en recepción.
                </p>
              </div>
              <a
                href="#ubicacion"
                className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold transition-colors whitespace-nowrap self-start sm:self-auto shrink-0"
              >
                Ver cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
