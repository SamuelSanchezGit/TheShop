import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  "Mercedes 190E Asap",
  "Chevrolet Nova 1969 BlackWidow",
  "Nissan 300ZX Zlaywokrs",
  "Nissan 370Z Fly Motorsport",
  "Koenigsegg Agera 1to1",
  "BMW 320i Group5",
  "Mitsubishi EVO X Zlayworks",
  "Ferrari F40 Liberty Walk",
  "Nissan GTZ34 Drift",
  "Pagani Imola",
  "BMW M3 GTR Most Wanted",
  "Ford Mustang Most Wanted",
  "Dodge Viper Competition Coupe",
  "Lamborghini Centenario",
  "Pagani Zonda Cinque"
];

const OneOfOne = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">One of One</h2>
        <img src={backgroundImage} alt="One of One" className="mx-auto h-64 object-cover" />
      </div>
      <table className="table-auto w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-red-700 text-white">
            <th className="px-4 py-2">Modèle</th>
            <th className="px-4 py-2">Note</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => (
            <tr key={index} className="text-center border-b">
              <td className="px-4 py-2">{model}</td>
              <td className="px-4 py-2">Accessible via événement</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OneOfOne;
