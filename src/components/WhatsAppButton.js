import React, { useState } from 'react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '61479146937'; // Without +
    const message = 'Hi! I\'m interested in booking an AR tour with you. Can you tell me more about your available tours?';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="whatsapp-wrapper">
      <button
        className="whatsapp-button"
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <span className="whatsapp-icon">💬</span>
        {isHovered && <span className="whatsapp-tooltip">Chat on WhatsApp</span>}
      </button>
    </div>
  );
}

export default WhatsAppButton;
