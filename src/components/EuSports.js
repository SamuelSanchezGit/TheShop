import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: 'Alfa Romeo 4C', price: '57 000 $' },
  { name: 'Mercedes 190E Evo 2', price: '130 000 $' },
  { name: 'Caterham R500', price: '37 000 $' },
  { name: 'Lancia Delta HF 1992', price: '34 000 $' },
  { name: 'Lotus Elise 111s', price: '18 000 $' },
  { name: 'NiRoLotus Evora', price: '26 000 $' },
  { name: 'Lotus Exige S', price: '28 000 $' },
  { name: 'Ferrari F355 Berlinetta', price: '75 000 $' },
  { name: 'BMW I8', price: '75 000 $' },
  { name: 'BMW I8 Mansaug', price: '100 000 $' },
  { name: 'BMW M2 F22', price: '38 000 $' },
  { name: 'BMW M2 G87', price: '51 000 $' },
  { name: 'BMW M3 E36 326 Power', price: '19 000 $' },
  { name: 'BMW M3 E36 Drift Missile', price: '16 000 $' },
  { name: 'BMW M3 E36 Pandem', price: '22 000 $' },
  { name: 'BMW M3 E36 Stance', price: '17 000 $' },
  { name: 'BMW M3 E46', price: '20 000 $' },
  { name: 'BMW M3 E46 CSL Pandem', price: '75 000 $' },
  { name: 'BMW M3 E92', price: '35 000 $' },
  { name: 'BMW M3 E92 Liberty Walk', price: '47 000 $' },
  { name: 'BMW M3 F80', price: '42 000 $' },
  { name: 'BMW M4 F82', price: '48 000 $' },
  { name: 'BMW M4 Liberty walk', price: '67 000 $' },
  { name: 'BMW M4 Vorsteiner', price: '51 000 $' },
  { name: 'BMW M4CS', price: '68 000 $' },
  { name: 'BMW M4CSL', price: '82 000 $' },
  { name: 'Audi TTS 2015', price: '28 000 $' },
  { name: 'BMW Z3M', price: '23 000 $' },
  { name: 'BMW Z4 The Alchemists', price: '72 000 $' },
];

const EuSports = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Eu_sports</h2>
        <img src={backgroundImage} alt="Eu Sports" className="mx-auto h-64 object-cover" />
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

export default EuSports;
