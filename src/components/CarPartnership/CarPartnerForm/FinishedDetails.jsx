import React from 'react'
import "./Forms.css";
import { useNavigate } from 'react-router-dom';

const FinishedDetails = () => {
    const navigate = useNavigate();
    const backtohome = () => {
        navigate('/carpartnershiphome')
    }
    const registedcarpartner = () => {
      navigate("/profileforvehiclepartner");
    }
  return (
    <>
    <div className='flex justify-center flex-wrap items-center p-2'>
        <div className='text-center p-4'>
        <h1 className='text-green-600 text-xl md:text-2xl pb-5'>Booking is Successfully completed</h1>
        <h2 className='text-lg p-2'>We will contact you within 24 hours</h2>
        </div>
        <div className='p-3'>
            <img src="./src/components/CarPartnership/img/car-rental-partnership.jpg" alt="" width="400px" height="400px" />
        </div>
    </div>
    <div className='text-center mt-8'>
    <button className='next-btn text-center m-6' onClick={backtohome}>Back to Home</button>
    </div>
    <div className='text-center mt-8 '>
    <button className='mx-4 mt-10  p-2 1/4 text-lg  bg-fuchsia-900 text-white font-semibold' onClick={registedcarpartner}>registedcarpartnerhome</button>
    </div>

  
    </>
  )
    
}

export default FinishedDetails
