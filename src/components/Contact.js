import React, { useState } from 'react';
import './Contact.css';

function Contact() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Phone validation (basic)
    if (formData.phone.length < 8) {
      setError('Please enter a valid phone number.');
      return;
    }

    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);

    // Show success message
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

    // Reset message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleWhatsAppChat = () => {
    const phoneNumber = '61400044004'; // Without +
    const message = 'Hi, I\'m interested in AR Tours. Can you tell me more about your offerings?';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+61400044004';
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="section-header">
          <div className="divider divider-left"></div>
          <h2>Book Your Adventure</h2>
          <p className="section-subtitle">Reserve your AR tour experience today or contact us for custom arrangements</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper fade-in">
            <h3>Quick Booking Form</h3>

            {submitted && (
              <div className="alert alert-success">
                ✓ Thank you! Your booking request has been received. We'll contact you soon to confirm your reservation.
              </div>
            )}

            {error && (
              <div className="alert alert-error">
                ✗ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
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
                />
              </div>

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
                    placeholder="+61 XXX XXX XXX"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="tourType">Select Tour</label>
                  <select
                    id="tourType"
                    name="tourType"
                    value={formData.tourType}
                    onChange={handleChange}
                  >
                    <option value="">Choose a tour...</option>
                    <option value="great-ocean-road">Great Ocean Road Tour</option>
                    <option value="penguin-parade">Penguin Parade Experience</option>
                    <option value="wine-tour">Wine Country AR Tour</option>
                    <option value="city-tour">Melbourne City AR Discovery</option>
                    <option value="custom-tour">Private Customized Tour</option>
                    <option value="corporate">Corporate Transport Service</option>
                  </select>
                </div>

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
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Special Requests / Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your preferences or any special requirements..."
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                Submit Booking Request
              </button>

              <p className="form-note">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>
          </div>

          <div className="contact-info fade-in">
            <h3>Get in Touch</h3>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-details">
                <h4>Phone</h4>
                <p>+61 400 044 004</p>
                <button className="btn btn-outline" onClick={handlePhoneCall}>
                  Call Now
                </button>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">💬</div>
              <div className="info-details">
                <h4>WhatsApp Chat</h4>
                <p>+61 400 044 004</p>
                <button className="btn btn-secondary" onClick={handleWhatsAppChat}>
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-details">
                <h4>Email</h4>
                <p>888artours@gmail.com</p>
                <a href="mailto:888artours@gmail.com" className="btn btn-outline">
                  Send Email
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h4>Office Location</h4>
                <p>52 Spencer Street<br />Melbourne 3000</p>
              </div>
            </div>

            <div className="business-hours">
              <h4>Business Hours</h4>
              <ul>
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 5:00 PM</li>
                <li>Sunday: 10:00 AM - 4:00 PM</li>
              </ul>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#facebook" className="social-icon" title="Facebook">📘</a>
                <a href="#instagram" className="social-icon" title="Instagram">📷</a>
                <a href="#youtube" className="social-icon" title="YouTube">📹</a>
                <a href="#twitter" className="social-icon" title="Twitter">🐦</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
