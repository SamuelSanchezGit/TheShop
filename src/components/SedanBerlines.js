import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "BMW 325e E30", price: "$8000" },
  { name: "BMW 530d E39", price: "$5000" },
  { name: "Mercedes 560 SEL AMG", price: "$35 000" },
  { name: "Mercedes 560 SEL AMG 2", price: "$26 000" },
  { name: "BMW 750i Iumma", price: "$85 000" },
  { name: "Acura Legend", price: "$7000" },
  { name: "Alfa Romeo Giulia", price: "$55 000" },
  { name: "Mercedes C63 AMG W204", price: "$62 000" },
  { name: "Cadillac CT5V", price: "$58 000" },
  { name: "Cadillac Deville", price: "$8500" },
  { name: "Toyota Camry 2022", price: "$41 000" },
  { name: "Dodge Charger 2006", price: "$13 000" },
  { name: "Dodge Charger 2012", price: "$18 000" },
  { name: "Dodge Charger 2016", price: "$23 000" },
  { name: "Dodge Charger Hellcat Widebody", price: "$64 000" },
  { name: "Mercedes CLA45 AMG Shooting Break", price: "$62 000" },
  { name: "Mercedes CLA45 AMG Shooting Break 2", price: "$62 000" },
  { name: "Mercedes CLS500", price: "$23 000" },
  { name: "Ford Crown Victoria", price: "$6500" },
  { name: "BMW E30 Touring", price: "$9000" },
  { name: "Mercedes E55 AMG", price: "$21 000" },
  { name: "Mercedes E420 W210", price: "$8000" },
  { name: "Mercedes E500 W124", price: "$41 000" },
  { name: "Ford LTD 1975", price: "$6000" },
  { name: "Ford LTD 1975 Basic Sport", price: "$6000" },
  { name: "Ford LTD 1975 Luxe", price: "$7000" },
  { name: "Ford LTD 1975 Luxe 2", price: "$6500" },
  { name: "Lexus GS350", price: "$32 000" },
  { name: "Lexus GS350 2", price: "$32 000" },
  { name: "Kia Stinger GT", price: "$52 000" },
  { name: "BMW M3 G80", price: "$58 000" },
  { name: "BMW M5 E34", price: "$22 000" },
  { name: "BMW M5 E60", price: "$40 000" },
  { name: "BMW M5 F90", price: "$72 000" },
  { name: "Dodge Magnum RT", price: "$19 000" },
  { name: "Nissan Maxima", price: "$7500" },
  { name: "VW Passat 2015", price: "$32 000" },
  { name: "Infiniti Q50S", price: "$49 000" },
  { name: "Audi RS2 Avant", price: "$51 000" },
  { name: "Audi S4 B6 2004", price: "$16 000" },
  { name: "Tesla Model 3", price: "$30 000" },
  { name: "Tesla Model S", price: "$85 000" },
  { name: "Volvo V60", price: "$42 000" }
];

const SedanBerlines = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Sedan Berlines</h2>
        <img src={backgroundImage} alt="Sedan Berlines" className="mx-auto h-64 object-cover" />
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

export default SedanBerlines;
