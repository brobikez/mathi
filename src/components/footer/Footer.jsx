import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom'; 

const Footer = () => {
  const navigate = useNavigate();

  const navi = () => {
      navigate("/");
  };

  return (
    <footer className="bg-black text-white text-center py-4">
      <div className="flex flex-col md:flex-wrap md:flex-row justify-around">
        {/* Quick Links and Support Sections */}
        <div className="flex-1 min-w-[200px] p-4 md:w-1/2">
          <h2 className="text-lg md:text-xl mb-2" style={{color: "rgb(255, 166, 0)"}}>Quick Link</h2>
          <ul className="list-none p-0">
            <li className='p-0.5 xl:p-1'><a href="/" className="hover:text-gray-300 md:text-lg md:p-3">Home</a></li>
            <li className='p-0.5 xl:p-1'><a href="#about" onClick={navi} className="hover:text-gray-300 md:text-lg ">About Us</a></li>
            <li className='p-0.5 xl:p-1'><a href="#press" onClick={navi} className="hover:text-gray-300  md:text-lg md:p-3">Press & Media</a></li>
            <li className='p-0.5 xl:p-1'><a href="#safety" onClick={navi} className="hover:text-gray-300 md:text-lg md:p-3 ">Safety Measures</a></li>
            <li className='p-0.5 xl:p-1'><a href="/career" onClick={navi} className="hover:text-gray-300 md:text-lg md:p-3">Careers</a></li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px] p-4 md:w-1/2">
          <h2 className="text-lg md:text-xl mb-2" style={{color: "rgb(255, 166, 0)"}}>Support</h2>
          <ul className="list-none p-0">
            <li className='p-0.5 xl:p-1'><a href="#settings" onClick={navi} className="hover:text-gray-300 md:text-lg md:p-3">Settings & FAQ</a></li>
            <li className='p-0.5 xl:p-1'><a href="#contact" onClick={navi} className="hover:text-gray-300 md:text-lg md:p-3">Customer Support</a></li>
            <li className='p-0.5 xl:p-1'><a href="#help" onClick={navi} className="hover:text-gray-300 md:text-lg md:p-3">Help & Support</a></li>
            <li className='p-0.5 xl:p-1'><a href="/termsandcondition" onClick={navi} className="hover:text-gray-300 md:text-lg md:p-3">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Follow Us and Contact Sections */}
        <div className="flex-1 min-w-[200px] p-4 md:w-1/2">
          <h2 className="text-lg md:text-xl mb-2" style={{color: "rgb(255, 166, 0)"}}>Follow Us</h2>  
          <div className="flex justify-center md:flex-wrap mb-4 p-3">
            <a className='mx-2' href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-[#1877F2] transition-transform transform hover:scale-110 md:m-2 xl:m-0" />
            </a>
            <a className='mx-2' href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="text-[#1DA1F2] transition-transform transform hover:scale-110 md:m-2 xl:m-0" />
            </a>
            <a className='mx-2' href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-[#E4405F] transition-transform transform hover:scale-110 md:m-2 xl:m-0" />
            </a>
            <a className='mx-2' href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-[#0077b5] transition-transform transform hover:scale-110 md:m-2 xl:m-0" />
            </a>
            <a className='mx-2' href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <FontAwesomeIcon icon={faTelegram} size="2x" className="text-[#0088cc] transition-transform transform hover:scale-110 md:m-2 xl:m-0" />
            </a>
            <a className='mx-2' href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-[#25d366] transition-transform transform hover:scale-110 md:m-2 xl:m-0" />
            </a>
          </div>

          <div className="flex justify-center ">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" aria-label="Google Play Store" className='m-2'>
              <img className='mr-3' src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ width: '150px' }} />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" aria-label="Apple App Store" className='m-2'>
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style={{ width: '150px' }} />
            </a>
          </div>
        </div>

        <div className="flex-1 min-w-[200px] p-4 md:w-1/2">
          <h2 className="text-lg md:text-xl mb-2 " style={{color: "rgb(255, 166, 0)"}}>Contact Us</h2>
          <ul className="list-none p-0">
            <li className='p-0.5 xl:p-1'><a className='hover:text-gray-300 md:text-lg md:p-3' href="mailto:brobikes@gmail.com">Email: support@brobikez.com</a></li>
            <li className='p-0.5 xl:p-1'><a className='hover:text-gray-300 md:text-lg md:p-3' href="tel:1234567891">Phone: +1-800-456-7890</a></li>

          </ul>
        </div>
      </div>
      
      <div className="mt-4 border-t border-gray-700 pt-4">
        <p className='text-gray-400 md:text-lg'>&copy; {new Date().getFullYear()} Bro Bikez. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
