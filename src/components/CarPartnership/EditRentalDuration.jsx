import React, { useState } from 'react';
import './StepperForm.css';
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate from react-router-dom
import CreateIcon from '@mui/icons-material/Create';

const EditRentalDuration = () => {
    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    const [errors, setErrors] = useState({});
    
    const navigate = useNavigate(); // Initialize useNavigate

    const validate = () => {
        const newErrors = {};

        if (!startdate) {
            newErrors.startdate = "Starting date is required";
        }

        if (!enddate) {
            newErrors.enddate = "Ending date is required";
        } else if (new Date(enddate) <= new Date(startdate)) {
            newErrors.enddate = "End date must be later than start date";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {
            // console.log("Form data:", { startdate, enddate });
            navigate("/registedcarpartnerhome", { state: { startdate, enddate } });
            // You can reset the form if needed
            setStartdate('');
            setEnddate('');
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
            {/* rental duration */}
            <h2 className="formtitle">Edit Your Rental Duration</h2>
            <form onSubmit={handleSubmit} className='md:p-5 w-full md:w-3/4 xl:w-1/2 mx-auto shadow-sm shadow-orange-300 p-2'>
                {/* rental start date */}
                <div className="specificcontentdiv">
                    <label htmlFor="startdate" className="label">Rental Start Date<span className="mandatorystar"> *</span></label>
                    <div className="inputanderrordiv">
                        <input
                            type="date"
                            name="startdate"
                            id="startdate"
                            className={`inputbox ${errors.startdate ? "border-red-500" : "border-gray-300"}`}
                            onChange={(e) => {
                                setStartdate(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, startdate: '' })); // Clear error on change
                            }}
                            value={startdate}
                        />
                        {errors.startdate && (
                            <p className="errormessage">{errors.startdate}</p>
                        )}
                    </div>
                </div>

                {/* rental end date */}
                <div className="specificcontentdiv">
                    <label htmlFor="enddate" className="label">Rental End Date<span className="mandatorystar"> *</span></label>
                    <div className="inputanderrordiv">
                        <input
                            type="date"
                            name="enddate"
                            id="enddate"
                            className={`inputbox ${errors.enddate ? "border-red-500" : "border-gray-300"}`}
                            onChange={(e) => {
                                setEnddate(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, enddate: '' })); // Clear error on change
                            }}
                            value={enddate}
                        />
                        {errors.enddate && (
                            <p className="errormessage">{errors.enddate}</p>
                        )}
                    </div>
                </div>

                {/* Submit button */}
                <div className='flex justify-center m-3 mb-5'>
                    <button type="submit" className="next-btn">Update</button>
                    <Link to="/registedcarpartnerhome">
                        <button type="button" className="next-btn bg-orange-400">Back</button>
                    </Link>
                </div>
            </form>
            

            

            
        </div>

        
    );
}

export default EditRentalDuration;
