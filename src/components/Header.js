import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../trans120.png';

const Header = () => {
  return (
    <header className="bg-red-700 text-white p-4 flex justify-center items-center sticky top-0 z-50">
      <div className="flex items-center justify-between w-full max-w-4xl px-4">
        <Link to="/" className="text-xl font-bold">Accueil</Link>
        <Link to="/" className="flex justify-center">
          <img src={logo} alt="The Shop Logo" className="h-16 mx-8" />
        </Link>
        <Link to="/modeles" className="text-xl font-bold">Modèles</Link>
      </div>
    </header>
  );
};

export default Header;
