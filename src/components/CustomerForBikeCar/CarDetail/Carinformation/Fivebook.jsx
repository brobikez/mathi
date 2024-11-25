import React, { useState } from 'react';
import './booking.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom';

function RentalForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    date: '',
    endDate: '', // New state for end date
    phone: '',
    gender: '',
    address: '',
    aadharId: '',
    panId: '',
    voterId: '',
    aadharFile: null,
    panFile: null,
    voterFile: null,
    rentalType: '', // To store the type of rental (car rental or self-driving)
    licenseNumber: '',
    licenseExpiryDate: '',
    experienceYears: '',
    bendingCaseDetails: '',
    startDestination: '', // New state for start destination
    endDestination: '', // New state for end destination
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file upload
  const handleFileChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.files[0], // Set the selected file
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add logic to handle file uploads here
  };

  // Trigger file input click
  const triggerFileInput = (inputRef) => {
    inputRef.current.click();
  };

  const aadharFileInputRef = React.createRef();
  const panFileInputRef = React.createRef();
  const voterFileInputRef = React.createRef();

  return (
    <div className="form-container">
      <h2 className="form-heading">Rental Form</h2>

      <h3 className="section-heading">Rental Type</h3>
      <div className="form-group">
        <label htmlFor="rentalType">Choose Rental Type:</label>
        <select
          id="rentalType"
          name="rentalType"
          value={formData.rentalType}
          onChange={handleChange}
          required
        >
          <option value="">Select Rental Type</option>
          <option value="carRental">Car Rental</option>
          <option value="selfDriving">Car Rental with Self Driving</option>
        </select>
      </div>

      <h3 className="section-heading">Personal Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Start Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate" // Changed name to endDate
            value={formData.endDate} // Changed value to formData.endDate
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDestination">Start Destination:</label>
          <input
            type="text"
            id="startDestination"
            name="startDestination"
            value={formData.startDestination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDestination">End Destination:</label>
          <input
            type="text"
            id="endDestination"
            name="endDestination"
            value={formData.endDestination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="gender-label">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <h3 className="section-heading">Proof to be Uploaded</h3>
        <div className="form-group">
          <label htmlFor="aadharId">Aadhar ID:</label>
          <input
            type="text"
            id="aadharId"
            name="aadharId"
            value={formData.aadharId}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            ref={aadharFileInputRef}
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(e, 'aadharFile')}
          />
          <button 
            type="button" 
            className="upload-button" 
            onClick={() => triggerFileInput(aadharFileInputRef)}
          >
            Upload
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="panId">PAN ID:</label>
          <input
            type="text"
            id="panId"
            name="panId"
            value={formData.panId}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            ref={panFileInputRef}
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(e, 'panFile')}
          />
          <button 
            type="button" 
            className="upload-button" 
            onClick={() => triggerFileInput(panFileInputRef)}
          >
            Upload
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="voterId">Voter ID:</label>
          <input
            type="text"
            id="voterId"
            name="voterId"
            value={formData.voterId}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            ref={voterFileInputRef}
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(e, 'voterFile')}
          />
          <button 
            type="button" 
            className="upload-button" 
            onClick={() => triggerFileInput(voterFileInputRef)}
          >
            Upload
          </button>
        </div>

        {formData.rentalType === 'selfDriving' && (
          <div>
            <h3 className="section-heading">License Information</h3>
            <div className="form-group">
              <label htmlFor="licenseNumber">License Number:</label>
              <input
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="licenseExpiryDate">License Expiry Date:</label>
              <input
                type="date"
                id="licenseExpiryDate"
                name="licenseExpiryDate"
                value={formData.licenseExpiryDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="experienceYears">Years of Experience:</label>
              <input
                type="number"
                id="experienceYears"
                name="experienceYears"
                value={formData.experienceYears}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bendingCaseDetails">Bending Case Details:</label>
              <textarea
                id="bendingCaseDetails"
                name="bendingCaseDetails"
                value={formData.bendingCaseDetails}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}
        <Link to="/fivesubmit">
          <div className='flex justify-center'>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </Link>
      </form>
    </div>
  );
}

export default RentalForm;
