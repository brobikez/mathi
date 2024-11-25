import React, { useState } from 'react';
import "./About.css";

export default function About() {
  const [showDetails, setShowDetails] = useState(false);

  const handleLearnMoreClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white p-20" id='about'>
      <div className="container mx-auto p-2 bg-transparent bg-opacity-40 rounded-lg">
        <div className="about-us-container flex flex-col md:flex-row items-center justify-center gap-10 shadow-lg rounded-lg">
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Existing Images */}
              <img
                src="https://ih1.redbubble.net/image.5082391927.1790/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                className="border-2 border-orangered w-full h-60 p-1 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
                alt="Gallery Image 1"
              />
              <img
                src="https://www.shutterstock.com/image-vector/vector-graphic-illustration-indian-mechanic-600nw-1789876919.jpg"
                className="border-2 border-orangered w-full h-60 p-1 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
                alt="Gallery Image 2"
              />
              <img
                src="https://www.shutterstock.com/image-vector/vector-design-auto-rickshaw-driver-600nw-2316837373.jpg"
                className="border-2 border-orangered w-full h-60 p-1 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
                alt="Gallery Image 3"
              />
              <img
                src="https://m.media-amazon.com/images/I/61DaG3-udHL.jpg"
                className="border-2 border-orangered w-full h-60 p-1 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
                alt="Gallery Image 4"
              />
              
              {/* New Images */}
              <img
                src="https://www.bestomart.com/cdn/shop/products/1000112327-1_large.jpg?v=1659166710"
                className="border-2 border-orangerd w-full h-60 p-1 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
                alt="Gallery Image 7"
              />
              <img
                src="https://www.mixtelematics.com/images/gps-tracking-satellites.jpg"
                className="border-2 border-orangered w-full h-60 p-1 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
                alt="Gallery Image 8"
              />
            </div>
          </div>
          <div className={`md:w-2/3 md:pl-3 border-1 border-gray p-4 bg-white-800 bg-opacity-80 rounded-lg transition-transform duration-500 transform ${showDetails ? '' : ''}`}>
            <h2 className="text-5xl font-bold text-gray mb-8 text-center">
              About Us
            </h2>
            <p className="text-lg text-black ">
                Welcome to Bro Bikez! Are you looking for services like on-spot booking, rental, driving or rental driving for bike, car, or auto? You have come to the right platform. 
              </p>
              <p className="text-lg text-black mt-4">
                Bro Bikes offers mobility solutions by connecting customers to drivers and a wide range of vehicles across bikes, auto-rickshaws, metered taxis, and cabs, enabling convenience and transparency for hundreds of millions of consumers and over 1.5 lakh driver-partners.
              </p>
            <button 
              onClick={handleLearnMoreClick}
              className="mt-8 px-6 py-2 text-lg font-bold text-black bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none"
            >
              {showDetails ? 'Hide Details' : 'Learn More'}
            </button>

            {showDetails && (
              <div className="mt-8 perspective-container">
                <h2 className="vision-heading three-d-heading" data-text="Vision">
                  Vision
                </h2>
                <p className="three-d-paragraph">
                  Our vision is to be the leading choice for mobility solutions, offering sustainable and innovative services across different vehicle types.
                </p>
                
                <h2 className="mission-heading three-d-heading" data-text="Mission">
                  Mission
                </h2>
                <p className="three-d-paragraph">
                  Our mission is to provide reliable and affordable transportation services, ensuring customer satisfaction through advanced technology and a commitment to safety.
                </p>
                <p className="three-d-paragraph mt-4">
                  We aim to build lasting relationships with our customers and driver-partners, enhancing the quality of travel experiences for everyone.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
