import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { Link } from 'react-router-dom';
import { faIdCard, faFileAlt, faBank, faMotorcycle, faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BikeDriverSignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    contactNumber: '',
    gender: '',
    email: '',
    photo: null,
    idProof: null,
    backgroundCheck: null,
    bankAccountNumber: '',
    ifscCode: '',
    bankName: '',
    bankBranch: '',
    availableBikes: '',
    backgroundCheckStatus: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const bikes = [
    { id: 1, name: 'Bike A' },
    { id: 2, name: 'Bike B' },
    { id: 3, name: 'Bike C' },
  ];

  return (
    <div className="container mx-auto p-4 bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold hover:text-purple-500 hover:scale-105 transition-transform">
            <FontAwesomeIcon icon={faMotorcycle} className="mr-2" />
            Personal Information
          </h3>
        </div>

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
            <FontAwesomeIcon icon={faMotorcycle} className="mr-2" />
            Available Bikes
          </h3>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Select Your Bike:</label>
          <select
            name="availableBikes"
            className="w-full border px-3 py-2 rounded"
            value={formData.availableBikes}
            onChange={handleInputChange}
          >
            <option value="">Select Bike</option>
            {bikes.map((bike) => (
              <option key={bike.id} value={bike.name}>{bike.name}</option>
            ))}
          </select>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold hover:text-purple-500 hover:scale-105 transition-transform">
            <FontAwesomeIcon icon={faMotorcycle} className="mr-2" />
            Selection Process
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-orange-500 transition-transform">
            <h4 className="text-lg font-semibold mb-2">
              <FontAwesomeIcon icon={faIdCard} className="mr-2" />
              Identity Proof
            </h4>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Aadhar Card:</label>
              <input
                type="file"
                name="idProof"
                className="w-full border px-3 py-2 rounded"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">PAN Card:</label>
              <input
                type="file"
                name="idProof"
                className="w-full border px-3 py-2 rounded"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Voter ID:</label>
              <input
                type="file"
                name="idProof"
                className="w-full border px-3 py-2 rounded"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Driving License:</label>
              <input
                type="file"
                name="idProof"
                className="w-full border px-3 py-2 rounded"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="border p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-orange-500 transition-transform">
            <h4 className="text-lg font-semibold mb-2">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              Background Check
            </h4>
            <p className="mb-2">Have you been involved in any case before?</p>
            <select
              name="backgroundCheckStatus"
              className="w-full border px-3 py-2 rounded mb-4"
              value={formData.backgroundCheckStatus}
              onChange={handleInputChange}
            >
              <option value="">Select Option</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            {formData.backgroundCheckStatus === 'yes' && (
              <div>
                <label className="block text-sm font-medium mb-1">Upload Document:</label>
                <input
                  type="file"
                  name="backgroundCheck"
                  className="w-full border px-3 py-2 rounded"
                  onChange={handleFileChange}
                />
              </div>
            )}
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

        <div className="text-center mt-6">
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            Submit
          </button>
        </div>
        <div className="gotoprofile text-center p-5">
        <Link to="/gotoprofilebikerentalwithselfdriving" className='text-sky-600 underline '>
        <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
        Go to Profile</Link>
        </div>
      
      </form>
    </div>
  );
}; 

export default BikeDriverSignupPage;