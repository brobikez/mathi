import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from "../../locationSlice";
import logo from "./assets/logo.png";
import playstore from './img/play-store.png';
import appstore from './img/app-store.png';

export default function Navbar() {
  const [localLocation, setLocalLocation] = useState("select Location");
  const location = useSelector((state) => state.location.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLocationClick = (selectedLocation) => {
    dispatch(setLocation(selectedLocation));
  };

  const [menu, setMenu] = useState(false);
  const [showDriverOptions, setShowDriverOptions] = useState(false);
  const [showCustomerOptions, setShowCustomerOptions] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const menubarToggle = () => {
    setMenu(!menu);
  };

  const toggleDriverOptions = () => {
    setShowDriverOptions(!showDriverOptions);
    if (showCustomerOptions) setShowCustomerOptions(false); // Close customer options if open
  };

  const toggleCustomerOptions = () => {
    setShowCustomerOptions(!showCustomerOptions);
    if (showDriverOptions) setShowDriverOptions(false); // Close driver options if open
  };

  const handleCustomerOptionClick = (path) => {
    navigate(path);
    setShowCustomerOptions(false); // Hide the dropdown
  };

  const handleDriverOptionClick = (path) => {
    navigate(path);
    setShowDriverOptions(false); // Hide the dropdown
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
        setShowDriverOptions(false); // Close driver dropdown
        setShowCustomerOptions(false); // Close customer dropdown
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="text-black flex justify-between items-center p-3 shadow-md bg-fuchsia-900" ref={menuRef}>
      <div className="flex gap-2 xl:gap-8">
        {/* Logo on the left side */}
        <div className="flex items-center xl:pl-12">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-14 md:h-12" />
          </Link>
        </div>

        {/* Home, About Us, Contact Us (visible on large screens) */}
        <div className="text-white hidden lg:flex md:gap-2 lg:gap-4 xl:gap-8 font-medium justify-center items-center">
          <Link to="/">
          <div className="flex justify-center items-center">
            <h1 className="capitalize md:text-lg lg:text-xl xl:text-2xl xl:px-2 hover:border-b-white hover:border-b-2 transition-all duration-300 cursor-pointer">Home</h1>
          </div>
          </Link>
          <a href="/#about">
          <div className="flex justify-center items-center">
            <h1 className="capitalize md:text-lg lg:text-xl xl:text-2xl xl:px-2 hover:border-b-white hover:border-b-2 transition-all duration-300 cursor-pointer">About us</h1>
          </div>
          </a>
          <a href="/#contact">
          <div className="flex justify-center items-center">
            <h1 className="capitalize md:text-lg lg:text-xl xl:text-2xl xl:px-2 hover:border-b-white hover:border-b-2 transition-all duration-300 cursor-pointer">Contact us</h1>
          </div>
          </a>
          
        </div>
      </div>

      {/* Right-side content: App logos, login/signup buttons, profile button */}
      <div className="flex justify-center items-center gap-3">
        <div className="hidden lg:flex gap-2">
          <Link to="https://play.google.com">
            <img src={playstore} alt="android-phone icon" target="_blank" className="h-11" />
          </Link>
          <Link to="https://www.apple.com/in/app-store/">
            <img src={appstore} alt="i-phone icon" target="_blank" className="h-11" />
          </Link>
        </div>
        <div className="flex gap-1 md:gap-3 justify-center items-center">
          <Link to="/Login">
            <button className="hidden lg:flex justify-center items-center rounded-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 font-medium text-xl xl:w-32">Login</button>
          </Link>
          <Link to="/Signup">
            <button className="rounded-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 font-medium text-xl xl:w-32">Signup</button>
          </Link>
          <Link to="/profileforvehiclepartnerberoreregister">
            <button className="rounded-full bg-pink-600 text-white w-12 h-12 font-bold text-xl">B</button>
          </Link>
          <button onClick={menubarToggle} className="text-white " style={{ padding: '12px 16px', fontSize: "25px" }}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Sidebar menu */}
      {menu && (
        <div
          className="bg-gray-800 h-screen w-60 md:w-72 lg:w-80 p-5 fixed top-0 right-0 transition-transform transform translate-x-0 z-50 "
          id="aside"
        >
          <div className="flex justify-between items-center p-1">
            <h2 className="text-white text-xl">Menu</h2>
            <button onClick={menubarToggle} className="text-white">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <ul className="mt-4 md:mt-6">
            <li>
              <Link to="/" className="text-white block py-2 px-4 hover:text-orange-500 hover:text-lg text-lg lg:hidden capitalize" onClick={toggleMenu}>
                <i className="fas fa-home mr-2"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/profileforvehiclepartnerberoreregister" className="text-white block py-2 px-4 hover:text-orange-500 hover:text-lg text-lg capitalize" onClick={toggleMenu}>
              <i class="fa-solid fa-user  mr-2"></i> Profile
              </Link>
            </li>
            <li>
              <a href="/#help" className="text-white block py-2 px-4 hover:text-orange-500 hover:text-lg text-lg capitalize" onClick={toggleMenu}>
                <i className="fas fa-question-circle mr-2"></i> Help & Support
              </a>
            </li>
            <li>
              <a href="/#contact" className="text-white block py-2 px-4 hover:text-orange-500 hover:text-lg text-lg lg:hidden capitalize" onClick={toggleMenu}>
                <i className="fas fa-envelope mr-2"></i> Contact Us
              </a>
            </li>
            <li>
              <Link to="/career" className="text-white block py-2 px-4 hover:text-orange-500 hover:text-lg text-lg capitalize" onClick={toggleMenu}>
                <i className="fas fa-briefcase mr-2"></i> Careers
              </Link>
            </li>
            <li>
              <a href="/#safety" className="text-white block py-2 px-4 hover:text-orange-500 hover:text-lg text-lg capitalize" onClick={toggleMenu}>
                <i className="fas fa-shield-alt mr-2"></i> Safety Measures
              </a>
            </li>
            <li>
              <Link to="/termsandcondition" className="text-white block py-2 px-4 hover:text-orange-500 hover:text-lg text-lg capitalize" onClick={toggleMenu}>
              <i class="fas fa-file-alt mr-2"></i> Terms and Condition
              </Link>
            </li>
            <li>
              <a href="/#press" className="text-white block py-2 px-4 hover:text-orange-500 hover:text-lg text-lg capitalize" onClick={toggleMenu}>
                <i className="fas fa-bullhorn mr-2"></i> Press & Media
              </a>
            </li>
            <li>
              <Link to="/settings" className="text-white block py-2 px-4 hover:text-orange-500 hover:text-lg text-lg capitalize" onClick={toggleMenu}>
                <i className="fas fa-cogs mr-2"></i> Settings
              </Link>
            </li>
            <li>
              <a href="/#about" className="text-white block py-2 px-4 hover:text-orange-500 hover:text-lg text-lg lg:hidden capitalize" onClick={toggleMenu}>
              <i class="fas fa-info-circle mr-2"></i> About Us
              </a>
            </li>
            <li>
              <Link to="/" className="text-white block py-2 px-4 hover:text-orange-500 hover:text-lg text-lg capitalize" onClick={toggleMenu}>
              <i class="fas fa-sign-out-alt mr-2"></i> Logout
              </Link>
            </li>
            
            
            
            
          </ul>
        </div>
      )}
    </div>
  );
}
