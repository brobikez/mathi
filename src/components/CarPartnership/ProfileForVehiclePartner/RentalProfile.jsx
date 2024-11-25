import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CreateIcon from "@mui/icons-material/Create";

// Yup validation schema
const validationSchema = Yup.object({
  rentalStart: Yup.date()
    .nullable()
    .required("Starting date is required")
    .typeError("Starting date is required"),
  rentalEnd: Yup.date()
    .nullable()
    .required("Ending date is required")
    .typeError("Ending date is required")
    .test('end-date', 'End date must be later than start date', function (endDate) {
      const { rentalStart } = this.parent;
      return rentalStart && endDate ? endDate > rentalStart : true;
    }),
});

const RentalProfile = ({ profileTitle }) => {
  const [successMessage, setSuccessMessage] = useState(""); 
  const [userDetails, setUserDetails] = useState({
    rentalStart: "2025-11-25",
    rentalEnd: "2025-12-15",
  });

  const [editField, setEditField] = useState(null);

  const handleEditClick = (field) => {
    setEditField(field);
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
          {({ values }) => (
            <Form>
              {[
                { label: "Rental Start Date", value: "rentalStart", type: "date" },
                { label: "Rental End Date", value: "rentalEnd", type: "date" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row p-2">
                  <div className="w-full md:w-1/3 lg:w-1/4">
                    <span className="pb-1">
                      <strong className="text-lg">{item.label}:</strong>
                    </span>
                  </div>
                  <div className="w-full md:w-3/4 xl:w-2/5 flex items-center">
                    {editField === item.value ? (
                      <Field
                        name={item.value}
                        type="date"
                        className="text-lg text-gray-800 border md:py-1 px-2 border-gray-400 flex-grow"
                      />
                    ) : (
                      <span className="text-lg text-gray-800 border md:py-1 px-2 border-gray-400 flex-grow">
                        {values[item.value]}
                      </span>
                    )}
                    {editField !== item.value && (
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
                  className="next-btn bg-orange-400"
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

export default RentalProfile;
