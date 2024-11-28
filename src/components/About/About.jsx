// import React, { useState } from 'react';
// import "./About.css";

// export default function About() {
//   const [showDetails, setShowDetails] = useState(false);

//   const handleLearnMoreClick = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="bg-white p-20" id='about'>
//       <div className="container mx-auto p-2 bg-transparent bg-opacity-40 rounded-lg">
//         <div className="about-us-container flex flex-col md:flex-row items-center justify-center gap-10 shadow-lg rounded-lg">
//           <div className="md:w-1/2">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* Existing Images */}
//               <img
//                 src="https://ih1.redbubble.net/image.5082391927.1790/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
//                 className="border-2 border-orangered w-full h-60 p-1 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
//                 alt="Gallery Image 1"
//               />
//               <img
//                 src="https://www.shutterstock.com/image-vector/vector-graphic-illustration-indian-mechanic-600nw-1789876919.jpg"
//                 className="border-2 border-orangered w-full h-60 p-1 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
//                 alt="Gallery Image 2"
//               />
//               <img
//                 src="https://www.shutterstock.com/image-vector/vector-design-auto-rickshaw-driver-600nw-2316837373.jpg"
//                 className="border-2 border-orangered w-full h-60 p-1 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
//                 alt="Gallery Image 3"
//               />
//               <img
//                 src="https://m.media-amazon.com/images/I/61DaG3-udHL.jpg"
//                 className="border-2 border-orangered w-full h-60 p-1 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
//                 alt="Gallery Image 4"
//               />
              
//               {/* New Images */}
//               <img
//                 src="https://www.bestomart.com/cdn/shop/products/1000112327-1_large.jpg?v=1659166710"
//                 className="border-2 border-orangerd w-full h-60 p-1 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
//                 alt="Gallery Image 7"
//               />
//               <img
//                 src="https://www.mixtelematics.com/images/gps-tracking-satellites.jpg"
//                 className="border-2 border-orangered w-full h-60 p-1 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
//                 alt="Gallery Image 8"
//               />
//             </div>
//           </div>
//           <div className={`md:w-2/3 md:pl-3 border-1 border-gray p-4 bg-white-800 bg-opacity-80 rounded-lg transition-transform duration-500 transform ${showDetails ? '' : ''}`}>
//             <h2 className="text-5xl font-bold text-gray mb-8 text-center">
//               About Us
//             </h2>
//             <p className="text-lg text-black ">
//                 Welcome to Bro Bikez! Are you looking for services like on-spot booking, rental, driving or rental driving for bike, car, or auto? You have come to the right platform. 
//               </p>
//               <p className="text-lg text-black mt-4">
//                 Bro Bikes offers mobility solutions by connecting customers to drivers and a wide range of vehicles across bikes, auto-rickshaws, metered taxis, and cabs, enabling convenience and transparency for hundreds of millions of consumers and over 1.5 lakh driver-partners.
//               </p>
//             <button 
//               onClick={handleLearnMoreClick}
//               className="mt-8 px-6 py-2 text-lg font-bold text-black bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none"
//             >
//               {showDetails ? 'Hide Details' : 'Learn More'}
//             </button>

//             {showDetails && (
//               <div className="mt-8 perspective-container">
//                 <h2 className="vision-heading three-d-heading" data-text="Vision">
//                   Vision
//                 </h2>
//                 <p className="three-d-paragraph">
//                   Our vision is to be the leading choice for mobility solutions, offering sustainable and innovative services across different vehicle types.
//                 </p>
                
//                 <h2 className="mission-heading three-d-heading" data-text="Mission">
//                   Mission
//                 </h2>
//                 <p className="three-d-paragraph">
//                   Our mission is to provide reliable and affordable transportation services, ensuring customer satisfaction through advanced technology and a commitment to safety.
//                 </p>
//                 <p className="three-d-paragraph mt-4">
//                   We aim to build lasting relationships with our customers and driver-partners, enhancing the quality of travel experiences for everyone.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import Title from '../Title/Title';
// import "./About.css";

export default function About() {
  const [showDetails, setShowDetails] = useState(false);

  const handleLearnMoreClick = () => {
    setShowDetails(!showDetails);
  };

  const aboutimg = [
    {
      img: "https://ih1.redbubble.net/image.5082391927.1790/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      alt: "1st image"
    },
    {
      img: "https://www.shutterstock.com/image-vector/vector-graphic-illustration-indian-mechanic-600nw-1789876919.jpg",
      alt: "2nd image"
    },
    {
      img: "https://www.shutterstock.com/image-vector/vector-design-auto-rickshaw-driver-600nw-2316837373.jpg",
      alt: "3rd image"
    },
    {
      img: "https://m.media-amazon.com/images/I/61DaG3-udHL.jpg",
      alt: "4th image"
    },
    {
      img: "https://www.bestomart.com/cdn/shop/products/1000112327-1_large.jpg?v=1659166710",
      alt: "5th image"
    },
    {
      img: "https://www.mixtelematics.com/images/gps-tracking-satellites.jpg",
      alt: "6th image"
    },
  ];

  return (
    <div className="py-4 md:py-10" id="about">
      <Title title="About us" />
      <div className="mx-auto p-1 md:p-2 lg:px-3 w-full xl:w-4/5 shadow-sm shadow-gray-400 bg-orange-50">
        <div className="flex flex-col md:flex-row my-2 md:my-10">
          {/* Image Grid */}
          <div className="order-2 md:order-1 p-3 lg:p-5 flex flex-wrap justify-center items-center w-full md:w-4/5">
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 justify-center items-center">
              {
                aboutimg.map((item, index) => (
                  <div className="flex justify-center items-center">
                    <img
                      key={index}
                      src={item.img}
                      alt={item.alt}
                      className="aboutusimg border border-gray-400 h-20 md:h-32 lg:h-48 w-full p-1 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-md hover:shadow-orange-200"
                    />
                  </div>
                ))
              }
            </div>
          </div>

          {/* Text content */}
          <div className={`xl:px-10 order-1 md:order-2 md:w-2/3 md:pl-3 p-1 md:p-2 rounded-lg`}>
           
            <div className='xl:pt-6 p-2'>
            <p className="text-lg md:text-xl text-black">
              Welcome to Bro Bikez! Are you looking for services like on-spot booking, rental, driving or rental driving for bike, car, or auto? You have come to the right platform.
            </p>
            <p className="text-lg md:text-xl text-black mt-4">
              Bro Bikes offers mobility solutions by connecting customers to drivers and a wide range of vehicles across bikes, auto-rickshaws, metered taxis, and cabs, enabling convenience and transparency for hundreds of millions of consumers and over 1.5 lakh driver-partners.
            </p>
            <button
              onClick={handleLearnMoreClick}
              className="mt-4 lg:mt-8 px-6 py-2 text-lg font-medium text-black bg-orange-400 rounded-lg shadow-md hover:bg-orange-500 focus:outline-none"
            >
              {showDetails ? 'Hide Details' : 'Learn More'}
            </button>

            {showDetails && (
              <div className="mt-8 perspective-container">
                <h2 className="text-xl font-bold py-2" data-text="Vision">
                  Vision
                </h2>
                <p className="text-lg md:text-xl">
                  Our vision is to be the leading choice for mobility solutions, offering sustainable and innovative services across different vehicle types.
                </p>

                <h2 className="text-xl font-bold py-2" data-text="Mission">
                  Mission
                </h2>
                <p className="text-lg md:text-xl">
                  Our mission is to provide reliable and affordable transportation services, ensuring customer satisfaction through advanced technology and a commitment to safety.
                </p>
                <p className="mt-4 text-lg md:text-xl">
                  We aim to build lasting relationships with our customers and driver-partners, enhancing the quality of travel experiences for everyone.
                </p>
              </div>
            )}

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
