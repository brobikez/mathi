import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const QuickEnquiry = () => {
  // Initialize formik with validation schema
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      pno: '',
      enquiry: '',
    },
    validationSchema: Yup.object({
        name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(25, "Name must be at most 25 characters")
        .required("Name is required"),
        email: Yup.string()
        .email("Invalid email format")
        .matches(
          /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/,
          "Only gmail.com and yahoo.com are allowed"
        )
        .required("Email is required"),
        pno: Yup.string()
        .length(10, "Phone number must be exactly 10 digits")
        .matches(/^\d{10}$/, "Phone number must be a valid 10-digit number")
        .required("Phone number is required"),
      enquiry: Yup.string()
        .required('Please enter your enquiry')
        .min(10, 'Enquiry must be at least 10 characters')
        .max(50,'Enquiry must be at most 10 characters'),
    }),
    onSubmit: (values) => {
      alert("Your enquiry has been successfully submitted. We will contact you soon.")
    },
  });

  return (
    <div className='my-2 md:mb-6'>
      <h1 className="text-xl md:text-2xl font-bold text-center px-6 py-2">Send your Enquiry</h1>
      <div className="flex justify-center items-center ">
        <form onSubmit={formik.handleSubmit} className="w-full md:w-3/4 lg:w-2/5 p-2 md:p-3 lg:px-10 shadow-sm shadow-orange-300">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder='Enter your Name '
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder='Enter your Email'
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <input
              type="number"
              name="pno"
              id="pno"
              value={formik.values.pno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder='Enter your contact number'
            />
            {formik.touched.pno && formik.errors.pno && (
              <div className="text-red-500 text-sm">{formik.errors.pno}</div>
            )}
          </div>

          <div className="mb-4">
            <textarea
              name="enquiry"
              id="enquiry"
              value={formik.values.enquiry}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Type your enquiry"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
            {formik.touched.enquiry && formik.errors.enquiry && (
              <div className="text-red-500 text-sm">{formik.errors.enquiry}</div>
            )}
          </div>

          <div className='flex justify-center'>
            <button
              type="submit"
              className="md:w-auto px-6 py-2 text-lg md:text-xl bg-fuchsia-900 text-white hover:bg-fuchsia-950 "
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuickEnquiry;
