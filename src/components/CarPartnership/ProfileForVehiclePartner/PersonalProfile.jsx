import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CreateIcon from "@mui/icons-material/Create";

// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  pno: Yup.string()
    .length(10, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  dob: Yup.date()
    .nullable()
    .required("Date of Birth is required")
    .typeError("Invalid date format"),
  address: Yup.string().required("Address is required"),
  gender: Yup.string().required("Gender is required"),
  photo: Yup.mixed().required("Photo is required"),
  proof: Yup.mixed().required("Proof is required"),
});

const PersonalProfile = ({ profileTitle }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "Jane Smith",
    email: "jane.smith@example.com",
    pno: "5551234567",
    dob: "1990-10-15",
    address: "1/6 123 street mambakkam",
    gender: "Female",
    photo:
      "https://imgcdn.stablediffusionweb.com/2024/5/6/2b1d888a-a22f-49d5-94b2-d9e1fb2c2640.jpg",
    proof:
      "https://aadhaarcard.co.in/wp-content/uploads/2023/04/sample-aadhaar-card-800x445.png",
  });

  const [editField, setEditField] = useState(null);

  const handleEditClick = (field) => {
    setEditField(field);
  };

  const handleFileChange = (e, setFieldValue, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFieldValue(field, reader.result); // Set the image as a base64 string
      };
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div>
      <h1 className="text-xl font-semibold">{profileTitle}</h1>
      <div className="shadow-sm shadow-orange-300 p-1 md:p-2 md:m-2">
        <Formik
          initialValues={userDetails}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setUserDetails(values);
            setSuccessMessage("Your profile is successfully updated!");
            setEditField(null);
            setTimeout(() => {
              setSuccessMessage("");
            }, 2000);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {[
                { label: "Name", value: "name" },
                { label: "Email Id", value: "email", type: "email", editable: false },
                { label: "Phone Number", value: "pno", type: "tel" },
                { label: "Date of Birth", value: "dob", type: "date" },
                { label: "Address", value: "address" },
                { label: "Gender", value: "gender" },
                { label: "Photo", value: "photo", isImage: true },
                { label: "Proof", value: "proof", isImage: true },
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row p-2">
                  <div className="w-full md:w-1/3 lg:w-1/4">
                    <span className="pb-1">
                      <strong className="text-lg">{item.label}:</strong>
                    </span>
                  </div>
                  <div className="w-full md:w-3/4 xl:w-2/5 flex items-center">
                    {editField === item.value && item.editable !== false ? (
                      item.isImage ? (
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleFileChange(e, setFieldValue, item.value)
                          }
                          className="text-lg text-gray-800 border md:py-1 px-2 border-gray-400 flex-grow"
                        />
                      ) : (
                        <Field
                          name={item.value}
                          type={item.type || "text"}
                          className="text-lg text-gray-800 border md:py-1 px-2 border-gray-400 flex-grow"
                        />
                      )
                    ) : item.isImage ? (
                      <img
                        src={values[item.value]}
                        alt={item.label}
                        className="h-20 w-20 object-cover border border-gray-400"
                      />
                    ) : (
                      <span className="text-lg text-gray-800 border md:py-1 px-2 border-gray-400 flex-grow">
                        {values[item.value]}
                      </span>
                    )}
                    {item.editable !== false && editField !== item.value && (
                      <span className="ps-2">
                        <CreateIcon
                          onClick={() => handleEditClick(item.value)}
                          className="cursor-pointer"
                        />
                      </span>
                    )}
                  </div>
                  <div className="text-red-500 text-sm flex">
                    <ErrorMessage name={item.value} />
                  </div>
                </div>
              ))}

              {successMessage && (
                <div className="text-green-500 p-2 text-center mt-4">
                  {successMessage}
                </div>
              )}
              <div className="flex justify-center m-3 mb-5">
                <button type="submit" className="next-btn">
                  Update
                </button>
                <button
                  type="button"
                  className="next-btn bg-orange-400 ml-2"
                  onClick={() => setEditField(null)}
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PersonalProfile;
