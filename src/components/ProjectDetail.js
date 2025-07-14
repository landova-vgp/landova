import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ContactUs from './ContactUs';
import ProjectContent from './ProjectContent';
import './ProjectDetail.css';
import './Home.css'; // for shared hamburger menu styles

import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-zoom.css';

const importAllPhotos = () => {
  const context = require.context('../assets/photos', false, /\.(png|jpe?g|webp)$/);
  return context.keys().map(context);
};

const photos = importAllPhotos();

const ProjectDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState('');

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  if (loading) {
    return <div className="spinner" />;
  }

  const isDesktop = window.innerWidth >= 1024;

  return (
    <div className="project-detail-page">
      {/* HERO SECTION */}
      <section className="detail-project__hero">
        <div className="top-bar">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
            <span className={`menu-label ${menuOpen ? 'visible' : 'hidden'}`}>MENU</span>
            <i className="icon">
              <svg width="18" height="14" viewBox="0 0 18 14">
                <use href="#svg-burger" />
              </svg>
            </i>
          </div>
        </div>

        <div className="detail-project__hero-text">
          <p className="hero-line-1">117 Premium Plots Sizes: 636 - 2830 Sq. ft Starting from 16 Lakhs</p>
          <h2 className="hero-line-2">Build Your Home Where IT meets Connectivity - OMR to GST</h2>
          <p className="hero-line-3">(Bank Loan Facility Available)</p>
        </div>

        {/* Desktop Menu */}
        {menuOpen && isDesktop && (
          <div className="desktop-menu-modal">
            <nav className="desktop-nav">
              <div className="desktop-links">
                <Link to="/" onMouseEnter={() => setHoveredItem('home')} onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/#projects" onMouseEnter={() => setHoveredItem('projects')} onClick={() => setMenuOpen(false)}>Projects</Link>
                                <Link to="/#about" onMouseEnter={() => setHoveredItem('about')} onClick={() => setMenuOpen(false)}>About Us</Link>
                <Link to="/#contact" onMouseEnter={() => setHoveredItem('contact')} onClick={() => setMenuOpen(false)}>Contact</Link>
              </div>
              <div className="desktop-contact">
                {hoveredItem === 'home' && (
                  <span className="contact-motto">Back to the beginning…<br /><b>…our home</b></span>
                )}
                {hoveredItem === 'about' && (
                  <span className="contact-motto">Dedicated to the pursuit of simplicity…<br /><b>…our team</b></span>
                )}
                {hoveredItem === 'projects' && (
                  <span className="contact-motto">Selected projects…<br /><b>…our works</b></span>
                )}
                {hoveredItem === 'contact' && (
                  <span className="contact-motto">Get in touch…<br /><b>…our contact</b></span>
                )}
              </div>
            </nav>
          </div>
        )}

        {/* Mobile/Tablet Menu */}
        <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
          <div className="menu-links">
            <Link to="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/#about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
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
              hideBarsDelay: 3000,
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

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.090785762338!2d80.1801303740302!3d12.74104278756895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f592476fdc01%3A0x7e9913b0f6e3ce3!2sThiruporur%2C%20Tamil%20Nadu%20603110!5e0!3m2!1sen!2sin!4v1720771690642!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0, borderRadius: '8px', marginTop: '40px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Thiruporur"
        />
      </div>

      <div id="project-contact">
        <ContactUs />
      </div>
    </div>
  );
};

export default ProjectDetail;
