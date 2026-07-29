import React from 'react';
import './Footer.css';
import { PHOTO_CREDITS } from '../data/imageLibrary';
import logo from '../assets/logo.jpg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-brand">
                <img src={logo} alt="AR Tours logo" className="footer-logo-mark" />
                <h4>AR Tours</h4>
              </div>
              <p>Australia's luxury private touring company. Experience the country's most iconic destinations with expert local guides and comfortable, professional transport.</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#tours">Our Tours</a></li>
                <li><a href="#testimonials">Reviews</a></li>
                <li><a href="#booking">Contact Us</a></li>
                <li><a href="#booking">Book Now</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Popular Tours</h4>
              <ul className="footer-links">
                <li><a href="#tours">Great Ocean Road</a></li>
                <li><a href="#tours">Penguin Parade</a></li>
                <li><a href="#tours">Wine Country</a></li>
                <li><a href="#tours">City Discovery</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul className="footer-contact">
                <li>📞 +61 400 044 004</li>
                <li>💬 +61 400 044 004 (WhatsApp)</li>
                <li>✉️ 888artours@gmail.com</li>
                <li>📍 52 Spencer Street, Melbourne 3000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} AR Tours. All rights reserved.</p>
            <div className="footer-legal">
              <a href="./privacy-policy.html">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="./terms.html">Terms &amp; Conditions</a>
            </div>
          </div>
          <p className="photo-credits">
            Photos: {PHOTO_CREDITS.map((c, i) => (
              <span key={i}>
                {c.subject} ({c.author}, {c.license}){i < PHOTO_CREDITS.length - 1 ? ' · ' : ''}
              </span>
            ))} — via Wikimedia Commons
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
