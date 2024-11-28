import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for programmatic navigation
import './CustomerMainPage.css';

function CustomermainPage() {
  // State to manage form inputs
  const [startingPoint, setStartingPoint] = useState('');
  const [endingPoint, setEndingPoint] = useState('');
  const [mode, setMode] = useState('daily');  // default mode is 'daily'
  const [vehicleType, setVehicleType] = useState('car');  // default vehicle type is 'car'

  // Use navigate hook for programmatic navigation
  const navigate = useNavigate();

  // Handle changes in form inputs
  const handleStartingPointChange = (e) => setStartingPoint(e.target.value);
  const handleEndingPointChange = (e) => setEndingPoint(e.target.value);
  const handleModeChange = (e) => setMode(e.target.value);
  const handleVehicleChange = (e) => setVehicleType(e.target.value);

  // Handle submit to navigate to car information page if 'rent' and 'car' selected
  const handleSubmit = () => {
    
    // Navigate to the car information page if "Rent" mode and "Car" is selected
    if (mode === 'rent' && vehicleType === 'car') {
      navigate('/carinformation');  // Programmatic navigation to "/carinformation"
    }
    else if (mode === 'rent' && vehicleType === 'bike') {
        navigate('/bikeinformation');  // Programmatic navigation to "/carinformation"
      }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
        
        {/* Left Side - Form */}
        <div className="flex-1 p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Transportation Booking Form</h2>

          {/* Starting Point */}
          <div className="space-y-2">
            <label htmlFor="startingPoint" className="block text-lg text-gray-700">Starting Point:</label>
            <input
              type="text"
              id="startingPoint"
              value={startingPoint}
              onChange={handleStartingPointChange}
              placeholder="Enter Starting Point"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Ending Point */}
          <div className="space-y-2">
            <label htmlFor="endingPoint" className="block text-lg text-gray-700">Ending Point:</label>
            <input
              type="text"
              id="endingPoint"
              value={endingPoint}
              onChange={handleEndingPointChange}
              placeholder="Enter Ending Point"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mode of Transport */}
          <div className="space-y-2">
            <label className="block text-lg text-gray-700">Mode of Transport:</label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="daily"
                  name="mode"
                  value="daily"
                  checked={mode === 'daily'}
                  onChange={handleModeChange}
                  className="h-5 w-5 text-blue-500"
                />
                <label htmlFor="daily" className="ml-2 text-gray-700">Daily</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="rent"
                  name="mode" 
                  value="rent"
                  checked={mode === 'rent'}
                  onChange={handleModeChange}
                  className="h-5 w-5 text-blue-500"
                />
                <label htmlFor="rent" className="ml-2 text-gray-700">Rental</label>
              </div>
            </div>
          </div>

          {/* Vehicle Type Dropdown - Only visible if "Rent" is selected */}
          {mode === 'rent' && (
            <div className="space-y-2">
              <label htmlFor="vehicleType" className="block text-lg text-gray-700">Select Vehicle:</label>
              <select
                id="vehicleType"
                value={vehicleType}
                onChange={handleVehicleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="car">Car</option>
                <option value="bike">Bike</option>
              </select>
            </div>
          )}

          {/* Submit Button */}
          <div className="space-y-2">
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-fuchsia-900 text-white font-semibold rounded-lg hover:bg-fuchsia-950 focus:outline-none focus:ring-2 focus:ring-fuchsia-900"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Right Side - Vehicle Image */}
        <div className="flex-1 bg-gray-50 flex justify-center items-center p-6">
          {/* Constant Image - Showing the same image regardless of mode/vehicle type */}
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.lC0BE3BBTQ7dNB0giFUMMgHaE7?w=258&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Vehicle Preview"
            className="w-full sm:w-96 md:w-80 lg:w-96 h-auto rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
  );
}

export default CustomermainPage;
