import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import './ToursGallery.css';
import { getAllTours, getAllCategories, searchTours, filterToursByPrice, filterToursByRating } from '../data/toursDatabase';

function ToursGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minRating, setMinRating] = useState(0);

  const allTours = getAllTours();
  const categories = ['All', ...getAllCategories()];

  // Filter and search tours
  const filteredTours = useMemo(() => {
    let result = allTours;

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(tour => tour.category === selectedCategory);
    }

    // Price filter
    result = result.filter(tour => tour.price >= priceRange[0] && tour.price <= priceRange[1]);

    // Rating filter
    if (minRating > 0) {
      result = result.filter(tour => tour.rating >= minRating);
    }

    // Search filter
    if (searchQuery) {
      result = result.filter(tour =>
        tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return result.sort((a, b) => b.rating - a.rating);
  }, [selectedCategory, searchQuery, priceRange, minRating]);

  const handleTourClick = (tour) => {
    // Scroll to booking form
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill the tour selection if possible
      const tourSelect = document.querySelector('select[name="tourType"]');
      if (tourSelect) {
        tourSelect.value = tour.name;
      }
    }
  };

  return (
    <section id="tours-gallery" className="tours-gallery section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="divider divider-left"></div>
          <h2>Explore Our Complete Tour Catalog</h2>
          <p className="section-subtitle">
            20+ unforgettable experiences across Melbourne and Victoria. From iconic landmarks to hidden gems.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="filters-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search tours (e.g., 'Great Ocean Road', 'wine', 'wildlife')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <h4>Categories</h4>
            <div className="category-buttons">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="filter-group">
            <h4>Price Range: ${priceRange[0]} - ${priceRange[1]}</h4>
            <div className="price-filter">
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="price-slider"
              />
            </div>
          </div>

          {/* Rating Filter */}
          <div className="filter-group">
            <h4>Minimum Rating</h4>
            <div className="rating-filter">
              {[0, 4.5, 4.7, 4.8, 4.9].map((rating) => (
                <motion.button
                  key={rating}
                  className={`rating-btn ${minRating === rating ? 'active' : ''}`}
                  onClick={() => setMinRating(rating)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {rating === 0 ? 'All' : `${rating}★+`}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="results-count">
            Showing <strong>{filteredTours.length}</strong> of <strong>{allTours.length}</strong> tours
          </div>
        </motion.div>

        {/* Tours Grid */}
        {filteredTours.length > 0 ? (
          <motion.div
            className="tours-grid-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {filteredTours.map((tour, idx) => (
              <motion.div
                key={tour.id}
                className="tour-card-gallery"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -8 }}
              >
                {/* Tour Image */}
                <div className="tour-image-wrapper">
                  <div className="tour-image-gallery">{tour.image}</div>
                  {tour.verified && (
                    <div className="verified-badge" title="Verified Tour">
                      ✓ Verified
                    </div>
                  )}
                  <div className="rating-badge">
                    ⭐ {tour.rating} ({tour.reviews.toLocaleString()} reviews)
                  </div>
                </div>

                {/* Tour Content */}
                <div className="tour-card-content">
                  <div className="tour-category-tag">{tour.category}</div>
                  <h3>{tour.name}</h3>
                  <p className="tour-description">{tour.description}</p>

                  {/* Key Details */}
                  <div className="tour-details">
                    <div className="detail">
                      <span className="detail-icon">⏱️</span>
                      <span>{tour.duration}</span>
                    </div>
                    <div className="detail">
                      <span className="detail-icon">👥</span>
                      <span>{tour.groupSize}</span>
                    </div>
                    {tour.accessibility && (
                      <div className="detail">
                        <span className="detail-icon">♿</span>
                        <span>Accessible</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="tour-highlights">
                    {tour.highlights.slice(0, 3).map((highlight, i) => (
                      <span key={i} className="highlight-tag">
                        {highlight}
                      </span>
                    ))}
                    {tour.highlights.length > 3 && (
                      <span className="highlight-tag highlight-more">
                        +{tour.highlights.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="tour-footer">
                    <div className="tour-price">
                      <span className="currency">$</span>
                      <span className="amount">{tour.price}</span>
                      <span className="per">per person</span>
                    </div>
                    <motion.button
                      className="btn btn-primary"
                      onClick={() => handleTourClick(tour)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No tours found</h3>
            <p>Try adjusting your filters or search query</p>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setPriceRange([0, 1000]);
                setMinRating(0);
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          className="tours-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>Can't find the perfect tour?</h3>
          <p>Create a custom itinerary tailored to your interests and schedule</p>
          <motion.button
            className="btn btn-secondary btn-lg"
            onClick={() => {
              const bookingSection = document.getElementById('booking');
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Customize Your Tour
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default ToursGallery;
