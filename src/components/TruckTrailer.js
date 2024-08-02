import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "International 4700", price: "$18 000" },
  { name: "Kenworth T680", price: "$230 000" },
  { name: "Kenworth W900", price: "$230 000" },
  { name: "Ram 3500 2010", price: "$30 000" },
  { name: "Remorque Gooseneck PJ Trailer", price: "$15 000" }
];

const TruckTrailer = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Camions et Remorques</h2>
        <img src={backgroundImage} alt="Camions et Remorques" className="mx-auto h-64 object-cover" />
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

export default TruckTrailer;
