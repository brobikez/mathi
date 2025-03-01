import React from 'react';
import Title from '../Title/Title';

const HostingCalculation = () => {
  return (
    <div className="py-4 md:py-10">
      <Title title="Hosting stats" />
      <div className="container mx-auto px-2 md:px-4 py-2 pt-4 md:pt-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 border-2 border-red-600">
          {[
            { color: "bg-purple-800", icon: "fas fa-check-circle", title: "Verified Bikes", text: "Total Verified Bikes: 1000" },
            { color: "bg-purple-700", icon: "fas fa-shield-alt", title: "Trusted Bikes", text: "Total Trusted Bikes: 800" },
            { color: "bg-purple-700", icon: "fas fa-road", title: "KMs Driven", text: "Total KMs Driven: 500,000" },
            { color: "bg-purple-700", icon: "fas fa-plane", title: "Airports", text: "Serving 20+ Airports" },
            { color: "bg-purple-700", icon: "fas fa-train", title: "Railway Stations", text: "Near 30+ Railway Stations" },
            { color: "bg-purple-700", icon: "fas fa-bus", title: "Bus Stands", text: "Located near 40+ Bus Stands" }
          ].map((box, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg  hover:shadow-xl hover:shadow-orange-500 transition duration-300 transform hover:scale-105 hover:text-black">
              <div className={`flex items-center justify-center h-20 ${box.color} rounded-t-lg`}>
                <i className={`${box.icon} text-3xl text-white`}></i>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">{box.title}</h3>
                <p className="text-gray-700">{box.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostingCalculation;

