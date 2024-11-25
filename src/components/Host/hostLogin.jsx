import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HostLogin.css";

export default function HostLogin() {
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState(false);
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  const handleSubmit = async (event) => {
    setLoginFailed(false);
    setLoader(true);
    event.preventDefault();
    const endpoint = "http://localhost:3001/hostlogin";

    const dataToSend = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log("Login successful!");

        sessionStorage.setItem("userEmail", formData.email);
        document.cookie = `userEmail=${formData.email}`;
        document.cookie = "session=user-logged-in";

        navigate('/rentalform');
        setShowWelcomeMessage(true); // Show the welcome message on successful login
      } else {
        console.error("Login failed.");
        setLoginFailed(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoader(false);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div 
        className="backdrop-blur-md bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl p-8 shadow-xl w-full max-w-md"
        onClick={() => setShowWelcomeMessage(true)} // Show message when the box is clicked
      >
        {loginFailed && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            Login failed. Please check your email and password.
          </div>
        )}
        {loader && (
          <div className="w-8 h-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-4"></div>
        )}
        <h2 className="text-3xl font-semibold text-white text-center mb-6"></h2>
        {!showWelcomeMessage ? (  // Conditionally render the form or the welcome message
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white" htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                className="border border-gray-300 p-3 w-full rounded bg-white bg-opacity-30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white" htmlFor="password">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                className="border border-gray-300 p-3 w-full rounded bg-white bg-opacity-30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Enter your password"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 shadow-md"
              type="submit"
            >
              Login
            </button>
          </form>
        ) : (

<div className="min-screen w-18 h-27">
          <div className="flex justify-center items-center text-4xl font-bold text-white mt-4 animate-3d text-center">
            Welcome to Bro Bikez!
          </div></div>
        )}


      </div>
      <button
              onClick={() => navigate('/hostProfile')}
              className="mt-8 text-2xl text-white bg-transparent hover:bg-white hover:text-blue-500 font-bold py-2 px-4 rounded-full transition duration-300"
            > 
              &rarr; {/* Right arrow symbol */}
              
            </button>
      

    </div>
  );
}
