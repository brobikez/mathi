import React from 'react';
import QuickEnquiry from './QuickEnquiry';
import shadows from '@mui/material/styles/shadows';
import Title from '../Title/Title';

const ContactUs = () => {


  return (
    <div className=' m-1' id='contact'>
      <Title title="contact us" />
      <div className="flex flex-col md:flex-row mx-auto justify-center items-center p-1 lg:px-3 w-full xl:w-4/5 shadow-sm shadow-gray-400 mb-6 ">

        <div className="w-full md:w-3/5 lg:w-3/4  flex flex-col justify-start items-start lg:justify-center lg:items-center p-4">
          <div className="w-full flex items-center py-3  rounded shadow-sm shadow-fuchsia-300 m-1 bg-fuchsia-100">
            <div className="p-2 flex justify-center items-center w-12 md:w-16 mr-3">
              <a target='_blank' href="https://www.google.com/maps/place/Seval+Software+Solutions/@12.9726804,79.9200699,56695m/data=!3m1!1e3!4m6!3m5!1s0x2c1143ea25cccc81:0x6e50f93d769b533e!8m2!3d12.8260064!4d80.1643514!16s%2Fg%2F11k9dv_zll?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
              <img src="../src/components/Contact/img/location1.png" alt="location" className="w-full cursor-pointer" />
              </a>
            </div>
            <div className="flex-1 text-lg lg:text-xl capitalize">
              <h1>1/33 Pillaiyar kovil street, <br /> Mambakkam, Chengalpattu district, <br /> Chennai-600012</h1>
            </div>
          </div>

          <div className="w-full  flex items-center py-3 rounded shadow-sm shadow-fuchsia-300 m-1 bg-fuchsia-100">
            <div className="p-2 flex justify-center items-center w-12 md:w-16 mr-3">
              <a href="tel:+9874563214">
              <img src="../src/components/Contact/img/telephone1.png" alt="telephone" className="w-full cursor-pointer" />
              </a>
            </div>
            <div className="flex-1 text-lg lg:text-xl capitalize">
              <h1><a href="tel:+9874563214" className='hover:underline'>9874563214</a></h1>
            </div>
          </div>

          <div className="w-full flex items-center py-3 rounded shadow-sm shadow-fuchsia-300 m-1 bg-fuchsia-100" >
            <div className="p-2 flex justify-center items-center  w-12 md:w-16 mr-3">
              <a href="mailto:www.brobikez.com" target='_blank'>
              <img src="../src/components/Contact/img/email1.png" alt="email" className="w-full cursor-pointer" />
              </a> 
            </div>
            <div className="flex-1 text-lg lg:text-xl lowercase">
              <a href="mailto:www.brobikez.com" className='hover:underline' target='_blank'>brobikez@gmail.com</a>
            </div>
          </div>

          <div className="w-full flex items-center py-3 rounded shadow-sm shadow-fuchsia-300 m-1 bg-fuchsia-100">
            <div className="p-2 flex justify-center items-center w-12 md:w-16 mr-3">
              <a href="www.brobikez.com" target='_blank'>
              <img src="../src/components/Contact/img/globe1.png" alt="website" className="w-full cursor-pointer" />
              </a>
            </div>
            <div className="flex-1 text-lg lg:text-xl lowercase">
              <a href="www.brobikez.com" className='hover:underline' target='_blank'>www.brobikez.com</a>
            </div>
          </div>
        </div>


        <div className="w-full">
          <QuickEnquiry />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
