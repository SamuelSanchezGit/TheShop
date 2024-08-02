import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "Chevrolet Corvette C6 ZR1", price: "$90 000" },
  { name: "Chevrolet Corvette C8 convertible", price: "$120 000" },
  { name: "Chevrolet Corvette C8 Mansaug", price: "$150 000" },
  { name: "Chevrolet Corvette C8 Rocket Bunny", price: "$150 000" },
  { name: "Dodge Charger EV 2024", price: "$60 000" },
  { name: "Ford Mustang 2024", price: "$55 000" },
  { name: "Ford Mustang NFS", price: "$110 000" },
  { name: "Dodge Viper 2016", price: "$100 000" },
  { name: "Dodge Viper ACR", price: "$120 000" },
];

const AmSports = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Am_sports</h2>
        <img src={backgroundImage} alt="Am_sports" className="mx-auto h-64 object-cover" />
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

export default AmSports;
