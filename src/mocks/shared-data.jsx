export const hero_data = {
  staff: "Hey Staff!",
  welcome: "Bienvenido a\nCollide"
}
import {
  CalendarDays,
  MapPin,
  PanelsTopLeft,
  Hand,
  Building2,
  Users,
  HelpCircle,
} from "lucide-react";

export const eventCards = [
  {
    id: "schedule",
    title: "Event\nSchedule",
    icon: CalendarDays,
    variant: "light",
    size: "normal",
    iconVariant: "light"
  },
  {
    id: "maps",
    title: "Maps",
    icon: MapPin,
    variant: "yellow",
    size: "normal",
    iconVariant: "light"
  },
  
  {
    id: "partners",
    title: "Speakers",
    icon: Building2,
    variant: "blue",
    size: "normal",
    iconVariant: "white"
  },
  {
    id: "help",
    title: "FAQ",
    icon: HelpCircle,
    variant: "red",
    size: "normal",
    iconVariant: "white"
  },
  {
    id: "breakouts",
    title: "My Breakout\nSessions",
    icon: PanelsTopLeft,
    variant: "light",
    size: "wide",
    iconVariant: "light"
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