import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "Nissan 180sx 2jz swap", price: "$18 000" },
  { name: "Nissan Z70R Nismo", price: "$35 000" },
  { name: "Toyota AE86", price: "$20 000" },
  { name: "Autozam AZ1", price: "$25 000" },
  { name: "Suzuki Cappuccino", price: "$21 000" },
  { name: "Nissan Cefiro A31", price: "$17 000" },
  { name: "Toyota celica Bosozoku", price: "$28 000" },
  { name: "Toyota Celica Supra MK2", price: "$14 000" },
  { name: "Toyota Chaser MK2 JZX100", price: "$22 000" },
  { name: "Daihatsu Copen", price: "$23 000" },
  { name: "Datsun 910", price: "$28 000" },
  { name: "Mitsubishi EVO 5", price: "$31 000" },
  { name: "Mazda RX7 FC3S", price: "$21 000" },
  { name: "Mazda RX7 FD3S", price: "$26 000" },
  { name: "Honda Integra DC2", price: "$21 500" },
  { name: "Honda Integra DC5", price: "$23 000" },
  { name: "Lexus IS300", price: "$17 000" },
  { name: "Nissan Skyline GTR Kenmeri KPGC110", price: "$59 000" },
  { name: "Toyota MR2 AW11", price: "$20 000" },
  { name: "Mazda MX5 NA", price: "$11 000" },
  { name: "Mazda RX7 FD Stance Camber", price: "$28 000" },
  { name: "Mazda RX7 FD Stance Normal", price: "$28 000" },
  { name: "Mazda RX7 Veilside", price: "$40 000" },
  { name: "Nissan Fairlady Z S30 Devil Z", price: "$58 000" },
  { name: "Honda S2000", price: "$24 000" },
  { name: "Lexus SC300 Stance", price: "$21 500" },
  { name: "Nissan SIl80", price: "$20 000" },
  { name: "Nissan Silvia PS13", price: "$20 500" },
  { name: "Nissan Silvia S14", price: "$24 000" },
  { name: "Nissan Silvia S15", price: "$26 000" },
  { name: "Nissan Skyline C110 Bosozoku", price: "$31 000" },
  { name: "Nissan Skyline C110 Liberty Walk", price: "$29 000" },
  { name: "Nissan Skyline ER34", price: "$45 000" },
  { name: "Nissan Skyline GTR KPGC10", price: "$52 000" },
  { name: "Nissan Skyline KPGC10 Stance", price: "$48 000" },
  { name: "Nissan Skyline R30", price: "$21 000" },
  { name: "Nissan Skyline R31 Bosozoku", price: "$18 000" },
  { name: "Nissan Skyline R32", price: "$38 000" },
  { name: "Nissan Skyline R34", price: "$130 000" },
  { name: "Toyota Soarer GZ20", price: "$23 000" },
  { name: "Toyota Supra MK3", price: "$32 000" },
  { name: "Toyota Supra MK4", price: "$58 000" },
];

const JDM = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">JDM</h2>
        <img src={backgroundImage} alt="JDM" className="mx-auto h-64 object-cover" />
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

export default JDM;
