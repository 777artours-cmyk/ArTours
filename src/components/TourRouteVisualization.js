import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './TourRouteVisualization.css';

function TourRouteVisualization() {
  const [selectedRoute, setSelectedRoute] = useState('greatoceanroad');

  const routes = {
    greatoceanroad: {
      name: 'Great Ocean Road Tour',
      color: '#FF8C42',
      distance: '243 km',
      duration: '12-13 hours',
      icon: '🌊',
      stops: [
        { name: 'Melbourne', position: { x: 50, y: 50 }, icon: '🏙️' },
        { name: 'Torquay', position: { x: 150, y: 60 }, icon: '🏖️' },
        { name: 'Bells Beach', position: { x: 200, y: 70 }, icon: '🏄' },
        { name: '12 Apostles', position: { x: 280, y: 80 }, icon: '🗻' },
        { name: 'Loch Ard Gorge', position: { x: 320, y: 90 }, icon: '🏞️' },
      ],
      highlights: ['12 Apostles', 'Loch Ard Gorge', 'Torquay Surf Beach', 'Rainforest walks'],
    },
    penguinparade: {
      name: 'Penguin Parade Tour',
      color: '#00A8A8',
      distance: '140 km',
      duration: '10-12 hours',
      icon: '🐧',
      stops: [
        { name: 'Melbourne', position: { x: 50, y: 50 }, icon: '🏙️' },
        { name: 'Dandenong Ranges', position: { x: 120, y: 40 }, icon: '🌲' },
        { name: 'Phillip Island', position: { x: 200, y: 80 }, icon: '🏝️' },
        { name: 'Penguin Parade', position: { x: 240, y: 90 }, icon: '🐧' },
        { name: 'The Nobbies', position: { x: 220, y: 70 }, icon: '⛰️' },
      ],
      highlights: ['Penguin Parade', 'Seal Point', 'Nobbies Reserve', 'Wildlife viewing'],
    },
    yarravalley: {
      name: 'Yarra Valley Wine Tour',
      color: '#8B4513',
      distance: '80 km',
      duration: '6-8 hours',
      icon: '🍷',
      stops: [
        { name: 'Melbourne', position: { x: 50, y: 50 }, icon: '🏙️' },
        { name: 'Healesville', position: { x: 140, y: 40 }, icon: '🌿' },
        { name: 'Winery 1', position: { x: 180, y: 50 }, icon: '🍇' },
        { name: 'Winery 2', position: { x: 220, y: 60 }, icon: '🍇' },
        { name: 'Winery 3', position: { x: 260, y: 50 }, icon: '🍇' },
      ],
      highlights: ['Wine tastings', 'Gourmet lunch', 'Cellar door visits', 'Vineyard views'],
    },
    melbournecity: {
      name: 'Melbourne City Discovery',
      color: '#0F3A5C',
      distance: '15 km',
      duration: '3-4 hours',
      icon: '🏙️',
      stops: [
        { name: 'Federation Square', position: { x: 60, y: 50 }, icon: '📍' },
        { name: 'Hosier Lane', position: { x: 110, y: 45 }, icon: '🎨' },
        { name: 'AC/DC Lane', position: { x: 160, y: 55 }, icon: '🎸' },
        { name: 'Queen Vic Market', position: { x: 200, y: 60 }, icon: '🏪' },
        { name: 'Laneways', position: { x: 250, y: 50 }, icon: '☕' },
      ],
      highlights: ['Street art', 'Hidden laneways', 'Coffee culture', 'Local history'],
    },
    grampians: {
      name: 'Grampians National Park',
      color: '#2D5016',
      distance: '200 km',
      duration: '10-11 hours',
      icon: '⛰️',
      stops: [
        { name: 'Melbourne', position: { x: 50, y: 50 }, icon: '🏙️' },
        { name: 'MacKenzie Falls', position: { x: 180, y: 40 }, icon: '💧' },
        { name: 'Boroka Lookout', position: { x: 220, y: 45 }, icon: '🔭' },
        { name: 'Aboriginal Sites', position: { x: 260, y: 60 }, icon: '🎭' },
        { name: 'Wonderland', position: { x: 300, y: 70 }, icon: '🏔️' },
      ],
      highlights: ['Hiking trails', 'Waterfalls', 'Aboriginal culture', 'Panoramic views'],
    },
  };

  const currentRoute = routes[selectedRoute];

  return (
    <section className="tour-route-visualization">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Explore Tour Routes</h2>
          <p>Interactive journey maps of our most popular destinations</p>
        </motion.div>

        {/* Route Selector */}
        <motion.div
          className="route-selector"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {Object.entries(routes).map(([key, route]) => (
            <motion.button
              key={key}
              className={`route-btn ${selectedRoute === key ? 'active' : ''}`}
              onClick={() => setSelectedRoute(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="route-icon">{route.icon}</span>
              <span className="route-label">{route.name.split(' ')[0]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Route Visualization */}
        <motion.div
          className="route-visualization-wrapper"
          key={selectedRoute}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          {/* Route Map */}
          <svg className="route-map" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: currentRoute.color, stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: currentRoute.color, stopOpacity: 0.1 }} />
              </linearGradient>

              <filter id="routeGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="stopGlow">
                <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor={currentRoute.color} floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Background */}
            <rect width="400" height="200" fill="url(#routeGradient)" rx="8" />

            {/* Animated Route Path */}
            <motion.polyline
              points={currentRoute.stops.map(stop => `${stop.position.x},${stop.position.y}`).join(' ')}
              stroke={currentRoute.color}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#routeGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              style={{ pathLength: 0 }}
            />

            {/* Animated Traveling Dot */}
            <motion.circle
              cx={currentRoute.stops[0].position.x}
              cy={currentRoute.stops[0].position.y}
              r="6"
              fill={currentRoute.color}
              filter="url(#stopGlow)"
              animate={{
                cx: [
                  currentRoute.stops[0].position.x,
                  ...currentRoute.stops.slice(1).map(s => s.position.x),
                ],
                cy: [
                  currentRoute.stops[0].position.y,
                  ...currentRoute.stops.slice(1).map(s => s.position.y),
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Stop Markers */}
            {currentRoute.stops.map((stop, idx) => (
              <motion.g
                key={idx}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                {/* Circle background */}
                <circle
                  cx={stop.position.x}
                  cy={stop.position.y}
                  r="14"
                  fill="white"
                  stroke={currentRoute.color}
                  strokeWidth="2"
                  filter="url(#stopGlow)"
                />

                {/* Stop icon */}
                <text
                  x={stop.position.x}
                  y={stop.position.y}
                  fontSize="10"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {stop.icon}
                </text>

                {/* Stop label */}
                <text
                  x={stop.position.x}
                  y={stop.position.y + 25}
                  fontSize="9"
                  textAnchor="middle"
                  fill={currentRoute.color}
                  fontWeight="600"
                  fontFamily="Arial"
                >
                  {stop.name}
                </text>
              </motion.g>
            ))}
          </svg>

          {/* Route Details */}
          <motion.div
            className="route-details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="route-header">
              <h3>{currentRoute.name}</h3>
              <p className="route-description">Professional guided experience</p>
            </div>

            <div className="route-stats">
              <div className="stat">
                <span className="stat-icon">📍</span>
                <div>
                  <p className="stat-label">Distance</p>
                  <p className="stat-value">{currentRoute.distance}</p>
                </div>
              </div>

              <div className="stat">
                <span className="stat-icon">⏱️</span>
                <div>
                  <p className="stat-label">Duration</p>
                  <p className="stat-value">{currentRoute.duration}</p>
                </div>
              </div>
            </div>

            <div className="route-highlights">
              <h4>Highlights</h4>
              <ul className="highlights-list">
                {currentRoute.highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    <span className="highlight-bullet">✓</span>
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const bookingSection = document.getElementById('booking');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book This Tour
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default TourRouteVisualization;
