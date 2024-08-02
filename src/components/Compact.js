import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "Mercedes A45 2022", price: "$60 000" },
  { name: "Audi S3", price: "$38 000" },
  { name: "Chevrolet Aveo 2011", price: "$7 500" },
  { name: "Honda Civic EF9", price: "$8 000" },
  { name: "Honda Civic EG6", price: "$11 000" },
  { name: "Honda Civic EK9 Rocket Bunny", price: "$20 000" },
  { name: "Honda Civic EK9 Stance", price: "$6 500" },
  { name: "Honda Civic EP3", price: "$10 000" },
  { name: "Honda Civic FD2", price: "$14 000" },
  { name: "Honda Civic Ferio", price: "$6 500" },
  { name: "Honda Civic FK8", price: "$38 000" },
  { name: "Chevrolet Cobalt SS", price: "$10 000" },
  { name: "Honda CRX", price: "$7 500" },
  { name: "Ford Focus 2003", price: "$6 800" },
  { name: "VW Golf 6", price: "$28 000" },
  { name: "VW Golf 8 GTI", price: "$37 000" },
  { name: "VW Golf 1 Stance", price: "$8 000" },
  { name: "Mini John Cooper Works JCW", price: "$48 000" },
  { name: "Audi RS3 2022", price: "$62 000" },
  { name: "VW Scirocco mk1 Stance", price: "$7 000" },
  { name: "Suzuki Swift 2017", price: "$18 000" },
  { name: "Hyundai Veloster N", price: "$30 000" },
  { name: "Toyota Yaris GR", price: "$67 000" }
];

const Compact = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Compact</h2>
        <img src={backgroundImage} alt="Compact" className="mx-auto h-64 object-cover" />
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

export default Compact;
