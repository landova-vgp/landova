// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-red.png';
import './Home.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState('');

  const isDesktop = window.innerWidth >= 1024;

  return (
    <>
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
              {hoveredItem === 'home' && <span className="contact-motto">Back to the beginning…<br /><b>…our home</b></span>}
              {hoveredItem === 'projects' && <span className="contact-motto">Selected projects…<br /><b>…our works</b></span>}
              {hoveredItem === 'about' && <span className="contact-motto">Dedicated to the pursuit of simplicity…<br /><b>…our team</b></span>}
              {hoveredItem === 'contact' && <span className="contact-motto">Get in touch…<br /><b>…our contact</b></span>}
            </div>
          </nav>
        </div>
      )}

      {/* Mobile/Tablet Menu */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="menu-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/#about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
