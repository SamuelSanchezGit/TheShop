import React from 'react';
import backgroundImage from '../GTA_V__Copier_.jpg';

const models = [
  { name: "Mercedes 300SL", price: "$1 000 000" },
  { name: "BMW 2002 Turbo", price: "$100 000" },
  { name: "Alfa Romeo 1750 Junior", price: "$25 000" },
  { name: "Alfa Romeo Giulia Sprint", price: "$100 000" },
  { name: "Audi 100", price: "$30 000" },
  { name: "VW Coccinelle 1974", price: "$12 000" },
  { name: "Chevrolet Belair 1956", price: "$11 000" },
  { name: "Chevrolet Nomad 1956", price: "$15 000" },
  { name: "Chevrolet Belair 1957", price: "$55 000" },
  { name: "Plymouth Belvedere", price: "$48 000" },
  { name: "BMW 507", price: "$750 000" },
  { name: "Pontiac Bonneville 1958", price: "$46 000" },
  { name: "Pontiac Bonneville Convertible", price: "$48 000" },
  { name: "Chevrolet Lova", price: "$100 000" },
  { name: "AC Cobra 427", price: "$140 000" },
  { name: "Lincoln Continental MK4 1972", price: "$10 000" },
  { name: "Chevrolet Corvette 1954", price: "$42 000" },
  { name: "Chevrolet Corvette Gransport 1963", price: "$260 000" },
  { name: "Cadillac Deville 1975", price: "$14 500" },
  { name: "Chevrolet El Camino 1973", price: "$7 500" },
  { name: "Cadillac Eldorado 1957", price: "$23 000" },
  { name: "Cadillac Eldorado 1957 Rouillée", price: "$6 000" },
  { name: "Cadillac Eldorado 1959", price: "$78 000" },
  { name: "Cadillac Eldorado 1968", price: "$18 000" },
  { name: "Ferrari 250 Berlinetta Lusso", price: "$2 000 000" },
  { name: "Ferrari 250 GTO", price: "$10 000 000" },
  { name: "Ferrari 250 Testarossa", price: "$10 000 000" },
  { name: "Ford Fairlane 1964", price: "$13 000" },
  { name: "Cadillac Fleetwood 1978", price: "$18 000" },
  { name: "Cadillac Fleetwood 1978 Lowrider", price: "$21 000" },
  { name: "Ford 1932", price: "$16 000" },
  { name: "Ford 1932 Hot Rod", price: "$20 000" },
  { name: "Ford 1932 Hula Girl", price: "$18 000" },
  { name: "Ford 1934", price: "$20 000" },
  { name: "Ford 1934 Rouillé", price: "$12 000" },
  { name: "Ford 1936 Ratrod", price: "$9 000" },
  { name: "Chevrolet Impala 1958", price: "$16 000" },
  { name: "Chevrolet Impala 1958 Convertible", price: "$19 000" },
  { name: "Chevrolet Impala 1959", price: "$31 000" },
  { name: "Chevrolet Impala 1959 Lowrider", price: "$38 000" },
  { name: "Chevrolet Impala 1972", price: "$14 000" },
  { name: "Chevrolet Impala 1972 B", price: "$14 000" },
  { name: "VW Karmann Ghia", price: "$8 500" },
  { name: "Lamborghini Miura", price: "$1 300 000" },
  { name: "Mack 1953", price: "$12 000" },
  { name: "Honda CRXMack 1953 Dump Truck", price: "$14 000" },
  { name: "Mercury Marauder", price: "$5 500" },
  { name: "Mini Austin 10", price: "$500" },
  { name: "Opel Kadett", price: "$8 500" },
  { name: "Opel Rekord", price: "$9 000" },
  { name: "Opel Rekord 4 portes", price: "$7 500" },
  { name: "Ford Thunderbird 1964", price: "$35 000" },
];

const Classic = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">Classic</h2>
        <img src={backgroundImage} alt="Classic" className="mx-auto h-64 object-cover" />
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

export default Classic;
