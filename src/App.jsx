import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Breakouts from './pages/breakouts/breakouts';
import Faq from './pages/faq/faq';
import Maps from './pages/maps/maps';
import Schedule from './pages/schedule/schedule';
import Speakers from './pages/speakers/speakers';

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/collide2026" element={<Home />} />

        <Route path="/breakouts" element={<Breakouts />} />

        <Route path="/faq" element={<Faq />} />

        <Route path="/maps" element={<Maps />} />

        <Route path="/schedule" element={<Schedule />} />

        <Route path="/speakers" element={<Speakers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
