import React from 'react';

import {
  ChevronLeft
} from "lucide-react";
import { NavLink } from 'react-router-dom';
import { home_navigation_data } from '../../mocks/shared-data';
import './previousNavigation.css';

const previousNavigation = () => {
  return(
    <div className='previous-nav-item'>
      {home_navigation_data.map(({ path, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
        >
          <Icon size={24} />
        </NavLink>
      ))}
    </div>
  );
}

export default previousNavigation;