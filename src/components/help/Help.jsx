// import React, { useState } from 'react';
// import './Help.css'; 

// export default function HelpAndSupport() {
//   const [isTroubleshootingVisible, setTroubleshootingVisible] = useState(false);

//   const handleLearnMoreClick = () => {
//     setTroubleshootingVisible(!isTroubleshootingVisible);
//   };

//   return (
//     <div id="help" className="bg-white bg-center bg-fixed">
//       <div className="bg-white p-20">
//         <h2 className="text-black text-5xl font-bold mb-8 text-center">
//           Help & Support
//         </h2>
//         <div className="container mx-auto p-2 bg-transparent bg-opacity-80 rounded-lg">
//           <div className="flex flex-col md:flex-row items-center justify-center gap-10">
//             <div className="md:w-1/2 md:pl-5">
//               <div className="bg-white bg-opacity-70 p-6 rounded-lg">
//                 <h3 className="text-3xl font-semibold text-black mb-4 text-center">Common Questions</h3>
//                 <ul className="space-y-4">
//                   <li className="question-box">
//                     <strong className='text-black'>How do I book a ride?</strong> 
//                     Visit the app or website, enter your destination, and select your ride type. Follow the prompts to complete your booking.
//                   </li>
//                   <li className="question-box">
//                     <strong className='text-black'>What should I do if I encounter a problem with my ride?</strong> 
//                     Contact our support team via the app or website. You can also call our helpline +1-800-456-7890 for immediate assistance.
//                   </li>
//                   <li className="question-box">
//                     <strong className='text-black'>How can I track my ride?</strong> 
//                     Use the live tracking feature on our app to monitor your ride's location in real-time.
//                   </li>
//                 </ul>
//                 <div className="text-center mt-6">
//                   <button 
//                     className="learn-more-button"
//                     onClick={handleLearnMoreClick}
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//               <br />
//               <div className={`troubleshooting-box ${isTroubleshootingVisible ? 'slide-in' : 'hidden'}`}>
//                 <h3 className="text-3xl font-semibold text-black mb-4 text-center">Troubleshooting</h3>
//                 <ul className="space-y-4">
//                   <li className="troubleshoot-box">
//                     <strong className='text-black'>App crashes or freezes:</strong> Ensure you have the latest version of the app installed. Try restarting your device if the issue persists.
//                   </li>
//                   <li className="troubleshoot-box">
//                     <strong className='text-black'>Payment issues:</strong> Verify your payment method and ensure you have a stable internet connection. Contact support if the issue remains unresolved.
//                   </li>
//                   <li className="troubleshoot-box">
//                     <strong className='text-black'>Ride not showing up:</strong> Double-check your booking details and contact support if your ride does not arrive within the expected time.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="md:w-1/2">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* Existing Images */}
//                 <img
//                   src="https://thumbs.dreamstime.com/b/yellow-taxi-car-male-driver-uniform-standing-vehicle-mobile-app-booking-city-transport-service-concept-vector-304863771.jpg"
//                   className="gallery-image"
//                   alt="Gallery Image 1"
//                 />
//                         <img
//                   src="data:image/jpeg;base64,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"
//                   className="border-2 border-gray w-full h-60 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
//                   alt="Gallery Image 2"
//                 />
//                 <img
//                   src="data:image/jpeg;base64,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"
//                   className="border-2 border-gray w-full h-60 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500"
//                   alt="Gallery Image 3"
//                 />
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLpeImiMsndS--A1Nn2W4OTxVeyv18E-KMQ&s"
//                   className="gallery-image"
//                   alt="Gallery Image 4"
//                 />
//                 {/* New Images */}
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_BzSOgqZYHb6MXHpQkqWyonSskz-rFRujQ&s"
//                   className="gallery-image"
//                   alt="Gallery Image 7"
//                 />
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9i02U9DyGGfF_3oWYZN7iBfhoVses4bHZfw&s"
//                   className="gallery-image"
//                   alt="Gallery Image 8"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import Title from '../Title/Title';
// import "./About.css";

export default function HelpAndSupport1() {
  const [showDetails, setShowDetails] = useState(false);

  const handleLearnMoreClick = () => {
    setShowDetails(!showDetails);
  };

  const helpandsupport = [
    {
      img: "../src/Components/help/img/helpandsupport1.jpg",
      alt: "1st image"
    },
    {
      img: "../src/Components/help/img/helpandsupport2.jpg",
      alt: "2nd image"
    },
    {
      img: "../src/Components/help/img/helpandsupport3.jpg",
      alt: "3rd image"
    },
    {
      img: "../src/Components/help/img/helpandsupport4.jpg",
      alt: "4th image"
    },
    {
      img: "../src/Components/help/img/helpandsupport5.jpg",
      alt: "5th image"
    },
    {
      img: "../src/Components/help/img/helpandsupport6.jpg",
      alt: "6th image"
    },
  ];

  return (
    <div className="py-4 md:py-10 " id="about">
      <Title title="Help and support" />
      <div className="mx-auto p-2 m-2 mb-10 lg:px-3 w-full xl:w-4/5 shadow-sm shadow-gray-400 ">
      
        <div className="flex flex-col md:flex-row my-2 md:my-10">
          

          {/* Text content */}
          <div className={`xl:px-10 order-2 md:order-1 md:w-2/3 md:pl-3 p-1 md:p-3 rounded-lg`}>
           
            <div className='xl:pt-6 md:p-2'>
                <h3 className="text-3xl font-semibold text-black mb-4 text-center">Common Questions</h3>
                <ul className="space-y-4">
                  <li className="text-lg md:text-xl text-black bg-orange-50 shadow-sm shadow-gray-500 p-3 rounded-lg">
                    <strong className='text-black pr-2'>How do I book a ride?</strong> 
                    Visit the app or website, enter your destination, and select your ride type. Follow the prompts to complete your booking.
                   </li>
                  <li className="text-lg md:text-xl text-black bg-orange-50 shadow-sm shadow-gray-500 p-3 rounded-lg">
                     <strong className='text-black pr-2'>What should I do if I encounter a problem with my ride?</strong> 
                     Contact our support team via the app or website. You can also call our helpline +1-800-456-7890 for immediate assistance.
                   </li>
                  <li className="text-lg md:text-xl text-black bg-orange-50 shadow-sm shadow-gray-500 p-3 rounded-lg">
                     <strong className='text-black pr-2'>How can I track my ride?</strong> 
                     Use the live tracking feature on our app to monitor your ride's location in real-time.
                   </li>
                 </ul>
            <button
              onClick={handleLearnMoreClick}
              className="mt-4 lg:mt-8 px-6 py-2 text-lg font-medium text-black bg-orange-400 rounded-lg shadow-md hover:bg-orange-500 focus:outline-none"
            >
              {showDetails ? 'Hide Details' : 'Learn More'}
            </button>

            {showDetails && (
              <div className="mt-8 perspective-container">
                 <h3 className="text-3xl font-semibold text-black mb-4 text-center">Troubleshooting</h3>
                 <ul className="space-y-4">
                   <li className="text-lg md:text-xl text-black bg-orange-50 shadow-sm shadow-gray-500 p-3 rounded-lg">
                     <strong className='text-black pr-2'>App crashes or freezes:</strong> Ensure you have the latest version of the app installed. Try restarting your device if the issue persists.
                   </li>
                   <li className="text-lg md:text-xl text-black bg-orange-50 shadow-sm shadow-gray-500 p-3 rounded-lg">
                     <strong className='text-black pr-2'>Payment issues:</strong> Verify your payment method and ensure you have a stable internet connection. Contact support if the issue remains unresolved.
                   </li>
                   <li className="text-lg md:text-xl text-black bg-orange-50 shadow-sm shadow-gray-500 p-3 rounded-lg">
                     <strong className='text-black pr-2'>Ride not showing up:</strong> Double-check your booking details and contact support if your ride does not arrive within the expected time.
                   </li>
                 </ul>
              </div>
            )}

            </div>
            
          </div>

          {/* Image Grid */}
          <div className="order-1 md:order-2 p-3 lg:p-5 flex flex-wrap justify-center items-center w-full md:w-4/5">
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 justify-center items-center">
              {
                helpandsupport.map((item, index) => (
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


        </div>
      </div>
    </div>
  );
}

