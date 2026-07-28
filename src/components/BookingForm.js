import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './BookingForm.css';
import { getAllTours } from '../data/toursDatabase';
import { SELECT_TOUR_EVENT } from '../services/tourSelection';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourType: '',
    date: '',
    guests: 1,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [tours] = useState(getAllTours());

  // EmailJS is initialised once in App.js with the real public key — do not
  // re-init here, an init() with a placeholder key would overwrite it.

  // A tour card was clicked: adopt it as the selected tour. This has to update
  // React state; setting the <select>'s value directly is wiped on re-render.
  useEffect(() => {
    const onSelectTour = (e) => {
      const tourName = e.detail?.tourName;
      if (!tourName) return;
      setFormData((prev) => ({ ...prev, tourType: tourName }));
    };
    window.addEventListener(SELECT_TOUR_EVENT, onSelectTour);
    return () => window.removeEventListener(SELECT_TOUR_EVENT, onSelectTour);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (formData.phone.length < 10) {
      setError('Please enter a valid phone number');
      return false;
    }

    if (!formData.tourType) {
      setError('Please select a tour');
      return false;
    }

    if (!formData.date) {
      setError('Please select a preferred date');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Send email via EmailJS
      const templateParams = {
        to_email: '888artours@gmail.com',
        from_email: formData.email,
        from_name: formData.name,
        phone: formData.phone,
        tour_type: formData.tourType,
        preferred_date: formData.date,
        number_of_guests: formData.guests,
        special_requests: formData.message || 'None',
        booking_id: `ARMEL-${Date.now()}`,
        timestamp: new Date().toLocaleString('en-AU'),
      };

      // Send to business email
      if (window.emailjs) {
        await window.emailjs.send(
          'service_xfhekqn', // EmailJS service ID
          'template_xfhekqn', // REPLACE with your EmailJS template ID
          templateParams
        );
      }

      // Show success
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        tourType: '',
        date: '',
        guests: 1,
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send booking request. Please try again or call us directly.');
      console.error('Email send error:', err);
    } finally {
      setLoading(false);
    }
  };

  // The highlights section offers a few tours under shorter names than the
  // catalog uses, so include whatever was selected even if it isn't one of the
  // catalog options — otherwise the <select> would silently render blank.
  const uniqueTours = [...new Set([
    ...tours.map((tour) => tour.name),
    ...(formData.tourType ? [formData.tourType] : []),
  ])];

  return (
    <section id="booking" className="booking-section section-padding">
      <div className="container">
        {/* Not opacity-gated: the booking form is the site's conversion path
            and must never depend on a JS animation completing to be visible. */}
        <div className="section-header">
          <div className="divider divider-left"></div>
          <h2>Book Your Australian Adventure</h2>
          <p className="section-subtitle">
            Reserve your tour experience today. Our team will contact you within 24 hours to confirm availability and answer any questions.
          </p>
        </div>

        <div className="booking-content">
          {/* Booking Form */}
          <div className="booking-form-wrapper">
            <div className="form-header">
              <h3>Quick Booking Form</h3>
              <p>5 minutes to book your adventure</p>
            </div>

            {submitted && (
              <motion.div
                className="alert alert-success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <span className="success-icon">✓</span>
                <div>
                  <strong>Booking Request Received!</strong>
                  <p>Thank you, {formData.name}! We'll contact you at {formData.email} within 24 hours to confirm your booking.</p>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                className="alert alert-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="error-icon">✕</span>
                <div>
                  <strong>Booking Error</strong>
                  <p>{error}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="booking-form">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  disabled={loading}
                />
              </div>

              {/* Email & Phone */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+61 400 044 004"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Tour Selection & Date */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="tourType">Select Tour *</label>
                  <select
                    id="tourType"
                    name="tourType"
                    value={formData.tourType}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  >
                    <option value="">Choose a tour...</option>
                    {uniqueTours.map((tour, idx) => (
                      <option key={idx} value={tour}>
                        {tour}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              {/* Guests & Special Requests */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    max="50"
                    value={formData.guests}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Dietary requirements, accessibility needs, etc."
                    rows="3"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="privacy-notice">
                <p>
                  By submitting this form, you agree to our privacy policy. We'll only use your information to contact you about your booking.
                </p>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? 'Sending...' : 'Send Booking Request'}
              </motion.button>

              <p className="form-note">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h3>Get in Touch</h3>

            <motion.div className="info-card" whileHover={{ y: -5 }}>
              <div className="info-icon">📞</div>
              <div className="info-details">
                <h4>Phone</h4>
                <p>+61 400 044 004</p>
                <button
                  className="btn btn-outline"
                  onClick={() => (window.location.href = 'tel:+61400044004')}
                >
                  Call Now
                </button>
              </div>
            </motion.div>

            <motion.div className="info-card" whileHover={{ y: -5 }}>
              <div className="info-icon">💬</div>
              <div className="info-details">
                <h4>WhatsApp</h4>
                <p>Quick Chat Support</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    const message = encodeURIComponent('Hi! I\'m interested in booking a tour.');
                    window.open(`https://wa.me/61400044004?text=${message}`, '_blank');
                  }}
                >
                  Chat Now
                </button>
              </div>
            </motion.div>

            <motion.div className="info-card" whileHover={{ y: -5 }}>
              <div className="info-icon">✉️</div>
              <div className="info-details">
                <h4>Email</h4>
                <p>888artours@gmail.com</p>
                <button
                  className="btn btn-outline"
                  onClick={() => (window.location.href = 'mailto:888artours@gmail.com')}
                >
                  Email Us
                </button>
              </div>
            </motion.div>

            <motion.div className="info-card" whileHover={{ y: -5 }}>
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h4>Office Location</h4>
                <p>52 Spencer Street<br />Melbourne 3000, VIC</p>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    window.open('https://maps.google.com/?q=52+Spencer+Street+Melbourne', '_blank');
                  }}
                >
                  View Map
                </button>
              </div>
            </motion.div>

            <div className="business-hours">
              <h4>Business Hours</h4>
              <ul>
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 5:00 PM</li>
                <li>Sunday: 10:00 AM - 4:00 PM</li>
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="badge">
                <span className="badge-icon">⭐</span>
                <span>4.88 Rating</span>
              </div>
              <div className="badge">
                <span className="badge-icon">👥</span>
                <span>15,000+ Reviews</span>
              </div>
              <div className="badge">
                <span className="badge-icon">✓</span>
                <span>Verified Tours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;
