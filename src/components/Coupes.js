import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: 'BMW 135i', price: '24 000 $' },
  { name: 'BMW 420i G82', price: '34 000 $' },
  { name: 'Mercedes 560 SEC', price: '39 000 $' },
  { name: 'BMW 645ci Ac Schnitzer', price: '58 000 $' },
  { name: 'BMW 850csi', price: '75 000 $' },
  { name: 'Alfa Romeo 8C', price: '400 000 $' },
  { name: 'Mercedes AMG Hammer', price: '120 000 $' },
  { name: 'Bentley Brookland', price: '57 000 $' },
  { name: 'Bentley Continental Convertible W12 2020', price: '210 000 $' },
  { name: 'Bentley Continental Convertible V8 2020', price: '170 000 $' },
  { name: 'Bentley Continental GTS 2013', price: '185 000 $' },
  { name: 'Mercedes C63s', price: '64 000 $' },
  { name: 'Chrysler Crossfire', price: '12 000 $' },
  { name: 'Ferrari 612 Scaglietti', price: '170 000 $' },
  { name: 'Ferrari California 2013', price: '130 000 $' },
  { name: 'Ferrari California 2015', price: '155 000 $' },
  { name: 'Infiniti G35', price: '16 000 $' },
  { name: 'Maserati Granturismo MC Stradale 2020', price: '71 000 $' },
  { name: 'Hyundai Coupé', price: '9000 $' },
  { name: 'Lexus LC500', price: '60 000 $' },
  { name: 'BMW M4 cabriolet G83', price: '55 000 $' },
  { name: 'BMW M6 F13', price: '47 000 $' },
  { name: 'BMW M8 Prior Design', price: '86 000 $' },
  { name: 'Ferrari Roma', price: '215 000 $' },
  { name: 'Audi RS5 2020', price: '58 000 $' },
  { name: 'Mercedes S63 coupé Brabus', price: '235 000 $' },
  { name: 'Mercedes SL63 AMG cabriolet', price: '170 000 $' },
  { name: 'Mercedes SL65 AMG', price: '120 000 $' },
  { name: 'BMW Z4 2022', price: '56 000 $' },
  { name: 'BMW Z4m coupé', price: '28 000 $' },
];

const Coupes = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Coupés</h2>
        <img src={backgroundImage} alt="Coupés" className="mx-auto h-64 object-cover" />
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

export default Coupes;
