import React, { useState } from 'react';
import './career.css';  // Import the CSS file for background styling

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });

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

  // Filter the job openings based on the selected job title
  const filteredJobOpenings = selectedJobTitle === '' 
    ? [] // No jobs shown when "Select Preferred Job" is selected
    : jobOpenings.filter(job => job.title === selectedJobTitle);

  return (
    <div className="career-background min-h-screen flex items-center justify-center p-9 text-lg">
      <div className="bg-white p-9 rounded-lg shadow-lg max-w-7xl w-full">
        <h2 className="text-3xl font-bold mb-16 text-center">Be a part of our Team</h2>

        <section className="mb-6 flex">
          <div className="flex-1 pr-4">
            <h3 className="text-2xl font-bold mb-2 pb-5 pt-6">Join our Journey</h3>
            <p className='leading-10 text-justify pr-20 text-lg'>
            At BroBikez, we are passionate about revolutionizing transportation. We are committed to providing exceptional service and making a positive impact in our communities. We are always looking for talented individuals who share our vision and can contribute to our mission.
            </p>
          </div>
          <div className="flex-1 pl-4 w-half px-8 ">
            <img src="https://images.pexels.com/photos/205740/pexels-photo-205740.jpeg?auto=compress&cs=tinysrgb&w=600"  
              className="h-auto rounded-lg shadow-md rounded-tl-full rounded-br-full rounded-tr-full shadow-xl" 
              alt="Join BroBikez"
            />
          </div>
        </section>
   
        

        <section className="mb-6" id='carrer'>
          <h3 className="text-2xl font-bold mb-1 pb-3">Current Openings</h3>
          <label htmlFor="jobTitleFilter" className="font-bold text-black pb-2 text-lg">Select Job type </label>
          <select
            id="jobTitleFilter"
            value={selectedJobTitle}
            onChange={handleJobTitleChange}
            className="border border-gray-300 rounded-lg p-2 mb-6 w-1/3 ml-4 "
          >
            <option value="">Select Preferred Job</option>
            {jobOpenings.map((job, index) => (
              <option key={index} value={job.title}>{job.title}</option>
            ))}
          </select>

          {/* Conditionally render job openings only when a valid job title is selected */}
          {filteredJobOpenings.length > 0 && (
            <ul className="list-disc pl-10">
              {filteredJobOpenings.map((job, index) => (
                <li key={index} className="mb-4">
                  <h4 className="text-xl font-bold">{job.title}</h4>
                  <p className='p-2 px-10'><strong>Location:</strong> {job.location}</p>
                  <p className='p-2 px-10'><strong>Experience:</strong> {job.experience}</p>
                  <p className='p-2 px-10'><strong>Employment Type:</strong> {job.employmentType}</p>
                  <p className='p-2 px-10 leading-7'><strong>Job Summary:</strong> {job.details}</p>
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
    <form onSubmit={handleSubmit} className="space-y-4 p-6 mx-auto shadow-lg">
      <div className="flex flex-col w-full">
        <label htmlFor="name" className="font-bold py-2 text-zinc-900 text-lg">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Enter Your Name'
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="email" className="font-bold py-2 text-zinc-900 text-lg">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Enter Your E-Mail'
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded w-full "
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="phone" className="font-bold py-2 text-zinc-900 text-lg">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder='Enter Your Phone No.'
          value={formData.phone}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="experience" className="font-bold py-2 text-zinc-900 text-lg">Years of Experience</label>
        <div id="experience" className="flex items-center space-x-4">
          <label className="flex items-center text-lg text-zinc-900">
            <input
              type="radio"
              id="fresher"
              name="experience"
              value="Fresher"
              checked={formData.experience === 'Fresher'}
              onChange={handleChange}
              className="mr-2 "
            />
            Fresher
          </label>
          <label className="flex items-center text-lg text-zinc-900">
            <input
              type="radio"
              id="experienced"
              name="experience"
              value="Experienced"
              checked={formData.experience === 'Experienced'}
              onChange={handleChange}
              className="mr-2"
            />
            Experienced
          </label>
        </div>
      </div>
      
      {/* Conditional rendering for Experienced */}
      {formData.experience === 'Experienced' && (
        <>
          <div className="flex flex-col w-full">
            <label htmlFor="currentPosition" className="font-bold py-2 text-zinc-900 text-lg">Current Position</label>
            <input
              type="text"
              id="currentPosition"
              name="currentPosition"
              placeholder='Enter Your Current Position'
              value={formData.currentPosition}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="currentCTC" className="font-bold py-2 text-zinc-900 text-lg">Current CTC</label>
            <input
              type="text"
              id="currentCTC"
              name="currentCTC"
              placeholder='Enter Your Current CTC'
              value={formData.currentCTC}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="totalYearsExperience" className="font-bold py-2 text-zinc-900 text-lg">Total Years of Experience</label>
            <input
              type="number"
              id="totalYearsExperience"
              name="totalYearsExperience"
              placeholder='Enter Total Years of Experience'
              value={formData.totalYearsExperience}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
        </>
      )}
      
      <div className="flex flex-col w-full">
        <label htmlFor="resume" className="font-bold py-2 text-zinc-900 text-lg">Upload Your Resume</label>
        <input
          type="file"
          id="resume"
          name="resume"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="coverLetter" className="font-bold py-2 text-zinc-900 text-lg">Your Message</label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          placeholder='Type Your Message...'
          value={formData.coverLetter}
          onChange={handleChange}
          rows="4"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 px-5"
        >
          Apply
        </button>
      </div>
    </form>
  </div>
</section>

        
        <section className="mb-6">
          <h3 className="text-2xl font-bold mb-1 pb-6">Why Work With Us?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
            <div className="flex flex-col items-center text-center">
              <img src="data:image/jpeg;base64,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" 
              className="w-70 h-48 object-cover rounded-lg mb-4 shadow-md" 
              alt="Salary Benefits"
               />
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="data:image/jpeg;base64,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" 
              className="w-70 h-48 object-cover rounded-lg mb-4 shadow-md" alt="Career Growth" />
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="data:image/jpeg;base64,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" 
              className="w-70 h-48 object-cover rounded-lg mb-4 shadow-md" alt="Supportive Environment" />
            </div>
          </div>

          <section className="mb-6 p-3 pt-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <ul className="list-disc pl-10 space-y-4">
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
      <ul className="list-disc pl-5 space-y-4">
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
