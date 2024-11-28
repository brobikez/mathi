import React from 'react';
// import './HowToBook.css';
import Title from '../Title/Title';

const HowToBook = () => {
  return (
    <div className="container mx-auto md:p-4">
      <Title title="How to book" />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center my-12 ">
     
        <div className="p-6 rounded shadow-lg flex-1 box-shadow bg-orange-50">
          <div className="mb-4">
            <div className="flex items-center ju mb-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-lg font-bold ml-2">Select Bike</h3>
            </div>
            <p className="text-gray-800 text-lg px-2">Select your desired bike from the list.</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-lg font-bold ml-2">Rental Duration</h3>
            </div>
            <p className="text-gray-800 text-lg px-2">Choose your preferred rental duration and location.</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2 ">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-lg font-bold ml-2">Review Details</h3>
            </div>
            <p className="text-gray-800 text-lg px-2">Review the bike details, price, and benefits.</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-lg font-bold ml-2">Book Now</h3>
            </div>
            <p className="text-gray-800 text-lg px-2">Click the Book Now button to proceed.</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">5</div>
              <h3 className="text-lg font-bold ml-2">Fill Details</h3>
            </div>
            <p className="text-gray-800 text-lg px-2">Fill in your details and confirm the booking.</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8  rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">6</div>
              <h3 className="text-lg font-bold ml-2">Confirmation</h3>
            </div>
            <p className="text-gray-800 text-lg px-2">Receive a confirmation and enjoy your ride!</p>
          </div>
        </div>

      
        <div className="flex-1 mt-4 md:mt-0 md:ml-4 ">
          <img
            src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--c7031f4d-5efe-43d7-9711-74aa1d273623/manage-booking.webp"
            alt="Manage Booking"
            className="w-full h-auto rounded hover:shadow-lg hover:shadow-orange-200"
          />
        </div>
      </div>
    </div>
  );
};

export default HowToBook;





