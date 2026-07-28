import React from 'react';
import { motion } from 'framer-motion';
import { getTourImage } from '../data/imageLibrary';
import { SELECT_TOUR_EVENT } from '../services/tourSelection';
import './Tours.css';

function Tours() {
  const tours = [
    {
      id: 1,
      name: 'Great Ocean Road Tour',
      price: '$1000',
      duration: '12-13 hours',
      description: 'Experience the iconic 12 Apostles with expert local storytelling. Explore stunning coastal views, Loch Ard Gorge, and spotting wild koalas in their natural habitat.',
      image: '🌊',
      highlights: ['12 Apostles', 'Loch Ard Gorge', 'Wild Koalas', 'Scenic Drives'],
      rating: 4.9,
      reviews: 2450,
    },
    {
      id: 2,
      name: 'Penguin Parade Experience',
      price: '$1000',
      duration: '10-12 hours',
      description: 'Watch the famous little penguin parade at sunset at Phillip Island. Our expert guides reveal the secret lives and migration patterns of these amazing creatures.',
      image: '🐧',
      highlights: ['Penguin Parade', 'Phillip Island', 'Sunset Viewing', 'Wildlife Facts'],
      rating: 4.9,
      reviews: 1980,
    },
    {
      id: 3,
      name: 'Wine Country Tour',
      price: '$1000',
      duration: '8 hours',
      description: 'Discover the Yarra Valley wine region with expert-guided tastings. Learn about wine production, vineyard history, and enjoy premium local wines and cheese platters.',
      image: '🍷',
      highlights: ['Wine Tastings', 'Vineyard Tours', 'Cheese Platters', 'Cellar Door Visits'],
      rating: 4.8,
      reviews: 1650,
    },
    {
      id: 4,
      name: 'Melbourne City Discovery',
      price: '$1000',
      duration: '3.5-4 hours',
      description: 'Explore Melbourne\'s hidden gems and iconic landmarks with a local expert guide. Discover street art, architecture, and local history on foot.',
      image: '🏙️',
      highlights: ['Hidden Gems', 'Street Art', 'Architecture', 'Local History'],
      rating: 4.9,
      reviews: 2100,
    },
    {
      id: 5,
      name: 'Private Customized Tour',
      price: '$1000',
      duration: 'Flexible',
      description: 'Tailor-made road tours designed for your interests. Whether it\'s corporate groups or special occasions, our expert guides customize the perfect Melbourne experience for you.',
      image: '🎯',
      highlights: ['Custom Itinerary', 'Expert Guides', 'Group Friendly', 'Full Service'],
      rating: 5.0,
      reviews: 890,
    },
    {
      id: 6,
      name: 'Corporate Transport & Chauffeur',
      price: '$1000',
      duration: 'On Demand',
      description: 'Premium corporate transportation with knowledgeable drivers. Perfect for executive transfers, team building events, or corporate group tours with comfort and professionalism.',
      image: '🚐',
      highlights: ['Professional Drivers', 'Premium Vehicles', 'Group Ready', '24/7 Service'],
      rating: 4.9,
      reviews: 1220,
    },
  ];

  const handleBookNow = (tourName) => {
    window.dispatchEvent(
      new CustomEvent(SELECT_TOUR_EVENT, { detail: { tourName } })
    );

    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tours" className="tours section-padding">
      <div className="container">
        <div className="section-header">
          <div className="divider divider-left"></div>
          <h2>Our AR Tours</h2>
          <p className="section-subtitle">Discover Melbourne and Victoria's most iconic destinations with expert local guides</p>
        </div>

        {/* Not opacity-gated: tour content must never depend on a JS
            animation completing in order to be visible. */}
        <div className="tours-grid grid grid-3">
          {tours.map((tour) => (
            <motion.div
              key={tour.id}
              className="tour-card card"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="tour-image">
                <img
                  src={getTourImage(tour.name).card}
                  alt={tour.name}
                  className="tour-photo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="tour-image-fallback" style={{ display: 'none' }}>
                  {tour.name}
                </div>
              </div>

              <div className="tour-content">
                <h3>{tour.name}</h3>

                <div className="tour-meta">
                  <span className="duration">⏱️ {tour.duration}</span>
                </div>

                <p className="tour-description">{tour.description}</p>

                <div className="tour-highlights">
                  {tour.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">{highlight}</span>
                  ))}
                </div>

                <div className="tour-rating">
                  <span className="stars">★ {tour.rating}</span>
                  <span className="review-count">({tour.reviews} reviews)</span>
                </div>

                <div className="tour-footer">
                  <div className="tour-price">
                    <span className="price">{tour.price}</span>
                  </div>
                  <motion.button
                    className="btn btn-primary"
                    onClick={() => handleBookNow(tour.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="tours-cta">
          <h3>Can't find what you're looking for?</h3>
          <p>Let us create a custom tour experience tailored to your needs</p>
          <button className="btn btn-secondary">Customize Your Tour</button>
        </div>
      </div>
    </section>
  );
}

export default Tours;
