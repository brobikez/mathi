import React from "react";
import "./Forms.css";

const PaymentDetails = ({ formData, setFormData, errors, setErrors,  touched, setTouched, formtitle }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true })); // Mark the field as touched
  };

  return (
    <div>
      
      <form action="" className="formcontent ">
      <h2 className="formtitle">{formtitle}</h2>
      <div className="holeformdiv">
              {/* bank name */}
              <div className="specificcontentdiv">
          <label htmlFor="bankname" className="label">Bank Name<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="text"
            name="bankname" 
            id="bankname" 
            className={` inputbox ${errors.name && touched.name ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter your Bank Name"
            value={formData.bankname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.bankname && touched.bankname && <p className="errormessage">{errors.bankname}</p>}

          </div>
        </div>
        {/* account number */}
        <div className="specificcontentdiv">
          <label htmlFor="accnumber" className="label">Bank Account Number<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="number"
            name="accnumber" 
            id="accnumber" 
            className={` inputbox ${errors.accnumber && touched.accnumber ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter your Account Number"
            value={formData.accnumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.accnumber && touched.accnumber && <p className="errormessage">{errors.accnumber}</p>}

          </div>
        </div>
        {/* ifsc cide */}
         <div className="specificcontentdiv">
            <label htmlFor="ifsccode" className="label">Enter IFSC Code<span className="mandatorystar"> *</span></label>
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 xl:w-2/5">
            <input
                type="string"
                name="ifsccode" 
                id="ifsccode" 
                className={` inputbox ${errors.ifsccode && touched.ifsccode ? "border-red-500" : "border-gray-300"}`}
                placeholder="Enter IFSC Code"
                value={formData.ifsccode}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.ifsccode && touched.ifsccode && <p className="text-red-500 text-sm md:text-base mt-1 px-1">{errors.ifsccode}</p>}

          </div>
          </div>
          {/* branch name */}
         <div className="specificcontentdiv">
            <label htmlFor="branchname" className="label">Enter branch name<span className="mandatorystar"> *</span></label>
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 xl:w-2/5">
            <input
                type="string"
                name="branchname" 
                id="branchname" 
                className={` inputbox ${errors.branchname && touched.branchname ? "border-red-500" : "border-gray-300"}`}
                placeholder="Enter Branch name"
                value={formData.branchname}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.branchname && touched.branchname && <p className="text-red-500 text-sm md:text-base mt-1 px-1">{errors.branchname}</p>}

          </div>
          </div>
          

        
          


      </div>
 
      </form>
    </div>
  );
};

export default PaymentDetails;
