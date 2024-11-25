import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerMainPage.css';

function CustomermainPage() {
  const [startingPoint, setStartingPoint] = useState('');
  const [endingPoint, setEndingPoint] = useState('');
  const [mode, setMode] = useState('daily');
  const [vehicleType, setVehicleType] = useState('car');

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (mode === 'rent') {
      navigate(vehicleType === 'car' ? '/carinformation' : '/bikeinformation');
    } else {
      alert('Only Rental mode supports navigation to vehicle information pages.');
    }
  };

  const vehicleImages = {
    car: 'https://tse1.mm.bing.net/th/id/OIP.lC0BE3BBTQ7dNB0giFUMMgHaE7?w=258&h=180&c=7&r=0&o=5&pid=1.7',
    bike: 'https://tse2.mm.bing.net/th/id/OIP.example_bike_image'
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <form className="flex-1 p-6 md:p-8 space-y-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <h2 className="text-2xl font-semibold text-center text-gray-800">Transportation Booking Form</h2>

          <label htmlFor="startingPoint" className="block text-lg text-gray-700">Starting Point:</label>
          <input
            id="startingPoint"
            type="text"
            value={startingPoint}
            onChange={(e) => setStartingPoint(e.target.value)}
            placeholder="Enter Starting Point"
            required
            className="..."
          />

          <label htmlFor="endingPoint" className="block text-lg text-gray-700">Ending Point:</label>
          <input
            id="endingPoint"
            type="text"
            value={endingPoint}
            onChange={(e) => setEndingPoint(e.target.value)}
            placeholder="Enter Ending Point"
            required
            className="..."
          />

          <label className="block text-lg text-gray-700">Mode of Transport:</label>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                value="daily"
                checked={mode === 'daily'}
                onChange={(e) => setMode(e.target.value)}
              />
              Daily
            </label>
            <label>
              <input
                type="radio"
                value="rent"
                checked={mode === 'rent'}
                onChange={(e) => setMode(e.target.value)}
              />
              Rental
            </label>
          </div>

          {mode === 'rent' && (
            <>
              <label htmlFor="vehicleType" className="block text-lg text-gray-700">Select Vehicle:</label>
              <select
                id="vehicleType"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="..."
              >
                <option value="car">Car</option>
                <option value="bike">Bike</option>
              </select>
            </>
          )}

          <button type="submit" className="...">Book Now</button>
        </form>

        <div className="flex-1 bg-gray-50 flex justify-center items-center p-6">
          <img
            src={vehicleImages[vehicleType]}
            alt={`${vehicleType} preview`}
            className="..."
          />
        </div>
      </div>
    </div>
  );
}

export default CustomermainPage;

