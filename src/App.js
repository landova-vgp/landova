import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="homepage">
      <img src={logo} alt="Logo" className="logo" />

      <div className="center-text">
        <p>“My Father Bought Land from VGP… Now, I’m Buying for My Son.”</p>
        <p>70 Years of Trust. Generations of Happy Homeowners.</p>
      </div>

      <div className="nav-links">
        <a href="#">About Us</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}

export default App;