import React from 'react';
import './AnimatedHero.css';
import { tourImages } from '../data/imageLibrary';

const slides = [
  tourImages.greatOceanRoad.hero,
  tourImages.penguinParade.hero,
  tourImages.yarraValley.hero,
];

function AnimatedHero() {
  const scrollToTours = () => {
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animated-hero-container">
      {/* Real photo slideshow background */}
      <div className="hero-photo-layer">
        {slides.map((src, idx) => (
          <div
            key={idx}
            className="hero-photo-slide"
            style={{
              backgroundImage: `url("${src}")`,
              animationDelay: `${idx * 6}s`,
            }}
          />
        ))}
        <div className="hero-scrim" />
      </div>

      {/* Text Overlay */}
      <div className="hero-text-overlay">
        <h1 className="hero-fade-in">Explore Australia Like Never Before</h1>
        <p className="hero-fade-in hero-fade-in-delay">
          Journey through Melbourne &amp; Victoria with expert-guided tours
        </p>
        <button className="btn btn-accent btn-lg hero-fade-in hero-fade-in-delay-2" onClick={scrollToTours}>
          Explore Tours
        </button>
      </div>
    </div>
  );
}

export default AnimatedHero;
