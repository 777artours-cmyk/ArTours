// Email Service for booking inquiries
// This service handles sending booking data via email

const BUSINESS_EMAIL = '888artours@gmail.com';
const BUSINESS_PHONE = '+61400044004';
const BUSINESS_NAME = 'AR Tours Melbourne';

// Format booking data for email
export const formatBookingEmail = (bookingData) => {
  const {
    name,
    email,
    phone,
    tourName,
    tourDate,
    numberOfPeople,
    specialRequests,
    date
  } = bookingData;

  const bookingId = `ARMEL-${Date.now()}`;

  return {
    to: BUSINESS_EMAIL,
    cc: email,
    subject: `New Booking Inquiry - ${tourName}`,
    htmlContent: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <div style="background: linear-gradient(135deg, #0F3A5C 0%, #00A8A8 100%); color: white; padding: 20px; border-radius: 5px 5px 0 0;">
          <h1 style="margin: 0;">New Booking Inquiry</h1>
          <p style="margin: 5px 0 0 0;">Booking ID: ${bookingId}</p>
        </div>

        <div style="padding: 20px; background: #f9f9f9;">
          <h2 style="color: #0F3A5C; border-bottom: 2px solid #FF8C42; padding-bottom: 10px;">Customer Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="background: #f0f0f0;">
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone:</td>
              <td style="padding: 8px;">${phone}</td>
            </tr>
          </table>

          <h2 style="color: #0F3A5C; border-bottom: 2px solid #FF8C42; padding-bottom: 10px; margin-top: 20px;">Tour Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 30%;">Tour:</td>
              <td style="padding: 8px;">${tourName}</td>
            </tr>
            <tr style="background: #f0f0f0;">
              <td style="padding: 8px; font-weight: bold;">Preferred Date:</td>
              <td style="padding: 8px;">${tourDate || 'To be confirmed'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Number of People:</td>
              <td style="padding: 8px;">${numberOfPeople}</td>
            </tr>
          </table>

          ${specialRequests ? `
            <h2 style="color: #0F3A5C; border-bottom: 2px solid #FF8C42; padding-bottom: 10px; margin-top: 20px;">Special Requests</h2>
            <p style="padding: 8px; background: #f0f0f0; border-left: 4px solid #FF8C42;">${specialRequests}</p>
          ` : ''}

          <h2 style="color: #0F3A5C; border-bottom: 2px solid #FF8C42; padding-bottom: 10px; margin-top: 20px;">Next Steps</h2>
          <ol style="padding-left: 20px;">
            <li>We will review this booking inquiry</li>
            <li>Our team will contact you within 24 hours</li>
            <li>We'll confirm availability and pricing</li>
            <li>A confirmation email will be sent</li>
          </ol>

          <div style="background: #00A8A8; color: white; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="margin: 0 0 10px 0;">Contact Us</h3>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${BUSINESS_PHONE}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${BUSINESS_EMAIL}</p>
            <p style="margin: 5px 0;"><strong>Location:</strong> 52 Spencer Street, Melbourne 3000</p>
          </div>

          <p style="margin-top: 20px; font-size: 12px; color: #999;">Booking Reference: ${bookingId}</p>
        </div>
      </div>
    `,
    textContent: `
New Booking Inquiry - ${tourName}
Booking ID: ${bookingId}

Customer Details:
Name: ${name}
Email: ${email}
Phone: ${phone}

Tour Details:
Tour: ${tourName}
Preferred Date: ${tourDate || 'To be confirmed'}
Number of People: ${numberOfPeople}

${specialRequests ? `Special Requests:\n${specialRequests}\n` : ''}

Contact AR Tours Melbourne:
Phone: ${BUSINESS_PHONE}
Email: ${BUSINESS_EMAIL}
Location: 52 Spencer Street, Melbourne 3000
    `,
    bookingData: {
      ...bookingData,
      bookingId,
      timestamp: new Date().toISOString(),
      source: 'Website Booking Form'
    }
  };
};

// Send booking email via EmailJS (free service - no backend needed)
export const sendBookingEmail = async (bookingData) => {
  try {
    // Initialize EmailJS if not already done
    if (!window.emailjs) {
      console.error('EmailJS not initialized');
      return false;
    }

    const emailData = formatBookingEmail(bookingData);

    // Send via EmailJS service
    const response = await window.emailjs.send(
      'service_artours',  // Service ID
      'template_artours', // Template ID
      {
        to_email: BUSINESS_EMAIL,
        from_email: bookingData.email,
        from_name: bookingData.name,
        phone: bookingData.phone,
        tour_name: bookingData.tourName,
        tour_date: bookingData.tourDate,
        number_of_people: bookingData.numberOfPeople,
        special_requests: bookingData.specialRequests || 'None',
        html_content: emailData.htmlContent
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

// Alternative: Send via backend endpoint (if backend is set up)
export const sendBookingEmailViaBackend = async (bookingData) => {
  try {
    const response = await fetch('/api/send-booking-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    return response.status === 200;
  } catch (error) {
    console.error('Failed to send email via backend:', error);
    return false;
  }
};

// Format inquiry data
export const formatInquiryData = (formData) => {
  return {
    name: formData.name || '',
    email: formData.email || '',
    phone: formData.phone || '',
    tourName: formData.tourName || 'General Inquiry',
    tourDate: formData.date || '',
    numberOfPeople: formData.guests || 1,
    specialRequests: formData.message || '',
  };
};
