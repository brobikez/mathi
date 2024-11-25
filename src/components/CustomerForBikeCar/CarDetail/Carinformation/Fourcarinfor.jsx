import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FourCarinfor.css';

const CarSelector = () => {
  const [selectedCar, setSelectedCar] = useState('');
  const [carImages, setCarImages] = useState([]);
  const [selectedCarIndex, setSelectedCarIndex] = useState(null); // To track selected image index

  // Updated car data with mileage for each car
  const carData = {
    nano: [
      { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mkprlrxg6JRMBn3LwK-RrODDYxEhpl5aS3U9vrQ8Mxaiesmw2wOWZxu1i00CJgZnd2M&usqp=CAU', mileage: '40 km/l' },
      { imgSrc: 'https://tse1.mm.bing.net/th/id/OIP.-Y0zG5TP_ykYsfsBYD1GRwHaFa?w=227&h=180&c=7&r=0&o=5&pid=1.7', mileage: '40 km/l' },
      { imgSrc: 'https://tse2.mm.bing.net/th/id/OIP.uyrsoNUrmvT4WNrnGkiqcQHaE2?w=293&h=192&c=7&r=0&o=5&pid=1.7', mileage: '40 km/l' },
      { imgSrc: 'https://tse4.mm.bing.net/th/id/OIP.C57o8XzlkPwthIWNO5mPRgHaFH?w=258&h=180&c=7&r=0&o=5&pid=1.7', mileage: '40 km/l' }
    ],
    scionq: [
      { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4V0nv80Reo9Wcl8kKpiBBD8Lt9gsJvmXnCA&s', mileage: '42 km/l' },
      { imgSrc: 'https://tse3.mm.bing.net/th/id/OIP.eL9s2RxA0h4eJK79DQZqywHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7', mileage: '42 km/l' },
      { imgSrc: 'https://tse3.mm.bing.net/th/id/OIP.3wFHkKoEIb5gD9wpoh8KHwHaEb?w=314&h=188&c=7&r=0&o=5&pid=1.7', mileage: '42 km/l' },
      { imgSrc: 'https://tse2.mm.bing.net/th/id/OIP.lHhjdZNJwqswBpCMcl6iygHaE7?w=267&h=180&c=7&r=0&o=5&pid=1.7', mileage: '42 km/l' }
    ],
    toyota: [
      { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7Fnx0Fx2kOHAU9715pcAAwfJHrML3rml7Q&s', mileage: '43 km/l' },
      { imgSrc: 'https://tse1.mm.bing.net/th/id/OIP.lC0BE3BBTQ7dNB0giFUMMgHaE7?w=258&h=180&c=7&r=0&o=5&pid=1.7', mileage: '43 km/l' },
      { imgSrc: 'https://tse3.mm.bing.net/th/id/OIP.6ySRSrvBYruCdS-rBeKPNwHaFj?w=232&h=180&c=7&r=0&o=5&pid=1.7', mileage: '43 km/l' },
      { imgSrc: 'https://tse4.mm.bing.net/th/id/OIP.uf0Nwr8JxWeeATxsy8E3awHaE7?w=261&h=180&c=7&r=0&o=5&pid=1.7', mileage: '43 km/l' }
    ],
    ford: [
      { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8ZrGxeaCvpevwcZBdxsxRCe4xiWa3K_RDw&s', mileage: '42 km/l' },
      { imgSrc: 'https://tse1.mm.bing.net/th/id/OIP.6EZfc9mAZMQiP0T1x6_algHaE6?w=280&h=185&c=7&r=0&o=5&pid=1.7', mileage: '42 km/l' },
      { imgSrc: 'https://tse2.mm.bing.net/th/id/OIP.VNuXIrMNEhMVfXTsC-hsKwHaE2?w=292&h=180&c=7&r=0&o=5&pid=1.7', mileage: '42 km/l' },
      { imgSrc: 'https://tse1.mm.bing.net/th/id/OIP.t_el3livtAiEvaQH_Xcq4wHaE7?w=279&h=186&c=7&r=0&o=5&pid=1.7', mileage: '42 km/l' }
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
    <div className='h-screen'><div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {/* Bold "Available Car" and dropdown centered */}
    <label htmlFor="car-select" style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>
      Available Car:
    </label>
    <select 
      id="car-select" 
      onChange={handleCarSelect} 
      style={{ padding: '10px', marginBottom: '20px', fontSize: '16px', width: '200px' }}
    >
      <option value="">-- Select a Car --</option>
      <option value="nano">Nano</option>
      <option value="scionq">Scion Q</option>
      <option value="toyota">Toyota</option>
      <option value="ford">Ford</option>
    </select>

    {carImages.length > 0 && (
      <div className="car-cards " style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                {selectedCarIndex === index ? 'Selected' : 'Select Car'}
              </button>
            </div>
          </div>
        ))}
      </div>
    )}

    {/* Confirmation Button */}
    <Link to="/booking">
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
  </div></div>
    
  );
};

export default CarSelector;
