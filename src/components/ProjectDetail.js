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
    </div>
  );
};

export default ProjectDetail;
