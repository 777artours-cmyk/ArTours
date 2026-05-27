import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>🌍 AR Tours</h2>
            <p className="tagline">Melbourne's Premier AR Tour Experience</p>
          </div>

          <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#tours" onClick={handleNavClick} className="nav-link">Tours</a>
            <a href="#testimonials" onClick={handleNavClick} className="nav-link">Reviews</a>
            <a href="#contact" onClick={handleNavClick} className="nav-link">Contact</a>
            <button className="btn btn-primary" onClick={handleNavClick}>
              <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Book Now</a>
            </button>
          </nav>

          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
