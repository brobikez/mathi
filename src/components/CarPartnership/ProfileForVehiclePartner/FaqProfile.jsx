import React, { useState } from 'react';
import Review from '../Review';
import FAQ from '../FAQ';

const FaqProfile = ({ profileTitle }) => {
    const [satisfaction, setSatisfaction] = useState('Good');
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [comments, setComments] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!comments.trim()) {
        newErrors.comments = "Comments are required.";
    }
    return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {
            // Handle successful submission (e.g., send data to an API)
            alert("Successfully submitted!");

            // Reset form fields
            setSatisfaction('Good'); // Reset to default value
            setComments('');
        } else {
            setErrors(validationErrors);
        }
    };

  return (
    <div>
      <h1 className="text-xl font-semibold">{profileTitle}</h1>
      <div className="shadow-sm shadow-orange-300 p-1 md:p-10 md:m-2 ">
        <FAQ />
        
        
       
      </div>
      
    </div>
  );
};

export default FaqProfile;
