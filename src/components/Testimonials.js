import React, { useState } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Sydney, Australia',
      image: '👩‍🦰',
      tour: 'Great Ocean Road Tour',
      rating: 5,
      text: 'Absolutely incredible experience! The AR technology made the 12 Apostles come alive. Our guide was knowledgeable and fun. Highly recommend!',
      verified: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Melbourne, Australia',
      image: '👨‍💼',
      tour: 'Penguin Parade Experience',
      rating: 5,
      text: 'The penguin parade tour exceeded all expectations. Seeing the penguins with AR augmentation was mind-blowing. Worth every penny!',
      verified: true,
    },
    {
      id: 3,
      name: 'Emma Wilson',
      location: 'Melbourne, Australia',
      image: '👩‍🏫',
      tour: 'Wine Country AR Tour',
      rating: 5,
      text: 'Best wine tour I\'ve ever done! The AR labels showing wine history and details were fascinating. Professional guides and beautiful locations.',
      verified: true,
    },
    {
      id: 4,
      name: 'David Rodriguez',
      location: 'Brisbane, Australia',
      image: '👨‍🎓',
      tour: 'Melbourne City AR Discovery',
      rating: 5,
      text: 'Fantastic way to explore Melbourne! The AR features showing historical overlays and street art facts made this truly special. Loved every moment!',
      verified: true,
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      location: 'Europe',
      image: '👩‍⚕️',
      tour: 'Custom Private Tour',
      rating: 5,
      text: 'Our corporate team had an amazing custom tour. The guides were accommodating, professional, and the AR experience was top-notch!',
      verified: true,
    },
    {
      id: 6,
      name: 'James Stewart',
      location: 'Melbourne, Australia',
      image: '👨‍💻',
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
          <p className="section-subtitle">Real experiences from real travelers who loved their AR Tours adventure</p>
        </div>

        <div className="testimonials-carousel">
          <button
            className="carousel-button prev"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            ❮
          </button>

          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="testimonial-header">
                  <div className="guest-info">
                    <div className="guest-avatar">{testimonial.image}</div>
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
              </div>
            ))}
          </div>

          <button
            className="carousel-button next"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            ❯
          </button>
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

        <div className="testimonials-stats">
          <div className="stat-card">
            <h3>10,000+</h3>
            <p>Happy Tourists</p>
          </div>
          <div className="stat-card">
            <h3>4.9★</h3>
            <p>Average Rating</p>
          </div>
          <div className="stat-card">
            <h3>95%</h3>
            <p>Recommend Us</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Unique Tours</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
