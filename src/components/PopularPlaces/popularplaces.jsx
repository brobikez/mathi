import React, { useState, useEffect, useRef } from 'react';
import { FaCar, FaBriefcase, FaRoute, FaUniversity, FaCaretDown } from 'react-icons/fa';

const PopularPlacesNearMe = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
 
  const dropdownRefs = {
    first: useRef(null),
    second: useRef(null),
    third: useRef(null),
    fourth: useRef(null),
  };
  const sliderInterval = useRef(null);



  const toggleDropdown = (box) => {
    setDropdownVisible(prev => (prev === box ? null : box));
  };

  const handleClickOutside = (event) => {
    if (Object.values(dropdownRefs).every(ref => ref.current && !ref.current.contains(event.target))) {
      setDropdownVisible(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    // Start the slider
  

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      stopSlider();
    };
  }, []);



  const stopSlider = () => {
    if (sliderInterval.current) {
      clearInterval(sliderInterval.current);
    }
  };

 
  return (
    <div className="flex flex-col md:flex-row bg-white py-16">
      <div className="md:w-1/2 container mx-auto px-4 flex flex-col space-y-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Popular Places Near Me
        </h2>

        {/* Dropdown Boxes */}
        <div className="relative" ref={dropdownRefs.first}>
          <div
            className="transform hover:scale-105 transition-transform duration-300 bg-white p-6 rounded-lg shadow-md hover:text-black cursor-pointer"
            onClick={() => toggleDropdown('first')}
          >
            <div className="flex items-center mb-2">
              <FaCar className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Travel as Per Your Leisure</h3>
              <FaCaretDown className="text-xl ml-2" />
            </div>
            <p className="text-gray-600 hover:text-black">Explore destinations at your own pace and convenience.</p>
          </div>
          {dropdownVisible === 'first' && (
            <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-20">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Marina Beach</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Kapaleeshwarar Temple</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Fort St. George</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Government Museum</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Santhome Cathedral</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Theosophical Society</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Valluvar Kottam</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Guindy National Park</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative" ref={dropdownRefs.second}>
          <div
            className="transform hover:scale-105 transition-transform duration-300 bg-white p-6 rounded-lg shadow-md hover:text-black cursor-pointer"
            onClick={() => toggleDropdown('second')}
          >
            <div className="flex items-center mb-2">
              <FaRoute className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Discover places frequented by business travelers.</h3>
              <FaCaretDown className="text-xl ml-2" />
            </div>
            <p className="text-gray-600 hover:text-black">Find routes for extended journeys and road trips.</p>
          </div>
          {dropdownVisible === 'second' && (
            <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-20">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Seval</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Zoho</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Wipro</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">HCLTech</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative" ref={dropdownRefs.third}>
          <div
            className="transform hover:scale-105 transition-transform duration-300 bg-white p-6 rounded-lg shadow-md hover:text-black cursor-pointer"
            onClick={() => toggleDropdown('third')}
          >
            <div className="flex items-center mb-2">
              <FaBriefcase className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Visited Often by Professionals</h3>
              <FaCaretDown className="text-xl ml-2" />
            </div>
            <p className="text-gray-600 hover:text-black">Longer Drives Are Better.</p>
          </div>
          {dropdownVisible === 'third' && (
            <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-20">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Vellore</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Kanchipuram</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Mahabalipuram</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Madurai</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Kumbakonam</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Thanjavur</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Pondicherry</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Kanyakumari</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative" ref={dropdownRefs.fourth}>
          <div
            className="transform hover:scale-105 transition-transform duration-300 bg-white p-6 rounded-lg shadow-md hover:text-black cursor-pointer"
            onClick={() => toggleDropdown('fourth')}
          >
            <div className="flex items-center mb-2">
              <FaUniversity className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Explore Academic Institutions</h3>
              <FaCaretDown className="text-xl ml-2" />
            </div>
            <p className="text-gray-600 hover:text-black">Find notable academic institutions in the area.</p>
          </div>
          {dropdownVisible === 'fourth' && (
            <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-20">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Bangalore</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Ooty</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Coimbatore</li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Mysore</li>
              </ul>
            </div>
          )}
        </div>
      </div>


</div>

  );
};

export default PopularPlacesNearMe;          