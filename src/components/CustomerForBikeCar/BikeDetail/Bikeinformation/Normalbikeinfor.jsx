import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './normalbikeinfor.css';

const CarSelector = () => {
  const [selectedCar, setSelectedCar] = useState('');
  const [carImages, setCarImages] = useState([]);
  const [selectedCarIndex, setSelectedCarIndex] = useState(null); // To track selected image index

  // Updated car data with mileage for each car
  const carData = {
    honda: [
      { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVHrvwmUcBOLEkfOkHXvzrjvUmG73P-MELA&s', mileage: '25 km/l' },
      { imgSrc: 'https://tse3.mm.bing.net/th/id/OIP.uEafj8ZH3TFJMgpZ8lYY4AHaFj?w=270&h=203&c=7&r=0&o=5&pid=1.7', mileage: '24 km/l' },
      { imgSrc: 'https://tse4.mm.bing.net/th/id/OIP.mA8FrTEap1m2sDOLC6sNLQHaE0?w=243&h=180&c=7&r=0&o=5&pid=1.7', mileage: '26 km/l' },
      { imgSrc: 'https://tse3.mm.bing.net/th/id/OIP.Ok1yj2BnrqpSDDD2taiTOgAAAA?w=279&h=180&c=7&r=0&o=5&pid=1.7', mileage: '23 km/l' }
    ],
    bajaj: [
      { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOKcd-5kXQYt7cZeDGghpVu9iS36RAYy4yw&s', mileage: '20 km/l' },
      { imgSrc: 'https://tse2.mm.bing.net/th/id/OIP.7eXxxQoaQWB690oMlOeQZQHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7', mileage: '21 km/l' },
      { imgSrc: 'https://tse4.mm.bing.net/th/id/OIP.QUyiWyVt30OA2sGRJ4zBtwHaGg?w=186&h=180&c=7&r=0&o=5&pid=1.7', mileage: '22 km/l' },
      { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOKcd-5kXQYt7cZeDGghpVu9iS36RAYy4yw&s', mileage: '19 km/l' }
    ],
    tvs: [
      { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ8G7BBHSmniQeLpr74_e1CykapculK9lbg&s', mileage: '18 km/l' },
      { imgSrc: 'https://tse3.mm.bing.net/th/id/OIP.Ok1yj2BnrqpSDDD2taiTOgAAAA?w=279&h=180&c=7&r=0&o=5&pid=1.7', mileage: '17 km/l' },
      { imgSrc: 'https://tse4.mm.bing.net/th/id/OIP.mA8FrTEap1m2sDOLC6sNLQHaE0?w=243&h=180&c=7&r=0&o=5&pid=1.7', mileage: '20 km/l' },
      { imgSrc: 'https://tse4.mm.bing.net/th/id/OIP.vwXVlFFNacl1NUTtFx7tfgAAAA?w=282&h=180&c=7&r=0&o=5&pid=1.7', mileage: '19 km/l' }
    ],
    splendor: [
      { imgSrc: 'http://ts4.mm.bing.net/th?id=OIP.CTqdjKqAFX471z9uaqwNhAAAAA&pid=15.1', mileage: '26 km/l' },
      { imgSrc: 'https://tse2.mm.bing.net/th/id/OIP.J0comWaIPR8HRHmUQcEh9QAAAA?w=279&h=180&c=7&r=0&o=5&pid=1.7', mileage: '25 km/l' },
      { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g93UAas3zZoJcqClLQNsCtQiVMzfGKGy7A&s', mileage: '27 km/l' },
      { imgSrc: 'https://tse2.mm.bing.net/th/id/OIP.LDkL77YVdwGsW4tn-c3BrwHaEK?w=301&h=180&c=7&r=0&o=5&pid=1.7', mileage: '28 km/l' }
    ]
  };

  const handleCarSelect = (event) => {
    const selected = event.target.value;
    setSelectedCar(selected);

    if (selected && carData[selected]) {
      setCarImages(carData[selected]);
      setSelectedCarIndex(null); // Reset selected car index when changing car type
    } else {
      setCarImages([]);
    }
  };

  const handleSelectCar = (index) => {
    setSelectedCarIndex(index);
  };

  return (
    <div className='h-screen'>
      <div  style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Bold "Available Car" and dropdown centered */}
      <label htmlFor="car-select" style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>
        Available Bike:
      </label>
      <select 
        id="car-select" 
        onChange={handleCarSelect} 
        style={{ padding: '10px', marginBottom: '20px', fontSize: '16px', width: '200px' }}
      >
        <option value="">-- Select a Bike --</option>
        <option value="honda">Honda</option>
        <option value="bajaj">Bajaj </option>
        <option value="tvs">TVS</option>
        <option value="splendor">Splendor</option>
      </select>

      {carImages.length > 0 && (
        <div className="car-cards" style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {carImages.map((car, index) => (
            <div
              className="car-card-container"
              key={index}
              style={{
                width: '300px',
                textAlign: 'center',
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '20px',
                backgroundColor: selectedCarIndex === index ? '#e0ffe0' : 'white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s',
                display: 'flex', /* Flex layout for each card */
                flexDirection: 'column', /* Stack elements vertically */
                alignItems: 'center' /* Align the button and image in the center */
              }}
            >
              <img
                src={car.imgSrc}
                alt={`Car Image ${index + 1}`}
                style={{ width: '100%', height: '200px', borderRadius: '5px' }}
                className='car-card'
              />
              <div style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>
                Mileage: {car.mileage}
              </div>

              {/* Add Select Car Button aligned below image */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', width: '100%' }}>
                <button
                  className="select-btn bg-fuchsia-900"
                  style={{
                    padding: '12px',
                    backgroundColor: selectedCarIndex === index ? '#4CAF50' : '', /* Remove inline background color */
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: '100%', /* Ensure the button takes full width of the card */
                  }}
                  onClick={() => handleSelectCar(index)}
                >
                  {selectedCarIndex === index ? 'Selected' : 'Select Bike'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Confirmation Button */}
      <Link to="/fourbikebook">
        <div className="confirm-booking-container text-center" style={{ marginTop: '20px' }}>
          <button className="confirm-your-booking-button" style={{
            padding: '12px 20px',
            backgroundColor: 'fuchsia-900', /* Update background color */
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            Confirm Your Booking
          </button>
        </div>
      </Link>
    </div>
    </div>
    
  );
};

export default CarSelector;
