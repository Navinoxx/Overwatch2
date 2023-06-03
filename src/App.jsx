import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Heroes from './pages/heroes/heroes.jsx';
import HeroeDetails from './pages/heroesDetails/heroeDetails.jsx';
import GameModes from './pages/gameModes/gameModes.jsx';
import Maps from './pages/map/maps.jsx';
import Info from './pages/info/info.jsx';
import ResponsiveAppBar from './components/navbar/navbar.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informacion" element={<Info />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/heroes/:id" element={<HeroeDetails />} />
          <Route path="/modos" element={<GameModes />} />
          <Route path="/mapas" element={<Maps />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
