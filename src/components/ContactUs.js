import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <footer className="site-foot" id="contact-us">
      <div className="site-foot__inset clear-box">
        <h2 className="site-foot__title">Contact us</h2>

        <a href="mailto:info@refuel.cz" className="site-foot__email">
          email@to-be-added.com
        </a>

        <div className="site-foot__cols">
          <address className="site-foot__cols__item">
            <b>Corporate Office</b>
            VGP Square, Dharmaraja Koil Street,<br />
            Saidapet, Chennai – 600015.<br />
            +91 98410 57957
          </address>

          <address className="site-foot__cols__item">
            
          </address>

          <address className="site-foot__cols__item">
            
          </address>
        </div>

        <p className="site-foot__note">
          
        </p>

        <p className="site-foot__copy">
          © 2025 Landova Realty | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default ContactUs;
