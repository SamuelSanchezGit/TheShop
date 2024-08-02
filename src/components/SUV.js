import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "Jeep Cherokee SRT8", price: "$45 000" },
  { name: "Aston Martin DBX", price: "$200 000" },
  { name: "Dodge Durango 2018", price: "$67 000" },
  { name: "Infiniti FX45", price: "$28 000" },
  { name: "Brabus G800 2023", price: "$170 000" },
  { name: "Mercedes GL63 AMG", price: "$90 000" },
  { name: "Mercedes GLS600", price: "$210 000" },
  { name: "Lexus LX570 Wald", price: "$130 000" },
  { name: "Lexus LX570", price: "$100 000" },
  { name: "Mercedes ML63 AMG", price: "$35 000" },
  { name: "Range Rover 2014", price: "$65 000" },
  { name: "Range Rover Velar", price: "$130 000" },
  { name: "Range Rover Vogue Mansory", price: "$180 000" },
  { name: "Rolls Royce Cullinan Black Badge", price: "$260 000" },
  { name: "Hyundai Santa Fe", price: "$45 000" },
  { name: "Audi SQ7", price: "$63 000" },
  { name: "Chevrolet Tahoe", price: "$55 000" },
  { name: "VW Touareg R50", price: "$35 000" },
  { name: "Jeep Trackhawk", price: "$120 000" },
  { name: "Lamborghini Urus", price: "$210 000" },
  { name: "BMW X5 E53", price: "$27 000" },
  { name: "BMW X6", price: "$58 000" }
];

const SUV = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">SUV</h2>
        <img src={backgroundImage} alt="SUV" className="mx-auto h-64 object-cover" />
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

export default SUV;
