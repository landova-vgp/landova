import { useRef, useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import Projects from './components/Projects';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    setMenuOpen(false);
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="homepage">
        <img src={logo} alt="Logo" className="logo" />

        <div className="center-text">
          <p>“My Father Bought Land from VGP… Now, I’m Buying for My Son.”</p>
          <p>70 Years of Trust. Generations of Happy Homeowners.</p>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#">About Us</a>
          <a onClick={scrollToProjects}>Projects</a>
          <a href="#">Contact</a>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </section>

      {/* PROJECT SECTION (starts below the full viewport) */}
      <section ref={projectsRef}>
        <Projects />
      </section>
    </main>
  );
}

export default App;
