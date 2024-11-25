import React, { useState } from 'react';
import Review from '../Review';

const RateUsProfile = ({ profileTitle }) => {
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
      <div className="shadow-sm shadow-orange-300 p-1 md:p-2 md:m-2">
        <h2 className="text-lg text-gray-700 p-3 md:ps-8"></h2>
        <div className='flex justify-center mt-5 md:p-3'>
        <div className='w-full lg:w-3/4 xl:w-3/6 2xl:w-2/5 md:mx-10 border-2 border-gray-500 rounded-l-3xl rounded-tr-3xl p-1'>
                <h1 className='text-lg md:text-xl font-semibold p-1 text-center'>Share your experience with us!</h1>
                <h3 className='text-lg p-1 text-center'>We'd love to hear about your experience with us.</h3>
                <h3 className='text-lg md:text-xl font-semibold p-1 pb-3'>Overall Satisfaction:</h3>
                <select 
                    name="satisfaction" 
                    id="rate" 
                    className='p-2 mb-2 text-lg'
                    value={satisfaction}
                    onChange={(e) => setSatisfaction(e.target.value)}
                >
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Average">Average</option>
                    <option value="Below Average">Below Average</option>
                    <option value="Poor">Poor</option>
                </select>
                <h5 className='p-1 text-lg'>Comments</h5>
                <textarea 
                    className={`border w-full ${errors.comments ? 'border-red-500' : ''}`} 
                    name="comments" 
                    id="comments" 
                    cols="40" 
                    rows="8"
                    value={comments}
                    onChange={(e) => {
                        setComments(e.target.value);
                        setErrors((prevErrors) => ({ ...prevErrors, comments: '' })); // Clear error on change
                    }}
                ></textarea>
                {errors.comments && <p className='text-red-500'>{errors.comments}</p>}
                <div className='p-2 mt-6 w-52 text-lg text-center bg-fuchsia-900 text-white font-semibold mx-auto rounded'> 
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>

            
        
        </div>
        
        
       
      </div>
      {/* review */}
      <div className='md:p-4 md:my-6'>
        <Review />
        </div>
    </div>
  );
};

export default RateUsProfile;
