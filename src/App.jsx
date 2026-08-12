import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import Hero from './components/hero/hero';
import FeatureGrid from "./components/featureGrid/featureGrid";
import './App.css';
import {
  hero_data,
  eventCards
} from "./mocks/shared-data";


function App() {

  return (
   <div className="App">
      <Hero sharedData={hero_data} />
      <FeatureGrid cards={eventCards} />
    </div>
  )
}

export default App
