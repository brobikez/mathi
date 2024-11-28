import React, { useState } from 'react';
import ProfileForVehiclePartnerTitle from './ProfileForVehiclePartnerTitle';
import PersonalProfile from './PersonalProfile';
import VehicleProfile from './VehicleProfile';
import RentalProfile from './RentalProfile';
import PaymentProfile from './PaymentProfile';
import NotificationProfile from './NotificationProfile';
import PasswordProfile from './PasswordProfile';
import CustomerServiceProfile from './CustomerServiceProfile';
import LiveLocation from './LiveLocation';
import EarningPoint from './EarningPoint';
import RateUsProfile from './RateUsprofile';
import FaqProfile from './FaqProfile';
import AdvantageofPartnership from './AdvantageofPartnership';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { FaBars } from 'react-icons/fa';

const ProfileForVehiclePartner = () => {
  const [activeSection, setActiveSection] = useState('livelocation'); // Default active section
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle modal visibility

  const [profilePhoto, setProfilePhoto] = useState("");
  const [error, setError] = useState("");
  

  // Function to handle section click
  const handleSectionClick = (section) => {
    setActiveSection(section); // Update active section
    setIsModalOpen(false); // Close the modal when a section is clicked
  };

  // Function to open/close the modal
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
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
    <div className="flex flex-col min-h-screen md:flex-row ">
      {/* Button to toggle modal on mobile */}
      <div className="md:hidden md:mb-4 flex justify-between p-2 md:p-0 bg-fuchsia-900">
          <div className='profiletop '>
          <Stack direction="row" spacing={2} className="items-center justify-center relative" onClick={toggleModal}>
              <div className="flex flex-col px-2 items-start md:items-center">
                <Avatar alt="Bharathi" src={profilePhoto} sx={{ width: 56, height: 56 }} className='border border-fuchsia-900'/>
              </div>
            </Stack>
          </div>
          <div>
          <button
            onClick={toggleModal}
            className="p-2 text-white rounded-md ">
            <FaBars size={30} />
          </button>
          </div>
        
          
      </div>
      {/* <div className="md:hidden md:mb-4 flex justify-between py-1 pb-5 bg-orange-200">
          <div className='profiletop'>
          <Stack direction="row" spacing={2} className="items-center justify-center relative">
              <div className="flex flex-col px-2 items-start md:items-center">
                <Avatar alt="Bharathi" src={profilePhoto} sx={{ width: 56, height: 56 }} className='border border-fuchsia-900'/>
                <p className="text-2xl lg:ml-2">Bharathi</p>
                <p className=" py-1 text-base md:text-sm lg:text-lg">bharathi@123455gmail.com</p>
              </div>
            </Stack>

            <div className="md:text-center px-2 mt-1">
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
          <div>
          <button
            onClick={toggleModal}
            className="p-2 text-black rounded-md">
            <FaBars size={30} />
          </button>
          </div>
        
          
      </div> */}

      {/* Left Sidebar with Titles, hidden on desktop and shown as modal on mobile */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="w-4/5 bg-white ">
            <ProfileForVehiclePartnerTitle onSectionClick={handleSectionClick} />
            <button
              onClick={toggleModal}
              className="absolute top-4 right-6 text-white font-bold text-2xl">
              X
            </button>
          </div>
        </div>
      )}

      {/* Left Sidebar with Titles on medium and above screens */}
      <div className="hidden md:block w-1/4 md:w-1/2 lg:w-1/4 h-full">
        <ProfileForVehiclePartnerTitle onSectionClick={handleSectionClick} />
      </div>

      {/* Right Section - Dynamic Content Based on Active Section */}
      <div className="w-full md:w-3/4 flex flex-col min-h-screen">
        <div className="flex-1 overflow-y-auto p-3">
        {activeSection === 'livelocation' && (
            <LiveLocation profileTitle="Live Location" />
          )}
          {activeSection === 'earningpoint' && (
            <EarningPoint profileTitle="Earning Point" />
          )}
          {activeSection === 'rateus' && (
            <RateUsProfile profileTitle="Share your experience" />
          )}
          {activeSection === 'personalDetails' && (
            <PersonalProfile profileTitle="Personal Details" />
          )}
          {activeSection === 'vehicleDetails' && (
            <VehicleProfile profileTitle="Vehicle Details" />
          )}
          {activeSection === 'rentalDuration' && (
            <RentalProfile profileTitle="Rental Duration Details" />
          )}
          {activeSection === 'paymentDetails' && (
            <PaymentProfile profileTitle="Payment Details" />
          )}
          {activeSection === 'faq' && (
            <FaqProfile profileTitle="Frequently Asked Questions" />
          )}
          {activeSection === 'advantageofpartnership' && (
            <AdvantageofPartnership profileTitle="Advantages of Partnering with Us" />
          )}
          {activeSection === 'notificationSettings' && (
            <NotificationProfile profileTitle="Notification setting" />
          )}
          {activeSection === 'security' && (
            <PasswordProfile profileTitle="Password & Security" />
          )}
          
          {activeSection === 'customerService' && (
            <CustomerServiceProfile profileTitle="Customer Service" />
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ProfileForVehiclePartner;
