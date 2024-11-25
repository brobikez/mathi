import React from "react";
import "./Forms.css";

const PersonalDetails = ({ formData, setFormData, errors, setErrors,  touched, setTouched, formtitle }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
};

const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    // validateFileUpload(field);
};

  return (
    <div>
      
      <form action="" className="formcontent ">
      <h2 className="formtitle">{formtitle}</h2>
      <div className="holeformdiv">
              {/* name */}
              <div className="specificcontentdiv">
          <label htmlFor="name" className="label">Enter Name<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="text"
            name="name" 
            id="name" 
            className={` inputbox ${errors.name && touched.name ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && <p className="errormessage">{errors.name}</p>}

          </div>
        </div>
        {/* email */}
        <div className="specificcontentdiv">
          <label htmlFor="email" className="label">Enter Email<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="email"
            name="email" 
            id="email" 
            className={` inputbox ${errors.email && touched.email ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && <p className="errormessage">{errors.email}</p>}

          </div>
        </div>
        {/* phone no */}
         <div className="specificcontentdiv">
            <label htmlFor="pno" className="label">Enter Phone no<span className="mandatorystar"> *</span></label>
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 xl:w-2/5">
            <input
              type="text" // Use text to enable maxLength
              name="pno"
              id="pno"
              inputMode="numeric" // This helps to bring up the numeric keyboard on mobile devices
              maxLength={10} // Limits input to 10 characters
              className={`inputbox ${errors.pno && touched.pno ? "border-red-500" : "border-gray-300"}`}
              placeholder="Enter your phone number"
              value={formData.pno}
              onChange={(e) => {
                // Ensure only numbers are entered and limit to 10 characters
                const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
                if (value.length <= 10) {
                  handleChange(e); // Only allow up to 10 digits
                }
              }}
            />
            
            {errors.pno && touched.pno && <p className="text-red-500 text-sm md:text-base mt-1 px-1">{errors.pno}</p>}

          </div>
          </div>
          {/* dob */}
         <div className="specificcontentdiv">
            <label htmlFor="pno" className="label">Enter DOB<span className="mandatorystar"> *</span></label>
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 xl:w-2/5">
            <input
                type="date"
                name="dob" 
                id="dob" 
                className={` inputbox ${errors.dob && touched.dob ? "border-red-500" : "border-gray-300"}`}
                placeholder="Enter your Email"
                value={formData.dob}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.dob && touched.dob && <p className="errormessage">{errors.dob}</p>}

          </div>
          </div>
          {/* address */}
         <div className="specificcontentdiv">
            <label htmlFor="pno" className="label">Enter Address<span className="mandatorystar"> *</span></label>
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 xl:w-2/5">
            <input
                type="text"
                name="address" 
                id="address" 
                className={` inputbox ${errors.address && touched.address ? "border-red-500" : "border-gray-300"}`}
                placeholder="Enter your Address"
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.address && touched.address && <p className="errormessage">{errors.address}</p>}

          </div>
          </div>
          {/* gender */}
          <div className="specificcontentdiv">
            <label htmlFor="gender" className="label">Gender<span className="mandatorystar"> *</span></label>
            <div className="flex flex-row flex-wrap md:flex-row w-full md:w-1/2 lg:w-1/2 xl:w-2/5 p-2">
                <div className="flex items-center mx-2">
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        className={`mr-2 ${errors.gender && touched.gender ? "border-red-500" : "border-gray-300"}`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={formData.gender === "male"}
                    />
                    <label htmlFor="male" className="text-base md:text-lg text-black">Male</label>
                </div>
                <div className="flex items-center mx-2">
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        className={`mr-2 ${errors.gender && touched.gender ? "border-red-500" : "border-gray-300"}`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={formData.gender === "female"}
                    />
                    <label htmlFor="female" className="text-base md:text-lg text-black">Female</label>
                </div>
                <div className="flex items-center mx-2">
                    <input
                        type="radio"
                        name="gender"
                        id="other"
                        value="other"
                        className={`mr-2 ${errors.gender && touched.gender ? "border-red-500" : "border-gray-300"}`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={formData.gender === "other"}
                    />
                    <label htmlFor="other" className="text-base md:text-lg text-black">Other</label>
                </div>
                {errors.gender && touched.gender && <p className="errormessage">{errors.gender}</p>}
            </div>
        </div>

          {/* photo */}
         <div className="specificcontentdiv">
            <label htmlFor="pno" className="label">Upload Photo<span className="mandatorystar"> *</span></label>
            <div className="inputanderrordiv">
            <input
                type="file"
                name="photo" 
                id="photo" 
                className={` inputbox ${errors.photo && touched.photo ? "border-red-500" : "border-gray-300"}`}
                placeholder="Enter your photo"
                value={formData.photo}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.photo && touched.photo && <p className="errormessage">{errors.photo}</p>}

          </div>
          </div>
          {/* proof */}
         <div className="specificcontentdiv">
            <label htmlFor="pno" className="label">Upload proof<span className="mandatorystar"> *</span></label>
            <div className="inputanderrordiv">
            <select name="Please select" id="proof" className={` inputbox mb-1 ${errors.proof && touched.proof ? "border-red-500" : "border-gray-300"}`}>
                <option value="">Aadhar Card</option>
                <option value="">Pan Card</option>
                <option value="">License Card</option>
            </select>
            <input
                type="file"
                name="proof" 
                id="proof" 
                className={`inputbox ${errors.proof && touched.proof ? "border-red-500" : "border-gray-300"}`}
                placeholder="Enter your proof"
                value={formData.proof}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            
            {errors.proof && touched.proof && <p className="errormessage">{errors.proof}</p>}
            
            
          </div>
          </div>
        
          


      </div>
 
      </form>
    </div>
  );
};

export default PersonalDetails;
