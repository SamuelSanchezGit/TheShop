import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../GTA_V__Copier_.jpg';

const categories = [
  { path: "One_of_One", display: "One of One" },
  { path: "80s", display: "80s" },
  { path: "Am_sports", display: "Am_sports" },
  { path: "Bike_motos", display: "Bike motos" },
  { path: "Classic", display: "Classic" },
  { path: "Compact", display: "Compact" },
  { path: "Coupes", display: "Coupés" }, // Note l'accent
  { path: "Eu_sports", display: "Eu_sports" },
  { path: "Jap_sports", display: "Jap_sports" },
  { path: "JDM", display: "JDM" },
  { path: "Luxury", display: "Luxury" },
  { path: "Muscle_cars", display: "Muscle cars" },
  { path: "Offroad_et_Pickup", display: "Offroad et Pickup" },
  { path: "SedanBerlines", display: "Sedan Berlines" }, // Note la correction ici
  { path: "Supercars", display: "Supercars" },
  { path: "SUV", display: "SUV" },
  { path: "Camions_et_Remorques", display: "Camions et Remorques" },
  { path: "Van", display: "Van" }
];

const Modeles = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category, index) => (
        <div key={index} className="relative bg-cover bg-center h-64 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
            <Link to={`/modeles/${category.path}`} className="text-white text-2xl font-bold">
              {category.display}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Modeles;
