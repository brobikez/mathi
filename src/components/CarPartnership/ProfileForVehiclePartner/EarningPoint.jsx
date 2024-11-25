import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const EarningPoint = ({ profileTitle }) => {
  const [message, setMessage] = useState("");

  const successfullyupdated = () => {
      setMessage("Your notification preferences have been successfully updated.");
      setTimeout(() => {
          setMessage("");
      }, 2000); 
  };
  return (
    <div>
      <h1 className="text-xl font-semibold">{profileTitle}</h1>
      <div className="shadow-sm shadow-orange-300 p-1 md:p-2 md:m-2">
        <h2 className="text-lg text-gray-700 p-3 md:ps-8"></h2>

        <div className='flex justify-center flex-col px-3'>
        <div className='md:p-2 m-1 md:m-2 md:mt-10 flex justify-center flex-col w-full'>

          <div className='flex justify-center lg:justify-start flex-col sm:flex-row'>
            <label htmlFor="trips" className='px-5 md:px-7 w-full lg:w-2/5 md:p-2 text-lg lg:text-xl text-black'>Total No.of trips</label>
            <label htmlFor="tripsanswer" className='px-5 md:px-7 w-full md:w-2/5 lg:w-1/4 md:p-2 text-lg lg:text-xl text-black font-bold'> 10 trips</label>
          </div>
          <div className='flex justify-center lg:justify-start flex-col sm:flex-row '>
            <label htmlFor="trips" className='px-5 md:px-7 w-full lg:w-2/5 md:p-2  text-lg lg:text-xl text-black'>Total no.of Accident/scratch</label>
            <label htmlFor="tripsanswer" className='px-5 md:px-7 w-full md:w-2/5 lg:w-1/4 md:p-2 text-lg lg:text-xl text-black font-bold'> 0 </label>
          </div>
          <div className='flex justify-center lg:justify-start flex-col sm:flex-row'>
            <label htmlFor="trips" className='px-5 md:px-7 w-full lg:w-2/5 md:p-2 text-lg lg:text-xl text-black'>Total no.of Km traveled</label>
            <label htmlFor="tripsanswer" className='px-5 md:px-7 w-full md:w-2/5 lg:w-1/4 md:p-2 text-lg lg:text-xl text-black font-bold'>1000 KM</label>
          </div>
          <div className='flex justify-center lg:justify-start flex-col sm:flex-row'>
            <label htmlFor="trips" className='px-5 md:px-7 w-full lg:w-2/5 md:p-2 text-lg lg:text-xl text-black'>Total Earning</label>
            <label htmlFor="tripsanswer" className='px-5 md:px-7 w-full md:w-2/5 lg:w-1/4 md:p-2 text-lg lg:text-xl text-black font-bold'>RS. 20000 </label>
          </div>
          </div>
          <div className='flex flex-col md:flex-row p-2 md:gap-5 justify-center mt-7'>
          <Link to="/editrentalduration">
          <div className=' p-2 mb-5 w-52 text-lg text-center bg-fuchsia-900 text-white font-semibold mx-auto'> 
            <button>Edit Rental duration</button>
            </div>
          </Link>

            <Link to="/stepperform1">
            <div className='p-2 w-52 text-lg text-center bg-orange-400 text-white font-semibold mx-auto'>
            <button>Add another Vehicle</button>
            </div>
            </Link>
            
        </div>
        </div>
        
       
      </div>
    </div>
  );
};

export default EarningPoint;
