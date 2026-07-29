import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import StatisticsSection from './components/StatisticsSection';
import TourRouteVisualization from './components/TourRouteVisualization';
import Tours from './components/Tours';
import ToursGallery from './components/ToursGallery';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import TourStructuredData from './components/TourStructuredData';

function App() {
  useEffect(() => {
    // Initialize EmailJS
    if (window.emailjs && !window.emailjs.initialized) {
      window.emailjs.init('C9kwkjYtu1nOmaRLJ');
      window.emailjs.initialized = true;
    }
  }, []);

  return (
    <div className="App">
      <TourStructuredData />
      <Header />
      <Hero />
      <StatisticsSection />
      <TourRouteVisualization />
      <Tours />
      <ToursGallery />
      <Testimonials />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
