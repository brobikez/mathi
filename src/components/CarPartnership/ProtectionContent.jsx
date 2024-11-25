import * as React from 'react';

export default function ProtectionContent() {
  const protection = [
    {
      imgSrc: '../src/components/CarPartnership/img/insurance.png',
      title: 'Safe and Secure Rentals!',
      description: "Our enhanced protection policies guarantee your vehicle's safety."
    },
    {
      imgSrc: '../src/components/CarPartnership/img/location.png',
      title: "Stay Informed with Live Tracking!",
      description: "Easily track your car during the rental period for added peace of mind."
    },
    {
      imgSrc: '../src/components/CarPartnership/img/trust.png',
      title: "Only Trusted Guests Allowed!",
      description: "With our verification process, your vehicle is always in good hands."
    },

  ]
  return (
    <ul className='flex flex-col md:flex-wrap mx-auto max-w-4xl'>
      {protection.map((item, index) => (
        <li
          key={index}
          className='flex flex-col md:flex-row justify-center items-center mb-2 w-full'
        >
          <div className='flex-shrink-0 w-full md:w-32 flex justify-center'>
            <img
              src={item.imgSrc} alt={item.title} width="100px" height="100px" className='h-14 md:h-28 w-14 md:w-28 p-1 md:p-2 rounded-full border-1 border-black'
            />
          </div>
          <div className='flex-1  md:text-left md:p-4 md:pl-7'>
            <h2 className='font-medium text-lg md:text-xl '>{item.title}</h2>
            <p className='p-1 text-base md:text-xl'>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
