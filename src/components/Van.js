import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "VW Combi", price: "$45 000" },
  { name: "Ford Econoline E150", price: "$5000" },
  { name: "GMC Vandura A-Team", price: "$18 000" },
  { name: "Mercedes V-Class", price: "$30 000" },
  { name: "Honda Odyssey 2017", price: "$23 000" },
  { name: "Honda Odyssey 2023", price: "$31 000" },
  { name: "Toyota Hiace Bosozoku", price: "$12 500" }
];

const Van = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Vans</h2>
        <img src={backgroundImage} alt="Vans" className="mx-auto h-64 object-cover" />
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

export default Van;
