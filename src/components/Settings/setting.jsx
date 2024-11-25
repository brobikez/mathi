import React, { useState } from 'react';
import "./Settings.css";

export default function Settings() {
  // State for profile settings
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  // State for notifications
  const [notifications, setNotifications] = useState({
    emailNotifications: false,
    smsNotifications: false,
  });

  // State to control FAQ visibility
  const [showFAQ, setShowFAQ] = useState(false);

  // Handle changes for profile inputs
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle changes for notification checkboxes
  const handleNotificationChange = (e) => {
    const { id, checked } = e.target;
    setNotifications((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Data:', profile);
    console.log('Notification Settings:', notifications);
    alert('Settings updated successfully!');
  };

  // Toggle FAQ section visibility
  const handleLearnMoreClick = () => {
    setShowFAQ(!showFAQ);
  };

  return (
    <div id="settings" className="settings-container">
      <div className="settings-content p-20">
        <div className="container mx-auto p-2 bg-transparent bg-opacity-80 rounded-lg">
          <div className="flex flex-col md:flex-row items-start justify-center gap-10">
            {/* Left side: Profile and Notification Settings */}
            <div className="md:w-2/3 w-full">
              <h2 className="text-5xl font-bold mb-8 text-center text-black settings-title">Settings</h2>
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg custom-shadow transform transition-transform duration-500 hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">Profile Settings</h3>
                <p className="text-lg text-gray-700 mb-4">Update your personal information, such as your email address and phone number.</p>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={profile.fullName}
                  onChange={handleProfileChange}
                  className="w-full p-2 mb-4 bg-gray-100 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="w-full p-2 mb-4 bg-gray-100 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={profile.phoneNumber}
                  onChange={handleProfileChange}
                  className="w-full p-2 mb-4 bg-gray-100 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-60 p-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
                  >
                    Save Changes
                  </button>
                </div>
              </form>

              <div className="bg-white p-6 rounded-lg shadow-lg custom-shadow transform transition-transform duration-500 hover:scale-105 mt-8">
                <h3 className="text-2xl font-semibold text-black text-center mb-4">Notification Settings</h3>
                <p className="text-lg text-gray-700 mb-4">Choose your preferred notification options.</p>
                <div className="flex flex-col md:flex-row items-start gap-4 mb-4">
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="emailNotifications"
                      checked={notifications.emailNotifications}
                      onChange={handleNotificationChange}
                      className="mr-2"
                    />
                    <label htmlFor="emailNotifications" className="text-black">Email Notifications</label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="smsNotifications"
                      checked={notifications.smsNotifications}
                      onChange={handleNotificationChange}
                      className="mr-2"
                    />
                    <label htmlFor="smsNotifications" className="text-black">SMS Notifications</label>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-60 p-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
                  >
                    Update Notifications
                  </button>
                </div>
                <div className="text-center mt-4">
                  <button
                    type="button"
                    className="w-60 p-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
                    onClick={handleLearnMoreClick}
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Conditional FAQ Section */}
              {showFAQ && (
                <div className="faq-container mt-8">
                  <h3 className="text-2xl font-semibold text-black text-center mb-4">Frequently Asked Questions</h3>
                  <div className="faq-box custom-orange-shadow p-6 mb-4 rounded-lg">
                    <h4 className="text-xl font-semibold text-black">How do I reset my password?</h4>
                    <p className="text-lg text-black">To reset your password, go to the login page and click on "Forgot Password". Follow the instructions to reset your password via email.</p>
                  </div>
                  <div className="faq-box custom-orange-shadow p-6 mb-4 rounded-lg">
                    <h4 className="text-xl font-semibold text-black">How can I update my payment information?</h4>
                    <p className="text-lg text-black">You can update your payment information in the "Profile Settings" section by editing the payment details.</p>
                  </div>
                  <div className="faq-box custom-orange-shadow p-6 mb-4 rounded-lg">
                    <h4 className="text-xl font-semibold text-black">What should I do if I encounter an issue with my ride?</h4>
                    <p className="text-lg text-black">If you encounter any issues with your ride, please contact our support team through the "Help & Support" section in the app.</p>
                  </div>
                  <div className="faq-box custom-orange-shadow p-6 mb-4 rounded-lg">
                    <h4 className="text-xl font-semibold text-black">Can I cancel a ride after booking?</h4>
                    <p className="text-lg text-black">Yes, you can cancel a ride within a certain time frame before the scheduled pickup time. Please check the cancellation policy in the app for more details.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
