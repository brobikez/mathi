import React from 'react';

const ContactUs = () => {
  const helplineNumbers = {
    General: '+123-456-7890',
    Emergency: '+123-911-9111',
    Support: '+123-800-1234',
  };

  const helplineEmails = {
    General: 'info@sevalsoftsoln.com',
    Support: 'support@sevalsoftwaresoln.com',
  };

  return (
    <div className="bg-gray-100 py-16" id='contact'>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Helpline Numbers</h3>
            <ul>
              {Object.entries(helplineNumbers).map(([category, number]) => (
                <li key={category} className="text-gray-700">
                  <strong>{category}:</strong> {number}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Helpline Email Addresses</h3>
            <ul>
              {Object.entries(helplineEmails).map(([category, email]) => (
                <li key={category} className="text-gray-700">
                  <strong>{category}:</strong> {email}
                </li>
              ))}
            </ul>
          </div>
          <div>
        
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
