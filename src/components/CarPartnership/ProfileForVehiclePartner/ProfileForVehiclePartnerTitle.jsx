import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const ProfileForVehiclePartnerTitle = ({ onSectionClick }) => {
  const navigate = useNavigate();
  const [profilePhoto, setProfilePhoto] = useState("");
  const [error, setError] = useState("");

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

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png"];
      if (!validTypes.includes(file.type)) {
        setError("Only .png and .jpg files are allowed");
        return;
      }
      setError("");

      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("file-upload").click();
  };

  return (
    <div className="bg-orange-200 h-screen overflow-y-auto p-2"> {/* Enable scrolling with h-screen and overflow-y-auto */}
    <div className='profiletop '>
    <Stack direction="row" spacing={2} className="items-center justify-center relative ">
        <div className="flex flex-col items-center">
          <Avatar alt="Bharathi" src={profilePhoto} sx={{ width: 56, height: 56 }} />
          <p className="text-2xl lg:ml-2">Bharathi</p>
          <p className="p-1 text-base md:text-sm lg:text-lg">bharathi@123455gmail.com</p>
        </div>
      </Stack>

      <div className="text-center mt-1">
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="file-upload"
          onChange={handlePhotoChange}
          style={{ display: "none" }}
        />
        <button
          type="button"
          className="bg-fuchsia-900 text-white p-1 px-3"
          onClick={triggerFileInput}
        >
          Edit Profile Photo
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

    </div>
      

      <div className="py-4">
        <hr className='w-full border-1 border-fuchsia-900' />
        <h1 className="text-center text-xl font-medium py-2">Your profile</h1>
        {[
          { title: 'Vehicle Live Location', key: 'livelocation' },
          { title: 'Earning Point', key: 'earningpoint' },
          { title: 'Share your experience', key: 'rateus' },
          { title: 'Personal Details', key: 'personalDetails' },
          { title: 'Vehicle details', key: 'vehicleDetails' },
          { title: 'Rental duration', key: 'rentalDuration' },
          { title: 'Payment details', key: 'paymentDetails' },
          { title: 'FAQ', key: 'faq' },
          { title: 'Advantages of a Partnership', key: 'advantageofpartnership' },
          { title: 'Notification setting', key: 'notificationSettings' },
          { title: 'Adding another Vehicle', key: addvehicle },
          { title: 'Password & Security', key: 'security' },
          { title: 'Customer Service', key: 'customerService' }
        ].map((section, index) => (
          <h1
            key={index}
            className="font-semibold text-lg p-2 cursor-pointer"
            onClick={() => onSectionClick(section.key)}
          >
            {section.title}
          </h1>
        ))}
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
