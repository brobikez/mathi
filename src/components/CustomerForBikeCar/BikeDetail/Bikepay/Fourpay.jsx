import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const PaymentDetails = () => {
  const navigate = useNavigate();

  // Default values
  const distanceTraveled = 15; // in kilometers
  const rideTime = 30; // in minutes
  const ratePerKm = 10; // Rate per kilometer
  const ratePerMin = 2; // Rate per minute
  const discount = 5; // Discount amount
  const waitingCharge = 3; // Waiting charge

  // Calculate bill amount and ride earnings
  const initialBillAmount = (distanceTraveled * ratePerKm) + (rideTime * ratePerMin);
  const totalBillAmount = initialBillAmount + waitingCharge - discount;

  // Button state
  const [buttonText, setButtonText] = useState("PAID");

  const handlePayment = () => {
    if (buttonText === "PAID") {           
      setButtonText("Successfully received");
      alert("Successfully received");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-center mb-6 font-bold text-xl md:text-2xl">Payment Details</h2>
      
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto border border-gray-500 rounded-md p-6 md:p-10 bg-gray-100"> 
        
        <div className="flex text-base md:text-lg text-gray-800 mb-4">
          <span className="w-1/2"><strong>Distance Traveled:</strong></span>
          <span className="text-gray-700 w-1/2">{distanceTraveled} km</span>
        </div>
        
        <div className="flex text-base md:text-lg text-gray-800 mb-4">
          <span className="w-1/2"><strong>Ride Time:</strong></span>
          <span className="text-gray-700 w-1/2">{rideTime} minutes</span>
        </div>
        
        <div className="flex text-base md:text-lg text-gray-800 mb-4">
          <span className="w-1/2"><strong>Rate per Kilometer:</strong></span>  
          <span className="text-gray-700 w-1/2">Rs. {ratePerKm}</span>
        </div> 
        
        <div className="flex text-base md:text-lg text-gray-800 mb-4">
          <span className="w-1/2"><strong>Rate per Minute:</strong></span>
          <span className="text-gray-700 w-1/2">Rs. {ratePerMin}</span>
        </div>
        
        <div className="flex text-base md:text-lg text-gray-800 mb-4">
          <span className="w-1/2"><strong>Discount:</strong></span>
          <span className="text-gray-700 w-1/2">Rs. {discount.toFixed(2)}</span>
        </div>
        
        <div className="flex text-base md:text-lg text-gray-800 mb-4">
          <span className="w-1/2"><strong>Waiting Charge:</strong></span>
          <span className="text-gray-700 w-1/2">Rs. {waitingCharge.toFixed(2)}</span>
        </div>  
        
        <div className="flex text-base md:text-lg text-gray-800 mb-4">
          <span className="w-1/2"><strong>Bill Amount:</strong></span>
          <span className="text-gray-700 w-1/2">Rs. {totalBillAmount.toFixed(2)}</span>
        </div>

        <div className="flex text-base md:text-lg text-gray-800 mb-4">  
          <span className="w-1/2"><strong>Payment type:</strong></span>
          <div className="w-1/2 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                id="cash"
                name="paymenttype"
                value="paymenttypecash"
                className="form-radio h-6 w-6 text-blue-600 border-gray-300 mr-2"
              />
              <span className="text-gray-700 flex text-base md:text-lg">Cash</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                id="online"
                name="paymenttype"
                value="paymenttypeonline"
                className="form-radio h-6 w-6 text-blue-600 border-gray-300 mr-2"
              />
              <span className="text-gray-700 flex text-base md:text-lg">Online payment</span>
            </label>
          </div>
        </div>

        <div className="text-center mt-6">
          <strong className="block text-2xl md:text-3xl font-bold pb-3">TOTAL</strong>
          <span className="block text-4xl md:text-5xl text-orange-600 font-bold">
            ₹ {totalBillAmount.toFixed(2)}
          </span>
        </div>

        <div className="text-center">
          <button
            className="mt-6 py-2 px-4 bg-fuchsia-900 hover:bg-fuchsia-900 text-white font-semibold rounded-md transition-all w-1/2"
            onClick={handlePayment}
          >
            {buttonText}
          </button>
        </div>

       
        
      </div>
    </div>
  );
};

export default PaymentDetails;