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
        <Route path="/collide2026/" element={<Home />} />

        <Route path="/collide2026/breakouts" element={<Breakouts />} />

        <Route path="/collide2026/faq" element={<Faq />} />

        <Route path="/collide2026/maps" element={<Maps />} />

        <Route path="/collide2026/schedule" element={<Schedule />} />

        <Route path="/collide2026/speakers" element={<Speakers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
