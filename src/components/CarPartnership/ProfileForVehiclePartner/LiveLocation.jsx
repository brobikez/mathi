import React, { useState } from 'react';
import Title from '../../Title/Title';

const LiveLocation = ({ profileTitle }) => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <Title title={profileTitle} />
      <div className="shadow-sm shadow-orange-300 md:p-2 md:m-2">
        <h2 className="text-lg text-gray-700 p-3 md:ps-8"></h2>
        <div className='flex justify-center p-2 m-2 md:mt-8'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4386.681437763381!2d80.16177111113912!3d12.826006387423837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c1143ea25cccc81%3A0x6e50f93d769b533e!2sSeval%20Software%20Solutions!5e1!3m2!1sen!2sin!4v1730721848134!5m2!1sen!2sin" 
        width="500" 
        height="400" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        className=' border border-gray-500'
        >
        </iframe>
        </div>
        <div className='text-center my-7'>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" aria-label="Google Play Store" className='m-2'>
          <button className='bg-fuchsia-900 text-white p-2 px-5 text-xl '>Ready to take ride</button>
          </a>
        </div>

      </div>
 
      <div className='flex justify-center flex-col md:flex-row items-center md:p-5 mb-10 m-2 w-full md:gap-10 '>
            <div className='text-left md:p-6 text-lg lg:text-xl'>
                <h1 className='p-2 font-semibold mr-10'>Toyota Camry</h1>
                <h1 className='p-2 font-semibold'>Camry</h1>
                <h1 className='p-2 font-semibold'>TN82 5343</h1>
                <h1 className='p-2 font-semibold'>Rental Start Date: 01-Nov-2024 </h1>
                <h1 className='p-2 font-semibold'>Rental End Date: 30-Nov-2024 </h1>
                

            </div>
            <div>
            <img src="../src/components/CarPartnership/img/auto-partnership.jpg" alt="" width="400px" height="400px" />
            </div>
        </div>
    </div>
  );
};

export default LiveLocation;
