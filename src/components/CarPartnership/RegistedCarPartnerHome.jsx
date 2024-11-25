import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Review from './Review'


const RegistedCarPartnerHome = () => {
  const [satisfaction, setSatisfaction] = useState('Good'); // Default value
    const [comments, setComments] = useState('');
    const [errors, setErrors] = useState({});

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
        <h1 className='p-3 text-xl font-medium text-center'>Vehicle live location</h1>
        <div className='p-5 m-5 flex justify-center'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4386.681437763381!2d80.16177111113912!3d12.826006387423837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c1143ea25cccc81%3A0x6e50f93d769b533e!2sSeval%20Software%20Solutions!5e1!3m2!1sen!2sin!4v1730721848134!5m2!1sen!2sin" 
        width="600" 
        height="400" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div>

        <h1 className='p-3 text-xl font-medium text-center'>Your Car details</h1>

        <div className='flex flex-col xl:flex-row '>
        <div className='flex justify-center flex-col md:flex-row items-center md:p-5 mb-10 shadow-sm shadow-orange-300 m-2 w-full xl:w-1/2'>
            <div className='text-left md:p-6 text-xl'>
                <h1 className='p-2 font-semibold mr-10'>Toyota Camry</h1>
                <h1 className='p-2 font-semibold'>Camry</h1>
                <h1 className='p-2 font-semibold'>TN82 5343</h1>
                <h1 className='p-2 font-semibold'>Rental Start Date: 01-Nov-2024 </h1>
                <h1 className='p-2 font-semibold'>Rental End Date: 30-Nov-2024 </h1>
                

            </div>
            <div>
            <img src="../src/components/CarPartnership/img/auto-partnership.jpg" alt="" width="400px" height="400px" />
            </div>
        </div>

        <div className='w-full xl:w-1/2 mx-auto'>
        <div className='md:p-2 m-1 md:m-2 md:mt-10 flex justify-center flex-col '>
          <div className='flex justify-center md:justify-start flex-col sm:flex-row'>
            <label htmlFor="trips" className='px-5 md:px-7 w-full md:w-2/5 md:p-2 text-lg md:text-xl text-black'>Total No.of trips</label>
            <label htmlFor="tripsanswer" className='px-5 md:px-7 w-full md:w-2/5 lg:w-1/4 md:p-2 text-lg md:text-xl text-black font-bold'> 10 trips</label>
          </div>
          <div className='flex justify-center md:justify-start flex-col sm:flex-row '>
            <label htmlFor="trips" className='px-5 md:px-7 w-full md:w-2/5 md:p-2 text-lg md:text-xl text-black'>Total no.of Accident/scratch</label>
            <label htmlFor="tripsanswer" className='px-5 md:px-7 w-full md:w-2/5 lg:w-1/4 md:p-2 text-lg md:text-xl text-black font-bold'> 0 </label>
          </div>
          <div className='flex justify-center md:justify-start flex-col sm:flex-row'>
            <label htmlFor="trips" className='px-5 md:px-7 w-full md:w-2/5 md:p-2 text-lg md:text-xl text-black'>Total no.of Km traveled</label>
            <label htmlFor="tripsanswer" className='px-5 md:px-7 w-full md:w-2/5 lg:w-1/4 md:p-2 text-lg md:text-xl text-black font-bold'>1000 KM</label>
          </div>
          <div className='flex justify-center md:justify-start flex-col sm:flex-row'>
            <label htmlFor="trips" className='px-5 md:px-7 w-full md:w-2/5 md:p-2 text-lg md:text-xl text-black'>Total Earning</label>
            <label htmlFor="tripsanswer" className='px-5 md:px-7 w-full md:w-2/5 lg:w-1/4 md:p-2 text-lg md:text-xl text-black font-bold'>RS. 20000 </label>
          </div>
          {/* buttons */}
        <div className='flex flex-col md:flex-row p-2 md:gap-5 justify-center mt-7'>
          <Link to="/editrentalduration">
          <div className=' p-2 mb-5 w-52 text-lg text-center bg-fuchsia-900 text-white font-semibold mx-auto'> 
            <button>Edit Rental duration</button>
            </div>
          </Link>

            <Link to="/stepperform">
            <div className='p-2 w-52 text-lg text-center bg-orange-400 text-white font-semibold mx-auto'>
            <button>Add another Vehicle</button>
            </div>
            </Link>
            
        </div>
        </div>
        </div>

        </div>

        {/* buttons */}
        {/* <div className='flex flex-col p-2'>
          <Link to="/editrentalduration">
          <div className=' p-2 mb-5 w-52 text-lg text-center bg-fuchsia-900 text-white font-semibold mx-auto'> 
            <button>Edit Rental duration</button>
            </div>
          </Link>
            
            <div className='p-2 w-52 text-lg text-center bg-orange-400 text-white font-semibold mx-auto'>
            <Link to="/stepperform">
            <button>Add another Vehicle</button>
            </Link>
            </div>
        </div> */}


        <div className='w-full mx-auto flex justify-center flex-row m-2'>
            <div className='w-full md:w-1/2 xl:w-2/5 border-2 border-gray-500 p-3 m-1 mt-2 rounded-l-3xl rounded-tr-3xl'>
                <h1 className='text-xl font-semibold p-1 text-center'>Share your experience with us!</h1>
                <h3 className='text-lg p-1 text-center'>We'd love to hear about your experience with us.</h3>
                <h3 className='text-xl font-semibold p-1 pb-3'>Overall Satisfaction:</h3>
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
        {/* review */}
        <div className='p-4 my-6'>
        <Review />
        </div>

        <div className='flex justify-center '>
        <Link to="/profileforvehiclepartner" className='bg-violet-400 p-3 text-xl font-bold'>
        <button>profile</button>
        </Link>
        </div>

        
        


          


      
    </div>
  )
}

export default RegistedCarPartnerHome
