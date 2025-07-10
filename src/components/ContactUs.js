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
            <b>Landova Realty Pvt Ltd</b>
            <span>Identification No.:</span> 123 45 678<br />
            <span>GST number:</span> ABCDEFGHIJKLMN<br />
            Address to be added.
          </address>

          <address className="site-foot__cols__item">
            <b>Chennai Office</b>
            Address to be added.<br />
            +91 99999 99999
          </address>

          <address className="site-foot__cols__item">
            <b>Branch Office</b>
            Address to be added.<br />
            +91 00000 00000
          </address>
        </div>

        <p className="site-foot__note">
          Company is registered under the Ministry of Corporate Affairs, India.
        </p>

        <p className="site-foot__copy">
          © 2025 Landova Realty | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default ContactUs;
