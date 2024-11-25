import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgVideo from "./bg-vdo.mp4";

export default function VacationForm() {
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [showCoin, setShowCoin] = useState(false);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (currentLocation && destination) {
      setShowCoin(true);
      setTimeout(() => {
        setShowCoin(false);
        navigate('/CustomerForBikeCar'); // Redirect to CustomerForBikeCar page
      }, 2000);
    } else {
      alert('Please fill in both Current Location and Destination!');
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-transparent">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-100">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="relative flex items-center justify-center w-[480px] h-[480px] rounded-full bg-gradient-to-br from-purple-500 to-orange-500 shadow-2xl transform hover:scale-105 transition duration-500">
        <div className="relative bg-black bg-opacity-50 backdrop-blur-md p-10 rounded-full w-[400px] h-[400px] flex flex-col justify-center items-center text-center shadow-xl border border-white border-opacity-20">
          <h2 className="text-white text-3xl font-semibold mb-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-lg">
            Find Your Destination
            {showCoin && (
              <span className="inline-flex ml-4">
                <div className="relative w-12 h-12 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center text-black font-bold text-lg animate-bounce">
                  +10
                </div>
              </span>
            )}
          </h2>
          <form className="space-y-5 w-10/12" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Current Location"
              className="w-full px-5 py-3 text-white bg-transparent border border-white/60 rounded-md focus:outline-none"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
            />
            <input
              type="text"
              placeholder="Destination"
              className="w-full px-5 py-3 text-white bg-transparent border border-white/60 rounded-md focus:outline-none"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <button
              className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition duration-300 shadow-lg"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
