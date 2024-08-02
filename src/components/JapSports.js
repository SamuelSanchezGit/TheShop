import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "Nissan 350z", price: "$19 000" },
  { name: "Nissan 370z Nismo", price: "$31 000" },
  { name: "Nissan 400z", price: "$48 000" },
  { name: "Toyota Supra A90 StreetHunter", price: "$51 000" },
  { name: "Mitsubishi Evo X", price: "$42 000" },
  { name: "Mitsubishi FTO", price: "$11 000" },
  { name: "Toyota Supra GR", price: "$42 000" },
  { name: "Toyota GR86", price: "$30 000" },
  { name: "Subaru BRZ 2022", price: "$32 000" },
  { name: "Toyota GR86/BRZ", price: "$37 000" },
  { name: "Toyota GT86 Uras", price: "$34 000" },
  { name: "Nissan GTR R35 Nismo 2024", price: "$165 000" },
  { name: "Nissan GTR R35", price: "$90 000" },
  { name: "Nissan GTR R35 KRC Japan", price: "$190 000" },
  { name: "Subaru Impreza WRX STI 2008", price: "$25 000" },
  { name: "Toyota MR2 SW20", price: "$16 000" },
  { name: "Toyota MRS 2002", price: "$12 000" },
  { name: "Mazda MX5 ND Pandem", price: "$32 000" },
  { name: "Honda NSX Liberty Walk", price: "$150 000" },
  { name: "Nissan GTR R35 Tuning", price: "$80 000" },
  { name: "Subaru Impreza WRX STI 2004", price: "$23 000" },
  { name: "Subaru Impreza WRX STI 2015", price: "$31 000" }
];

const JapSports = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Jap_sports</h2>
        <img src={backgroundImage} alt="Jap_sports" className="mx-auto h-64 object-cover" />
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

export default JapSports;
