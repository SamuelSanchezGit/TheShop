import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "Lancia 037", price: "$400 000" },
  { name: "Ferrari 288 GTO", price: "$4 000 000" },
  { name: "Ferrari 512 Testarossa", price: "$200 000" },
  { name: "Lamborghini Countach 1988", price: "$700 000" },
  { name: "Ferrari F40 1990", price: "$2 000 000" },
  { name: "Audi Quattro", price: "$400 000" },
  { name: "Ferrari Testarossa 1987", price: "$150 000" },
];

const Eighties = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">80's</h2>
        <img src={backgroundImage} alt="80's" className="mx-auto h-64 object-cover" />
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

export default Eighties;
