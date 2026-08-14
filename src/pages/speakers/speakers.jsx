import React from 'react';
import BottomNavigation from '../../components/bottomNavigation/bottomNavigation';
import PreviousNavigation from '../../components/previousNavigation/previousNavigation';
import "./speakers.css";

const speakers = () => {

  return (
    <div>
      <PreviousNavigation />
      <p>speakers</p>
      <button>red</button>
      <BottomNavigation />
    </div>
  );
};

export default speakers;
