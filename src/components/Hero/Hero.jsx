import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Hero.css"; 
import vdo from "./bg-vdo.mp4";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup"; // Import Yup

// Define validation schema using Yup
const validationSchema = Yup.object({
  currentLocation: Yup.string().required("Current Location is required"),
  destination: Yup.string().required("Destination is required"),
});

export default function Hero() {

  // Handle form submission
  const handleSubmit = (values) => {
    alert(`Searching from ${values.currentLocation} to ${values.destination}`);
  };

  return (
    <div className="h-screen flex justify-center items-center hero">
      <video autoPlay loop muted className="video-bg">
        <source src={vdo} type="video/mp4" />
      </video>

      {/* Large Screen Container */}
      <div className="mx-1 p-1 sm:p-7 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 sm:flex hidden justify-center items-center">
        <div className="bg-black bg-opacity-50 backdrop-blur-md p-16 py-24 rounded-full">
          <h1 className="text-white text-4xl p-4 font-semibold capitalize">Find your destination</h1>

          {/* Formik Form */}
          <Formik
            initialValues={{
              currentLocation: "",
              destination: "",
            }}
            validationSchema={validationSchema} // Yup validation schema
            onSubmit={handleSubmit}
          >
            <Form>
              {/* Current Location Input */}
              <div className="my-5">
                <Field
                  type="text"
                  name="currentLocation"
                  placeholder="Current Location"
                  className="p-3 text-lg rounded-2xl w-full"
                />
                <ErrorMessage
                  name="currentLocation"
                  component="div"
                  className="text-red-500 text-lg"
                />
              </div>

              {/* Destination Input */}
              <div className="my-5">
                <Field
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  className="p-3 text-lg rounded-2xl w-full"
                />
                <ErrorMessage
                  name="destination"
                  component="div"
                  className="text-red-500 text-lg"
                />
              </div>

              {/* Search Button */}
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 p-2 py-3 px-12 my-3 font-medium text-xl text-white rounded-full"
                >
                  Search
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>

      {/* Small Screen Container */}
      <div className="mx-1 p-2 sm:p-7 rounded-3xl bg-gradient-to-br from-purple-500 to-orange-500 flex sm:hidden justify-center items-center">
        <div className="bg-black bg-opacity-50 backdrop-blur-md p-4 py-10 rounded-3xl w-full sm:w-auto">
          <h1 className="text-white text-3xl p-4 font-semibold capitalize">Find your destination</h1>

          {/* Formik Form */}
          <Formik
            initialValues={{
              currentLocation: "",
              destination: "",
            }}
            validationSchema={validationSchema} // Yup validation schema
            onSubmit={handleSubmit}
          >
            <Form>
              {/* Current Location Input */}
              <div className="my-5">
                <Field
                  type="text"
                  name="currentLocation"
                  placeholder="Current Location"
                  className="p-3 text-lg w-full rounded-3xl"
                />
                <ErrorMessage
                  name="currentLocation"
                  component="div"
                  className="text-red-500 text-lg"
                />
              </div>

              {/* Destination Input */}
              <div className="my-5">
                <Field
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  className="p-3 text-lg w-full rounded-3xl"
                />
                <ErrorMessage
                  name="destination"
                  component="div"
                  className="text-red-500 text-lg"
                />
              </div>

              {/* Search Button */}
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 p-3 px-10 my-3 font-medium text-xl text-white rounded-full"
                >
                  Search
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
