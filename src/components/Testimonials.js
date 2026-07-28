import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const getInitials = (name) =>
  name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Sydney, Australia',
      tour: 'Great Ocean Road Tour',
      rating: 5,
      text: 'Absolutely incredible experience! Seeing the 12 Apostles in person was breathtaking. Our guide was knowledgeable and fun. Highly recommend!',
      verified: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Melbourne, Australia',
      tour: 'Penguin Parade Experience',
      rating: 5,
      text: 'The penguin parade tour exceeded all expectations. Watching the little penguins come ashore at sunset was mind-blowing. Worth every penny!',
      verified: true,
    },
    {
      id: 3,
      name: 'Emma Wilson',
      location: 'Melbourne, Australia',
      tour: 'Wine Country Tour',
      rating: 5,
      text: 'Best wine tour I\'ve ever done! Our guide\'s knowledge of the wine history and vineyards was fascinating. Professional guides and beautiful locations.',
      verified: true,
    },
    {
      id: 4,
      name: 'David Rodriguez',
      location: 'Brisbane, Australia',
      tour: 'Melbourne City Discovery',
      rating: 5,
      text: 'Fantastic way to explore Melbourne! Learning the historical stories behind the street art and architecture made this truly special. Loved every moment!',
      verified: true,
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      location: 'Europe',
      tour: 'Custom Private Tour',
      rating: 5,
      text: 'Our corporate team had an amazing custom tour. The guides were accommodating, professional, and the whole experience was top-notch!',
      verified: true,
    },
    {
      id: 6,
      name: 'James Stewart',
      location: 'Melbourne, Australia',
      tour: 'Corporate Transport Service',
      rating: 5,
      text: 'Professional, reliable, and the drivers are incredibly knowledgeable about Melbourne. Perfect for corporate needs. Will use again!',
      verified: true,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container">
        <div className="section-header">
          <div className="divider divider-left"></div>
          <h2>What Our Guests Say</h2>
          <p className="section-subtitle">Real experiences from real travelers who loved their road trip adventure</p>
        </div>

        <div className="testimonials-carousel">
          <motion.button
            className="carousel-button prev"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❮
          </motion.button>

          <div className="testimonials-container">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === currentIndex && (
                  <motion.div
                    key={testimonial.id}
                    className={`testimonial-card active`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                <div className="testimonial-header">
                  <div className="guest-info">
                    <div className="guest-avatar">
                      <span className="avatar-initials">{getInitials(testimonial.name)}</span>
                    </div>
                    <div className="guest-details">
                      <h4>{testimonial.name}</h4>
                      <p className="guest-location">{testimonial.location}</p>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <span className="verified-badge" title="Verified Review">✓</span>
                  )}
                </div>

                <div className="testimonial-content">
                  <div className="rating">
                    <span className="stars" style={{ color: 'var(--accent)' }}>
                      {renderStars(testimonial.rating)}
                    </span>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <span className="tour-name">— {testimonial.tour}</span>
                </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          <motion.button
            className="carousel-button next"
            onClick={nextSlide}
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❯
          </motion.button>
        </div>

        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
