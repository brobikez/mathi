import React, { useState } from "react";
import HostLogin from "./hostLogin";
import HostSignup from "./hostSignup";
import "./hostauth.css"; // Ensure this CSS file contains any custom styles you need

export default function HostAuth() {
  const [isSignUp, setIsSignUp] = useState(false);
 

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-6">
      {/* Form Container */}
      <div className="bg-white shadow-2xl rounded-lg p-8 lg:w-1/3">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-700">
          Host {isSignUp ? 'Signup' : 'Login'}
        </h2>
        <div className="mb-4">
          {isSignUp ? <HostSignup /> : <HostLogin />}
        </div>
        <button
          className="mt-6 text-blue-500 hover:underline w-full text-center"
          onClick={toggleForm}
        >
          {isSignUp
            ? "Already have an account? Log In"
            : "Don't have an account? Sign Up"}
        </button>
      </div>

   
   
      
    </div>
  );
}