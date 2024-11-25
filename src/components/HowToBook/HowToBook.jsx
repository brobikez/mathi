import React from 'react';
import './HowToBook.css';

const HowToBook = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">How To Book</h2>

      <div className="flex flex-col md:flex-row items-start justify-between">
     
        <div className="bg-white p-6 rounded shadow-lg flex-1 box-shadow">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-lg font-bold ml-2">Select Bike</h3>
            </div>
            <p className="text-gray-700">Select your desired bike from the list.</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-lg font-bold ml-2">Rental Duration</h3>
            </div>
            <p className="text-gray-700">Choose your preferred rental duration and location.</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-lg font-bold ml-2">Review Details</h3>
            </div>
            <p className="text-gray-700">Review the bike details, price, and benefits.</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-lg font-bold ml-2">Book Now</h3>
            </div>
            <p className="text-gray-700">Click the Book Now button to proceed.</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">5</div>
              <h3 className="text-lg font-bold ml-2">Fill Details</h3>
            </div>
            <p className="text-gray-700">Fill in your details and confirm the booking.</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">6</div>
              <h3 className="text-lg font-bold ml-2">Confirmation</h3>
            </div>
            <p className="text-gray-700">Receive a confirmation and enjoy your ride!</p>
          </div>
        </div>

      
        <div className="flex-1 mt-4 md:mt-0 md:ml-4">
          <img
            src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--c7031f4d-5efe-43d7-9711-74aa1d273623/manage-booking.webp"
            alt="Manage Booking"
            className="w-full h-auto rounded shadow-lg image-3d"
          />
        </div>
      </div>
    </div>
  );
};

export default HowToBook;





