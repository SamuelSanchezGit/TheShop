import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "AMC Javelin RingBrother custom", price: "$120 000" },
  { name: "Plymouth Barracuda Formula S", price: "$74 000" },
  { name: "Ford Mustang Boss 302 2013", price: "$42 000" },
  { name: "Ford Mustang Boss 429 1969", price: "$73 000" },
  { name: "Chevrolet C10SS Custom", price: "$130 000" },
  { name: "Chevrolet Camaro 2023", price: "$55 000" },
  { name: "Chevrolet Camaro 1968 60", price: "$55 000" },
  { name: "Chevrolet Camaro 1968 B", price: "$50 000" },
  { name: "Chevrolet Camaro 1968 Convertible", price: "$55 000" },
  { name: "Chevrolet Camaro Iroc Z 1990", price: "$15 000" },
  { name: "Dodge Challenger 2016", price: "$38 000" },
  { name: "Dodge Challenger Demon", price: "$100 000" },
  { name: "Dodge Challenger Rampage", price: "$120 000" },
  { name: "Dodge Challenger SRT8", price: "$30 000" },
  { name: "Dodge Charger Custom 1966", price: "$55 000" },
  { name: "Dodge Charger 1971", price: "$38 000" },
  { name: "Pontiac GTO 1965", price: "$48 000" },
  { name: "Plymouth Hemi Cuda 1970", price: "$110 000" },
  { name: "Plymouth Hemi Cuda 1970 Convertible", price: "$120 000" },
  { name: "Plymouth Hemi Cuda 1971", price: "$110 000" },
  { name: "Plymouth Hemi Cuda 1971 Convertible", price: "$120 000" },
  { name: "Plymouth Hemi Cuda 1972", price: "$110 000" },
  { name: "Ford Mustang 2019", price: "$42 000" },
  { name: "Ford Mustang Foxbody 1993", price: "$22 000" },
  { name: "Ford Mustang Saleen 2000", price: "$28 000" },
  { name: "Ford Mustang Saleen 2006", price: "$35 000" },
  { name: "Ford Mustang Shelby Super snake", price: "$60 000" },
  { name: "Chevrolet Nova 1969", price: "$52 000" },
  { name: "Chevrolet Nova 1969 Dragster", price: "$130 000" },
  { name: "Chevrolet Nova 1969 Dragster Monster", price: "$260 000" },
  { name: "Dodge Challenger Redeye 2", price: "$50 000" },
  { name: "Dodge Challenger Redeye 3", price: "$54 000" },
  { name: "Plymouth Satellite Hemi 1971", price: "$80 000" },
  { name: "Plymouth Satellite 340 1971", price: "$70 000" },
  { name: "Shelby GT500 2019", price: "$82 000" },
  { name: "Shelby GT500 1969", price: "$61 000" },
  { name: "Ford Mustang SVT Cobra R 2000", price: "$65 000" },
  { name: "Ford Torino 1976", price: "$42 000" },
  { name: "Pontiac Trans AM 1969", price: "$37 000" },
  { name: "Pontiac Trans AM 1970", price: "$40 000" },
  { name: "Dodge Charger 1970", price: "$58 000" },
];

const MuscleCars = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Muscle Cars</h2>
        <img src={backgroundImage} alt="Muscle Cars" className="mx-auto h-64 object-cover" />
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

export default MuscleCars;
