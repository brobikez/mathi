// import React, { useState } from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import CreateIcon from "@mui/icons-material/Create";

// // Yup validation schema
// const validationSchema = Yup.object({
//   brand: Yup.string().required("Vehicle brand is required"),
//   model: Yup.string().required("Vehicle model is required"),
//   registrationnumber: Yup.string().required("Registration number is required"),
//   mileage: Yup.string().required("Vehicle mileage is required"),
//   seatingcapability: Yup.string().required("Vehicle seating capability is required"),
//   fueltype: Yup.string().required("Vehicle fuel type is required"),
//   transmissiontype: Yup.string().required("Transmission type is required"),
//   insurance: Yup.string().required("Insurance image is required"),
//   rcbook: Yup.string().required("RC image is required"),
//   rentaldurationstartdate: Yup.date()
//     .nullable()
//     .required("Starting date is required")
//     .typeError("Starting date is required"),
//   rentaldurationenddate: Yup.date()
//     .nullable()
//     .required("Ending date is required")
//     .typeError("Ending date is required")
//     .test("end-date", "End date must be later than start date", function (endDate) {
//       const { rentaldurationstartdate } = this.parent; // Access the start date from the parent object
//       return rentaldurationstartdate && endDate ? endDate > rentaldurationstartdate : true; // Ensure end date is after start date
//     }),
//   mainimage: Yup.array().min(1, "At least one image is required").required("Image is required"),
//   frontRearImage: Yup.array().min(1, "At least one image is required").required("Image is required"),
//   leftRightImage: Yup.array().min(1, "At least one image is required").required("Image is required"),
//   interiorImage: Yup.array().min(1, "At least one image is required").required("Image is required"),
//   drivinglicense: Yup.string().required("Driving license image is required"),
//   expirydate: Yup.date().nullable().required("Expiry date is required").typeError("Expiry date is required"),
// });

// const VehicleProfile = ({ profileTitle }) => {
//   const [successMessage, setSuccessMessage] = useState("");
//   const [userDetails, setUserDetails] = useState({
//     brand: "Toyota",
//     model: "Toyota 55",
//     registrationnumber: "5551234567",
//     mileage: "500 km",
//     seatingcapability: "6",
//     fueltype: "Petrol",
//     transmissiontype: "Manual",
//     insurance: "https://www.shutterstock.com/image-vector/certificate-motor-insurance-template-600w-258417617.jpg",
//     rcbook: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7PSdPE7ZJJzQBBv5p-9XWimojt2rOwj9nQ&s",
//     mainimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDE4cJvMUaRNtQKS6pJCi7je2_72uwO5USw&s",
//     frontRearImage: "https://media.istockphoto.com/id/1145720458/photo/3d-illustration-of-generic-red-car-front-view.jpg?s=612x612&w=0&k=20&c=GeLrH7n-UMTX6l1ULskxQG9_6D_PTlW3m96RMAQzErU=",
//     leftRightImage: "https://www.shutterstock.com/image-photo/izmir-turkey-august-2-2023-600nw-2343207057.jpg",
//     interiorImage: "https://media.istockphoto.com/id/509100198/photo/car-interior.jpg?s=612x612&w=0&k=20&c=mmLwTtn8PyyvQdl5HgTtOX3VUJM-w1hou9s3oAfR_vM=",
//     drivinglicense: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7tzL_6UTpwhX-43ARXDR7UTYXVRCVl4uCA&s",
//     expirydate: "2027-11-5",
//   });
  
//   const [editField, setEditField] = useState(null);
//   const handleEditClick = (field) => {
//     // You can add logic to open the field for editing (e.g., set an edit state)
//   };
//   const handleFileChange = (e, setFieldValue, field) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFieldValue(field, reader.result); // Set the image as a base64 string
//       };
//       reader.readAsDataURL(file);
//     }
//   };


//   return (
//     <div>
//       <h1 className="text-xl font-semibold">{profileTitle}</h1>
//       <div className="shadow-sm shadow-orange-300 p-1 md:p-2 md:m-2">
//         <Formik
//           initialValues={userDetails}
//           validationSchema={validationSchema}
//           onSubmit={(values) => {
//             setSuccessMessage("Profile updated successfully!");
//             setUserDetails(values);
//           }}
//         >
//           {({ setFieldValue, values }) => (
//             <Form>
//               {[
//                 { label: "Vehicle Brand", value: "brand" },
//                 { label: "Vehicle Model", value: "model" },
//                 { label: "Registration No", value: "registrationnumber" },
//                 { label: "Vehicle Mileage", value: "mileage" },
//                 { label: "Vehicle Seating capability", value: "seatingcapability" },
//                 { label: "Fuel type", value: "fueltype" },
//                 { label: "Transmission Type", value: "transmissiontype" },
//                 { label: "Insurance", value: "insurance" },
//                 { label: "RC Book", value: "rcbook" },
//                 { label: "Vehicle image", value: "mainimage" },
//                 { label: "Vehicle Front and Back Image", value: "frontRearImage" },
//                 { label: "Vehicle Left and Right Image", value: "leftRightImage" },
//                 { label: "Vehicle Interior Image", value: "interiorImage" },
//                 { label: "Driving License", value: "drivinglicense" },
//                 { label: "Expiry Date", value: "expirydate" },
//               ].map((item, index) => (
//                 <div key={index} className="flex flex-col md:flex-row p-2">
//                   <div className="w-full md:w-1/3 lg:w-1/4">
//                     <span className="pb-1">
//                       <strong className="text-lg">{item.label}:</strong>
//                     </span>
//                   </div>
//                   <div className="w-full md:w-3/4 xl:w-2/5 flex items-center">
//                   <span className="text-lg text-gray-800 border md:py-1 px-2 border-gray-400 flex-grow">{item.value}</span>
//                     <Field
//                       name={item.value}
//                       type={item.type || "text"}
//                       className="text-lg text-gray-800 border md:py-1 px-2 border-gray-400 flex-grow"
//                     />
//                     <span className="ps-2">
//                       <CreateIcon
//                         onClick={() => handleEditClick(item.value)}
//                         className="cursor-pointer"
//                       />
//                     </span>
//                   </div>
//                   <div className="text-red-500 text-sm flex">
//                     <ErrorMessage name={item.value} />
//                   </div>
//                 </div>
//               ))}
//               <div className="flex justify-center m-3 mb-5">
//                 <button type="submit" className="next-btn">
//                   Update
//                 </button>
//                 <button
//                   type="button"
//                   className="next-btn bg-orange-400 ml-2"
//                   onClick={() => setEditField(null)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default VehicleProfile;


import React, { useState } from "react";

export default function VehicleProfile({ profileTitle }) {
  const [userDetails, setUserDetails] = useState({
    brand: "Toyota",
    model: "Toyota 55",
    registrationnumber: "5551234567",
    mileage: "500 km",
    seatingcapability: "6",
    fueltype: "Petrol",
    transmissiontype: "Manual",
    insurance: "https://www.shutterstock.com/image-vector/certificate-motor-insurance-template-600w-258417617.jpg",
    rcbook: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7PSdPE7ZJJzQBBv5p-9XWimojt2rOwj9nQ&s",
    mainimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDE4cJvMUaRNtQKS6pJCi7je2_72uwO5USw&s",
    frontRearImage: "https://media.istockphoto.com/id/1145720458/photo/3d-illustration-of-generic-red-car-front-view.jpg?s=612x612&w=0&k=20&c=GeLrH7n-UMTX6l1ULskxQG9_6D_PTlW3m96RMAQzErU=",
    leftRightImage: "https://www.shutterstock.com/image-photo/izmir-turkey-august-2-2023-600nw-2343207057.jpg",
    interiorImage: "https://media.istockphoto.com/id/509100198/photo/car-interior.jpg?s=612x612&w=0&k=20&c=mmLwTtn8PyyvQdl5HgTtOX3VUJM-w1hou9s3oAfR_vM=",
    drivinglicense: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7tzL_6UTpwhX-43ARXDR7UTYXVRCVl4uCA&s",
    expirydate: "2027-11-5",
  });

  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Cancel as Partner");

  const cancelrequest = () => {
    if (buttonText === "Cancel as Partner") {
      const confirmed = window.confirm("Are you sure you want to cancel as a partner in BroBikez?");
      if (confirmed) {
        setMessage("Your cancellation request has been successfully received. We will contact you soon.");
        setButtonText("Continue as Partner"); 
      }
    } else if (buttonText === "Continue as Partner") {
        const confirmed = window.confirm("Are you sure you want to continue as a partner in BroBikez?");
      setMessage(""); 
      setButtonText("Cancel as Partner"); 
    }
  };
  return (
    <div>
      <h1 className="text-xl font-semibold">{profileTitle}</h1>
      <div className="shadow-sm shadow-orange-300 p-1 md:p-2 md:m-2">
        {[
          { label: "Vehicle Brand", value: "brand" },
          { label: "Vehicle Model", value: "model" },
          { label: "Registration No", value: "registrationnumber" },
          { label: "Vehicle Mileage", value: "mileage" },
          { label: "Vehicle Seating capability", value: "seatingcapability" },
          { label: "Fuel type", value: "fueltype" },
          { label: "Transmission Type", value: "transmissiontype" },
          { label: "Insurance", value: "insurance", isImage: true },
          { label: "RC Book", value: "rcbook", isImage: true },
          { label: "Vehicle image", value: "mainimage", isImage: true },
          { label: "Vehicle Front and Back Image", value: "frontRearImage", isImage: true },
          { label: "Vehicle Left and Right Image", value: "leftRightImage", isImage: true },
          { label: "Vehicle Interior Image", value: "interiorImage", isImage: true },
          { label: "Driving License", value: "drivinglicense", isImage: true },
          { label: "Expiry Date", value: "expirydate" },
        ].map((item, index) => (
          <div className="flex flex-col md:flex-row p-2" key={index}>
            <div className="w-full md:w-1/3 lg:w-1/4">
              <span className="pb-1">
                <strong className="text-lg">{item.label}:</strong>
              </span>
            </div>

            <div className="w-full md:w-3/4 xl:w-2/5 flex items-center">
              {item.isImage ? (
                <img
                  src={userDetails[item.value]}
                  alt={item.label}
                  className="h-32 w-32 object-cover border border-gray-400"
                />
              ) : (
                <span className="text-lg text-gray-800 border md:py-1 px-2 border-gray-400 flex-grow">
                  {userDetails[item.value]}
                </span>
              )}
            </div>
          </div>
        ))}

        {message && (
          <div className="text-red-500 p-2 text-center mt-4 text-lg">
            {message}
          </div>
        )}

        <div className="flex justify-center m-3 mb-5">
          <button
            type="submit"
            className="mx-4 mt-10 p-2 w-44 text-lg bg-fuchsia-900 text-white font-semibold"
            onClick={cancelrequest}
          >
            {buttonText} {/* Dynamically change button text */}
          </button>
        </div>
      </div>
    </div>
  );
}
