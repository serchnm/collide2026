import {
  Home,
  CalendarDays,
  MapPin,
  PanelsTopLeft,
  Hand,
  Building2,
  Users,
  HelpCircle,
  ChevronLeft,
} from "lucide-react";

import Andrea from '../image/Andrea.png';
import Daniel from '../image/DANIEL.png';
import Itiel from '../image/ITIEL.png';
import Jose from '../image/JOSE.png';
import Miguel from '../image/MIGUEL.png';
import Sarab from '../image/SARAB.png';
import Sebas from '../image/SEBAS.png'

export const hero_data = {
  staff: "Hey Staff!",
  welcome: "Bienvenido a\nCollide"
}

export const eventCards = [
  {
    id: "schedule",
    title: "Event\nSchedule",
    icon: CalendarDays,
    variant: "light",
    size: "wide",
    iconVariant: "light",
    path: "/collide2026/schedule"
  },
  {
    id: "maps",
    title: "Maps",
    icon: MapPin,
    variant: "yellow",
    size: "normal",
    iconVariant: "light",
    path: "/collide2026/maps"
  },
  
  {
    id: "speakers",
    title: "Speakers",
    icon: Building2,
    variant: "blue",
    size: "normal",
    iconVariant: "white",
    path: "/collide2026/speakers"
  },
  // {
  //   id: "faq",
  //   title: "FAQ",
  //   icon: HelpCircle,
  //   variant: "red",
  //   size: "normal",
  //   iconVariant: "white",
  //   path: "/collide2026/faq"
  // },
];

export const navigation_data = [
  {
    label: "Home",
    path: "/collide2026/",
    icon: Home,
  },
  {
    label: "Schedule",
    path: "/collide2026/schedule",
    icon: CalendarDays,
  },
  {
    label: "Maps",
    path: "/collide2026/maps",
    icon: MapPin,
  },
];

export const home_navigation_data = [
  {
    id: "home",
    path: "/collide2026/",
    icon: ChevronLeft,
  }
];




export const schedule_data = {
  days: [
    {
      id: "thu",
      day: "THU",
      date: "23",
      events: [
        {
          id: "production-deliver",
          time: "2:00 PM",
          title: "Entrega Produccion",
          featured: 'false',
        },
        {
          id: "media-adjustments",
          time: "2:00 PM - 4:00 PM",
          title: "Ajustes Multimedia",
          featured: 'false',
        },
        {
          id: "cb-sound-check",
          time: "3:00 PM - 6:00 PM",
          title: "Sound Check Collide Band",
          featured: 'true',
        },
        {
          id: "opening-check",
          time: "6:00 PM - 8:00 PM",
          title: "Ensayo Opening",
          featured: 'false',
        },
        {
          id: "Platica para Voluntarios",
          time: "8:00 PM - 9:00 PM",
          title: "Plática Voluntarios",
          featured: 'false',
        },
      ],
    },

    {
      id: "fri",
      day: "FRI",
      date: "24",
      events: [
        {
          id: "morning-sound-check",
          time: "10:00 AM - 12:00 PM",
          title: "Prueba Multimedia",
          featured: 'false',
        },
        {
          id: "sound-check-kr",
          time: "12:00 PM - 2:00 PM",
          title: "Sound Check Kenny Rivers",
          featured: 'true',
        },
        {
          id: "sound-check-ps",
          time: "2:00 PM - 3:00 PM",
          title: "Sound Check Prisma Band",
          featured: 'true',
        },
        {
          id: "break-friday",
          time: "2:00 PM",
          title: "Comida",
          featured: 'false',
        },
        {
          id: "final-opening-check",
          time: "3:00 PM - 3:40 PM",
          title: "Ensayo Opening",
          featured: 'false',
        },
        {
          id: "open-doors",
          time: "4:30 PM - 5:30 PM",
          title: "Abren Puertas",
          featured: 'false',
        },
        {
          id: "opening_live",
          time: "5:30 PM - 6:05 PM",
          title: "Opening y Collide Band",
          featured: 'false',
        },
        {
          id: "conf_one",
          time: "6:05 PM - 6:45 PM",
          title: "Conferencia 1: Daniel Jaguar",
          featured: 'speaker',
        },
        {
          id: "conf_panel_one",
          time: "6:45 PM - 7:25 PM",
          title: "Panel",
          featured: 'false',
        },
        {
          id: "conf_two",
          time: "7:25 PM - 8:05 PM",
          title: "Conferencia 2: Sarab Rey",
          featured: 'speaker',
        },
        {
          id: "spontanous_one",
          time: "8:05 PM - 8:15 PM",
          title: "Ministracion",
          featured: 'false',
        },
        {
          id: "conf_three",
          time: "8:15 PM - 8:55 PM",
          title: "Conferencia 3: Itiel Arroyo",
          featured: 'speaker',
        },
        {
          id: "conf_setup",
          time: "8:55 PM - 9:05 PM",
          title: "MC/ Set up Concierto",
          featured: 'false',
        },
        {
          id: "concert_kenny",
          time: "9:05 PM - 9:40 PM",
          title: "Concierto Kenny Rivers",
          featured: 'concert',
        },

      ],
    },

    {
      id: "sat",
      day: "SAT",
      date: "25",
      events: [
        {
          id: "st_opening",
          time: "9:00 AM - 9:15 AM",
          title: "Abren Puertas",
          featured: false,
        },
        {
          id: "st_worship_m",
          time: "9:15 AM - 9:45 AM",
          title: "Opening y Alabanza (Collide Band)",
          featured: false,
        },
        {
          id: "conf_four",
          time: "9:45 AM - 10:25 AM",
          title: "Conferencia 4: Miguel Giacomán",
          featured: 'speaker',
        },
        {
          id: "conf_five",
          time: "10:25 AM - 11:05 AM",
          title: "Conferencia 5: Seba Franz",
          featured: 'speaker',
        },
        {
          id: "st_mc_int",
          time: "11:05 AM - 11:15 AM",
          title: "MC/Intermedio/Testimonio",
          featured: false,
        },
        {
          id: "st_panel_l",
          time: "11:15 AM - 11:45 AM",
          title: "Panel",
          featured: false,
        },
        {
          id: "conf_six",
          time: "11:45 AM - 12:25 PM",
          title: "Conferencia 6: Daniel Jaguar",
          featured: 'speaker',
        },
        {
          id: "st_spontaneous_xl",
          time: "12:25 PM - 12:35 PM",
          title: "Alabanza/Ministracion",
          featured: false,
        },
        {
          id: "conf_seven",
          time: "12:35 PM - 1:15 PM",
          title: "Conferencia 7: Sarab Rey",
          featured: 'speaker',
        },
        {
          id: "st_fd_break",
          time: "1:20 PM - 3:30 PM",
          title: "Break Comida",
          featured: false,
        },
        {
          id: "st_book_firm",
          time: "2:45 PM - 3:15 PM",
          title: "Firma de libros",
          featured: false,
        },
        {
          id: "st_assistants_setup_m",
          time: "3:00 PM - 3:30 PM",
          title: "Acceso y acomodo de Asistentes",
          featured: false,
        },
        {
          id: "st_mc_inter_testimony_s",
          time: "3:30 PM - 3:40 PM",
          title: "MC/Intermedio/Testimonio",
          featured: false,
        },
        {
          id: "conf_eight",
          time: "3:40 PM - 4:20 PM",
          title: "Conferencia 8: Seba Franz",
          featured: 'speaker',
        },
        {
          id: "conf_nine",
          time: "4:10 PM - 5:00 PM",
          title: "Conferencia 9: Andrea Franz",
          featured: 'speaker',
        },
        {
          id: "st_spontameous_m",
          time: "5:00 PM - 5:10 PM",
          title: "Alabanza/Ministracion",
          featured: false,
        },
        {
          id: "conf_ten",
          time: "5:10 PM - 5:50 PM",
          title: "Conferencia 10: Daniel Jaguar",
          featured: 'speaker',
        },
        {
          id: "conf_eleven",
          time: "5:50 PM - 6:30 PM",
          title: "Conferencia 11: Itiel Arroyyo/ José M",
          featured: 'speaker',
        },
        {
          id: "st_mc_setup_ps",
          time: "6:30 PM - 6:40 PM",
          title: "MC/ Setu up Concierto",
          featured: 'false',
        },
        {
          id: "st_prisma_concert",
          time: "6:40 PM - 7:30 PM",
          title: "Concierto Prisma",
          featured: 'concert',
        },
      ],
    },
  ],
};

export const speakers = [
  {
    key: 'Andrea',
    src: Andrea
  },
  {
    key: 'Daniel',
    src: Daniel
  },
  {
    key: 'Itiel',
    src: Itiel
  },
  {
    key: 'Jose',
    src: Jose
  },
  {
    key: 'Miguel',
    src: Miguel
  },
  {
    key: 'Sarab',
    src: Sarab
  },
  {
    key: 'Sebas',
    src: Sebas
  },
]