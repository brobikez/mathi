import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBuilding, faUser, faSmile } from '@fortawesome/free-solid-svg-icons';

const ImpactSection = () => {
  return (
    <div className=" bg-white flex flex-col items-center justify-center py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Our Impact
      </h2>
      <p className="text-center text-gray-700 mb-8 font-sans">
        Our presence in the country has changed the concept of intra-city travel and made 
        last-mile connectivity affordable for all.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center bg-purple-300 rounded-full p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <FontAwesomeIcon icon={faDownload} size="3x" className="text-orange-500 mb-8" />
          <h3 className="text-lg font-semibold text-gray-700">0</h3>
          <p className="text-sm text-gray-500">Downloads</p>
        </div>
        <div className="flex flex-col items-center bg-purple-300 rounded-full p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <FontAwesomeIcon icon={faBuilding} size="3x" className="text-orange-500 mb-8" />
          <h3 className="text-lg font-semibold text-gray-700">0</h3>
          <p className="text-sm text-gray-500">Cities</p>
        </div>
        <div className="flex flex-col items-center bg-purple-300 rounded-full p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <FontAwesomeIcon icon={faUser} size="3x" className="text-orange-500 mb-8" />
          <h3 className="text-lg font-semibold text-gray-700">0</h3>
          <p className="text-sm text-gray-500">Captains</p>
        </div>
        <div className="flex flex-col items-center bg-purple-300 rounded-full p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <FontAwesomeIcon icon={faSmile} size="3x" className="text-orange-500 mb-8" />
          <h3 className="text-lg font-semibold text-gray-700">0</h3>
          <p className="text-sm text-gray-500">Customers</p>
        </div>
      </div>
    </div>
  );
}

export default ImpactSection;
