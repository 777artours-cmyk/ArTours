import React from 'react';
import './Tours.css';

function Tours() {
  const tours = [
    {
      id: 1,
      name: 'Great Ocean Road Tour',
      price: '$1000',
      duration: '12-13 hours',
      description: 'Experience the iconic 12 Apostles with AR-enhanced storytelling. Explore stunning coastal views, Loch Ard Gorge, and spotting wild koalas in their natural habitat.',
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
      description: 'Watch the famous little penguin parade at sunset at Phillip Island. AR technology reveals the secret lives and migration patterns of these amazing creatures.',
      image: '🐧',
      highlights: ['Penguin Parade', 'Phillip Island', 'Sunset Viewing', 'Wildlife Facts'],
      rating: 4.9,
      reviews: 1980,
    },
    {
      id: 3,
      name: 'Wine Country AR Tour',
      price: '$1000',
      duration: '8 hours',
      description: 'Discover the Yarra Valley wine region with AR-guided tastings. Learn about wine production, vineyard history, and enjoy premium local wines and cheese platters.',
      image: '🍷',
      highlights: ['Wine Tastings', 'Vineyard Tours', 'Cheese Platters', 'AR Labels'],
      rating: 4.8,
      reviews: 1650,
    },
    {
      id: 4,
      name: 'Melbourne City AR Discovery',
      price: '$1000',
      duration: '3.5-4 hours',
      description: 'Explore Melbourne\'s hidden gems and iconic landmarks with AR overlays showing historical facts. Discover street art, architecture, and local history through immersive AR.',
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
      description: 'Tailor-made AR tours designed for your interests. Whether it\'s corporate groups or special occasions, our expert guides customize the perfect Melbourne experience for you.',
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
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Optionally, you can set focus or show a toast notification
      alert(`Thanks for your interest in ${tourName}! Please fill out the contact form to proceed with booking.`);
    }
  };

  return (
    <section id="tours" className="tours section-padding">
      <div className="container">
        <div className="section-header">
          <div className="divider divider-left"></div>
          <h2>Our AR Tours</h2>
          <p className="section-subtitle">Discover Melbourne's most iconic destinations with immersive augmented reality experiences</p>
        </div>

        <div className="tours-grid grid grid-3">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card card fade-in">
              <div className="tour-image">
                <span className="tour-emoji">{tour.image}</span>
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
                  <button
                    className="btn btn-primary"
                    onClick={() => handleBookNow(tour.name)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tours-cta">
          <h3>Can't find what you're looking for?</h3>
          <p>Let us create a custom AR tour experience tailored to your needs</p>
          <button className="btn btn-secondary">Customize Your Tour</button>
        </div>
      </div>
    </section>
  );
}

export default Tours;
