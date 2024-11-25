import React,{useState } from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import ProtectionContent from './ProtectionContent';

import FAQ from './FAQ';
import Review from './Review';
import Steppers from './Steppers';
import { Link } from 'react-router-dom';

const CarPartnershipHome = ({ Component, pageProps }) => {
    
  return (
    
    <>
        <div>


        {/* hero section */}
        <div className='herosection container flex flex-col md:flex-row lg:flex-row  justify-around items-center mx-auto'>
            <div className="herotext w-full md:w-1/2 flex flex-col justify-center items-center">
                <h1 className='text-xl md:text-xl lg:text-2xl xl:text-3xl text-center p-1 md:p-2 font-bold '>Your Car, Our Protection, Shared Success</h1>
                <h2 className='text-center text-base md:text-base lg:text-lg xl:text-xl p-1 md:p-2 '>Apply Now to Turn Your Vehicle into Revenue!</h2>
                <Link to={"/stepperform"}>
                <button className='bg-orange-400 font-medium rounded-full uppercase m-4 lg:m-5 p-3 lg:p-4 px-4 lg:px-5 lg:text-lg'>Become our partner</button>
                </Link>
                

            </div>
            <div className="heroimg p-3 md:p-2">
                <img className='rounded-3xl' src="https://www.shutterstock.com/image-photo/business-men-agreement-deal-hands-600nw-557814574.jpg" alt="carpartnership-img" />

            </div>
        </div>
        

        {/* protection */}
        <div className='p-3'>
            <ProtectionContent  />
        </div>

        {/* Steppers  how to book*/}
        <Steppers />

        {/* FAQ */}
        <FAQ />
        
        {/* Review */}
        <Review />






        </div>
    </>
  )
}

export default CarPartnershipHome
