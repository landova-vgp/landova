import { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="homepage">
      <img src={logo} alt="Logo" className="logo" />

      <div className="center-text">
        <p>“My Father Bought Land from VGP… Now, I’m Buying for My Son.”</p>
        <p>70 Years of Trust. Generations of Happy Homeowners.</p>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#">About Us</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </div>
  );
}

export default App;
