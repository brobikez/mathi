import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import loginImage from './loginsideImage.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    const userType = localStorage.getItem('userType');

    if (email === storedEmail && password === storedPassword) {
      if (userType === 'Host') {
        navigate('/CarPartnershipHome');
      } else if (userType === 'Customer') {
        navigate('/');
      } else if (userType === 'Driver') {
        navigate('/DriverDashboard');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-0">
        <div className="w-full max-w-md bg-white border border-blue-400 rounded-lg shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-center">LOGIN</h2>
          <form onSubmit={handleLogin} className="w-full space-y-4">
            <div className="flex items-center bg-purple-200 p-3 rounded-full">
              <FaUser className="text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent w-full outline-none"
              />
            </div>
            <div className="flex items-center bg-purple-200 p-3 rounded-full">
              <FaLock className="text-gray-600 mr-2" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent w-full outline-none"
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-full font-semibold">
              Login Now
            </button>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={loginImage} alt="Login" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}
