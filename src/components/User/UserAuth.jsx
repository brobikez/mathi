import React, { useState } from "react";
import UserSignup from "./userSignup";
import UserLogin from "./userLogin";

export default function UserAuth() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);       
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white p-6">
      {/* Form Container */}
      <div className="bg-white shadow-2xl rounded-lg p-8 lg:w-1/3 w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Customer {isSignUp ? '/ Signup' : '/ Login'}
        </h2>
        <div className="mb-4">
          {isSignUp ? <UserSignup /> : <UserLogin />}
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

      {/* Image Container */}
    
    </div>
  );
}


