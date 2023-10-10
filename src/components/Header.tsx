import React from 'react';
import Navbar from './Navbar';
import darkIcon from '../assets/header/dark.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full h-14 border-b-2 border-orientalBlue flex justify-between items-center px-5 py-4">
      <div className="w-1/3 flex justify-between items-center">
        {/* Logo */}
        <h2
          className="font-impact text-4xl text-orientalBlue cursor-pointer"
          onClick={() => navigate('/')}
        >
          hanbit
        </h2>
        {/* Navbar */}
        <Navbar />
      </div>
      <div>
        {/* Dark/Light Mode Toggle */}
        <img
          src={darkIcon}
          alt="Oriental Blue Moon Icon"
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
