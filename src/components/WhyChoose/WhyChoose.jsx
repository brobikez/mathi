import React from 'react';
import crane from "./img/crane-truck.png";
import helmet from './img/helmet.png';
import credit from "./img/credit-card.png";
import customer from './img/customer-support.png';

const WhyChoose = () => {
  const cards = [
    {
      id: 1,
      image: crane,
      title: "Roadside Assist",
      para: "Award-winning customer support ready to help you 24x7. Call us anytime.",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-400",
    },
    {
      id: 2,
      image: customer,
      title: "Bike Maintenance",
      para: "Our vehicles are serviced regularly, ready for your use whenever needed.",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-400",
    },
    {
      id: 3,
      image: helmet,
      title: "Freebies",
      para: "First aid kits always. Sometimes more.",
      bgColor: "bg-green-100",
      borderColor: "border-green-400",
    },
    {
      id: 4,
      image: credit,
      title: "Secure Payment",
      para: "Our payment partners are industry leaders.",
      bgColor: "bg-teal-100",
      borderColor: "border-teal-400",
    },
  ];

  return (
    <div className="container mx-auto p-4 py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-full ${card.bgColor} ${card.borderColor} shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center`}
            style={{ borderTopWidth: '10px', height: '350px', width: '250px' }}
          >
            <div className="absolute -top-8 w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-xl shadow-md">
              {index + 1}
            </div>
            <img src={card.image} alt={card.title} className="h-20 w-20 mt-12" />
            <h3 className="font-bold text-lg text-center mt-4">{card.title}</h3>
            <p className="text-gray-600 text-center mt-2">{card.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
