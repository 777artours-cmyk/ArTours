import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToTours = () => {
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="fade-in">Experience Melbourne Like Never Before</h1>
          <p className="hero-subtitle fade-in">Discover Melbourne's iconic destinations with cutting-edge Augmented Reality technology. Unforgettable tours, expert guides, and immersive experiences.</p>

          <div className="hero-features fade-in">
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span>AR-Enhanced Tours</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">👥</span>
              <span>Expert Guides</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌟</span>
              <span>5-Star Experiences</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📍</span>
              <span>Iconic Locations</span>
            </div>
          </div>

          <div className="hero-buttons fade-in">
            <button className="btn btn-accent btn-lg" onClick={scrollToTours}>
              Explore Tours
            </button>
            <button className="btn btn-outline-light btn-lg">
              Learn More
            </button>
          </div>

          <div className="hero-stats fade-in">
            <div className="stat">
              <h3>10K+</h3>
              <p>Happy Tourists</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Unique Tours</p>
            </div>
            <div className="stat">
              <h3>4.9★</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
