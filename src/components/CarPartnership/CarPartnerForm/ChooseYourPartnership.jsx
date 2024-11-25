import React, { useState } from 'react';
import './Forms.css';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ChooseYourPartnership({ isOptionSelected, setIsOptionSelected, setSelectedOption }) {
  const [selectedOption, setSelectedOptionLocal] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOptionLocal(option); // Set the locally selected option
    setSelectedOption(option); // Update the parent state
    setIsOptionSelected(true); // Mark that an option has been selected
  };

  return (
    <div className='flex justify-around flex-wrap items-center'>
      <form action='' className='w-full xl:w-3/4 flex justify-center flex-col mx-auto'>
        <div className='holeformdiv flex flex-wrap justify-around m-1 md:m-5'>
          
          <div className='my-3 md:my-5'>
            <img src='./src/components/CarPartnership/img/car-rental-partnership.jpg' alt='car rental partnership' width="400px" height="400px"
              className='rounded-3xl cursor-pointer border border-gray-400' 
            />
            <div className='text-center pt-2'>
              <Checkbox
                checked={selectedOption === 'carRental'}a
                onChange={() => handleCheckboxChange('carRental')}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              />
            </div>
            <h2 className='text-center p-3 text-xl font-bold cursor-pointer'>Car Rental Partnership</h2>
          </div>

          <div className='my-3 md:my-5'>
            <img src='./src/components/CarPartnership/img/car-partnership.jpg' alt='car partnership' width='400px' height='400px' className='rounded-3xl cursor-pointer border border-gray-400' />
            <div className='text-center pt-2'>
              <Checkbox
                checked={selectedOption === 'carPartner'}
                onChange={() => handleCheckboxChange('carPartner')}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              />
            </div>
            <h2 className='text-center p-3 text-xl font-bold cursor-pointer'>Join Brobikez as a Car Partner</h2>
          </div>

          <div className='my-3 md:my-5'>
            <img src='./src/components/CarPartnership/img/bike-rental-partnership.jpg' alt='bike rental partnership' width='400px' height='400px' className='rounded-3xl cursor-pointer border border-gray-400' />
            <div className='text-center pt-2'>
              <Checkbox
                checked={selectedOption === 'bikeRental'}
                onChange={() => handleCheckboxChange('bikeRental')}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              />
            </div>
            <h2 className='text-center p-3 text-xl font-bold cursor-pointer'>Bike Rental Partnership</h2>
          </div>

          <div className='my-3 md:my-5'>
            <img src='./src/components/CarPartnership/img/car-rental-partnership.jpg' alt='Bike partnership' width='400px' height='400px' className='rounded-3xl cursor-pointer border border-gray-400' />
            <div className='text-center pt-2'>
              <Checkbox
                checked={selectedOption === 'bikePartner'}
                onChange={() => handleCheckboxChange('bikePartner')}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              />
            </div>
            <h2 className='text-center p-3 text-xl font-bold cursor-pointer'>Join Brobikez as a Bike Partner</h2>
          </div>

          <div className='my-3 md:my-5'>
            <img src='./src/components/CarPartnership/img/auto-partnership.jpg' alt='Auto partnership' width='400px' height='400px' className='rounded-3xl cursor-pointer border border-gray-400' />
            <div className='text-center pt-2'>
              <Checkbox
                checked={selectedOption === 'autoPartner'}
                onChange={() => handleCheckboxChange('autoPartner')}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              />
            </div>
            <h2 className='text-center p-3 text-xl font-bold cursor-pointer'>Join Brobikez as an Auto Partner</h2>
          </div>

        </div>
      </form>
    </div>
  );
}
