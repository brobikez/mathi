// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { TiTick } from "react-icons/ti";
// import PersonalDetails from "./CarPartnerForm/PersonalDetails";
// import ChooseYourPartnership from "./CarPartnerForm/ChooseYourPartnership";
// import { personalDetailsSchema, vehicleInfoSchema, paymentInfoSchema } from "./CarPartnerForm/ValidationSchema";
// import VehicleDetails from "./CarPartnerForm/VehicleDetails";
// import PaymentDetails from "./CarPartnerForm/PaymentDetails";
// import FinishedDetails from "./CarPartnerForm/FinishedDetails";

// const StepperForm = ({ step }) => {
//   const steps = ["Personal Info", "Choose Your Partnership", "Vehicle Info", "Payment Info", "Completed"];
//   const [isOptionSelected, setIsOptionSelected] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [currentStep, setCurrentStep] = useState(step);
//   const [complete, setComplete] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "", email: "", pno: "", dob: "", address: "", gender: "", photo: "", proof: "",
//     brand: "", model: "", registrationnumber: "", mileage: "", seatingcapability: "", fueltype: "",
//     transmissiontype: "", insurance: "", rcbook: "", rentaldurationstartdate: "", rentaldurationenddate: "",
//     drivinglicense: "", expirydate: "", bankname: "", branchname: "", accnumber: "", ifsccode: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const navigate = useNavigate();

//   // Validate step based on the schema
//   const validateStep = async (data) => {
//     let schema;
//     if (currentStep === 1) {
//       schema = personalDetailsSchema;
//     } else if (currentStep === 3) {
//       schema = vehicleInfoSchema;
//     } else if (currentStep === 4) {
//       schema = paymentInfoSchema;
//     } else {
//       schema = null;  // No validation schema for ChooseYourPartnership or Completed step
//     }

//     if (!schema) return true;

//     try {
//       await schema.validate(data, { abortEarly: false });
//       setErrors({});
//       return true;
//     } catch (error) {
//       const validationErrors = {};
//       error.inner.forEach((err) => {
//         validationErrors[err.path] = err.message;
//       });
//       setErrors(validationErrors);
//       return false;
//     }
//   };

//   // Handle the "Next" button click
//   const handleNext = async () => {
//     if (currentStep === 2 && !isOptionSelected) return; // Prevent moving forward if no option selected on Step 2

//     const newTouched = Object.keys(formData).reduce((acc, key) => {
//       acc[key] = true;
//       return acc;
//     }, {});

//     setTouched((prev) => ({ ...prev, ...newTouched }));

//     const isValid = await validateStep(formData);
//     if (isValid) {
//       if (currentStep === steps.length) {
//         setComplete(true);
//       } else {
//         setCurrentStep((prev) => prev + 1);
//         // Navigate to the next step URL
//         navigate(`/stepperform${currentStep + 1}`);
//       }
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col gap-10 items-center justify-center flex-wrap">
//         <div className="flex justify-center mx-auto w-full md:w-3/4 mt-4">
//           {steps.map((step, i) => (
//             <div
//               key={i}
//               className={`step-item ${currentStep === i + 1 ? "active" : ""} ${i + 1 < currentStep || complete ? "complete" : ""}`}
//             >
//               <div className="step">
//                 {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
//               </div>
//               <p className="h-16 flex items-center justify-center text-center text-sm md:text-lg text-wrap ">
//                 {step}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="w-full">
//         {currentStep === 1 && (
//           <PersonalDetails
//             formData={formData}
//             setFormData={setFormData}
//             errors={errors}
//             setErrors={setErrors}
//             touched={touched}
//             setTouched={setTouched}
//             formtitle="Personal Information"
//           />
//         )}
//         {currentStep === 2 && (
//           <ChooseYourPartnership
//             isOptionSelected={isOptionSelected}
//             setIsOptionSelected={setIsOptionSelected}
//             setSelectedOption={setSelectedOption} // Pass state props
//           />
//         )}
//         {currentStep === 3 && (
//           <VehicleDetails
//             formData={formData}
//             setFormData={setFormData}
//             errors={errors}
//             setErrors={setErrors}
//             touched={touched}
//             setTouched={setTouched}
//             formtitle="Vehicle Information"
//             selectedOption={selectedOption}
//           />
//         )}
//         {currentStep === 4 && (
//           <PaymentDetails
//             formData={formData}
//             setFormData={setFormData}
//             errors={errors}
//             setErrors={setErrors}
//             touched={touched}
//             setTouched={setTouched}
//             formtitle="Payment Information"
//           />
//         )}
//         {currentStep === 5 && (
//           <FinishedDetails
//             formData={formData}
//             setFormData={setFormData}
//             errors={errors}
//             setErrors={setErrors}
//             touched={touched}
//             setTouched={setTouched}
//           />
//         )}
//       </div>

//       <div className="flex justify-center items-center w-full pb-5">
//         {!complete && currentStep < steps.length && (
//           <button
//             className="next-btn"
//             onClick={handleNext}
//             disabled={currentStep === 2 && !isOptionSelected} // Disable Next on Step 2 if no option selected
//           >
//             {currentStep === steps.length - 1 ? "Finish" : "Next"}
//           </button>
//         )}
//       </div>
//     </>
//   );
// };

// export default StepperForm;



import React, { useState } from "react";
import "./StepperForm.css";
import { TiTick } from "react-icons/ti";
import PersonalDetails from "./CarPartnerForm/PersonalDetails";
import ChooseYourPartnership from "./CarPartnerForm/ChooseYourPartnership";
import { personalDetailsSchema, vehicleInfoSchema, paymentInfoSchema } from "./CarPartnerForm/ValidationSchema";
import VehicleDetails from "./CarPartnerForm/VehicleDetails";
import PaymentDetails from "./CarPartnerForm/PaymentDetails";
import FinishedDetails from "./CarPartnerForm/FinishedDetails";

const StepperForm = () => {
  const steps = ["Personal Info", "Choose Your Partnership", "Vehicle Info", "Payment Info", "Completed"];
  const [isOptionSelected, setIsOptionSelected] = useState(false); // Add state for option selection
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", pno: "", dob: "", address: "", gender: "", photo: "", proof: null,
    brand: "", model: "", registrationnumber: "", mileage: "", seatingcapability: "", fueltype: "",
    transmissiontype: "", insurance: "", rcbook: "", rentaldurationstartdate: "", rentaldurationenddate: "",
    drivinglicense: "", expirydate: "", bankname: "", branchname: "", accnumber: "", ifsccode: ""
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateStep = async (data) => {
    let schema;
    if (currentStep === 1) {
      schema = personalDetailsSchema;
    } else if (currentStep === 3) {
      schema = vehicleInfoSchema;
    } else if (currentStep === 4) {
      schema = paymentInfoSchema;
    } else {
      schema = null;  // No validation schema for ChooseYourPartnership or Completed step
    }

    if (!schema) return true;

    try {
      await schema.validate(data, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
      return false;
    }
  };

  const handleNext = async () => {
    if (currentStep === 2 && !isOptionSelected) return; // Prevent moving forward if no option selected on Step 2

    const newTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});

    setTouched((prev) => ({ ...prev, ...newTouched }));

    const isValid = await validateStep(formData);
    if (isValid) {
      if (currentStep === steps.length) {
        setComplete(true);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center flex-wrap">
        <div className="flex justify-center mx-auto w-full md:w-3/4 mt-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 ? "active" : ""} ${
                i + 1 < currentStep || complete ? "complete" : ""
              }`}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="h-16 flex items-center justify-center text-center text-sm md:text-lg text-wrap ">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        {currentStep === 1 && (
          <PersonalDetails
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            touched={touched}
            setTouched={setTouched}
            formtitle="Personal Information"
          />
        )}
        {currentStep === 2 && (
          <ChooseYourPartnership
            isOptionSelected={isOptionSelected}
            setIsOptionSelected={setIsOptionSelected} // Pass state props
            setSelectedOption={setSelectedOption} 
          />
        )}
        {currentStep === 3 && (
          <VehicleDetails
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            touched={touched}
            setTouched={setTouched}
            formtitle="Vehicle Information"
            selectedOption={selectedOption}
          />
        )}
        {currentStep === 4 && (
          <PaymentDetails
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            touched={touched}
            setTouched={setTouched}
            formtitle="Payment Information"
          />
        )}
        {currentStep === 5 && (
          <FinishedDetails
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            touched={touched}
            setTouched={setTouched}
          />
        )}
      </div>

      <div className="flex justify-center items-center w-full pb-5">
        {!complete && currentStep < steps.length && (
          <button
            className="next-btn"
            onClick={handleNext}
            disabled={currentStep === 2 && !isOptionSelected} // Disable Next on Step 2 if no option selected
          >
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </>
  );
};

export default StepperForm;
