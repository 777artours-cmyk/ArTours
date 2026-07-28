import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  const scrollToTours = () => {
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 variants={itemVariants} className="fade-in">
            Experience Melbourne Like Never Before
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-subtitle fade-in">
            Discover Melbourne's iconic destinations with cutting-edge Augmented Reality technology. Unforgettable tours, expert guides, and immersive experiences.
          </motion.p>

          <motion.div variants={containerVariants} className="hero-features fade-in">
            {[
              { icon: '🎯', text: 'AR-Enhanced Tours' },
              { icon: '👥', text: 'Expert Guides' },
              { icon: '🌟', text: '5-Star Experiences' },
              { icon: '📍', text: 'Iconic Locations' },
            ].map((feature, idx) => (
              <motion.div key={idx} variants={featureVariants} className="feature-item">
                <span className="feature-icon">{feature.icon}</span>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="hero-buttons fade-in">
            <motion.button
              className="btn btn-accent btn-lg"
              onClick={scrollToTours}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Tours
            </motion.button>
            <motion.button
              className="btn btn-outline-light btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div variants={containerVariants} className="hero-stats fade-in">
            {[
              { num: '10K+', label: 'Happy Tourists' },
              { num: '50+', label: 'Unique Tours' },
              { num: '4.9★', label: 'Average Rating' },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={statVariants} className="stat">
                <h3>{stat.num}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
