import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const ProfileForVehiclePartnerTitle = ({ onSectionClick }) => {
  const navigate = useNavigate();

  const logOut = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      alert("Successfully Logging out...");
      navigate("/"); 
    }
  };

  const addvehicle = () => {
    navigate("/stepperform");
  };

  return (
    <div className="bg-orange-200 p-2 min-h-screen overflow-y-auto"> {/* Use min-h-screen for full height */}
      <Stack direction="row" spacing={2} className="items-center justify-between relative">
        <div className="flex items-center">
          <Avatar alt="Bharathi" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
          <p className="text-2xl lg:ml-2">Bharathi</p>
        </div>
      </Stack>

      <div className="py-4">
        <hr />
        <h1 className="text-center text-xl font-medium py-2">Your profile</h1>
        <h1 className="font-semibold text-lg p-2 cursor-pointer" onClick={() => onSectionClick('livelocation')}>Vehicle Live Location</h1>
        <h1 className="font-semibold text-lg p-2 cursor-pointer" onClick={() => onSectionClick('earningpoint')}>Earning Point</h1>
        <h1 className="font-semibold text-lg p-2 cursor-pointer" onClick={() => onSectionClick('rateus')}>Share your experience</h1>
        <h1 className="font-semibold text-lg p-2 cursor-pointer" onClick={() => onSectionClick('personalDetails')}>Personal Details</h1>
        <h1 className="font-semibold text-lg p-2 cursor-pointer" onClick={() => onSectionClick('vehicleDetails')}>Vehicle details</h1>
        <h1 className="font-semibold text-lg p-2 cursor-pointer" onClick={() => onSectionClick('rentalDuration')}>Rental duration</h1>
        <h1 className="font-semibold text-lg p-2 cursor-pointer" onClick={() => onSectionClick('paymentDetails')}>Payment details</h1>
        <h1 className="font-semibold text-lg p-2 cursor-pointer" onClick={() => onSectionClick('faq')}>FAQ</h1>
        <h1 className="font-semibold text-lg p-2 cursor-pointer" onClick={() => onSectionClick('advantageofpartnership')}>Advantages of a Partnership</h1>
        <h1 className="font-semibold text-lg p-2 cursor-pointer" onClick={() => onSectionClick('notificationSettings')}>Notification setting</h1>
        <h1 className="font-semibold text-lg p-2 cursor-pointer" onClick={addvehicle}>Adding another Vehicle</h1>
        <h1 className="font-semibold text-lg p-2 cursor-pointer" onClick={() => onSectionClick('security')}>Password & Security</h1>
        <h1 className="font-semibold text-lg p-2 cursor-pointer" onClick={() => onSectionClick('customerService')}>Customer Service</h1>

        {/* Logout Button */}
        <h1 
          className="text-red-600 text-lg text-center font-medium p-2 cursor-pointer" 
          onClick={logOut}
        >
          Logout
        </h1>
      </div>
    </div>
  );
};

export default ProfileForVehiclePartnerTitle;
