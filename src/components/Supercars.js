import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "Aston Martin DBS", price: "$120 000" },
  { name: "Jaguar CX75", price: "$750 000" },
  { name: "Aston Martin Vulcan", price: "$2 000 000" },
  { name: "Ferrari 296GTS", price: "$310 000" },
  { name: "Ferrari 360CS", price: "$250 000" },
  { name: "Ferrari 458 Liberty Walk", price: "$350 000" },
  { name: "Ferrari 458 Spider", price: "$240 000" },
  { name: "Ferrari 488 Pista", price: "$450 000" },
  { name: "Ferrari 599 GTO", price: "$500 000" },
  { name: "Mclaren 600LT", price: "$300 000" },
  { name: "Ferrari 812 Mansory Stallone", price: "$600 000" },
  { name: "Ferrari 812 Superfast", price: "$500 000" },
  { name: "Aston Martin One77", price: "$3 000 000" },
  { name: "Aston Martin Vanquish", price: "$350 000" },
  { name: "Aston Martin Vantage 2023", price: "$240 000" },
  { name: "AMG GT Black Series", price: "$300 000" },
  { name: "ATS GT", price: "$800 000" },
  { name: "Lamborghini Aventador LP700", price: "$300 000" },
  { name: "Brabus GT600", price: "$410 000" },
  { name: "Bugatti Chiron", price: "$2 000 000" },
  { name: "Bugatti Chiron Centuria", price: "$3 500 000" },
  { name: "Bugatti Chiron Pur Sport", price: "$2 800 000" },
  { name: "Bugatti Chiron Supersport 300+", price: "$4 000 000" },
  { name: "Bugatti Chiron Supersport 300+ Carbon", price: "$4 000 000" },
  { name: "Bugatti Divo", price: "$5 000 000" },
  { name: "Bugatti EB110", price: "$1 600 000" },
  { name: "Bugatti Mistral", price: "$3 000 000" },
  { name: "Bugatti Veyron 2009", price: "$1 200 000" },
  { name: "Bugatti Veyron Vitesse", price: "$1 400 000" },
  { name: "Spyker C8 Aileron", price: "$800 000" },
  { name: "Koenigsegg CCX", price: "$2 100 000" },
  { name: "Lamborghini Diablo SV", price: "$320 000" },
  { name: "Ferrari Enzo", price: "$2 000 000" },
  { name: "Ferrari Enzo Gemballa", price: "$3 000 000" },
  { name: "Ferrari F8 Tributo", price: "$320 000" },
  { name: "Ferrari F12 TDF", price: "$1 200 000" },
  { name: "Ferrari F50", price: "$2 000 000" },
  { name: "Ferrari F430", price: "$160 000" },
  { name: "Ford GT 2005", price: "$550 000" },
  { name: "Ford GT 2017", price: "$2 500 000" },
  { name: "Pagani Huayra 2014", price: "$3 100 000" },
  { name: "Pagani Huayra BC", price: "$4 500 000" },
  { name: "Pagani Huayra Roadster", price: "$4 000 000" },
  { name: "Lamborghini Huracan DMC Affari", price: "$380 000" },
  { name: "Apollo Intensa Emozione", price: "$2 500 000" },
  { name: "Koenigsegg Jesko", price: "$3 700 000" },
  { name: "Lamborghini Aventador KS", price: "$410 000" },
  { name: "Lamborghini Aventador S", price: "$380 000" }
];

const Supercars = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Supercars</h2>
        <img src={backgroundImage} alt="Supercars" className="mx-auto h-64 object-cover" />
      </div>
      <table className="table-auto w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-red-700 text-white">
            <th className="px-4 py-2">Modèle</th>
            <th className="px-4 py-2">Prix</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => (
            <tr key={index} className="text-center border-b">
              <td className="px-4 py-2">{model.name}</td>
              <td className="px-4 py-2">{model.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Supercars;
