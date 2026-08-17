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
          featured: false,
        },
        {
          id: "media-adjustments",
          time: "2:00 PM - 4:00 PM",
          title: "Ajustes Multimedia",
          featured: false,
        },
        {
          id: "cb-sound-check",
          time: "3:00 PM - 6:00 PM",
          title: "Sound Check Collide Band",
          featured: true,
        },
        {
          id: "opening-check",
          time: "6:00 PM - 8:00 PM",
          title: "Ensayo Opening",
          featured: false,
        },
        {
          id: "Platica para Voluntarios",
          time: "8:00 PM - 9:00 PM",
          title: "Plática Voluntarios",
          featured: false,
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
          featured: false,
        },
        {
          id: "sound-check-kr",
          time: "12:00 PM - 2:00 PM",
          title: "Sound Check Kenny Rivers",
          featured: true,
        },
        {
          id: "sound-check-ps",
          time: "2:00 PM - 3:00 PM",
          title: "Sound Check Prisma Band",
          featured: true,
        },
        {
          id: "break-friday",
          time: "2:00 PM",
          title: "Comida",
          featured: false,
        },
        {
          id: "final-opening-check",
          time: "3:00 PM - 3:40 PM",
          title: "Ensayo Opening",
          featured: false,
        },
      ],
    },

    {
      id: "sat",
      day: "SAT",
      date: "25",
      events: [
        {
          id: "morning",
          time: "10:00 AM",
          title: "Morning Session",
          featured: false,
        },
        {
          id: "closing",
          time: "7:00 PM",
          title: "Closing Night",
          featured: true,
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