import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import "./foursubmit.css";

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
      carNumber: "TN82 5343",
    },
    rentalDuration: {
      startDate: "10-09-2024",
     
      endDate: "15-09-2024",
      
    },
  });

  const handleConfirmClick = () => {
    alert("Submitted successfully");
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <div className="profile-card shadow-lg overflow-hidden rounded-lg">
        <div className=" p-6 text-white flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOy82yDB7J2umGoJgo03iwxwDmpXTPfjzDyQ9BiiP7puTOh548G20OhHw6dfGc-LaQmrc&usqp=CAU"
            alt="User photo"
            className="w-24 h-24 rounded-full border-4 border-white text-center"
          />
          <div className="ml-4 text-black">
            <h2 className="text-2xl font-bold">{userDetails.name}</h2>
            <p>{userDetails.gender}</p>
          </div>
        </div>

        <div className="p-6">
          {/* Personal Information Section */}
          <div className="text-center text-2xl font-semibold text-gray-800 mb-4">
            Personal Information
          </div>
          <div className="grid grid-cols-1 gap-4">
            <DetailItem label="Name:" value={userDetails.name} />
            <DetailItem label="Date of Birth:" value={userDetails.dob} />
            <DetailItem label="Contact No:" value={userDetails.contactNo} />
            <DetailItem label="Gender:" value={userDetails.gender} />
            <DetailItem label="Email:" value={userDetails.email} />
          </div>

          {/* Car Information Section */}
          <div className="mt-6 text-center text-2xl font-semibold text-gray-800 mb-4">
            Car Information
          </div>
          <div className="grid grid-cols-1 gap-4">
            <DetailItem label="Car Model:" value={userDetails.carDetails.model} />
            <DetailItem label="Car Name:" value={userDetails.carDetails.name} />
            <DetailItem label="Year of Manufacturing:" value={userDetails.carDetails.yearOfManufacturing} />
            <DetailItem label="Mileage:" value={userDetails.carDetails.mileage} />
            <DetailItem label="Fuel Type:" value={userDetails.carDetails.fuelType} />
            <DetailItem label="Transmission Type:" value={userDetails.carDetails.transmissionType} />
            <DetailItem label="Vehicle Registration No:" value={userDetails.carDetails.carNumber} />
          </div>

          {/* Rental Duration Section */}
          <div className="mt-6 text-center text-2xl font-semibold text-gray-800 mb-4">
            Rental Duration
          </div>
          <div className="grid grid-cols-1 gap-4">
            <DetailItem label="Start Date:" value={userDetails.rentalDuration.startDate} />
            <DetailItem label="End Date:" value={userDetails.rentalDuration.endDate} />
          </div>
        </div>
<Link to="/fourpayment">
        <div className="p-6 flex justify-center">
          <button className="animate-buttonHover bg-fuchsia-900 text-white px-6 py-2 rounded hover:bg-orange-400 transition duration-300" onClick={handleConfirmClick}>
            Confirm 
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
}

// Helper Component for displaying detail items
const DetailItem = ({ label, value }) => (
  <div className="flex p-4 bg-gray-100 rounded-lg items-center transform transition-transform duration-300 hover:scale-105">
    <span className="text-gray-700 text-lg w-1/3"><strong>{label}</strong></span>
    <span className="text-gray-700 text-lg w-2/3">{value}</span>
  </div>
);
