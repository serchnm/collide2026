import React from 'react';
import BottomNavigation from '../../components/bottomNavigation/bottomNavigation';
import PreviousNavigation from '../../components/previousNavigation/previousNavigation';
import './schedule.css';

const schedule = () => {

  return (
    <div className='schedule-container'>
      <PreviousNavigation />
      <p>schedule</p>
      <BottomNavigation />
    </div>
  );
};

export default schedule;
