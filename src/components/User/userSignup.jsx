import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    const passwordConditions = [
      /[a-z]/.test(password), // lowercase letter
      /[A-Z]/.test(password), // uppercase letter
      /\d/.test(password), // digit
      /[@$!%*?&]/.test(password), // special character
      password.length >= 8 // minimum length
    ];
    
    const conditionMessages = [
      "At least one lowercase letter",
      "At least one uppercase letter",
      "At least one digit",
      "At least one special character",
      "Minimum 8 characters long"
    ];

    setPasswordError(
      conditionMessages.filter((_, index) => !passwordConditions[index]).join(", ")
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (formData.email && formData.password === formData.confirmPassword && !passwordError) {
      console.log("Form data:", formData);
      navigate('/userlogin'); 
    } else {
      console.error("Validation failed.");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="backdrop-blur-md bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl p-8 shadow-xl w-80">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Sign Up
        </h2>
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
          <div className="mb-4 relative">
            <label className="block text-white" htmlFor="password">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-3 w-full rounded bg-white bg-opacity-30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {passwordError && (
              <p className="text-red-400 text-sm mt-2">
                Password must meet the following criteria: {passwordError}
              </p>
            )}
          </div>
          <div className="mb-4 relative">
            <label className="block text-white" htmlFor="confirmPassword">
              Confirm Password<span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-3 w-full rounded bg-white bg-opacity-30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              placeholder="Confirm your password"
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 shadow-md"
            type="submit"
          >
            Sign Up
          </button>
        
        </form>
      </div>
    </div>
  );
}
