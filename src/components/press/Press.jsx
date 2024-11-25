import React, { useState } from 'react';
import "./Press.css";


export default function Press() {
  const [currentPage, setCurrentPage] = useState('press');

  const showPressPage = () => setCurrentPage('press');
  const showMediaPage = () => setCurrentPage('media');

  return (
    
    <div id="press" className="bg-cover bg-center bg-fixed relative">
      {/* Content Container */}
      <div className="bg-white p-8 flex flex-col items-center w-full max-w-4xl mx-auto relative z-10 shadow-3d shadow-orange-500">
      <h2 className="text-6xl mb-9 text-center font-bold text-black">Press And Media</h2>
        <h2 className="text-5xl font-bold text-black mb-8 text-center">
          {currentPage === 'press' ? 'Press' : 'Media Coverage'}
        </h2>
        <p className="text-lg text-black text-center mb-8">
          {currentPage === 'press' ? (
            "Welcome to the Press page. Here you'll find press releases and media coverage related to Bro Bikes. Stay updated with our latest news and how we are making headlines in the media."
          ) : (
            "Browse through our media coverage to see how Bro Bikes is featured across various platforms. From news articles to interviews, stay informed about our impact."
          )}
        </p>

        {/* Box Container with Hover and 3D Shadow */}
        <div className="relative p-6 bg-orange-500 shadow-lg rounded w-full box-hover transition-transform duration-500 transform-gpu hover:scale-105">
          {currentPage === 'press' ? (
            <section id="press-releases">
              <h2 className="text-3xl mb-4 text-center">Recent Press Releases</h2>
              <ul className="list-none p-0">
                <li className="mb-4">
                  <h3 className="text-xl font-semibold">Bro Bikes Expands to New Markets</h3>
                  <p>Date: August 2024</p>
                  <p>Bro Bikes is excited to announce our expansion into new markets. This move will bring our innovative biking solutions to more customers.</p>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600"></a>
                </li>
                <li className="mb-4">
                  <h3 className="text-xl font-semibold">Bro Bikes Introduces New Features</h3>
                  <p>Date: July 2024</p>
                  <p>We are thrilled to introduce new features to our Bro Bikes platform, including enhanced tracking and improved user interface.</p>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600"></a>
                </li>
              </ul>
            </section>
          ) : (
            <section id="media-coverage">
              <h2 className="text-3xl mb-4 text-center">Media Coverage</h2>
              <ul className="list-none p-0">
                <li className="mb-4">
                  <h3 className="text-xl font-semibold">Bro Bikes Featured in Forbes</h3>
                  <p>Date: June 2024</p>
                  <p>Forbes has highlighted Bro Bikes for its innovative approach to urban mobility. The article covers our latest developments.</p>
                  <a href="https://www.forbes.com/bro-bikes-featured" target="_blank" rel="noopener noreferrer" className="text-blue-600"></a>
                </li>
                <li className="mb-4">
                  <h3 className="text-xl font-semibold">Bro Bikes’s CEO Interviewed on CNBC</h3>
                  <p>Date: May 2024</p>
                  <p>Our CEO shared insights on the future of urban transportation during an exclusive interview with CNBC.</p>
                  <a href="https://www.cnbc.com/bro-bikes-ceo-interview" target="_blank" rel="noopener noreferrer" className="text-blue-600"></a>
                </li>
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* Pagination buttons */}
      <div className="absolute inset-y-1/2 left-0 transform -translate-y-1/2 px-4 flex items-center prevbtn">
        <button
          className={`btnbg text-white py-2 px-4 rounded shadow-lg transition-transform duration-300 transform hover:scale-110 ${currentPage === 'press' ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={showPressPage}
          disabled={currentPage === 'press'}
        >
          Previous
        </button>
      </div>
      <div className="absolute inset-y-1/2 right-0 transform -translate-y-1/2 px-4 flex items-center nextbtn">
        <button
          className={`btnbg text-white py-2 px-4 rounded shadow-lg transition-transform duration-300 transform hover:scale-110 ${currentPage === 'media' ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={showMediaPage}
          disabled={currentPage === 'media'}
        >
          Next
        </button>
      </div>
    </div>
  );
}
