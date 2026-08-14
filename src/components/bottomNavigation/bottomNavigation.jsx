import { NavLink } from "react-router-dom";

import {
  Home,
  CalendarDays,
  PanelsTopLeft,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { navigation_data } from '../../mocks/shared-data';

import "./BottomNavigation.css";

const navigation = [
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
    label: "Breakouts",
    path: "/collide2026/breakouts",
    icon: PanelsTopLeft,
  },
];

function BottomNavigation() {
  return (
    <nav className="bottom-navigation">
      {navigation_data.map(({ label, path, icon: Icon }) => (
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