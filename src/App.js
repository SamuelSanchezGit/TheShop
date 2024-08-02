import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Modeles from './components/Modeles';
import OneOfOne from './components/OneOfOne';
import Eighties from './components/Eighties';
import AmSports from './components/AmSports';
import BikeMotos from './components/BikeMotos';
import Classic from './components/Classic';
import Compact from './components/Compact';
import Coupes from './components/Coupes';
import EuSports from './components/EuSports';
import JapSports from './components/JapSports';
import JDM from './components/JDM';
import Luxury from './components/Luxury';
import MuscleCars from './components/MuscleCars';
import OffroadEtPickup from './components/OffroadEtPickup';
import SedanBerlines from './components/SedanBerlines';
import Supercars from './components/Supercars';
import SUV from './components/SUV';
import TruckTrailer from './components/TruckTrailer';
import Van from './components/Van';
import Footer from './components/Footer';

function App() {
  console.log('App rendered');
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modeles" element={<Modeles />} />
            <Route path="/modeles/One_of_One" element={<OneOfOne />} />
            <Route path="/modeles/80s" element={<Eighties />} />
            <Route path="/modeles/Am_sports" element={<AmSports />} />
            <Route path="/modeles/Bike_motos" element={<BikeMotos />} />
            <Route path="/modeles/Classic" element={<Classic />} />
            <Route path="/modeles/Compact" element={<Compact />} />
            <Route path="/modeles/Coupes" element={<Coupes />} />
            <Route path="/modeles/Eu_sports" element={<EuSports />} />
            <Route path="/modeles/Jap_sports" element={<JapSports />} />
            <Route path="/modeles/JDM" element={<JDM />} />
            <Route path="/modeles/Luxury" element={<Luxury />} />
            <Route path="/modeles/Muscle_cars" element={<MuscleCars />} />
            <Route path="/modeles/Offroad_et_Pickup" element={<OffroadEtPickup />} />
            <Route path="/modeles/SedanBerlines" element={<SedanBerlines />} />
            <Route path="/modeles/Supercars" element={<Supercars />} />
            <Route path="/modeles/SUV" element={<SUV />} />
            <Route path="/modeles/Camions_et_Remorques" element={<TruckTrailer />} />
            <Route path="/modeles/Van" element={<Van />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
