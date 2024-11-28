import React from 'react';
import crane from "./img/crane-truck.png";
import helmet from './img/helmet.png';
import credit from "./img/credit-card.png";
import customer from './img/customer-support.png';
import Title from '../Title/Title';

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
    <div className="xl:container mx-auto">
      <Title title="why choose us" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 content-center py-12">
        {cards.map((card, index) => (
          <div className='flex justify-center items-center my-2 lg:my-6'>
            <div
            key={index}
            className={`relative p-6 rounded-full ${card.bgColor} ${card.borderColor} shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center  h-[320px] w-[220px] md:w-[250px] md:h-[350px]`}
            style={{ borderTopWidth: '10px'}}
          >
            <div className="absolute -top-8 w-12 md:w-16 h-12 md:h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-xl shadow-md">
              {index + 1}
            </div>
            <img src={card.image} alt={card.title} className="h-16 md:h-20 w-16 md:w-20 mt-8" />
            <h3 className="font-bold text-lg text-center mt-4">{card.title}</h3>
            <p className="text-gray-600 text-base lg:text-lg text-center mt-2">{card.para}</p>
          </div>

          </div>
          
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
