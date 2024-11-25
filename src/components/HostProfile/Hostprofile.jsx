import React, { useState } from "react";
import { FaTrophy, FaStar, FaMedal } from "react-icons/fa";
import "./Hostprofile.css";
import { Link } from "react-router-dom";

export default function CustomerProfile() {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    gender: "Male",
    mobile: "123-456-7890",
    emergencyContact: "987-654-3210",
    coins: 100,
    paymentMethods: [
      { type: "Credit Card", lastFour: "1234" },
      { type: "PayPal", email: "john.doe@example.com" },
    ],
    recentRides: [
      { destination: "Downtown", date: "2024-08-25", status: "Completed" },
      { destination: "Airport", date: "2024-08-20", status: "Pending" },
    ],
    email: "john.doe@example.com",
    currentLocation: "Example Location",
    achievements: [
      {
        title: "First Ride",
        progress: 100,
        icon: <FaTrophy className="text-yellow-500" />,
      },
      {
        title: "Five Rides",
        progress: 80,
        icon: <FaStar className="text-yellow-400" />,
      },
      {
        title: "Referral Bonus",
        progress: 50,
        icon: <FaMedal className="text-blue-500" />,
      },
    ],
    upcomingTrips: [
      { destination: "Museum", date: "2024-09-05", time: "10:00 AM" },
      { destination: "Conference", date: "2024-09-07", time: "2:00 PM" },
    ],
    mileage: 250,
    reimbursementRate: 0.5,
  });

  const totalReimbursement = userDetails.mileage * userDetails.reimbursementRate;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="profile-card bg-white shadow-xl rounded-3xl overflow-hidden w-full max-w-2xl animate-pageLoad transition-all">
        <div className="profile-header bg-gradient-to-r from-blue-500 to-purple-600 animate-slideIn transition-all">
          <div className="flex items-center">
            <img
              src="/path-to-user-avatar.png"
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-4 border-white animate-popIn hover:animate-avatarHover transition-all"
            />
            <div className="ml-4 text-white">
              <h2 className="text-3xl font-bold animate-fadeInLeft hover:animate-textHover transition-all">
                {userDetails.name}
              </h2>
              <p className="text-lg animate-fadeInLeft hover:animate-textHover transition-all">
                {userDetails.gender}
              </p>
            </div>
          </div>
          <div
            id="coinCount"
            className="text-white text-4xl font-bold coin-container animate-coin3D hover:animate-coinHover transition-all cursor-pointer"
            onClick={() =>
              setUserDetails((prevDetails) => ({
                ...prevDetails,
                coins: prevDetails.coins + 10,
              }))
            }
          >
            <div className="coin-3d">
              <div className="coin-front">{userDetails.coins} Coins</div>
              <div className="coin-back">+10 Coins</div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white animate-sectionLoad transition-all">
          <div className="text-center text-3xl font-bold text-gray-800 mb-6 animate-fadeInUp">
            Profile Details
          </div>
          <div className="grid grid-cols-1 gap-4 animate-fadeInUp">
            <div className="p-4 bg-gray-100 rounded-xl hover:animate-cardDetailHover transition-all">
              <p className="text-gray-600">
                <strong>Mobile:</strong> {userDetails.mobile}
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl hover:animate-cardDetailHover transition-all">
              <p className="text-gray-600">
                <strong>Emergency Contact:</strong> {userDetails.emergencyContact}
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl hover:animate-cardDetailHover transition-all">
              <p className="text-gray-600">
                <strong>Email:</strong> {userDetails.email}
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl hover:animate-cardDetailHover transition-all">
              <p className="text-gray-600">
                <strong>Current Location:</strong> {userDetails.currentLocation}
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl hover:animate-cardDetailHover transition-all">
              <p className="text-gray-600">
                <strong>Vechical No:</strong> {userDetails.VechicalNo}
              </p>
            </div>
            <Link to="/">
                <button className="btn auth-btn purple-box">
                  Log out
                </button>
              </Link>
          </div>

          <div className="mt-6 bg-gray-100 rounded-xl p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Mileage Reimbursement</h3>
            <p className="text-gray-600 mb-4">
              You have traveled <strong>{userDetails.mileage} miles</strong>.
            </p>
            <p className="text-gray-600">
              Your total reimbursement is{" "}
              <strong>${totalReimbursement.toFixed(2)}</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
