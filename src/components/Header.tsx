import Navbar from './Navbar';
import darkIcon from '../assets/header/dark.svg';
import lightIcon from '../assets/header/light.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState(false);

  const darkLightModeToggleBtn = () => setMode(!mode);
  return (
    <header className="w-full max-w-screen-2xl h-14 border-b-2 border-orientalBlue flex justify-between items-center px-5 py-4 fixed top-0">
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
        {mode ? (
          <img
            src={lightIcon}
            alt="Oriental Sun Icon"
            className="cursor-pointer"
            onClick={darkLightModeToggleBtn}
          />
        ) : (
          <img
            src={darkIcon}
            alt="Oriental Blue Moon Icon"
            className="cursor-pointer"
            onClick={darkLightModeToggleBtn}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
