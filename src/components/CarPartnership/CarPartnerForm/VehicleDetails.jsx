// import React, { useRef, useState, useEffect  } from "react";
// import "./Forms.css";
// import Box from '@mui/material/Box';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';


// const VehicleDetails = ({ formData, setFormData, errors, setErrors,  touched, setTouched, formtitle, selectedOption }) => {
//   const fileInputRefs = useRef([]);
//   const [vall, setVall] = useState("");

//   useEffect(() => {
//       switch (selectedOption) {
//           case "carRental":
//           case "carPartner":
//               setVall("Car");
//               break;
//           case "bikeRental":
//           case "bikePartner":
//               setVall("Bike");
//               break;
//           case "autoPartner":
//               setVall("Auto");
//               break;
//           default:
//               setVall("");
//       }
//   }, [selectedOption]);

//   const [fileNames, setFileNames] = useState({
//       mainimage: [],
//       frontRearImage: [],
//       leftRightImage: [],
//       interiorImage: [],
//   });

//   const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prev) => ({ ...prev, [name]: value }));
//       if (errors[name]) {
//           setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
//       }
//   };

//   const handleBlur = (field) => {
//       setTouched((prev) => ({ ...prev, [field]: true }));
//       validateFileUpload(field);
//   };

//   const validateFileUpload = (field) => {
//     const requiredFields = ['mainimage', 'frontRearImage', 'leftRightImage', 'interiorImage'];
//     if (requiredFields.includes(field) && fileNames[field].length === 0) {
//         setErrors((prev) => ({ ...prev, [field]: 'File upload is required.' }));
//     }
// };

//   const handleFileChange = (event, fieldName) => {
//     const files = Array.from(event.target.files);
//     if (files.length > 0) {
//         const newFileNames = files.map(file => file.name);
//         setFileNames((prev) => ({
//             ...prev,
//             [fieldName]: [...prev[fieldName], ...newFileNames],
//         }));
//         setFormData((prev) => ({ ...prev, [fieldName]: files }));
//         setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
//     }
// };

//   const handleFabClick = (field) => {
//       if (fileInputRefs.current[field]) {
//           fileInputRefs.current[field].click();
//       }
//   };
//   return (
//     <div>
      
//       <form action="" className="formcontent ">
//       <h2 className="formtitle">{formtitle}</h2>
//       <div className="holeformdiv">
//           {/* brand */}
//           <div className="specificcontentdiv">
//           <label htmlFor="brand" className="label">{vall} Brand<span className="mandatorystar"> *</span></label>
//           <div className="inputanderrordiv">
//           <input
//             type="text"
//             name="brand" 
//             id="brand" 
//             className={` inputbox ${errors.brand && touched.brand ? "border-red-500" : "border-gray-300"}`}
//             placeholder="Enter your vehicle Brand"
//             value={formData.brand}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.brand && touched.brand && <p className="errormessage">{errors.brand}</p>}

//           </div>
//         </div>
//         {/* model */}
//         <div className="specificcontentdiv">
//           <label htmlFor="model" className="label">{vall} Model<span className="mandatorystar"> *</span></label>
//           <div className="inputanderrordiv">
//           <input
//             type="text"
//             name="model" 
//             id="model" 
//             className={` inputbox ${errors.model && touched.model ? "border-red-500" : "border-gray-300"}`}
//             placeholder="Enter your vehicle model"
//             value={formData.model}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.model && touched.model && <p className="errormessage">{errors.model}</p>}
//           </div>
//         </div>
        
//         {/* Registration number */}
//         <div className="specificcontentdiv">
//           <label htmlFor="registrationnumber" className="label">Registration number<span className="mandatorystar"> *</span></label>
//           <div className="inputanderrordiv">
//           <input
//             type="number"
//             name="registrationnumber" 
//             id="registrationnumber" 
//             className={` inputbox ${errors.registrationnumber && touched.registrationnumber ? "border-red-500" : "border-gray-300"}`}
//             placeholder="Enter your vehicle mileage"
//             value={formData.registrationnumber}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.registrationnumber && touched.registrationnumber && <p className="errormessage">{errors.registrationnumber}</p>}

//           </div>
//         </div>
//         {/* mileage */}
//         <div className="specificcontentdiv">
//           <label htmlFor="mileage" className="label">{vall} Mileage<span className="mandatorystar"> *</span></label>
//           <div className="inputanderrordiv">
//           <input
//             type="number"
//             name="mileage" 
//             id="mileage" 
//             className={` inputbox ${errors.mileage && touched.mileage ? "border-red-500" : "border-gray-300"}`}
//             placeholder="Enter your vehicle mileage"
//             value={formData.mileage}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.mileage && touched.mileage && <p className="errormessage">{errors.mileage}</p>}

//           </div>
//         </div>
//         {selectedOption !== "bikeRental" && selectedOption !== "bikePartner" && (
//           <div>
//             {/* seating capacity */}
//         <div className="specificcontentdiv">
//           <label htmlFor="seatingcapability" className="label">{vall} Seating Capacity(with driver)<span className="mandatorystar"> *</span></label>
//           <div className="inputanderrordiv">
//           <input
//             type="number"
//             name="seatingcapability" 
//             id="seatingcapability" 
//             className={` inputbox ${errors.seatingcapability && touched.seatingcapability ? "border-red-500" : "border-gray-300"}`}
//             placeholder="Enter your vehicle seating capcity"
//             value={formData.seatingcapability}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.seatingcapability && touched.seatingcapability && <p className="errormessage">{errors.seatingcapability}</p>}

//           </div>
//         </div>

//           </div>
//         )}
        
//         {/* fuel type */}
//         <div className="specificcontentdiv">
//           <label htmlFor="fueltype" className="label">{vall} Fuel Type<span className="mandatorystar"> *</span></label>
//           <div className="inputanderrordiv">
//             <select
//               name="fueltype" // Corrected name attribute
//               id="fueltype"
//               className={`inputbox mb-1 ${errors.fueltype && touched.fueltype ? "border-red-500" : "border-gray-300"}`}
//               value={formData.fueltype}
//               onChange={handleChange} 
//               onBlur={() => handleBlur('fueltype')}
//             >
//               <option value="">Please select</option>
//               <option value="Petrol">Petrol</option> 
//               <option value="Diesel">Diesel</option>
//               <option value="Electric">Electric</option>
//             </select>
//             {errors.fueltype && touched.fueltype && <p className="errormessage">{errors.fueltype}</p>}
//           </div>
//         </div>
//         {/* transmission type */}
//         <div className="specificcontentdiv">
//             <label htmlFor="transmissiontype" className="label">Transmisson Type<span className="mandatorystar"> *</span></label>
//             <div className="flex flex-row flex-wrap md:flex-row w-full md:w-1/2 lg:w-1/2 xl:w-2/5 p-2">
//                 <div className="flex items-center mx-2">
//                     <input
//                         type="radio"
//                         name="transmissiontype"
//                         id="manual"
//                         value="manual"
//                         className={`mr-2 ${errors.transmissiontype && touched.transmissiontype ? "border-red-500" : "border-gray-300"}`}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         checked={formData.transmissiontype === "manual"}
//                     />
//                     <label htmlFor="manual" className="text-base md:text-lg text-black">Manual</label>
//                 </div>
//                 <div className="flex items-center mx-2">
//                     <input
//                         type="radio"
//                         name="transmissiontype"
//                         id="automatic"
//                         value="automatic"
//                         className={`mr-2 ${errors.transmissiontype && touched.transmissiontype ? "border-red-500" : "border-gray-300"}`}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         checked={formData.transmissiontype === "automatic"}
//                     />
//                     <label htmlFor="automatic" className="text-base md:text-lg text-black">Automatic</label>
//                     {errors.transmissiontype && touched.transmissiontype && <p className="errormessage">{errors.transmissiontype}</p>}
//                 </div>
                
//             </div>
//         </div>
//         {/* insurance certificate */}
//         <div className="specificcontentdiv">
//           <label htmlFor="insurance" className="label">Upload Insurance Certificate<span className="mandatorystar"> *</span></label>
//           <div className="inputanderrordiv">
//           <input
//             type="file"
//             name="insurance" 
//             id="insurance" 
//             className={` inputbox ${errors.insurance && touched.insurance ? "border-red-500" : "border-gray-300"}`}
//             placeholder="Enter your vehicle seating capcity"
//             value={formData.insurance}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.insurance && touched.insurance && <p className="errormessage">{errors.insurance}</p>}

//           </div>
//         </div>
//         {/* rc certificate */}
//         <div className="specificcontentdiv">
//           <label htmlFor="rcbook" className="label">Upload registration Certificate(RC)<span className="mandatorystar"> *</span></label>
//           <div className="inputanderrordiv">
//           <input
//             type="file"
//             name="rcbook" 
//             id="rcbook" 
//             className={` inputbox ${errors.rcbook && touched.rcbook ? "border-red-500" : "border-gray-300"}`}
//             value={formData.rcbook}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.rcbook && touched.rcbook && <p className="errormessage">{errors.rcbook}</p>}

//           </div>
//         </div>

//         {/* rental duration */}
//         <h2 className="formtitle">Rental Duration</h2>
//         {/* rental start date */}
//         <div className="specificcontentdiv">
//           <label htmlFor="rentaldurationstartdate" className="label">Rental Start Date<span className="mandatorystar"> *</span></label>
//           <div className="inputanderrordiv">
//           <input
//             type="date"
//             name="rentaldurationstartdate" 
//             id="rentaldurationstartdate" 
//             className={` inputbox ${errors.rentaldurationstartdate && touched.rentaldurationstartdate ? "border-red-500" : "border-gray-300"}`}
//             value={formData.rentaldurationstartdate}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.rentaldurationstartdate && touched.rentaldurationstartdate && <p className="errormessage">{errors.rentaldurationstartdate}</p>}

//           </div>
//         </div>
//         {/* rental end date */}
//         <div className="specificcontentdiv">
//           <label htmlFor="rentaldurationenddate" className="label">Rental End Date<span className="mandatorystar"> *</span></label>
//           <div className="inputanderrordiv">
//           <input
//             type="date"
//             name="rentaldurationenddate" 
//             id="rentaldurationenddate" 
//             className={` inputbox ${errors.rentaldurationenddate && touched.rentaldurationenddate ? "border-red-500" : "border-gray-300"}`}
//             value={formData.rentaldurationenddate}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.rentaldurationenddate && touched.rentaldurationenddate && <p className="errormessage">{errors.rentaldurationenddate}</p>}
//           </div>
//         </div>

//         {/* Add Car Images */}
//         <h2 className="formtitle">Add Car Images</h2>
//           <div className="flex justify-center flex-col items-center border-2 border-gray-400 mx-auto w-full lg:w-2/4 mb-3">
//             <h1 className="pt-3 text-lg text-center">This image of your {vall} will be displayed to customers<span className="mandatorystar"> *</span></h1>
//             <Box sx={{ '& > :not(style)': { m: 2 } }}>
//               <Fab color="warning" aria-label="add" onClick={() => handleFabClick('mainimage')}>
//                 <AddIcon />
//               </Fab>
//             </Box>
//             <input
//               type="file"
//               ref={el => fileInputRefs.current['mainimage'] = el}
//               onChange={(e) => handleFileChange(e, 'mainimage')}
//               multiple
//               style={{ display: 'none' }}
//             />
//             {fileNames.mainimage.map((fileName, index) => (
//               <p key={index} className="uploaded-filename">{fileName}</p>
//             ))}
//             {errors.mainimage && <p className="errormessage">{errors.mainimage}</p>}
//           </div>

//           {/* Repeat similar blocks for other image uploads */}
//           <div>
//             {/* Front/Rear Image Upload */}
//             <div className="flex justify-center flex-col items-center border-2 border-gray-400 mx-auto w-full lg:w-2/4 mb-3">
//                 <h1 className="pt-3 text-lg text-center">
//                     Upload images of the {vall} front and rear.<span className="mandatorystar"> *</span>
//                 </h1>
//                 <Box sx={{ '& > :not(style)': { m: 2 } }}>
//                     <Fab color="warning" aria-label="add" onClick={() => handleFabClick('frontRearImage')}>
//                         <AddIcon />
//                     </Fab>
//                 </Box>
//                 <input
//                     type="file"
//                     ref={(el) => (fileInputRefs.current['frontRearImage'] = el)}
//                     onChange={(e) => handleFileChange(e, 'frontRearImage')}
//                     multiple
//                     style={{ display: 'none' }}
//                     onBlur={() => handleBlur('frontRearImage')}
//                 />
//                 {fileNames.frontRearImage.map((fileName, index) => (
//                     <p key={index} className="uploaded-filename">
//                         {fileName}
//                     </p>
//                 ))}
//                 {errors.frontRearImage && <p className="errormessage">{errors.frontRearImage}</p>}
//             </div>  
//         </div>

//           {/* Repeat for left and right images */}
//           <div className="flex justify-center flex-col items-center border-2 border-gray-400 mx-auto w-full lg:w-2/4 mb-3">
//             <h1 className="pt-3 text-lg text-center">Upload images of the {vall} left and right sides.<span className="mandatorystar"> *</span></h1>
//             <Box sx={{ '& > :not(style)': { m: 2 } }}>
//               <Fab color="warning" aria-label="add" onClick={() => handleFabClick('leftRightImage')}>
//                 <AddIcon />
//               </Fab>
//             </Box>
//             <input
//               type="file"
//               ref={el => fileInputRefs.current['leftRightImage'] = el}
//               onChange={(e) => handleFileChange(e, 'leftRightImage')}
//               multiple
//               style={{ display: 'none' }}
//             />
//             {fileNames.leftRightImage.map((fileName, index) => (
//               <p key={index} className="uploaded-filename">{fileName}</p>
//             ))}
//             {errors.leftRightImage && <p className="errormessage">{errors.leftRightImage}</p>}
//           </div>
//           {selectedOption !== "bikeRental" && selectedOption !== "bikePartner" && (
//             <div>
//               {/* Repeat for interior image */}
//           <div className="flex justify-center flex-col items-center border-2 border-gray-400 mx-auto w-full lg:w-2/4 mb-3 px-4">
//             <h1 className="pt-3 text-lg text-center">Upload an image of the {vall} interior.<span className="mandatorystar"> *</span></h1>
//             <Box sx={{ '& > :not(style)': { m: 2 } }}>
//               <Fab color="warning" aria-label="add" onClick={() => handleFabClick('interiorImage')}>
//                 <AddIcon />
//               </Fab>
//             </Box>
//             <input
//               type="file"
//               ref={el => fileInputRefs.current['interiorImage'] = el}
//               onChange={(e) => handleFileChange(e, 'interiorImage')}
//               multiple
//               style={{ display: 'none' }}
//             />
//             {fileNames.interiorImage.map((fileName, index) => (
//               <p key={index} className="uploaded-filename">{fileName}</p>
//             ))}
//             {errors.interiorImage && <p className="errormessage">{errors.interiorImage}</p>}
//           </div>

//             </div>
//           )}

//           {/* driving licence details */}
//           {selectedOption !== "carRental" && selectedOption !== "bikeRental" && (
//             <div>
//               <h2 className="formtitle">License Information</h2>
//           {/* driving license */}         
//             <div className="specificcontentdiv">
//             <label htmlFor="drivinglicense" className="label">Upload driving license<span className="mandatorystar"> *</span></label>
//             <div className="inputanderrordiv">
//             <input
//               type="file"
//               name="drivinglicense" 
//               id="drivinglicense" 
//               className={` inputbox ${errors.drivinglicense && touched.drivinglicense ? "border-red-500" : "border-gray-300"}`}
//               value={formData.drivinglicense}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.drivinglicense && touched.drivinglicense && <p className="errormessage">{errors.drivinglicense}</p>}
  
//             </div>
//           </div>
//           {/* expiry date */}
//           <div className="specificcontentdiv">
//           <label htmlFor="expirydate" className="label">License Expiry Date<span className="mandatorystar"> *</span></label>
//           <div className="inputanderrordiv">
//           <input
//             type="date"
//             name="expirydate" 
//             id="expirydate" 
//             className={` inputbox ${errors.expirydate && touched.expirydate ? "border-red-500" : "border-gray-300"}`}
//             value={formData.expirydate}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.expirydate && touched.expirydate && <p className="errormessage">{errors.expirydate}</p>}

//           </div>
//         </div>

//             </div>
//           )}
          

//       </div>    
 
//       </form>
//     </div>
//   );
// };

// export default VehicleDetails;


import React, { useRef, useState, useEffect  } from "react";
import "./Forms.css";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const VehicleDetails = ({ formData, setFormData, errors, setErrors,  touched, setTouched, formtitle, selectedOption }) => {
  const fileInputRefs = useRef([]);
  const [vall, setVall] = useState("");

  useEffect(() => {
      switch (selectedOption) {
          case "carRental":
          case "carPartner":
              setVall("Car");
              break;
          case "bikeRental":
          case "bikePartner":
              setVall("Bike");
              break;
          case "autoPartner":
              setVall("Auto");
              break;
          default:
              setVall("");
      }
  }, [selectedOption]);

  const [fileNames, setFileNames] = useState({
      mainimage: [],
      frontRearImage: [],
      leftRightImage: [],
      interiorImage: [],
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
      }
  };

  const handleBlur = (field) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      validateFileUpload(field);
  };

  const validateFileUpload = (field) => {
      const requiredFields = ['mainimage', 'frontRearImage', 'leftRightImage', 'interiorImage'];
      if (requiredFields.includes(field) && fileNames[field].length === 0) {
          setErrors((prev) => ({ ...prev, [field]: 'File upload is required.' }));
      }
  };

  const handleFileChange = (event, fieldName) => {
      const files = Array.from(event.target.files);
      if (files.length > 0) {
          const newFileNames = files.map(file => file.name);
          setFileNames((prev) => ({ 
              ...prev, 
              [fieldName]: newFileNames 
          }));
          setFormData((prev) => ({ ...prev, [fieldName]: files }));
          setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
      }
  };

  const handleFabClick = (field) => {
      if (fileInputRefs.current[field]) {
          fileInputRefs.current[field].click();
      }
  };
  return (
    <div>
      
      <form action="" className="formcontent ">
      <h2 className="formtitle">{formtitle}</h2>
      <div className="holeformdiv">
          {/* brand */}
          <div className="specificcontentdiv">
          <label htmlFor="brand" className="label">{vall} Brand<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="text"
            name="brand" 
            id="brand" 
            className={ `inputbox ${errors.brand && touched.brand ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter your vehicle Brand"
            value={formData.brand}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.brand && touched.brand && <p className="errormessage">{errors.brand}</p>}

          </div>
        </div>
        {/* model */}
        <div className="specificcontentdiv">
          <label htmlFor="model" className="label">{vall} Model<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="text"
            name="model" 
            id="model" 
            className={ `inputbox ${errors.model && touched.model ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter your vehicle model"
            value={formData.model}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.model && touched.model && <p className="errormessage">{errors.model}</p>}
          </div>
        </div>
        
        {/* Registration number */}
        <div className="specificcontentdiv">
          <label htmlFor="registrationnumber" className="label">Registration number<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="number"
            name="registrationnumber" 
            id="registrationnumber" 
            className={ `inputbox ${errors.registrationnumber && touched.registrationnumber ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter your vehicle mileage"
            value={formData.registrationnumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.registrationnumber && touched.registrationnumber && <p className="errormessage">{errors.registrationnumber}</p>}

          </div>
        </div>
        {/* mileage */}
        <div className="specificcontentdiv">
          <label htmlFor="mileage" className="label">{vall} Mileage<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="number"
            name="mileage" 
            id="mileage" 
            className={`inputbox ${errors.mileage && touched.mileage ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter your vehicle mileage"
            value={formData.mileage}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.mileage && touched.mileage && <p className="errormessage">{errors.mileage}</p>}

          </div>
        </div>
        {/* seating capacity */}
          
          <div className="specificcontentdiv">
          <label htmlFor="seatingcapability" className="label">{vall} Seating Capacity(with driver)<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="number"
            name="seatingcapability" 
            id="seatingcapability" 
            className={ `inputbox ${errors.seatingcapability && touched.seatingcapability ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter your vehicle seating capcity"
            value={formData.seatingcapability}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.seatingcapability && touched.seatingcapability && <p className="errormessage">{errors.seatingcapability}</p>}

          </div>
        </div> 
        
        {/* fuel type */}
        <div className="specificcontentdiv">
          <label htmlFor="fueltype" className="label">{vall} Fuel Type<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
            <select
              name="fueltype" // Corrected name attribute
              id="fueltype"
              className={`inputbox mb-1 ${errors.fueltype && touched.fueltype ? "border-red-500" : "border-gray-300"}`}
              value={formData.fueltype}
              onChange={handleChange} 
              onBlur={() => handleBlur('fueltype')}
            >
              <option value="">Please select</option>
              <option value="Petrol">Petrol</option> 
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
            </select>
            {errors.fueltype && touched.fueltype && <p className="errormessage">{errors.fueltype}</p>}
          </div>
        </div>
        {/* transmission type */}
        
          <div className="specificcontentdiv">
            <label htmlFor="transmissiontype" className="label">Transmisson Type<span className="mandatorystar"> *</span></label>
            <div className="flex flex-row flex-wrap md:flex-row w-full md:w-1/2 lg:w-1/2 xl:w-2/5 p-2">
                <div className="flex items-center mx-2">
                    <input
                        type="radio"
                        name="transmissiontype"
                        id="manual"
                        value="manual"
                        className={`mr-2 ${errors.transmissiontype && touched.transmissiontype ? "border-red-500" : "border-gray-300"}`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={formData.transmissiontype === "manual"}
                    />
                    <label htmlFor="manual" className="text-base md:text-lg text-black">Manual</label>
                </div>
                <div className="flex items-center mx-2">
                    <input
                        type="radio"
                        name="transmissiontype"
                        id="automatic"
                        value="automatic"
                        className={`mr-2 ${errors.transmissiontype && touched.transmissiontype ? "border-red-500" : "border-gray-300"}`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={formData.transmissiontype === "automatic"}
                    />
                    <label htmlFor="automatic" className="text-base md:text-lg text-black">Automatic</label>
                    {errors.transmissiontype && touched.transmissiontype && <p className="errormessage">{errors.transmissiontype}</p>}
                </div>
                
            </div>
        </div>  
        {/* insurance certificate */}
        <div className="specificcontentdiv">
          <label htmlFor="insurance" className="label">Upload Insurance Certificate<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="file"
            name="insurance" 
            id="insurance" 
            className={ `inputbox ${errors.insurance && touched.insurance ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter your vehicle seating capcity"
            value={formData.insurance}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.insurance && touched.insurance && <p className="errormessage">{errors.insurance}</p>}

          </div>
        </div>
        {/* rc certificate */}
        <div className="specificcontentdiv">
          <label htmlFor="rcbook" className="label">Upload registration Certificate(RC)<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="file"
            name="rcbook" 
            id="rcbook" 
            className={ `inputbox ${errors.rcbook && touched.rcbook ? "border-red-500" : "border-gray-300"}`}
            value={formData.rcbook}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.rcbook && touched.rcbook && <p className="errormessage">{errors.rcbook}</p>}

          </div>
        </div>

        {/* rental duration */}
        <h2 className="formtitle">Rental Duration</h2>
        {/* rental start date */}
        <div className="specificcontentdiv">
          <label htmlFor="rentaldurationstartdate" className="label">Rental Start Date<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="date"
            name="rentaldurationstartdate" 
            id="rentaldurationstartdate" 
            className={ `inputbox ${errors.rentaldurationstartdate && touched.rentaldurationstartdate ? "border-red-500" : "border-gray-300"}`}
            value={formData.rentaldurationstartdate}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.rentaldurationstartdate && touched.rentaldurationstartdate && <p className="errormessage">{errors.rentaldurationstartdate}</p>}

          </div>
        </div>
        {/* rental end date */}
        <div className="specificcontentdiv">
          <label htmlFor="rentaldurationenddate" className="label">Rental End Date<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="date"
            name="rentaldurationenddate" 
            id="rentaldurationenddate" 
            className={ `inputbox ${errors.rentaldurationenddate && touched.rentaldurationenddate ? "border-red-500" : "border-gray-300"}`}
            value={formData.rentaldurationenddate}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.rentaldurationenddate && touched.rentaldurationenddate && <p className="errormessage">{errors.rentaldurationenddate}</p>}
          </div>
        </div>

        {/* Add Car Images */}
        <h2 className="formtitle">Add {vall} Images</h2>
          <div className="flex justify-center flex-col items-center border-2 border-gray-400 mx-auto w-full lg:w-2/4 mb-3">
            <h1 className="pt-3 text-lg text-center">This image of your vehicle will be displayed to customers.<span className="mandatorystar"> *</span></h1>
            <Box sx={{ '& > :not(style)': { m: 2 } }}>
              <Fab color="warning" aria-label="add" onClick={() => handleFabClick('mainimage')}>
                <AddIcon />
              </Fab>
            </Box>
            <input
              type="file"
              ref={el => fileInputRefs.current['mainimage'] = el}
              onChange={(e) => handleFileChange(e, 'mainimage')}
              multiple
              style={{ display: 'none' }}
            />
            {fileNames.mainimage.map((fileName, index) => (
              <p key={index} className="uploaded-filename">{fileName}</p>
            ))}
            {errors.mainimage && <p className="errormessage">{errors.mainimage}</p>}
          </div>

          {/* Repeat similar blocks for other image uploads */}
          <div className="flex justify-center flex-col items-center border-2 border-gray-400 mx-auto w-full lg:w-2/4 mb-3">
            <h1 className="pt-3 text-lg text-center">Upload images of the vehicle front and rear.<span className="mandatorystar"> *</span></h1>
            <Box sx={{ '& > :not(style)': { m: 2 } }}>
              <Fab color="warning" aria-label="add" onClick={() => handleFabClick('frontRearImage')}>
                <AddIcon />
              </Fab>
            </Box>
            <input
              type="file"
              ref={el => fileInputRefs.current['frontRearImage'] = el}
              onChange={(e) => handleFileChange(e, 'frontRearImage')}
              multiple
              style={{ display: 'none' }}
            />
            {fileNames.frontRearImage.map((fileName, index) => (
              <p key={index} className="uploaded-filename">{fileName}</p>
            ))}
            {errors.frontRearImage && <p className="errormessage">{errors.frontRearImage}</p>}
          </div>

          {/* Repeat for left and right images */}
          <div className="flex justify-center flex-col items-center border-2 border-gray-400 mx-auto w-full lg:w-2/4 mb-3">
            <h1 className="pt-3 text-lg text-center">Upload images of the vehicle left and right sides.<span className="mandatorystar"> *</span></h1>
            <Box sx={{ '& > :not(style)': { m: 2 } }}>
              <Fab color="warning" aria-label="add" onClick={() => handleFabClick('leftRightImage')}>
                <AddIcon />
              </Fab>
            </Box>
            <input
              type="file"
              ref={el => fileInputRefs.current['leftRightImage'] = el}
              onChange={(e) => handleFileChange(e, 'leftRightImage')}
              multiple
              style={{ display: 'none' }}
            />
            {fileNames.leftRightImage.map((fileName, index) => (
              <p key={index} className="uploaded-filename">{fileName}</p>
            ))}
            {errors.leftRightImage && <p className="errormessage">{errors.leftRightImage}</p>}
          </div>

          {/* Repeat for interior image */}
          
            <div className="flex justify-center flex-col items-center border-2 border-gray-400 mx-auto w-full lg:w-2/4 mb-3 px-4">
            <h1 className="pt-3 text-lg text-center">Upload an image of the vehicle interior.<span className="mandatorystar"> *</span></h1>
            <Box sx={{ '& > :not(style)': { m: 2 } }}>
              <Fab color="warning" aria-label="add" onClick={() => handleFabClick('interiorImage')}>
                <AddIcon />
              </Fab>
            </Box>
            <input
              type="file"
              ref={el => fileInputRefs.current['interiorImage'] = el}
              onChange={(e) => handleFileChange(e, 'interiorImage')}
              multiple
              style={{ display: 'none' }}
            />
            {fileNames.interiorImage.map((fileName, index) => (
              <p key={index} className="uploaded-filename">{fileName}</p>
            ))}
            {errors.interiorImage && <p className="errormessage">{errors.interiorImage}</p>}
          </div> 
          

          {/* driving licence details */}
          <h2 className="formtitle">License Information</h2>
          {/* driving license */}         
            <div className="specificcontentdiv">
            <label htmlFor="drivinglicense" className="label">Upload driving license<span className="mandatorystar"> *</span></label>
            <div className="inputanderrordiv">
            <input
              type="file"
              name="drivinglicense" 
              id="drivinglicense" 
              className={ `inputbox ${errors.drivinglicense && touched.drivinglicense ? "border-red-500" : "border-gray-300"}`}
              value={formData.drivinglicense}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.drivinglicense && touched.drivinglicense && <p className="errormessage">{errors.drivinglicense}</p>}
  
            </div>
          </div>
          {/* expiry date */}
          <div className="specificcontentdiv">
          <label htmlFor="expirydate" className="label">License Expiry Date<span className="mandatorystar"> *</span></label>
          <div className="inputanderrordiv">
          <input
            type="date"
            name="expirydate" 
            id="expirydate" 
            className={ `inputbox ${errors.expirydate && touched.expirydate ? "border-red-500" : "border-gray-300"}`}
            value={formData.expirydate}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.expirydate && touched.expirydate && <p className="errormessage">{errors.expirydate}</p>}

          </div>
        </div>


      </div>    
 
      </form>
    </div>
  );
};

export default VehicleDetails;  

