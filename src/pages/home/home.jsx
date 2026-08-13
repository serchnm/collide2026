import React from 'react';
import Hero from '../../components/hero/hero';
import FeatureGrid from "../../components/featureGrid/featureGrid";
import BottomNavigation from '../../components/bottomNavigation/bottomNavigation';
import {
  hero_data,
  eventCards
} from "../../mocks/shared-data";

const home = () => {
  console.log('test ndjsdnsj');
  

  return (
    
    <div>
      <Hero sharedData={hero_data} />
      <FeatureGrid cards={eventCards} />
      <BottomNavigation />
    </div>
      
  );
};

export default home;
