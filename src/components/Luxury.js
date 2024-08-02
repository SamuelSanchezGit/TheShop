import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "Mercedes 600SEL W140", price: "$12 000" },
  { name: "BMW 750iL E38", price: "$22 000" },
  { name: "BMW 760iL E66", price: "$34 000" },
  { name: "Bentley Continental Wald 2011", price: "$165 000" },
  { name: "Mercedes CLS63 AMG", price: "$80 000" },
  { name: "Maserati Quattroporte 2015", price: "$135 000" },
  { name: "Rolls-Royce Dawn", price: "$220 000" },
  { name: "Rolls-Royce Phantom", price: "$300 000" },
  { name: "Rolls-Royce Phantom Aphrodisiac", price: "$410 000" },
  { name: "Rolls-Royce Phantom MK8", price: "$320 000" },
  { name: "Rolls-Royce Spectre", price: "$310 000" },
  { name: "Rolls-Royce Wraith", price: "$235 000" },
  { name: "Rolls-Royce Wraith Black Badge", price: "$250 000" },
  { name: "Rolls-Royce Wraith Novitec", price: "$300 000" },
  { name: "Rolls-Royce Wraith Overdose", price: "$320 000" },
  { name: "Audi RS6 2016", price: "$115 000" },
  { name: "Audi RS6 2020", price: "$150 000" },
  { name: "Audi RS7 C8", price: "$120 000" },
  { name: "Mercedes S55 AMG W220", price: "$15 000" },
  { name: "Mercedes S65 AMG W222", price: "$70 000" },
  { name: "Mercedes S500 W223", price: "$230 000" },
  { name: "Mercedes S600 W220", price: "$18 000" },
  { name: "Mercedes W222 18 Brabus", price: "$70 000" },
  { name: "Mercedes W222 Maybach", price: "$185 000" },
  { name: "Mercedes W222 Wald", price: "$190 000" }
];

const Luxury = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Luxury</h2>
        <img src={backgroundImage} alt="Luxury" className="mx-auto h-64 object-cover" />
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
              <td className="px-4 py-2"><i>{model.price}</i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Luxury;
