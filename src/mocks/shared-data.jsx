import {
  CalendarDays,
  MapPin,
  PanelsTopLeft,
  Hand,
  Building2,
  Users,
  HelpCircle,
  ChevronLeft,
} from "lucide-react";

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
    size: "normal",
    iconVariant: "light",
    path: ""
  },
  {
    id: "maps",
    title: "Maps",
    icon: MapPin,
    variant: "yellow",
    size: "normal",
    iconVariant: "light",
    path: ""
  },
  
  {
    id: "speakers",
    title: "Speakers",
    icon: Building2,
    variant: "blue",
    size: "normal",
    iconVariant: "white",
    path: ""
  },
  {
    id: "faq",
    title: "FAQ",
    icon: HelpCircle,
    variant: "red",
    size: "normal",
    iconVariant: "white",
    path: ""
  },
  {
    id: "breakouts",
    title: "My Breakout\nSessions",
    icon: PanelsTopLeft,
    variant: "light",
    size: "wide",
    iconVariant: "light",
    path: ""
  },
];

export const navigation_data = [
  {
    id: "home",
    label: "Home",
    icon: "home",
  },
  {
    id: "schedule",
    label: "Schedule",
    icon: "calendar",
  },
  {
    id: "breakouts",
    label: "Breakouts",
    icon: "breakout",
  },
  {
    id: "maps",
    label: "Maps",
    icon: "map",
  },
  {
    id: "action",
    label: "Take Action",
    icon: "action",
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
          title: "Ensayo Opening",
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