import React from 'react';
import { useParams, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ProjectContent from './ProjectContent';
import './ProjectDetail.css';

import LightGallery from 'lightgallery/react';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgZoom from 'lightgallery/plugins/zoom';

// Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-zoom.css';

// Import all images from photos folder
const importAllPhotos = () => {
  const context = require.context('../assets/photos', false, /\.(png|jpe?g|webp)$/);
  return context.keys().map(context);
};

const photos = importAllPhotos();

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div className="project-detail-page">
      {/* HERO SECTION */}
      <section className="detail-project__hero">
        <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="detail-project__hero-text">
          <p className="hero-line-1">117 Premium Plots Sizes: 636 - 2830 Sq. ft Starting from 16 Lakhs</p>
          <p className="hero-line-2">Build Your Home Where IT meets Connectivity - OMR to GST</p>
          <p className="hero-line-3">(Bank Loan Facility Available)</p>
        </div>
      </section>

      {/* TWO COLUMN SECTION */}
      <section className="detail-project__content">
        <div className="detail-project__col--align-left">
           <ProjectContent />

           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.090785762338!2d80.1801303740302!3d12.74104278756895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f592476fdc01%3A0x7e9913b0f6e3ce3!2sThiruporur%2C%20Tamil%20Nadu%20603110!5e0!3m2!1sen!2sin!4v1720771690642!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "8px", marginTop: "40px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Thiruporur"
            />

        </div>

        <div className="detail-project__col--align-right">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgAutoplay, lgFullscreen, lgZoom]}
            elementClassNames="custom-lightgallery"
            settings={{
                thumbnail: true,
                autoplay: true,
                pause: 3000,
                mode: 'lg-slide',
                download: false,
                hideBarsDelay: 3000
            }}
            >
            {photos.map((photo, index) => (
                <a href={photo} key={index}>
                <img
                    src={photo}
                    alt={`Project ${index + 1}`}
                    style={{ width: '100%', marginBottom: '20px', cursor: 'pointer' }}
                />
                </a>
            ))}
            </LightGallery>
        </div>
      </section>



      <div className='footer'>
        <p className="footer-text">
          © 2025 Landova Realty | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
