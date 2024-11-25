import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const NotificationProfile = ({ profileTitle }) => {
  const [message, setMessage] = useState("");

  const successfullyupdated = () => {
      setMessage("Your notification preferences have been successfully updated.");
      setTimeout(() => {
          setMessage("");
      }, 2000); 
  };
  return (
    <div>
      <h1 className="text-xl font-semibold">{profileTitle}</h1>
      <div className="shadow-sm shadow-orange-300 p-1 md:p-2 md:m-2">
        <h2 className="text-lg text-gray-700 p-3 md:ps-8">Manage your notification preferences below:</h2>
        <FormGroup className="p-3 md:ps-10 ms-10">
          <FormControlLabel 
            control={<Checkbox defaultChecked />} 
            label="Email Notifications" 
            className="text-3xl text-black" 
          />
          <FormControlLabel 
            control={<Checkbox defaultChecked />} 
            label="SMS Notifications" 
            className="text-3xl text-black" 
          />
        </FormGroup>
      </div>

      {message && (
          <div className="text-green-500 p-2 text-center mt-4 text-lg">
            {message}
          </div>
        )}

      <div className="flex justify-center m-3 mb-5">
        <button
          type="submit"
          className="mx-4 mt-10 p-2 w-44 text-lg bg-fuchsia-900 text-white font-semibold"
          onClick={successfullyupdated}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default NotificationProfile;
