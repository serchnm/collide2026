import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import Hero from './components/hero/hero';
import './App.css';
import {
  hero_data,
} from "./mocks/shared-data";


function App() {

  return (
   <div className="App">
      <Hero sharedData={hero_data} />
    </div>
  )
}

export default App
