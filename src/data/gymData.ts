export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  period: string;
  isPopular?: boolean;
  highlightNote?: string;
  badge?: string;
  features: string[];
  ctaLabel: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  equipmentHighlight: string[];
}

export interface FacilityPhoto {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  aspect: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const GYM_INFO = {
  name: "Gimnasio El Alto",
  tagline: "El gimnasio donde todos son bienvenidos",
  phone: "+591 76543210",
  whatsappNumber: "59176543210",
  whatsappUrl: "https://wa.me/59176543210",
  address: "Av. 6 de Marzo N° 450, Ceja de El Alto (a 100m de la Estación del Teleférico Plateado y Morado)",
  city: "El Alto, La Paz - Bolivia",
  hours: {
    weekdays: "06:00 a 22:00",
    saturday: "08:00 a 18:00",
    sunday: "Cerrado",
  },
  promoBanner: "⚡ ¡OFERTA DE APERTURA EN EL ALTO! Inscripción gratis este mes o 2x1 en Plan Pareja.",
  googleMapsUrl: "https://maps.google.com/?q=Ceja+El+Alto+La+Paz",
};

export const PLANS: Plan[] = [
  {
    id: "clasico",
    name: "Plan Clásico",
    tagline: "Acceso estándar y completo a las instalaciones",
    price: 130,
    period: "Mes",
    badge: "Básico Recomendado",
    features: [
      "Acceso ilimitado a la sala de pesas y musculación",
      "Acceso completo a la zona cardiovascular",
      "Uso de lockers de seguridad y vestidores",
      "Duchas con agua caliente continua garantizada",
      "Rutina de inicio guiada por instructor de sala",
      "Sin contratos de permanencia obligatoria",
    ],
    ctaLabel: "Inscribirme con Plan Clásico",
  },
  {
    id: "vip",
    name: "Plan VIP / PRO",
    tagline: "La experiencia completa con clases y pases de invitado",
    price: 180,
    period: "Mes",
    isPopular: true,
    highlightNote: "🏷️ MÁS POPULAR / MEJOR VALOR",
    badge: "Mejor Valor",
    features: [
      "Todo lo incluido en el Plan Clásico",
      "Acceso ilimitado a todas las Clases Grupales (Spinning, Zumba, Cross-training)",
      "Pase de invitado: Trae a un amigo 2 veces por mes sin costo adicional",
      "Descuento exclusivo del 10% en tienda de suplementos",
      "Evaluación corporal mensual y ajuste de rutina",
      "Acceso prioritario a casilleros amplios",
    ],
    ctaLabel: "Elegir Plan VIP / PRO",
  },
  {
    id: "pareja",
    name: "Plan Pareja / Estudiantil",
    tagline: "Entrena en dúo o con descuento universitario",
    price: 220,
    period: "Mes (Bs. 110 por persona)",
    badge: "Ahorro Dúo",
    features: [
      "Descuento especial presentando carnet universitario o inscribiéndose de a dos",
      "Mismos beneficios del Plan Clásico para ambas personas",
      "Acceso completo a musculación, fuerza y cardio",
      "Duchas con agua caliente y casilleros independientes",
      "Acompañamiento y rutina guiada para ambos",
      "Opción de congelar 7 días en caso de exámenes o viajes",
    ],
    ctaLabel: "Consultar Plan Pareja",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "musculacion",
    title: "Área de Musculación y Fuerza",
    subtitle: "Desarrollo muscular, tonificación y fuerza progresiva",
    description: "Mancuernas de todos los pesos (desde 1kg hasta 50kg), bancas ajustables ergonómicas, prensas de piernas de 45°, poleas cruzadas y barras olímpicas homologadas.",
    icon: "Dumbbell",
    equipmentHighlight: [
      "Mancuernas calibradas 1kg - 50kg",
      "3 Jaulas de potencia completas",
      "Bancas planas e inclinadas de alta densidad",
      "Prensas de piernas y máquinas selectorizadas",
    ],
  },
  {
    id: "cardio",
    title: "Zona Cardiovascular",
    subtitle: "Resistencia aeróbica, quema calórica y salud cardíaca",
    description: "Caminadoras con absorción de impacto y pantallas interactivas, bicicletas estáticas, elípticas y escaladoras para mejorar tu resistencia sin saturaciones ni esperas.",
    icon: "HeartPulse",
    equipmentHighlight: [
      "12 Caminadoras profesionales",
      "Bicicletas estáticas y de spinning",
      "Elípticas de bajo impacto articular",
      "Escaladoras stepper continuas",
    ],
  },
  {
    id: "clases",
    title: "Clases Grupales Dinámicas",
    subtitle: "Motivación en equipo con instructores certificados",
    description: "Clases diarias guiadas de Spinning, Zumba, Aeróbicos y Cross-training diseñadas para todos los niveles, desde principiantes hasta avanzados.",
    icon: "Users",
    equipmentHighlight: [
      "Spinning matutino y nocturno",
      "Zumba fitness y ritmos latinos",
      "Cross-training y circuitos funcionales",
      "Aeróbicos y step coreografiado",
    ],
  },
  {
    id: "asesoria",
    title: "Asesoría y Rutinas de Inicio",
    subtitle: "Aprende a entrenar seguro desde tu primer día",
    description: "Guía inicial sin costo extra para aprender la postura correcta y utilizar las máquinas de forma segura. Instructores siempre presentes en sala dispuestos a ayudarte.",
    icon: "Compass",
    equipmentHighlight: [
      "Inducción guiada el día 1",
      "Rutina personalizada según tu meta",
      "Corrección de técnica y posturas",
      "Ambiente seguro y libre de intimidaciones",
    ],
  },
  {
    id: "suplementos",
    title: "Área de Venta de Suplementos",
    subtitle: "Nutrición deportiva certificada en recepción",
    description: "Proteínas Whey, creatinas monohidratadas, aminoácidos BCAA, pre-entrenos y bebidas hidratantes frías disponibles a precios justos en el counter.",
    icon: "ShoppingBag",
    equipmentHighlight: [
      "Proteínas de suero importadas y nacionales",
      "Creatina Creapure 100% pura",
      "Bebidas electrolíticas e hidratación fría",
      "Shakers, straps y guantines deportivos",
    ],
  },
];

export const TRUST_FEATURES = [
  {
    title: "Toneladas de Equipamiento",
    description: "Máquinas de musculación, jaulas de potencia y caminadoras de última generación siempre calibradas.",
    icon: "Layers",
  },
  {
    title: "Duchas & Lockers Impecables",
    description: "Vestidores limpios, casilleros seguros y duchas con agua caliente continua en todo momento.",
    icon: "Droplets",
  },
  {
    title: "Facilidad de Pago Inmediata",
    description: "Aceptamos efectivo, transferencias directas y Pago por QR de cualquier banco del sistema financiero.",
    icon: "QrCode",
  },
  {
    title: "Ambiente Cómodo y Accesible",
    description: "Espacio seguro, empático y libre de críticas tanto para principiantes como para deportistas avanzados.",
    icon: "Smile",
  },
];

export const FACILITIES: FacilityPhoto[] = [
  {
    id: "pesas",
    title: "Área de Pesas Libres y Mancuernas",
    subtitle: "Zona de Fuerza y Tonificación",
    description: "Amplio espacio con piso de caucho amortiguado, mancuernas por pares completos, barras y bancas libres de aglomeraciones.",
    imageSrc: "/src/assets/images/gym_weights_free_1790991305512.jpg",
    aspect: "4:3",
  },
  {
    id: "cardio",
    title: "Máquinas Selectorizadas y Cardio",
    subtitle: "Deck Cardiovascular Completo",
    description: "Caminadoras con tecnología de impacto suave, elípticas, bicicletas verticales y reclinadas con vista luminosa.",
    imageSrc: "/src/assets/images/gym_cardio_zone_1790991316092.jpg",
    aspect: "4:3",
  },
  {
    id: "clases",
    title: "Sala de Clases Grupales y Espejos",
    subtitle: "Estudio Multidisciplinario",
    description: "Espacio con tarima y piso de madera pulida, espejos perimetrales e iluminación dinámica para Spinning y Zumba.",
    imageSrc: "/src/assets/images/gym_group_fitness_1790991327035.jpg",
    aspect: "4:3",
  },
  {
    id: "vestidores",
    title: "Vestidores y Duchas con Agua Caliente",
    subtitle: "Higiene y Comodidad Continua",
    description: "Casilleros individuales con candado personal, cabinas de ducha privadas y presión constante de agua caliente a gas domiciliario.",
    imageSrc: "/src/assets/images/gym_lockers_showers_1790991336512.jpg",
    aspect: "4:3",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Cuáles son los requisitos de inscripción?",
    answer: "Solo necesitas presentar tu Cédula de Identidad en recepción o iniciar el registro directamente por WhatsApp. No cobramos matrícula ni cuotas de mantenimiento ocultas durante este mes de apertura.",
    category: "Inscripción",
  },
  {
    question: "¿Cuáles son los horarios de mayor y menor afluencia?",
    answer: "Horarios de menor afluencia (ideales para entrenar con total tranquilidad y disponer de todas las máquinas sin esperar): de 09:00 a 12:00 y de 14:30 a 17:00. Horario pico habitual: de 18:00 a 21:00.",
    category: "Horarios",
  },
  {
    question: "¿Puedo pagar por QR?",
    answer: "Sí, aceptamos transferencias bancarias y pago por código QR de cualquier banco del sistema financiero nacional (Banco Unión, BCP, Banco Nacional de Bolivia, Banco Mercantil, Banco Fie, Banco Sol y billeteras móviles).",
    category: "Pagos",
  },
  {
    question: "¿Tienen entrenadores que me enseñen si soy principiante?",
    answer: "¡Por supuesto! Todos nuestros planes incluyen una rutina básica y el acompañamiento de instructores en sala sin cobros adicionales. Te enseñamos la postura, respiración y cómo graduar cada máquina con total paciencia.",
    category: "Entrenamiento",
  },
];

export const GROUP_CLASSES_SCHEDULE = [
  { day: "Lunes a Viernes", time: "07:00 - 08:00", class: "Spinning Matutino", level: "Todos los niveles", coach: "Prof. Marco" },
  { day: "Lunes a Viernes", time: "09:00 - 10:00", class: "Zumba y Cardio Ritmos", level: "Iniciación y Moderado", coach: "Prof. Carla" },
  { day: "Lunes a Viernes", time: "18:30 - 19:30", class: "Cross-Training & Funcional", level: "Intermedio / Intenso", coach: "Prof. Kevin" },
  { day: "Lunes a Viernes", time: "19:30 - 20:30", class: "Spinning Power Night", level: "Cardio Alto", coach: "Prof. Marco" },
  { day: "Sábados", time: "09:00 - 10:30", class: "Super Masterclass Zumba & HIIT", level: "Comunitario Abierto", coach: "Equipo El Alto" },
];
