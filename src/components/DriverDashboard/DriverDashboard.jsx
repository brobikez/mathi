import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DriverDashboard() {
  const navigate = useNavigate();

  // You can add driver-specific functionality and data fetching here

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome, Driver!</h2>
        <p className="text-center text-lg mb-6">
          This is your personalized dashboard. Here you can track trips, manage your vehicle, and more.
        </p>
        
        {/* You can add buttons or features for the driver here */}
        <div className="flex flex-wrap justify-center space-x-6">
          <button 
            onClick={() => navigate('/your-trips')} 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600">
            Your Trips
          </button>
          <button 
            onClick={() => navigate('/vehicle-management')} 
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600">
            Manage Vehicle
          </button>
          <button 
            onClick={() => navigate('/driver-settings')} 
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600">
            Settings
          </button>
        </div>

        <div className="mt-10 text-center">
          <button 
            onClick={() => {
              localStorage.removeItem('userEmail');
              localStorage.removeItem('userPassword');
              localStorage.removeItem('userType');
              navigate('/login');  // Logout and redirect to login
            }} 
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
