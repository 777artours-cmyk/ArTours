import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>AR Tours</h4>
              <p>Melbourne's premier augmented reality tour company. Experience iconic destinations like never before with cutting-edge AR technology and expert guides.</p>
              <div className="footer-social">
                <a href="#facebook" className="social-icon">f</a>
                <a href="#instagram" className="social-icon">📷</a>
                <a href="#youtube" className="social-icon">▶</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#tours">Our Tours</a></li>
                <li><a href="#testimonials">Reviews</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#tours">Book Now</a></li>
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
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms">Terms & Conditions</a>
              <span className="separator">•</span>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
