import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { Link } from 'react-router-dom';
import { faMotorcycle, faCalendarAlt, faFileAlt, faFileContract, faUser, faArrowLeft, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';


const Rental = () => {
  const [currentBox, setCurrentBox] = useState(1);
  const [formData, setFormData] = useState({
    bikeModel: '',
    bikeName: '',
    bikeYear: '',
    mileage: '',
    transmissionType: '',
    bikePhoto: null,
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    puc: null,
    insurance: null,
    rtoBook: null,
    aadharCard: null,
    termsDocument: null,
    ownerName: '',
    ownerDOB: '',
    ownerEmail: '',
    ownerContact: '',
    ownerPhoto: null
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

  const transmissionTypes = ['Manual', 'Automatic'];

  const handleNext = () => {
    if (currentBox < 5) {
      setCurrentBox(currentBox + 1);
    }
  };

  const handlePrevious = () => {
    if (currentBox > 1) {
      setCurrentBox(currentBox - 1);
    }
  };

  return (
    <div className="container mx-auto p-4 min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <form className="bg-white p-6 rounded-lg shadow-2xl max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold hover:text-purple-500 hover:scale-105 transition-transform">
            <FontAwesomeIcon icon={faMotorcycle} className="mr-2" />
            {currentBox === 1 && "Owner Information"}
            {currentBox === 2 && "Bike Information"}
            {currentBox === 3 && "Rental Duration"}
            {currentBox === 4 && "Verification"}
            {currentBox === 5 && "Terms and Conditions"}
          </h3>
        </div>

        <div className="flex justify-between mb-4">
          <button 
            type="button" 
            className={`text-2xl ${currentBox === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500'}`}
            onClick={handlePrevious}
            disabled={currentBox === 1}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button 
            type="button" 
            className={`text-2xl ${currentBox === 5 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500'}`}
            onClick={handleNext}
            disabled={currentBox === 5}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        {currentBox === 1 && (
          <div className="border p-4 rounded-lg shadow-2xl mb-4 hover:shadow-3xl hover:bg-orange-500 transition-transform dark-shadow">
            <h4 className="text-lg font-semibold mb-2">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Owner Information
            </h4>
            <div>
              <label className="block text-sm font-medium mb-1">Name:</label>
              <input
                type="text"
                name="ownerName"
                className="w-full border px-3 py-2 rounded"
                value={formData.ownerName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth:</label>
              <input
                type="date"
                name="ownerDOB"
                className="w-full border px-3 py-2 rounded"
                value={formData.ownerDOB}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email:</label>
              <input
                type="email"
                name="ownerEmail"
                className="w-full border px-3 py-2 rounded"
                value={formData.ownerEmail}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Contact Number:</label>
              <input
                type="text"
                name="ownerContact"
                className="w-full border px-3 py-2 rounded"
                value={formData.ownerContact}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Owner Photo:</label>
              <input
                type="file"
                name="ownerPhoto"
                className="w-full border px-3 py-2 rounded"
                onChange={handleFileChange}
              />
            </div>
          </div>
        )}

        {currentBox === 2 && (
          <div className="border p-4 rounded-lg shadow-2xl mb-4 hover:shadow-3xl hover:bg-orange-500 transition-transform blue-shadow">
            <h4 className="text-lg font-semibold mb-2">
              <FontAwesomeIcon icon={faMotorcycle} className="mr-2" />
              Bike Information
            </h4>
            <div>
              <label className="block text-sm font-medium mb-1">Bike Model:</label>
              <input
                type="text"
                name="bikeModel"
                className="w-full border px-3 py-2 rounded"
                value={formData.bikeModel}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Bike Name:</label>
              <input
                type="text"
                name="bikeName"
                className="w-full border px-3 py-2 rounded"
                value={formData.bikeName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Year of Manufacturing:</label>
              <input
                type="text"
                name="bikeYear"
                className="w-full border px-3 py-2 rounded"
                value={formData.bikeYear}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mileage (km/l):</label>
              <input
                type="text"
                name="mileage"
                className="w-full border px-3 py-2 rounded"
                value={formData.mileage}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Transmission Type:</label>
              <select
                name="transmissionType"
                className="w-full border px-3 py-2 rounded"
                value={formData.transmissionType}
                onChange={handleInputChange}
              >
                <option value="">Select Transmission Type</option>
                {transmissionTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Bike Photo:</label>
              <input
                type="file"
                name="bikePhoto"
                className="w-full border px-3 py-2 rounded"
                onChange={handleFileChange}
              />
            </div>
          </div>
        )}

        {currentBox === 3 && (
          <div className="border p-4 rounded-lg shadow-2xl mb-4 hover:shadow-3xl hover:bg-orange-500 transition-transform">
            <h4 className="text-lg font-semibold mb-2">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Rental Duration
            </h4>
            <div>
              <label className="block text-sm font-medium mb-1">Start Date:</label>
              <input
                type="date"
                name="startDate"
                className="w-full border px-3 py-2 rounded"
                value={formData.startDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Start Time:</label>
              <input
                type="time"
                name="startTime"
                className="w-full border px-3 py-2 rounded"
                value={formData.startTime}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Date:</label>
              <input
                type="date"
                name="endDate"
                className="w-full border px-3 py-2 rounded"
                value={formData.endDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
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
        )}

        {currentBox === 4 && (
          <div className="border p-4 rounded-lg shadow-2xl mb-4 hover:shadow-3xl hover:bg-orange-500 transition-transform">
            <h4 className="text-lg font-semibold mb-2">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              Verification
            </h4>
            <div>
              <label className="block text-sm font-medium mb-1">PUC:</label>
              <input
                type="file"
                name="puc"
                className="w-full border px-3 py-2 rounded"
                onChange={handleFileChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Insurance:</label>
              <input
                type="file"
                name="insurance"
                className="w-full border px-3 py-2 rounded"
                onChange={handleFileChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">RTO Book:</label>
              <input
                type="file"
                name="rtoBook"
                className="w-full border px-3 py-2 rounded"
                onChange={handleFileChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Aadhar Card:</label>
              <input
                type="file"
                name="aadharCard"
                className="w-full border px-3 py-2 rounded"
                onChange={handleFileChange}
              />
            </div>
          </div>
        )}

        {currentBox === 5 && (
          <div className="border p-4 rounded-lg shadow-2xl mb-4 hover:shadow-3xl hover:bg-orange-500 transition-transform">
            <h4 className="text-lg font-semibold mb-2">
              <FontAwesomeIcon icon={faFileContract} className="mr-2" />
              Terms and Conditions
            </h4>
            <div>
              <label className="block text-sm font-medium mb-1">Terms Document:</label>
              <input
                type="file"
                name="termsDocument"
                className="w-full border px-3 py-2 rounded"
                onChange={handleFileChange}
              />
            </div>
          </div>
        )}

        <div className="flex justify-center mt-4">
          {currentBox === 5 && (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded transition-transform"
            >
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Submit
            </button>
          )}
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

export default Rental;

