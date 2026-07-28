import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedHero.css';

function AnimatedHero() {
  return (
    <div className="animated-hero-container">
      {/* Animated Background Scenery */}
      <svg className="hero-background" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
        {/* Sky Gradient */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e5a8e', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00A8A8', stopOpacity: 1 }} />
          </linearGradient>

          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00A8A8', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0F7D7D', stopOpacity: 1 }} />
          </linearGradient>

          {/* Cloud animation */}
          <filter id="shadow">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Sky */}
        <rect width="1200" height="250" fill="url(#skyGradient)" />

        {/* Ocean */}
        <rect y="250" width="1200" height="150" fill="url(#oceanGradient)" />

        {/* Animated Clouds */}
        <motion.g
          initial={{ x: -200 }}
          animate={{ x: 1200 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          <ellipse cx="0" cy="50" rx="80" ry="40" fill="white" opacity="0.7" filter="url(#shadow)" />
          <ellipse cx="60" cy="60" rx="70" ry="35" fill="white" opacity="0.6" filter="url(#shadow)" />
        </motion.g>

        <motion.g
          initial={{ x: -150 }}
          animate={{ x: 1200 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: 3 }}
        >
          <ellipse cx="100" cy="80" rx="90" ry="45" fill="white" opacity="0.5" filter="url(#shadow)" />
          <ellipse cx="170" cy="95" fill="white" opacity="0.5" filter="url(#shadow)" rx="75" ry="40" />
        </motion.g>

        {/* Animated Sun/Glow */}
        <motion.circle
          cx="100"
          cy="60"
          r="40"
          fill="#FFD700"
          opacity="0.8"
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          filter="url(#shadow)"
        />

        {/* Distant Mountains */}
        <path d="M 0 200 Q 300 100 600 200 T 1200 200 L 1200 250 L 0 250" fill="#0D5847" opacity="0.4" />
        <path d="M 0 220 Q 400 150 800 220 T 1200 220 L 1200 250 L 0 250" fill="#0F7D7D" opacity="0.6" />

        {/* Ocean Waves Animation */}
        <motion.path
          d="M 0,280 Q 150,270 300,280 T 600,280 T 900,280 T 1200,280 L 1200,400 L 0,400"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          animate={{
            d: [
              'M 0,280 Q 150,270 300,280 T 600,280 T 900,280 T 1200,280 L 1200,400 L 0,400',
              'M 0,285 Q 150,275 300,285 T 600,285 T 900,285 T 1200,285 L 1200,400 L 0,400',
              'M 0,280 Q 150,270 300,280 T 600,280 T 900,280 T 1200,280 L 1200,400 L 0,400',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* Animated Tour Vehicle */}
      <svg className="tour-vehicle" viewBox="0 0 1200 150" preserveAspectRatio="none">
        <defs>
          <filter id="vehicleShadow">
            <feDropShadow dx="2" dy="3" stdDeviation="4" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Animated Bus/Vehicle */}
        <motion.g
          initial={{ x: -300 }}
          animate={{ x: 1200 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 2,
          }}
        >
          {/* Bus Body */}
          <rect x="0" y="40" width="250" height="60" rx="8" fill="#FF8C42" filter="url(#vehicleShadow)" />

          {/* Bus Cab */}
          <rect x="0" y="30" width="60" height="30" rx="4" fill="#FF6B1A" filter="url(#vehicleShadow)" />

          {/* Windows */}
          <rect x="10" y="35" width="40" height="20" rx="2" fill="#87CEEB" opacity="0.8" />
          <rect x="80" y="45" width="30" height="25" rx="2" fill="#87CEEB" opacity="0.7" />
          <rect x="125" y="45" width="30" height="25" rx="2" fill="#87CEEB" opacity="0.7" />
          <rect x="170" y="45" width="30" height="25" rx="2" fill="#87CEEB" opacity="0.7" />

          {/* Door */}
          <rect x="215" y="45" width="25" height="50" rx="2" fill="#E63900" />

          {/* Wheels */}
          <circle cx="40" cy="105" r="12" fill="#333" filter="url(#vehicleShadow)" />
          <circle cx="210" cy="105" r="12" fill="#333" filter="url(#vehicleShadow)" />

          {/* Wheel Details */}
          <circle cx="40" cy="105" r="8" fill="none" stroke="#666" strokeWidth="2" />
          <circle cx="210" cy="105" r="8" fill="none" stroke="#666" strokeWidth="2" />

          {/* AR Tours Text */}
          <text x="125" y="75" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">
            AR TOURS
          </text>
        </motion.g>
      </svg>

      {/* Text Overlay */}
      <div className="hero-text-overlay">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore Australia Like Never Before
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Journey through Melbourne & Victoria with AR-Enhanced Tours
        </motion.p>
      </div>
    </div>
  );
}

export default AnimatedHero;
