import React from 'react';
import BottomNavigation from '../../components/bottomNavigation/bottomNavigation';
import PreviousNavigation from '../../components/previousNavigation/previousNavigation';
import SpeakerCards from '../../components/speakersCards/speakerCards';
import "./speakers.css";

const speakers = () => {

  return (
    <div className='speakers-container'>
      <PreviousNavigation />
      <div className='speakers-label'>
        <span>//LineUp</span>
        <h1>Speakers</h1>
      </div>
      <SpeakerCards />
      <BottomNavigation />
    </div>
  );
};

export default speakers;
