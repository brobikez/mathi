import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom'; 


const Footer = () => {
  const navigate = useNavigate();


  const navi = () => {
      navigate("/");
  };

  return (
    <footer className="footersec">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className='footerheading'>Quick Link</h2>
          <ul className="footer-links">
          <li><a href="/">Home</a></li>
            <li><a href="#about"  onClick={navi}>About Us</a></li>
            <li><a href="#press"  onClick={navi}>Press & Media</a></li>
            <li><a href="#safety" onClick={navi}>Safety Measures</a></li>
            <li><a href="/career1" onClick={navi}>Careers</a></li>
          </ul>
          
        </div>
        
        <div className="footer-section">
          <h2 className='footerheading'>Support</h2>
          <ul className="footer-links">
            <li><a href="#settings"  onClick={navi}>Settings & FAQ</a></li>
            <li><a href="#contact" onClick={navi}>Customer Support</a></li>
            <li><a href="#help" onClick={navi}>Help & Support</a></li>
           
            <li><a href="/termsandcondition" onClick={navi}>Terms & Conditions</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h2 className='footerheading'>Follow Us</h2>  
          <div className="social-media p-3">
            <a className='social_media_icon' href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="facebook-icon social_media_icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter-icon social_media_icon" />
            </a>
            <a className='social_media_icon' href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram-icon social_media_icon" />
            </a>
            <a className='social_media_icon' href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="linkedin-icon social_media_icon" />
            </a>
            
            <a className='social_media_icon' href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="whatsapp-icon social_media_icon" />
            </a>
        </div>

          <div className="app-stores p-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" aria-label="Google Play Store">
            <img className='social_media_icon' src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ width: '150px', marginRight: '30px' }} />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" aria-label="Apple App Store">
            <img className='social_media_icon' src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style={{ width: '150px' }} />
            </a>
        </div>
        </div>

        <div className="footer-section">
          <h2 className='footerheading'>Contact Us</h2>
          <p className='mail_phone'><a className='mail_phoneover' href="mailto:brobikes@gmail.com">Email: support@brobikez.com</a></p>
          <p className='mail_phone'> <a className='mail_phoneover' href="tel:1234567891">Phone: +1-800-456-7890</a></p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className='All_rights'>&copy; {new Date().getFullYear()} Bro Bikez. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;