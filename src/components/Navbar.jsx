import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaBars, FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import './navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const location = useLocation();
  const [clickedLogo, setClickedLogo] = useState(false);

  useEffect(() => {
    if (clickedLogo && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setClickedLogo(false); // reset after every route change
  }, [location, clickedLogo]);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      setClickedLogo(true);
    }
    // αλλιώς θα πάει στην αρχική μέσω του Link
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="Nocté Eyewear Logo" draggable="false" />
        </Link>
      </div>

      {/* Desktop Links */}
      <nav className="navbar-links">
        <ul className="nav-links">
          <li>
            <Link to="/sunglasses">Sunglasses</Link>
          </li>
          <li>
            <Link to="/eyeglasses">Eyeglasses</Link>
          </li>
          <li>
            <Link to="/collection">Collection</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon (Mobile only) */}
      <div className="mobile-hamburger" onClick={toggleMenu}>
        <FaBars size={28} />
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/sunglasses" onClick={closeMenu}>
          Sunglasses
        </Link>
        <Link to="/eyeglasses" onClick={closeMenu}>
          Eyeglasses
        </Link>
        <Link to="/collection" onClick={closeMenu}>
          Collection
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <div className="mobile-socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="tel:+123456789">
            <FaPhoneAlt size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
