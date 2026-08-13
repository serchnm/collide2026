import { NavLink } from "react-router-dom";

import {
  Home,
  CalendarDays,
  PanelsTopLeft,
  MapPin,
  ArrowRight,
} from "lucide-react";

import "./BottomNavigation.css";

const navigation = [
  {
    label: "Home",
    path: "/collide2026",
    icon: Home,
  },
  {
    label: "Schedule",
    path: "/schedule",
    icon: CalendarDays,
  },
  {
    label: "Breakouts",
    path: "/breakouts",
    icon: PanelsTopLeft,
  },
  // {
  //   label: "Maps",
  //   path: "/maps",
  //   icon: MapPin,
  // },
  // {
  //   label: "Speakers",
  //   path: "/speakers",
  //   icon: ArrowRight,
  // },
];

function BottomNavigation() {
  return (
    <nav className="bottom-navigation">
      {navigation.map(({ label, path, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `navigation-item ${isActive ? "active" : ""}`
          }
        >
          <Icon size={26} />

          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNavigation;