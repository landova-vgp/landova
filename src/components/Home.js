import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/logo.png';
import Projects from '../components/Projects';
import AboutUs from '../components/AboutUs';
import ContactUs from './ContactUs';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null); 

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

        {/* Fullscreen modal for mobile/tablet */}
        <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
          <div className="menu-links">
            <a onClick={scrollToAbout}>About Us</a>
            <a onClick={scrollToProjects}>Projects</a>
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

