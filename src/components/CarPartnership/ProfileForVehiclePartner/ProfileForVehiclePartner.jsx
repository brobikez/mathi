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

const ProfileForVehiclePartner = () => {
  const [activeSection, setActiveSection] = useState('livelocation'); // Default active section
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle modal visibility

  // Function to handle section click
  const handleSectionClick = (section) => {
    setActiveSection(section); // Update active section
    setIsModalOpen(false); // Close the modal when a section is clicked
  };

  // Function to open/close the modal
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* Button to toggle modal on mobile */}
      <div className="md:hidden mb-4">
        <button
          onClick={toggleModal}
          className="p-2 bg-blue-500 text-white rounded-md">
          Open Menu
        </button>
      </div>

      {/* Left Sidebar with Titles, hidden on desktop and shown as modal on mobile */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="w-3/4 bg-white p-2 ">
            <ProfileForVehiclePartnerTitle onSectionClick={handleSectionClick} />
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-white font-bold text-lg">
              X
            </button>
          </div>
        </div>
      )}

      {/* Left Sidebar with Titles on medium and above screens */}
      <div className="hidden md:block w-1/4 h-full">
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
