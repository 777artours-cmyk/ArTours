import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './StatisticsSection.css';

function StatisticsSection() {
  const [isInView, setIsInView] = useState(false);

  const stats = [
    {
      icon: '👥',
      value: 15000,
      label: 'Happy Tourists',
      suffix: '+',
      color: '#00A8A8',
    },
    {
      icon: '⭐',
      value: 4.88,
      label: 'Average Rating',
      suffix: '★',
      color: '#FF8C42',
    },
    {
      icon: '🗺️',
      value: 50,
      label: 'Unique Tours',
      suffix: '+',
      color: '#0F3A5C',
    },
    {
      icon: '🏆',
      value: 95,
      label: 'Recommend Us',
      suffix: '%',
      color: '#2D5016',
    },
  ];

  return (
    <section className="statistics-section" onViewportEnter={() => setIsInView(true)}>
      <div className="container">
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, idx) => (
            <AnimatedStatCard key={idx} stat={stat} index={idx} shouldAnimate={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedStatCard({ stat, index, shouldAnimate }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest * 100) / 100);

  useEffect(() => {
    if (!shouldAnimate) return;

    const controls = {
      animate: async () => {
        count.set(0);
        const animation = setInterval(() => {
          count.set(prev => {
            const increment = stat.value / 50;
            const newVal = prev + increment;
            if (newVal >= stat.value) {
              clearInterval(animation);
              return stat.value;
            }
            return newVal;
          });
        }, 30);
      },
    };

    const timeout = setTimeout(() => controls.animate(), index * 100);
    return () => clearTimeout(timeout);
  }, [shouldAnimate, stat.value, index, count]);

  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)' }}
    >
      <div className="stat-icon" style={{ color: stat.color }}>
        {stat.icon}
      </div>
      <div className="stat-value-wrapper">
        <motion.div className="stat-value" style={{ color: stat.color }}>
          <motion.span>{rounded}</motion.span>
          <span className="suffix">{stat.suffix}</span>
        </motion.div>
      </div>
      <p className="stat-label">{stat.label}</p>
    </motion.div>
  );
}

export default StatisticsSection;
