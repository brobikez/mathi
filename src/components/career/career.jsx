import React, { useState } from 'react';
import './career.css';  // Import the CSS file for background styling
import Title from '../Title/Title';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Career = () => {
  
  const [selectedJobTitle, setSelectedJobTitle] = useState(''); // Default to empty string for initial state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  const handleJobTitleChange = (e) => {
    setSelectedJobTitle(e.target.value);  // Set the selected job title
  };

  const jobOpenings = [
    {
      title: 'Driver',
      location: 'Chennai',
      experience: 'Fresher/Experience',
      employmentType: 'Full-Time',
      details: 'As a Driver partner with BroBikez, you will be responsible for safely and efficiently transporting passengers to their destinations. You will play a key role in providing a high-quality service experience, representing the company to the public, and ensuring the comfort and safety of all passengers.',

    },
    {
      title: 'Customer Service Representative',
      location: 'Chennai',
      experience: 'Fresher/Experience',
      employmentType: 'Full-Time',
      details: `As a Customer Support Representative at BroBikez, you'll be the frontline ambassador for our company, ensuring that our customers receive the best possible service and support. This role involves interacting with customers through various channels to resolve issues, answer questions, and provide information about our products and services.`,
      
    },
    {
      title: 'HR Executive',
      location: 'Chennai',
      experience: 'Fresher/Experience',
      employmentType: 'Full-Time',
      details: `As an HR Executive at BroBikez, you will be responsible for managing recruitment, employee relations, and fostering a positive work environment. You will play a key role in shaping the company's culture, managing talent acquisition, and ensuring compliance with employment laws and regulations.`,

    },
    {
      title: 'Admin Executive',
      location: 'Chennai',
      experience: 'Fresher/Experience',
      employmentType: 'Full-Time',
      details: `As an Admin Executive at BroBikez, you will be responsible for overseeing daily office operations, managing administrative tasks, and ensuring smooth coordination across departments. You will play a key role in ensuring efficient workflow, maintaining records, and providing support to various teams for seamless operations.`,
    },
    {
      title: 'Finance Executive',
      location: 'Chennai',
      experience: 'Fresher/Experience',
      employmentType: 'Full-Time',
      details: `As a Finance Executive at BroBikez, you will be responsible for managing financial records, preparing reports, and ensuring compliance with financial regulations. You will play a key role in budgeting, forecasting, and analyzing financial data to support the company’s strategic decisions and ensure its financial health.`,
    },
  ];

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      experience: '',
      currentPosition: '',
      currentCTC: '',
      totalYearsExperience: '',
      resume: null,
      coverLetter: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
      experience: Yup.string().required('Experience is required'),
      currentPosition: Yup.string().when('experience', {
        is: 'experience',
        then: Yup.string().required('Current position is required'),
      }),
      currentCTC: Yup.string().when('experience', {
        is: 'experience',
        then: Yup.string().required('Current CTC is required'),
      }),
      totalYearsExperience: Yup.string().when('experience', {
        is: 'experience',
        then: Yup.string().required('Total years of experience is required'),
      }),
      resume: Yup.mixed().required('Resume is required'),
      coverLetter: Yup.string().required('Your message is required'),
    }),
    onSubmit: (values) => {
      console.log('Form Data Submitted:', values);
      alert("Your form is sucessfully submitted");
      navigate("/")
    },
  });

  // Filter the job openings based on the selected job title
  const filteredJobOpenings = selectedJobTitle === '' 
    ? [] // No jobs shown when "Select Preferred Job" is selected
    : jobOpenings.filter(job => job.title === selectedJobTitle);

  return (
    <div className="career-background min-h-screen flex items-center justify-center md:p-4 text-lg ">
      <div className="p-4 rounded-lg shadow-lg  md:max-w-7xl w-full">
        <Title title="be a part of our team" />
        <section className="mb-6 flex flex-col justify-center items-center md:flex-row">
          <div className="flex-1  order-2 md:order-1 ">
            <h3 className="text-2xl font-bold mb-2 md:pb-5 pt-6">Join our Journey</h3>
            <p className='leading-10 justify-center items-center lg:text-justify text-lg p-1 md:p-2'>
            At BroBikez, we are passionate about revolutionizing transportation. We are committed to providing exceptional service and making a positive impact in our communities. We are always looking for talented individuals who share our vision and can contribute to our mission.
            </p>
          </div>
          <div className="flex-1 pl-4 w-half px-8 order-1 md:order-2 ">
            <img src="https://images.pexels.com/photos/205740/pexels-photo-205740.jpeg?auto=compress&cs=tinysrgb&w=600"  
              className="h-auto rounded-lg shadow-md rounded-tl-full rounded-br-full rounded-tr-full " 
              alt="Join BroBikez"
            />
          </div>
        </section>
   
        

        <section className="mb-6" id='carrer'>
          <h3 className="text-2xl font-bold mb-1 pb-3">Current Openings</h3>
          <label htmlFor="jobTitleFilter" className="font-bold text-black pb-2 text-lg flex">Select Job type </label>
          <select
            id="jobTitleFilter"
            value={selectedJobTitle}
            onChange={handleJobTitleChange}
            className="border border-gray-300 rounded-lg p-2 mb-6 w-3/4 md:w-1/3 ml-4 "
          >
            <option value="">Select Preferred Job</option>
            {jobOpenings.map((job, index) => (
              <option key={index} value={job.title}>{job.title}</option>
            ))}
          </select>

          {/* Conditionally render job openings only when a valid job title is selected */}
          {filteredJobOpenings.length > 0 && (
            <ul className="list-disc pl-4 md:pl-10">
              {filteredJobOpenings.map((job, index) => (
                <li key={index} className="mb-4">
                  <h4 className="text-xl font-bold">{job.title}</h4>
                  <p className='p-1 md:p-2 md:px-10'><strong>Location:</strong> {job.location}</p>
                  <p className='p-1 md:p-2 md:px-10'><strong>Experience:</strong> {job.experience}</p>
                  <p className='p-1 md:p-2 md:px-10'><strong>Employment Type:</strong> {job.employmentType}</p>
                  <p className='p-1 md:p-2 md:px-10 leading-7'><strong>Job Summary:</strong> {job.details}</p>
                  <a href={job.link} className="text-blue-500 hover:underline"></a>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className="mb-6">
          <h3 className="text-2xl font-bold mb-1 pb-3">How to Apply</h3>
          <p className='leading-8'>If you're interested in joining our team, please fill out the form below or send your resume and a cover letter to <a href="mailto:support@brobikez.com" className="text-blue-500 hover:underline text-xl">support@brobikez.com</a>. In your cover letter, please include the position you're applying for and why you're a great fit for the role.</p>
        </section>

        <section className="mb-6 flex justify-center">
  <div className="w-full max-w-2xl">
    <h3 className="text-2xl font-bold mb-2 text-center  bottom-1">Application Form</h3>
    <form onSubmit={formik.handleSubmit} className="space-y-4 p-2 md:p-4 mx-auto shadow-lg">
              {/* Name */}
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="font-bold py-1 md:py-2 text-zinc-900 text-lg">Full Name<span className='text-red-500 px-1'>*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Enter Your Name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
                />
                {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
              </div>

              {/* Email */}
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="font-bold py-1 md:py-2 text-zinc-900 text-lg">Email<span className='text-red-500 px-1'>*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Enter Your E-Mail'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
                />
                {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="flex flex-col w-full">
                <label htmlFor="phone" className="font-bold py-1 md:py-2 text-zinc-900 text-lg">Phone Number<span className='text-red-500 px-1'>*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder='Enter Your Phone No.'
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
                />
                {formik.touched.phone && formik.errors.phone && <p className="text-red-500 text-sm">{formik.errors.phone}</p>}
              </div>

              {/* Experience */}
              <div className="flex flex-col w-full">
                <label htmlFor="experience" className="font-bold py-1 md:py-2 text-zinc-900 text-lg">Years of Experience<span className='text-red-500 px-1'>*</span></label>
                <div id="experience" className="flex items-center space-x-4">
                  <label className="flex items-center text-lg text-zinc-900">
                    <input
                      type="radio"
                      id="fresher"
                      name="experience"
                      value="Fresher"
                      checked={formik.values.experience === 'Fresher'}
                      onChange={formik.handleChange}
                      className="mr-2"
                    />
                    Fresher
                  </label>
                  <label className="flex items-center text-lg text-zinc-900">
                    <input
                      type="radio"
                      id="experienced"
                      name="experience"
                      value="Experienced"
                      checked={formik.values.experience === 'Experienced'}
                      onChange={formik.handleChange}
                      className="mr-2"
                    />
                    Experienced
                  </label>
                </div>
                {formik.touched.experience && formik.errors.experience && <p className="text-red-500 text-sm">{formik.errors.experience}</p>}
              </div>

              {/* Conditional fields for experienced */}
              {formik.values.experience === 'Experienced' && (
                <>
                  <div className="flex flex-col w-full">
                    <label htmlFor="currentPosition" className="font-bold py-1 md:py-2 text-zinc-900 text-lg">Current Position<span className='text-red-500 px-1'>*</span></label>
                    <input
                      type="text"
                      id="currentPosition"
                      name="currentPosition"
                      placeholder='Enter Your Current Position'
                      value={formik.values.currentPosition}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border ${formik.touched.currentPosition && formik.errors.currentPosition ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
                    />
                    {formik.touched.currentPosition && formik.errors.currentPosition && <p className="text-red-500 text-sm">{formik.errors.currentPosition}</p>}
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="currentCTC" className="font-bold py-2 text-zinc-900 text-lg">Current CTC<span className='text-red-500 px-1'>*</span></label>
                    <input
                      type="text"
                      id="currentCTC"
                      name="currentCTC"
                      placeholder='Enter Your Current CTC'
                      value={formik.values.currentCTC}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border ${formik.touched.currentCTC && formik.errors.currentCTC ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
                    />
                    {formik.touched.currentCTC && formik.errors.currentCTC && <p className="text-red-500 text-sm">{formik.errors.currentCTC}</p>}
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="totalYearsExperience" className="font-bold py-1 md:py-2 text-zinc-900 text-lg">Total Years of Experience<span className='text-red-500 px-1'>*</span></label>
                    <input
                      type="number"
                      id="totalYearsExperience"
                      name="totalYearsExperience"
                      placeholder='Enter Total Years of Experience'
                      value={formik.values.totalYearsExperience}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border ${formik.touched.totalYearsExperience && formik.errors.totalYearsExperience ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
                    />
                    {formik.touched.totalYearsExperience && formik.errors.totalYearsExperience && <p className="text-red-500 text-sm">{formik.errors.totalYearsExperience}</p>}
                  </div>
                </>
              )}

              {/* Resume Upload */}
              <div className="flex flex-col w-full">
                <label htmlFor="resume" className="font-bold py-1 md:py-2 text-zinc-900 text-lg">Upload Your Resume<span className='text-red-500 px-1'>*</span></label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={(e) => formik.setFieldValue('resume', e.target.files[0])}
                  className={`border ${formik.touched.resume && formik.errors.resume ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
                />
                {formik.touched.resume && formik.errors.resume && <p className="text-red-500 text-sm">{formik.errors.resume}</p>}
              </div>

              {/* Cover Letter */}
              <div className="flex flex-col w-full">
                <label htmlFor="coverLetter" className="font-bold py-1 md:py-2 text-zinc-900 text-lg">Your Message<span className='text-red-500 px-1'>*</span></label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  placeholder='Type Your Message...'
                  value={formik.values.coverLetter}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows="4"
                  className={`border ${formik.touched.coverLetter && formik.errors.coverLetter ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
                />
                {formik.touched.coverLetter && formik.errors.coverLetter && <p className="text-red-500 text-sm">{formik.errors.coverLetter}</p>}
              </div>

              {/* Submit */}
              <div className="flex justify-center w-full">
                <button
                  type="submit"
                  className="bg-fuchsia-900 hover:bg-fuchsia-950 text-white p-2 rounded px-8 text-xl"
                >
                  Apply
                </button>
              </div>
            </form>
  </div>
</section>

        
        <section className="mb-6">
          <h3 className="text-2xl font-bold mb-1 pb-6">Why Work With Us?</h3>
          <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 md:gap-3 ">
            <div className="flex flex-col items-center text-center">
              <img src="../src/Components/career/img/career1.jpg" 
              className="border border-gray-400 h-20 md:h-32 lg:h-48 w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-md hover:shadow-orange-200" 
              alt="Salary Benefits"
               />
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="../src/Components/career/img/career2.jpg" 
              className=" border border-gray-400 h-20 md:h-32 lg:h-48 w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-md hover:shadow-orange-200" alt="Career Growth" />
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="../src/Components/career/img/career3.jpg" 
              className=" border border-gray-400 h-20 md:h-32 lg:h-48 w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-md hover:shadow-orange-200" alt="Supportive Environment" />
            </div>
          </div>

          <section className="mb-6 p-3 pt-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <ul className="list-disc p-1 lg:pl-10 space-y-4 ">
        <li>
          <h4 className="text-lg font-semibold flex items-center pb-2">
            Competitive Salary and Benefits
            <i className="fas fa-money-bill text-gold text-2xl pl-2 ml-2"></i>
          </h4>
          <p>Attractive compensation packages, comprehensive benefits including health, dental, and vision insurance, and retirement plans.</p>
        </li>
        <li>
          <h4 className="text-lg font-semibold flex items-center pb-2">
            Career Growth and Development
            <i className="fas fa-briefcase text-gold ml-2 text-2xl pl-2 "></i>
          </h4>
          <p>Access to ongoing training, clear career advancement paths, and mentorship opportunities to support your professional growth.</p>
        </li>
      </ul>
    </div>
    <div>
      <ul className="list-disc p-1 lg:pl-10 space-y-4">
        <li>
          <h4 className="text-lg font-semibold flex items-center pb-2">
            Employee Recognition and Rewards
            <i className="fas fa-trophy text-gold ml-2 text-2xl pl-2 "></i>
          </h4>
          <p>Programs for recognizing achievements, performance-based bonuses, and additional perks like employee discounts and wellness programs.</p>
        </li>
        <li>
          <h4 className="text-lg font-semibold flex items-center pb-2">
            Freedom of Work
            <i className="fas fa-unlock-alt text-gold ml-2 text-2xl pl-2 "></i>
          </h4>
          <p>Enjoy the autonomy of being your own boss, with the ability to set your working hours and routes.</p>
        </li>
      </ul>
    </div>
  </div>
</section>

        </section>


      </div>
    </div>
  );
};

export default Career;
