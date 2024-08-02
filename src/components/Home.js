import React from 'react';
import backgroundImage from '../GarageForwebsite.png';

const Home = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white mb-4 text-center">Bienvenue chez The Shop</h2>
        <p className="text-xl text-white text-center">Le temple des supercars et des motos</p>
      </div>
    </div>
  );
};

export default Home;
