import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from "../../locationSlice";
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon, FaUserCircle,FaUserShield} from 'react-icons/fa'; // Human Face Icon
import logo from "./assets/logo.png";
import playstore from './img/play-store.png';
     import appstore from './img/app-store.png';

export default function Navbar() {
  const [localLocation, setLocalLocation] = useState("select Location");
  const location = useSelector((state) => state.location.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenu(!menu);
    navigate('/');                                                                    
  };

  const menubarToggle = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg">
      {/* Logo on the left side */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-12" />
            </Link>
          </h1>
          <nav className="hidden md:flex space-x-6 ml-10">
            <Link to="/" className="transition duration-300">
              <i className="fas fa-home mr-2"></i>Home
            </Link>
            <a href="#about" className="transition duration-300">
              <i className="fas fa-info-circle mr-2"></i>About Us
            </a>
            <a href="#contact" className="transition duration-300">
              <i className="fas fa-envelope mr-2"></i>Contact Us
            </a>
          </nav>
        </div>

        {/* Center Icons */}
        <div className="flex items-center">
          <FaUserCircle 
            className="text-4xl cursor-pointer transition duration-300" 
            onClick={() => navigate('/signup')}
          />
          <FaUserShield
            className="text-4xl cursor-pointer ml-4 transition duration-300" 
            onClick={() => navigate('/login')}
          />
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            <Link to="https://play.google.com">
              <img src={playstore} className="h-10" alt="Play Store" />
            </Link>
            <Link to="https://www.apple.com/in/app-store/">
              <img src={appstore} className="h-10 rounded" alt="App Store" />
            </Link>
          </div>

          {/* Hamburger Icon */}
          <button onClick={menubarToggle} className="md:visible text-white">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Sidebar menu */}
      {menu && (
        <div className="bg-gray-800 h-screen w-64 p-5 fixed top-0 right-0 transition-transform transform translate-x-0">
          <div className="flex justify-between items-center p-2">
            <h2 className="text-white text-lg">Menu</h2>
            <button onClick={menubarToggle} className="text-white">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <ul className="mt-8">
            <li>
              <button onClick={toggleTheme} className="text-white block py-2 px-4">
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
            <li>
              <Link to="/" className="text-white block py-2 px-4 hover:text-orange-500 text-lg" onClick={toggleMenu}>
                <i className="fas fa-home mr-2"></i> Home
              </Link>
            </li>
            <li>
              <a href="#about" className="block py-2 hover:text-orange-500 transition duration-300">
                <i className="fas fa-info-circle mr-2"></i>About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 hover:text-orange-500 transition duration-300">
                <i className="fas fa-envelope mr-2"></i>Contact Us
              </a>
            </li>
            <li>
              <a href="#press" className="block py-2 hover:text-orange-500 transition duration-300">
                <i className="fas fa-bullhorn mr-2"></i>Press & Media
              </a>
            </li>
            <li>
              <a href="#settings" className="block py-2 hover:text-orange-500 transition duration-300">
                <i className="fas fa-cogs mr-2"></i>Settings
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
