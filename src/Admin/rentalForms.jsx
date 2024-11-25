import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RentalForm() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hostName: '',
    rcBook: null,
    aadharCard: null,
    drivingLicense: null,
    addressProof: null,
    phone: '',
    email: '',
    bikeBrand: '',
    bikeModel: '',
    bikeYear: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/admin')
  };

  return (
    <div className=" bg-gray-100 mx-auto min-h-screen container mx-auto rounded-xl p-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hostName">
            Host Name:
          </label>
          <input
            type="text"
            placeholder='Host Name'
            id="hostName"
            name="hostName"
            value={formData.hostName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rcBook">
            RC Book:
          </label>
          <input
            type="file"
            id="rcBook"
            name="rcBook"
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            accept=".pdf, .jpg, .png"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aadharCard">
            Aadhar Card:
          </label>
          <input
            type="file"
            id="aadharCard"
            name="aadharCard"
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            accept=".pdf, .jpg, .png"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="drivingLicense">
            Driving License:
          </label>
          <input
            type="file"
            id="drivingLicense"
            name="drivingLicense"
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            accept=".pdf, .jpg, .png"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addressProof">
            Address Proof:
          </label>
          <input
            type="file"
            id="addressProof"
            name="addressProof"
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            accept=".pdf, .jpg, .png"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder='Phone number'
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bikeBrand">
            Bike Brand:
          </label>
          <input
            type="text"
            id="bikeBrand"
            name="bikeBrand"
            value={formData.bikeBrand}
            onChange={handleChange}
            placeholder="Bike Brand"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bikeModel">
            Bike Model:
          </label>
          <input
            type="text"
            id="bikeModel"
            name="bikeModel"
            value={formData.bikeModel}
            placeholder="Bike Model"
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bikeYear">
            Bike Year:
          </label>
          <input
            type="number"
            id="bikeYear"
            name="bikeYear"
            placeholder='Bike Model'
            value={formData.bikeYear}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RentalForm;
