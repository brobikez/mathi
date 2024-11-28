import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBuilding, faUser, faSmile } from '@fortawesome/free-solid-svg-icons';
import Title from '../Title/Title';

const ImpactSection = () => {
  return (
    <div className="py-4 md:py-8 m-2">
      <Title title="our impact" />
      <div className='flex flex-col items-center justify-center shadow-sm shadow-gray-400 w-full md:w-3/4 mx-auto py-3'>
      <p className="text-center text-lg text-gray-700 mb-6 font-sans p-3">
        Our presence in the country has changed the concept of intra-city travel and made 
        last-mile connectivity affordable for all.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 p-2">
        <div className="flex flex-col items-center shadow-sm shadow-fuchsia-300 m-1 bg-fuchsia-100 rounded-full p-8 transform hover:scale-105 transition-transform duration-300">
          <FontAwesomeIcon icon={faDownload} size="3x" className="text-fuchsia-900 mb-8" />
          <h3 className="text-lg font-semibold text-gray-700">0</h3>
          <p className="text-md text-gray-600">Downloads</p>
        </div>
        <div className="flex flex-col items-center shadow-sm shadow-fuchsia-300 m-1 bg-fuchsia-100 rounded-full p-8  transform hover:scale-105 transition-transform duration-300">
          <FontAwesomeIcon icon={faBuilding} size="3x" className="text-fuchsia-900 mb-8" />
          <h3 className="text-lg font-semibold text-gray-700">0</h3>
          <p className="text-md text-gray-600">Cities</p>
        </div>
        <div className="flex flex-col items-center shadow-sm shadow-fuchsia-300 m-1 bg-fuchsia-100 rounded-full p-8  transform hover:scale-105 transition-transform duration-300">
          <FontAwesomeIcon icon={faUser} size="3x" className="text-fuchsia-900 mb-8" />
          <h3 className="text-lg font-semibold text-gray-700">0</h3>
          <p className="text-md text-gray-600">Captains</p>
        </div>
        <div className="flex flex-col items-center shadow-sm shadow-fuchsia-300 m-1 bg-fuchsia-100 rounded-full p-8 transform hover:scale-105 transition-transform duration-300">
          <FontAwesomeIcon icon={faSmile} size="3x" className="text-fuchsia-900 mb-8" />
          <h3 className="text-lg font-semibold text-gray-700">0</h3>
          <p className="text-md text-gray-600">Customers</p>
        </div>
      </div>

      </div>
    
      
      
    </div>
  );
}

export default ImpactSection;
