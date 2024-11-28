import React, { useState } from 'react';
import "./Press.css";
import Title from '../Title/Title';


export default function Press() {
  const [currentPage, setCurrentPage] = useState('press');

  const showPressPage = () => setCurrentPage('press');
  const showMediaPage = () => setCurrentPage('media');

  return (
    
    <div id="press" >
      <Title title="press and media" />
      {/* Content Container */}
      <div className='flex justify-center items-center '>
      <div className='mx-10 xl:flex justify-center items-center hidden'>
      <button
          className={`bg-orange-400 hover:bg-orange-500 py-2 w-32 text-lg font-medium text-black px-4  shadow-lg transition-transform duration-300 transform hover:scale-110 ${currentPage === 'press' ? 'opacity-30 cursor-not-allowed' : ''}`}
          onClick={showPressPage}
          disabled={currentPage === 'press'}
        >
          Previous
        </button>
      </div>
      <div className="bg-white p-2 md:p-6 flex flex-col items-center w-full md:w-4/5 lg:w-3/5 mx-auto shadow-lg shadow-gray-500">
      
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-8 text-center">
          {currentPage === 'press' ? 'Press' : 'Media'}
        </h2>
        <p className="text-lg text-black text-center mb-8">
          {currentPage === 'press' ? (
            "Welcome to the Press page. Here you'll find press releases and media coverage related to Bro Bikes. Stay updated with our latest news and how we are making headlines in the media."
          ) : (
            "Browse through our media coverage to see how Bro Bikes is featured across various platforms. From news articles to interviews, stay informed about our impact."
          )}
        </p>

        {/* Box Container with Hover and 3D Shadow */}
        <div className="relative p-3 md:p-5 shadow-sm shadow-fuchsia-300 m-1 bg-fuchsia-100 rounded w-full box-hover transition-transform duration-500 transform-gpu hover:scale-105">
          {currentPage === 'press' ? (
            <section id="press-releases">
              <h2 className="text-3xl mb-3 text-center">Recent Press Releases</h2>
              <ul className="list-none p-0">
                <li className="mb-4">
                  <h3 className="text-xl font-semibold py-1">Bro Bikes Expands to New Markets</h3>
                  <p className='text-lg'>Date: August 2024</p>
                  <p className='text-lg'>Bro Bikes is excited to announce our expansion into new markets. This move will bring our innovative biking solutions to more customers.</p>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-purple-700"></a>
                </li>
                <li className="mb-5">
                  <h3 className="text-xl font-semibold py-1">Bro Bikes Introduces New Features</h3>
                  <p className='text-lg'>Date: July 2024</p>
                  <p className='text-lg'>We are thrilled to introduce new features to our Bro Bikes platform, including enhanced tracking and improved user interface.</p>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-purple-700"></a>
                </li>
              </ul>
            </section>
          ) : (
            <section id="media-coverage">
              <h2 className="text-3xl mb-3 text-center">Media Coverage</h2>
              <ul className="list-none p-0">
                <li className="mb-4">
                  <h3 className="text-xl font-semibold py-1">Bro Bikes Featured in Forbes</h3>
                  <p className='text-lg'>Date: June 2024</p>
                  <p className='text-lg'>Forbes has highlighted Bro Bikes for its innovative approach to urban mobility. The article covers our latest developments.</p>
                  <a href="https://www.forbes.com/bro-bikes-featured" target="_blank" rel="noopener noreferrer" className="text-purple-700"></a>
                </li>
                <li className="mb-4">
                  <h3 className="text-xl font-semibold py-1">Bro Bikes’s CEO Interviewed on CNBC</h3>
                  <p className='text-lg'>Date: May 2024</p>
                  <p className='text-lg'>Our CEO shared insights on the future of urban transportation during an exclusive interview with CNBC.</p>
                  <a href="https://www.cnbc.com/bro-bikes-ceo-interview" target="_blank" rel="noopener noreferrer" className="text-purple-700"></a>
                </li>
              </ul>
            </section>
          )}
        </div>
      </div>
      <div className='mx-10 xl:flex justify-center items-center hidden'>
      <button
          className={`bg-orange-400 hover:bg-orange-500 py-2 text-lg font-medium text-black w-32 px-4 shadow-lg transition-transform duration-300 transform hover:scale-110 ${currentPage === 'media' ? 'opacity-30 cursor-not-allowed' : ''}`}
          onClick={showMediaPage}
          disabled={currentPage === 'media'}
        >
          Next
        </button>
      </div>

      </div>
      

      

      {/* mobile screen */}
      <div className='flex xl:hidden justify-center items-center gap-6 m-3 mt-6'>
        <div>
        <button
          className={`bg-orange-400 hover:bg-orange-500 w-32 py-2 text-lg font-medium text-black px-4 rounded shadow-lg transition-transform duration-300 transform hover:scale-110 ${currentPage === 'press' ? 'opacity-30 cursor-not-allowed' : ''}`}
          onClick={showPressPage}
          disabled={currentPage === 'press'}
        >
          Previous
        </button>
        </div>
        <div>
        <button
          className={`bg-orange-400 hover:bg-orange-500 w-32 text-lg font-medium text-black py-2 px-4 rounded shadow-lg transition-transform duration-300 transform hover:scale-110 ${currentPage === 'media' ? 'opacity-30 cursor-not-allowed' : ''}`}
          onClick={showMediaPage}
          disabled={currentPage === 'media'}
        >
          Next
        </button>
        </div>

      </div>
      
    </div>
  );
}
