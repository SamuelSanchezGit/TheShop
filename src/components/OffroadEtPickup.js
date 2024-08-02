import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "Chevrolet Apache 1958", price: "$22 000" },
  { name: "Ford Bronco 2021", price: "$45 000" },
  { name: "Ford Bronco 1982", price: "$11 000" },
  { name: "Tesla Cybertruck", price: "$100 000" },
  { name: "Ford Expedition 2006", price: "$15 000" },
  { name: "Ford Expedition 2020", price: "$48 000" },
  { name: "Ford F150 2006", price: "$16 000" },
  { name: "Ford F150 1984", price: "$10 000" },
  { name: "Ford F150 Lightning", price: "$21 000" },
  { name: "Ford F350", price: "$27 000" },
  { name: "GMC Sierra 2021", price: "$52 000" },
  { name: "Toyota Land Cruiser 2024", price: "$67 000" },
  { name: "RAM Limited 2016", price: "$28 000" },
  { name: "RAM TRX 1500", price: "$54 000" },
  { name: "Ford F150 Raptor 2016", price: "$46 000" },
  { name: "Rivian R1S", price: "$95 000" },
  { name: "Saleen 331", price: "$25 000" },
  { name: "GMC Sierra 1988", price: "$13 000" },
  { name: "Chevrolet Silverado 1991", price: "$9 500" }
];

const OffroadEtPickup = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Offroad et Pickup</h2>
        <img src={backgroundImage} alt="Offroad et Pickup" className="mx-auto h-64 object-cover" />
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

export default OffroadEtPickup;
