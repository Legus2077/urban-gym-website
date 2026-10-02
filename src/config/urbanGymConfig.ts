/**
 * Urban GYM Configuration
 * Centralized contact numbers, social media links, and data constants.
 * Modify PHONE_NUMBER and social links here to update the entire application.
 */

// Central WhatsApp Contact Number (Format: CountryCode + Number without '+' or spaces)
// Default: +51 987 654 321 (Peru)
export const PHONE_NUMBER = "51987654321";

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/urbangymperu",
  tiktok: "https://tiktok.com/@urbangymperu",
  instagram: "https://instagram.com/urbangymperu",
  youtube: "https://youtube.com/@urbangymperu",
};

// Quick helper to generate standardized WhatsApp chat URLs
export const getWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};

export interface SedeInfo {
  id: string;
  name: string;
  subtitle: string;
  address: string;
  district: string;
  scheduleWeekday: string;
  scheduleSunday: string;
  zones: string[];
  image: string;
  mapEmbedUrl: string;
  googleMapsUrl: string;
  whatsappMessage: string;
}

export const SEDES_DATA: SedeInfo[] = [
  {
    id: "belaunde",
    name: "Sede Belaúnde",
    subtitle: "SEDE NORTE PRINCIPAL",
    address: "Av. Belaúnde Oeste 452",
    district: "Comas, Lima",
    scheduleWeekday: "Lun - Sáb: 5:30 AM - 11:00 PM",
    scheduleSunday: "Domingos: 7:00 AM - 3:00 PM",
    zones: [
      "Zona Peso Libre 1,000kg",
      "Box CrossFit & Racks",
      "Cardio Theater Pro",
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15613.5!2d-77.06!3d-11.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU1JzQ4LjAiUyA3N8KwMDMnMzYuMCJX!5e0!3m2!1ses!2spe!4v1",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Belaunde+Oeste+452+Comas+Lima",
    whatsappMessage: "Hola Urban GYM, quiero información de la Sede Belaúnde.",
  },
  {
    id: "universitaria",
    name: "Sede Universitaria",
    subtitle: "SEDE UNIVERSITARIA",
    address: "Av. Universitaria Norte 1820",
    district: "Lima Norte",
    scheduleWeekday: "Lun - Sáb: 6:00 AM - 11:00 PM",
    scheduleSunday: "Domingos: 8:00 AM - 2:00 PM",
    zones: [
      "Musculación Pesada Calistenia",
      "Funcional Outdoor Terraza",
      "Spinning Studio Climatizado",
    ],
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15610.2!2d-77.08!3d-11.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU4JzQ4LjAiUyA3N8KwMDUnMjQuMCJX!5e0!3m2!1ses!2spe!4v1",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Universitaria+Norte+1820+Lima",
    whatsappMessage: "Hola Urban GYM, quiero información de la Sede Universitaria.",
  },
  {
    id: "mexico",
    name: "Sede Av. México",
    subtitle: "SEDE CENTRO URBANO",
    address: "Av. México 890",
    district: "Zona Céntrica, Lima",
    scheduleWeekday: "Lun - Sáb: 5:00 AM - 11:30 PM",
    scheduleSunday: "Domingos: 7:00 AM - 4:00 PM",
    zones: [
      "Equipamiento Hammer Strength",
      "Bar Nutricional & Proteína",
      "Sauna Seco & Recuperación",
    ],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15605.6!2d-77.02!3d-12.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA0JzEyLjAiUyA3N8KwMDEnMTIuMCJX!5e0!3m2!1ses!2spe!4v1",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Mexico+890+Lima",
    whatsappMessage: "Hola Urban GYM, quiero información de la Sede Av. México.",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  sedeId: "belaunde" | "universitaria" | "mexico";
  sedeName: string;
  category: string;
  image: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "ÁREA DE PESAS LIBRES & PODER",
    sedeId: "belaunde",
    sedeName: "SEDE BELAÚNDE",
    category: "Fuerza Pesada",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    description: "Zona equipada con más de 1,000kg en discos calibrados, barras olímpicas Eleiko y mancuernas de hasta 60kg.",
  },
  {
    id: "g2",
    title: "BOX FUNCIONAL & RACKS",
    sedeId: "belaunde",
    sedeName: "SEDE BELAÚNDE",
    category: "CrossFit & Conditioning",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    description: "Espacio industrial con césped sintético, trineos, sogas de batalla, cajas pliométricas y jaulas para dominadas.",
  },
  {
    id: "g3",
    title: "STUDIO DE CYCLING DE ALTA FRECUENCIA",
    sedeId: "universitaria",
    sedeName: "SEDE UNIVERSITARIA",
    category: "Cardio & Ritmo",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    description: "Bicicletas magnéticas de última generación con medidores de watts y sistema de audio e iluminación inmersiva.",
  },
  {
    id: "g4",
    title: "ZONA FUNCIONAL TERRAZA ABIERTA",
    sedeId: "universitaria",
    sedeName: "SEDE UNIVERSITARIA",
    category: "Outdoor Calistenia",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80",
    description: "Entrena al aire libre con estructura completa de calistenia, barras paralelas, anillas y vista panorámica.",
  },
  {
    id: "g5",
    title: "MAQUINARIA HAMMER STRENGTH PRO",
    sedeId: "mexico",
    sedeName: "SEDE AV. MÉXICO",
    category: "Hipertrofia Guiada",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
    description: "Línea completa oficial Hammer Strength con curvas de resistencia óptimas para desarrollo muscular seguro y exigente.",
  },
  {
    id: "g6",
    title: "VESTUARIOS VIP, DUCHAS & SAUNA",
    sedeId: "mexico",
    sedeName: "SEDE AV. MÉXICO",
    category: "Recuperación",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80",
    description: "Lockers de seguridad, duchas de alta presión con agua caliente permanente y sauna seca para regeneración muscular.",
  },
];

export interface PlanItem {
  id: string;
  name: string;
  tag?: string;
  popular?: boolean;
  price: string;
  period: string;
  subPrice?: string;
  description: string;
  features: { text: string; included: boolean }[];
  ctaText: string;
  whatsappMessage: string;
}

export const PLANS_DATA: PlanItem[] = [
  {
    id: "mensual",
    name: "PLAN MENSUAL URBANO",
    tag: "BÁSICO",
    price: "S/49",
    period: "/ mes",
    description: "Ideal para quienes buscan comenzar su transformación con total libertad mes a mes.",
    features: [
      { text: "Acceso ilimitado a 1 sede elegida", included: true },
      { text: "Evaluación física y bioimpedancia inicial", included: true },
      { text: "Acceso a zona cardiovascular y máquinas", included: true },
      { text: "Sin acceso multi-sede", included: false },
      { text: "Sin pase para invitados", included: false },
    ],
    ctaText: "CONTACTAR PARA INSCRIBIRME",
    whatsappMessage: "Hola Urban GYM, deseo más información e inscribirme en el Plan Mensual.",
  },
  {
    id: "trimestral",
    name: "PLAN TRIMESTRAL PRO",
    tag: "TOP VALUE",
    popular: true,
    price: "S/119",
    period: "/ 3 meses",
    subPrice: "s/39/mes",
    description: "El tiempo perfecto para consolidar hábitos, ver hipertrofia notable y disfrutar ventajas exclusivas.",
    features: [
      { text: "Acceso Multi-Sede (Entrena en las 3)", included: true },
      { text: "Rutina de entrenamiento personalizada", included: true },
      { text: "Asesoría nutricional inicial con menú", included: true },
      { text: "1 Pase de invitado VIP al mes", included: true },
      { text: "Acceso total a clases grupales & spinning", included: true },
    ],
    ctaText: "⚡ CONTACTAR ASESOR PARA INSCRIBIRME",
    whatsappMessage: "Hola Urban GYM, deseo más información e inscribirme en el Plan Trimestral.",
  },
  {
    id: "anual",
    name: "PLAN ANUAL ELITE",
    tag: "MEJOR COSTO",
    price: "S/450",
    period: "/ año",
    subPrice: "s/37/mes",
    description: "Compromiso total con tu estilo de vida. Máximos privilegios, congelamientos y kit oficial.",
    features: [
      { text: "Acceso Ilimitado a las 3 Sedes Urban", included: true },
      { text: "Congelamiento de membresía (hasta 30 días)", included: true },
      { text: "Casillero (Locker) VIP asignado", included: true },
      { text: "2 Evaluaciones nutricionales completas / mes", included: true },
      { text: "Kit Oficial de Bienvenida: Polo + Shaker", included: true },
    ],
    ctaText: "CONTACTAR PARA INSCRIBIRME",
    whatsappMessage: "Hola Urban GYM, deseo más información e inscribirme en el Plan Anual Elite.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    question: "¿Puedo entrenar en cualquier sede con mi membresía?",
    answer: "Sí, los planes Trimestral Pro y Anual Elite incluyen acceso Multi-Sede irrestricto en Belaúnde, Universitaria y Av. México. El Plan Mensual permite escoger 1 sede fija.",
  },
  {
    question: "¿Qué necesito llevar para mi primer día?",
    answer: "Ropa deportiva cómoda, zapatillas de suela plana para levantamiento o running, toalla de entrenamiento personal (obligatoria para higiene) y un candado personal para el uso de casilleros.",
  },
  {
    question: "¿Incluye ayuda de instructores si nunca he ido a un gimnasio?",
    answer: "Absolutamente. Todos nuestros planes cuentan con instructores de sala permanentes que te enseñarán la postura correcta de cada ejercicio y te guiarán paso a paso en tu rutina.",
  },
  {
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer: "Aceptamos transferencias bancarias, Yape, Plin, tarjetas de crédito/débito Visa, Mastercard y efectivo en la recepción de cualquiera de nuestras sedes.",
  },
];
