import React, { useState } from "react";
import "./Steppers.css";
import { TiTick } from "react-icons/ti";
import Title from "../Title/Title";

const Steppers = () => {
  const steps = ["Personal Details","Select ride partner", "Vehicle & Rental Details", "Payment Details","Completed "];
  const [currentStep, setCurrentStep] = useState(6);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center flex-wrap my-3 md:my-6">
        <Title title="How to Book"/>
      <p className='p-1 text-base md:text-xl text-center lg:my-8'>You're just moments away from starting your thrilling new business journey!"</p>
      <div className="flex justify-center mx-auto w-full md:w-3/4 mt-4 md:mt-8">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? i+1 : i + 1}
            </div>
            <p className="h-16 flex items-center justify-center text-center text-sm md:text-lg text-wrap">{step}</p>
          </div>
        ))}

        </div>
        
      </div>
     
    </>
  );
};

export default Steppers;
