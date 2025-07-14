import { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';
import logo from '../assets/logo.png';
import Projects from '../components/Projects';
import AboutUs from '../components/AboutUs';
import ContactUs from './ContactUs';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState('');

  const location = useLocation();

useEffect(() => {
  const hash = location.hash;
  if (hash) {
    // Delay scrolling to allow DOM to finish rendering
    setTimeout(() => {
      if (hash === '#about') {
        scrollWithOffset(aboutRef);
      } else if (hash === '#projects') {
        scrollWithOffset(projectsRef);
      } else if (hash === '#contact') {
        scrollWithOffset(contactRef);
      }
    }, 100); // small delay
  }
}, [location.hash]);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null); 

   const scrollWithOffset = (ref) => {
    if (ref.current) {
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset - 100; // adjust -100 as needed
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    setMenuOpen(false);
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    setMenuOpen(false);
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    setMenuOpen(false);
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <section className="homepage">
        <div className="top-bar">
        <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
        </Link>

        <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
          <span className={`menu-label ${menuOpen ? 'visible' : 'hidden'}`}>MENU</span>
          
          <i className="icon">
              <svg width="18" height="14" viewBox="0 0 18 14">
                <use href="#svg-burger"></use>
              </svg>
            </i>
        </div>
        </div>
        
        <div className="center-text">
          <p>“My Father Bought Land from VGP… Now, I’m Buying for My Son.”</p>
          <p>70 Years of Trust. Generations of Happy Homeowners.</p>
        </div>

        <div className="slider-container">
          <p className="slider-label">OMR - GST INBETWEEN KEELUR</p>

          <div className="slider-arrows">
            <button className="arrow-btn" disabled>
              <svg width="9" height="13" viewBox="0 0 9 13">
                <path d="M8 1L2 6.5L8 12" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </button>

            <button className="arrow-btn" disabled>
              <svg width="9" height="13" viewBox="0 0 9 13">
                <path d="M1 1L7 6.5L1 12" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>
        </div>

        {/* Side nav for desktop */}
        <div className="nav-links">
          <a onClick={scrollToAbout}>About Us</a>
          <a onClick={scrollToProjects}>Projects</a>
          <a onClick={scrollToContact}>Contact</a>
        </div>

        {menuOpen && window.innerWidth >= 1024 && (
        <div className="desktop-menu-modal">
          <nav className="desktop-nav">
            <div className="desktop-links">
              <a
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                onMouseEnter={() => setHoveredItem('home')}
              >
                Home
              </a>
              <a
                onClick={scrollToProjects}
                onMouseEnter={() => setHoveredItem('projects')}
              >
                Projects
              </a>
              <a
                onClick={scrollToAbout}
                onMouseEnter={() => setHoveredItem('about')}
              >
                About Us
              </a>
              <a
                onClick={scrollToContact}
                onMouseEnter={() => setHoveredItem('contact')}
              >
                Contact
              </a>
            </div>
            <div className="desktop-contact">
              {hoveredItem === 'home' && (
                <span className="contact-motto">
                  Back to the beginning…<br />
                  <b>…our home</b>
                </span>
              )}
              {hoveredItem === 'projects' && (
                <span className="contact-motto">
                  Selected projects…<br />
                  <b>…our works</b>
                </span>
              )}
              {hoveredItem === 'about' && (
                <span className="contact-motto">
                  Dedicated to the pursuit of simplicity…<br />
                  <b>…our team</b>
                </span>
              )}
              {hoveredItem === 'contact' && (
                <span className="contact-motto">
                  Get in touch…<br />
                  <b>…our contact</b>
                </span>
              )}
            </div>

          </nav>
        </div>
      )}

        {/* Fullscreen modal for mobile/tablet */}
        <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
          <div className="menu-links">
            <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a>
            <a onClick={scrollToProjects}>Projects</a>
            <a onClick={scrollToAbout}>About Us</a>
            <a onClick={scrollToContact}>Contact</a>
          </div>
        </div>

        
      </section>

      <section ref={projectsRef}>
        <Projects />
      </section>

      <section ref={aboutRef}>
        <AboutUs />
      </section>

      <section ref={contactRef}>
        <ContactUs />
      </section>
    </main>
  );
}

