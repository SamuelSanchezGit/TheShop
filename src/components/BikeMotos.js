import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "Honda Africa Twin", price: "$12 000" },
  { name: "Aprilia RSV4", price: "$22 000" },
  { name: "Yamaha Banshee 1987", price: "$6 000" },
  { name: "Honda CB500F", price: "$7 000" },
  { name: "Honda CB500X", price: "$8 000" },
  { name: "Honda CB650R", price: "$9 000" },
  { name: "Honda CBR 2015", price: "$18 000" },
  { name: "Honda CBR 2020", price: "$21 000" },
  { name: "Honda CBR 300R", price: "$16 000" },
  { name: "Ducati 916", price: "$15 000" },
  { name: "Ducati V4 Streetfighter", price: "$22 000" },
  { name: "Honda Goldwing", price: "$23 000" },
  { name: "Suzuki GSXR 1996", price: "$14 000" },
  { name: "Kawasaki H2R", price: "$56 000" },
  { name: "Harley Davidson 1936", price: "$24 000" },
  { name: "Harley Davidson Custom", price: "$14 000" },
  { name: "Harley Davidson Iron 883", price: "$11 000" },
  { name: "Harley Davidson Streetglide", price: "$14 000" },
  { name: "Harley Davidson Twincam", price: "$12 000" },
  { name: "Harley Davidson Vrod", price: "$13 000" },
  { name: "Suzuki Hayabusa 2024", price: "$20 000" },
  { name: "Indian CDH", price: "$17 000" },
  { name: "BMW M1000RR", price: "$33 000" },
  { name: "Honda NSR 250", price: "$14 000" },
  { name: "Piaggio Zip", price: "$1 500" },
  { name: "Royal Enfield Bullet", price: "$7 500" },
  { name: "BMW S1000RR", price: "$16 000" },
  { name: "Yamaha Tenere", price: "$11 000" },
  { name: "Yamaha MT07", price: "$8 000" },
  { name: "Yamaha R1 2014", price: "$10 000" },
  { name: "Yamaha R1 2020", price: "$20 000" },
  { name: "Yamaha YZF R5", price: "$5 500" },
];

const BikeMotos = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Bike motos</h2>
        <img src={backgroundImage} alt="Bike motos" className="mx-auto h-64 object-cover" />
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

export default BikeMotos;
