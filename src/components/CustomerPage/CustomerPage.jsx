import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCircleInfo, faCalendarTimes, faBank, faCableCar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const DriverSignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    contactNumber: '',
    gender: '',
    email: '',
    photo: null,
    photoURL: '',
    carModel: '',
    carName: '',
    yearOfManufacturing: '',
    mileage: '',
    fuelType: '',
    transmissionType: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    bankAccountNumber: '',
    ifscCode: '',
    bankName: '',
    bankBranch: '',
    availableCars: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'photo' && files[0]) {
      const photoURL = URL.createObjectURL(files[0]);
      setFormData({ ...formData, [name]: files[0], photoURL });
    } else {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleSubmit = (e) => {        
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-8/1 p-6 flex items-center justify-center">
        <img 
          src="https://static.timesofisrael.com/www/uploads/2014/06/eldan_635x357-1024x640.jpg" 
          alt="Car"
          className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        />
      </div>
      
      <div className="md:w-2/3 p-6">
        <form className="bg-transparent p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold hover:text-purple-500 hover:scale-105 transition-transform">Personal Information</h3>
          </div>

          {formData.photoURL && (
            <div className="text-center mb-6">
              <img src={formData.photoURL} alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name:</label>
              <input
                type="text"
                name="name"
                className="w-full border px-3 py-2 rounded"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth:</label>
              <input
                type="date"
                name="dob"
                className="w-full border px-3 py-2 rounded"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Contact Number:</label>
              <input
                type="text"
                name="contactNumber"
                className="w-full border px-3 py-2 rounded"
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Gender:</label>
              <select
                name="gender"
                className="w-full border px-3 py-2 rounded"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email:</label>
              <input
                type="email"
                name="email"
                className="w-full border px-3 py-2 rounded"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Photo:</label>
              <input
                type="file"
                name="photo"
                className="w-full border px-3 py-2 rounded"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold hover:text-purple-500 hover:scale-105 transition-transform">
              Car Information
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-orange-500 transition-transform">
              <h4 className="text-lg font-semibold mb-2">
                <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
                Car Information
              </h4>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Car Model:</label>
                <input
                  type="text"
                  name="carModel"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.carModel}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Car Name:</label>
                <input
                  type="text"
                  name="carName"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.carName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Year of Manufacturing:</label>
                <input
                  type="text"
                  name="yearOfManufacturing"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.yearOfManufacturing}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Mileage:</label>
                <input
                  type="text"
                  name="mileage"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.mileage}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Fuel Type:</label>
                <input
                  type="text"
                  name="fuelType"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.fuelType}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Transmission Type:</label>
                <input
                  type="text"
                  name="transmissionType"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.transmissionType}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="border p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-orange-500 transition-transform">
              <h4 className="text-lg font-semibold mb-2">
                <FontAwesomeIcon icon={faCalendarTimes} className="mr-2" />
                Rental Duration
              </h4>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Start Date:</label>
                <input
                  type="date"
                  name="startDate"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Start Time:</label>
                <input
                  type="time"
                  name="startTime"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.startTime}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">End Date:</label>
                <input
                  type="date"
                  name="endDate"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">End Time:</label>
                <input
                  type="time"
                  name="endTime"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.endTime}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="border p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-orange-500 transition-transform">
              <h4 className="text-lg font-semibold mb-2">
                <FontAwesomeIcon icon={faBank} className="mr-2" />
                Bank Details
              </h4>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Bank Account Number:</label>
                <input
                  type="text"
                  name="bankAccountNumber"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.bankAccountNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">IFSC Code:</label>
                <input
                  type="text"
                  name="ifscCode"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Bank Name:</label>
                <input
                  type="text"
                  name="bankName"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.bankName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Bank Branch:</label>
                <input
                  type="text"
                  name="bankBranch"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.bankBranch}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold hover:text-purple-500 hover:scale-105 transition-transform">Available Cars</h3>
          </div>

          <div className="mb-6">
            <select
              name="availableCars"
              className="w-full border px-3 py-2 rounded"
              value={formData.availableCars}
              onChange={handleInputChange}
            >
              <option value="">Select Car</option>
              <option value="car1">Car 1</option>
              <option value="car2">Car 2</option>
              <option value="car3">Car 3</option>
            </select>
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg transition-transform"
            >
              Submit
            </button>
          </div>
          <div className="gotoprofile text-center p-5">
        <Link to="/gotoprofilecar" className='text-sky-600 underline '>
        <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
        Go to Profile</Link>
        </div>
      
        </form>
      </div>
    </div>
  );
};

export default DriverSignupPage;

