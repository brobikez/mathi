import React, { useState, useEffect } from 'react';
import './Safety.css'; // Import any additional custom styles if needed
import Title from '../Title/Title';

const safetyMeasures = {
  driver: [
    {
      text: "Ensure your vehicle is regularly inspected and in good condition.",
      image: "../src/components/safety/img/safetyd1.avif"
    },
    {
      text: "Always follow local traffic laws and regulations.",
      image: "../src/components/safety/img/safetyd2.png"
    },
    {
      text: "Keep your phone in a holder and avoid distractions while driving.",
      image: "../src/components/safety/img/safetyd3.jfif"
    },
    {
      text: "Verify the passenger's details before starting the trip.",
      image: "../src/components/safety/img/safetyd4.jfif"
    },
    {
      text: "Follow the speed limit",
      image: "../src/components/safety/img/safetyd5.jfif"
    },
    {
      text: "Be aware of your surroundings and stay alert during the trip.",
      image: "../src/components/safety/img/safetyd6.jfif"
    }
  ],
  customer: [
    {
      text: "Verify the driver’s details and vehicle information before entering the car.",
      image: "../src/components/safety/img/safetyc1.jfif"
    },
    {
      text: "Always wear your seatbelt during the ride.",
      image: "../src/components/safety/img/safetyc2.jfif"
    },
    {
      text: "Share your ride details with a trusted friend or family member.",
      image: "../src/components/safety/img/safetyc3.jfif"
    },
    {
      text: "Do not engage in any behavior that may distract the driver.",
      image: "../src/components/safety/img/safetyc4.png"
    },
    {
      text: "Do not put your hand outside the window.",
      image: "../src/components/safety/img/safetyc5.png"
    },
    {
      text: "Follow any additional instructions provided by the driver for safety.",
      image: "../src/components/safety/img/safetyc6.jfif"
    }
  ]
};

const Safety = () => {
  const [role, setRole] = useState('driver');
  const [currentIndex, setCurrentIndex] = useState(0);

  const measures = safetyMeasures[role] || [];
  const totalMeasures = measures.length;
  const displayMeasures = measures.slice(currentIndex, currentIndex + 2);

  useEffect(() => {
    const items = document.querySelectorAll('.safety-item');
    items.forEach((item, index) => {
      setTimeout(() => item.classList.add('show'), index * 300);
    });
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex + 2 < totalMeasures) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  return (
    <div className="max-w-6xl mx-auto text-center mt-5 p-1" id='safety'>
      <Title title="Super vision" />
      <div className="flex flex-wrap md:flex-row justify-center mb-5">
      <button 
          onClick={() => {
            setRole('driver');
            setCurrentIndex(0);
          }} 
          className="btn bg-fuchsia-900 hover:bg-fuchsia-950 md:text-lg"
        >
          Driver Safety Measures
        </button>
        <button 
          onClick={() => {
            setRole('customer');
            setCurrentIndex(0);
          }} 
          className="btn bg-fuchsia-900 hover:bg-fuchsia-950 md:text-lg"
        >
          Customer Safety Measures
        </button>
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Safety Measures for {role === 'driver' ? 'Drivers' : 'Customers'}
      </h2>

      <div className="flex items-center justify-between">
        <div className='xl:pl-10 xl:ml-10'>
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={` bg-orange-400 hover:bg-orange-500 text-black text-lg font-semibold py-4 px-5 mx-5 rounded transition  ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''} hidden md:block`}
        >
          &lt;
        </button>

        </div>

        
   
         <ul className="safety-list border-orange-500">
           {displayMeasures.map((measure, index) => (
             <li key={index} className="safety-item w-full bg-orange-50">
               <img src={measure.image} alt={`Safety Measure ${index + 1}`} className="safety-image" />
               <p className='text-base text-black md:text-gray-800 xl:text-gray-800 sm:text-lg md:text-xl md:font-semibold xl:text-xl xl:font-semibold'>{measure.text}</p>
             </li>
          ))}
         </ul>

        <div className='xl:pr-10 xr:ml-10'>
        <button
          onClick={handleNext}
          disabled={currentIndex + 2 >= totalMeasures}
          className={` bg-orange-400 hover:bg-orange-500 text-black text-lg font-semibold  py-4 px-5 mx-5 rounded transition  ${currentIndex + 2 >= totalMeasures ? 'opacity-30 cursor-not-allowed' : ''} hidden md:block`}
        >
          &gt;
        </button>

        </div>
        
      </div>

      {/* Mobile buttons below the list */}
      <div className="md:hidden flex justify-between mt-5 w-full px-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`mobilbuttoncolor bg-orange-400 hover:bg-orange-500 text-lg font-semibold  text-black py-2 px-4 rounded transition ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + 2 >= totalMeasures}
          className={` bg-orange-400 hover:bg-orange-500 text-black text-lg font-semibold  py-2 px-4 rounded transition ${currentIndex + 2 >= totalMeasures ? 'opacity-30 cursor-not-allowed' : ''}`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Safety;
