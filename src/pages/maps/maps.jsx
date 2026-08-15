import React from 'react';
import BottomNavigation from '../../components/bottomNavigation/bottomNavigation';
import PreviousNavigation from '../../components/previousNavigation/previousNavigation';
import mapImg from '../../image/mapzone.png';

import './maps.css';

const maps = () => {

  return (
    <div className='maps-container'>
      <PreviousNavigation />
      <div className='img-container'>
        <span>// The Arena</span>
        <h1>Maps</h1>
        <img src={mapImg} height={280} />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default maps;
