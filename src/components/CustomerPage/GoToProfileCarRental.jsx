import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GoToProfileCarRental.css";

export default function GoToProfileCarRental() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "Jane Smith",
    dob: "1990-04-15",
    contactNo: "555-123-4567",
    gender: "Female",
    email: "jane.smith@example.com",
    carDetails: {
      model: "Toyota Camry",
      name: "Camry",
      yearOfManufacturing: 2020,
      mileage: "15,000 miles",
      fuelType: "Petrol",
      transmissionType: "Automatic",
      carNumber:"TN82 5343"

    },
    rentalDuration: {
      startDate: "10-09-2024",
      startTime: "09:00 AM",
      endDate: "15-09-2024",
      endTime: "05:00 PM",
    },
  });

  const logOut = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      alert("Successfully Logging out...");  
      navigate("/");
    }
  }


  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="profile-card bg-white shadow-lg overflow-hidden" style={{ width: '50%' }}>
        <div className="profile-header bg-blue-500 p-6 text-white flex items-center">
          <img
            src="/path-to-user-avatar.png"
            alt="User photo"
            className="w-24 h-24 rounded-full border-4 border-white text-center"
          />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{userDetails.name}</h2>
            <p>{userDetails.gender}</p>
          </div>
        </div>

        <div className="p-6">
          {/* Personal Information Section */}
          <div className="text-center text-2xl font-semibold text-gray-800 mb-4">
            Personal Informati  on
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex p-4 bg-gray-100 rounded-lg detail-item items-center flex p-4 bg-gray-100 rounded-lg detail-item items-center transform transition-transform duration-300 ">
              <span className="text-gray-700 text-lg w-1/3"><strong>Name:</strong></span>
              <span className="text-gray-700 text-lg w-2/3">{userDetails.name}</span>
            </div>
            <div className="flex p-4 bg-gray-100 rounded-lg detail-item items-center flex p-4 bg-gray-100 rounded-lg detail-item items-center transform transition-transform duration-300 ">
              <span className="text-gray-700 text-lg w-1/3"><strong>Date of Birth:</strong></span>
              <span className="text-gray-700 text-lg w-2/3">{userDetails.dob}</span>
            </div>
            <div className="flex p-4 bg-gray-100 rounded-lg detail-item items-center flex p-4 bg-gray-100 rounded-lg detail-item items-center transform transition-transform duration-300 ">
              <span className="text-gray-700 text-lg w-1/3"><strong>Contact No:</strong></span>
              <span className="text-gray-700 text-lg w-2/3">{userDetails.contactNo}</span>
            </div>
            <div className="flex p-4 bg-gray-100 rounded-lg detail-item items-center flex p-4 bg-gray-100 rounded-lg detail-item items-center transform transition-transform duration-300 ">
              <span className="text-gray-700 text-lg w-1/3"><strong>Gender:</strong></span>
              <span className="text-gray-700 text-lg w-2/3">{userDetails.gender}</span>
            </div>
            <div className="flex p-4 bg-gray-100 rounded-lg detail-item items-center flex p-4 bg-gray-100 rounded-lg detail-item items-center transform transition-transform duration-300">
              <span className="text-gray-700 text-lg w-1/3"><strong>Email:</strong></span>
              <span className="text-gray-700 text-lg w-2/3">{userDetails.email}</span>
            </div>
          </div>


          {/* Car Information Section */}
          <div className="mt-6 text-center text-2xl font-semibold text-gray-800 mb-4">
            Car Information
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex p-4 bg-gray-100 rounded-lg detail-item items-center transform transition-transform duration-300 ">
              <span className="text-gray-700 text-lg w-1/3"><strong>Car Model:</strong></span>
              <span className="text-gray-700 text-lg w-2/3">{userDetails.carDetails.model}</span>
            </div>
            <div className="flex p-4 bg-gray-100 rounded-lg detail-item items-center transform transition-transform duration-300">
              <span className="text-gray-700 text-lg w-1/3"><strong>Car Name:</strong></span>
              <span className="text-gray-700 text-lg w-2/3">{userDetails.carDetails.name}</span>
            </div>
            <div className="flex p-4 bg-gray-100 rounded-lg detail-item items-center transform transition-transform duration-300">
              <span className="text-gray-700 text-lg w-1/3"><strong>Year of Manufacturing:</strong></span>
              <span className="text-gray-700 text-lg w-2/3">{userDetails.carDetails.yearOfManufacturing}</span>
            </div>
            <div className="flex p-4 bg-gray-100 rounded-lg detail-item items-center transform transition-transform duration-300 ">
              <span className="text-gray-700 text-lg w-1/3"><strong>Mileage:</strong></span>
              <span className="text-gray-700 text-lg w-2/3">{userDetails.carDetails.mileage}</span>
            </div>
            <div className="flex p-4 bg-gray-100 rounded-lg detail-item items-center transform transition-transform duration-300 ">
              <span className="text-gray-700 text-lg w-1/3"><strong>Fuel Type:</strong></span>
              <span className="text-gray-700 text-lg w-2/3">{userDetails.carDetails.fuelType}</span>
            </div>
            <div className="flex p-4 bg-gray-100 rounded-lg detail-item items-center transform transition-transform duration-300 ">
              <span className="text-gray-700 text-lg w-1/3"><strong>Transmission Type:</strong></span>
              <span className="text-gray-700 text-lg w-2/3">{userDetails.carDetails.transmissionType}</span>
            </div>
            <div className="flex p-4 bg-gray-100 rounded-lg detail-item items-center transform transition-transform duration-300">
              <span className="text-gray-700 text-lg w-1/3"><strong>Vehicle Registration No:</strong></span>
              <span className="text-gray-700 text-lg w-2/3">{userDetails.carDetails.carNumber}</span>
            </div>
          </div>
          




          {/* Rental Duration Section */}
          <div className="mt-6 text-center text-2xl font-semibold text-gray-800 mb-4">
              Rental Duration
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col p-4 bg-gray-100 rounded-lg detail-item transform transition-transform duration-300 ">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 text-lg w-1/3"><strong>Start Date:</strong></span>
                  <span className="text-gray-700 text-lg w-2/3">{userDetails.rentalDuration.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 text-lg w-1/3"><strong>Start Time:</strong></span>
                  <span className="text-gray-700 text-lg w-2/3">{userDetails.rentalDuration.startTime}</span>
                </div>
              </div>
              <div className="flex flex-col p-4 bg-gray-100 rounded-lg detail-item transform transition-transform duration-300">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 text-lg w-1/3"><strong>End Date:</strong></span>
                  <span className="text-gray-700 text-lg w-2/3">{userDetails.rentalDuration.endDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 text-lg w-1/3"><strong>End Time:</strong></span>
                  <span className="text-gray-700 text-lg w-2/3">{userDetails.rentalDuration.endTime}</span>
                </div>
              </div>
          </div>


        </div>
        <div className="footer-btn">
        <button className="flex items-center bg-red-500 font-semibold text-white px-4 py-2 rounded text-lg hover:bg-red-600" onClick={logOut}>
        LOGOUT
        </button>
        </div>
      </div>
    </div>
  );
}
