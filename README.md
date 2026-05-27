# AR Tours - Melbourne's Premier AR Tour Experience

A modern, responsive single-page application (SPA) for an augmented reality tour company operating in Melbourne. Built with React and featuring six unique tour offerings with bookings, testimonials, and WhatsApp integration.

## Features

✨ **Modern Design**
- Color psychology-based UI (trustworthy navy blue, teal, and accent orange)
- Responsive mobile-first design
- Smooth animations and transitions
- Professional branding

🎯 **Core Functionality**
- Interactive tour showcase with 6 unique tours
- Customer testimonial carousel with 6 reviews
- Contact form with validation
- WhatsApp chat integration
- Phone call integration
- Smooth scrolling navigation
- Fast-loading SPA experience

🔒 **Security Features**
- Content Security Policy headers
- Input validation on forms
- Safe external link handling
- No sensitive data in frontend code

## Tours Offered

1. **Great Ocean Road Tour** - $1000 (12-13 hours)
2. **Penguin Parade Experience** - $1000 (10-12 hours)
3. **Wine Country AR Tour** - $1000 (8 hours)
4. **Melbourne City AR Discovery** - $1000 (3.5-4 hours)
5. **Private Customized Tour** - $1000 (Flexible)
6. **Corporate Transport & Chauffeur** - $1000 (On Demand)

## Tech Stack

- **Frontend**: React 18.2.0
- **Styling**: Pure CSS3 with CSS Grid & Flexbox
- **Routing**: React Router DOM 6.14.0
- **Build**: React Scripts 5.0.1
- **Deployment**: GitHub Pages (static)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```
   Opens [http://localhost:3000](http://localhost:3000) in your browser

3. **Build for production**
   ```bash
   npm run build
   ```
   Builds optimized production bundle in `/build` directory

## Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── Tours.js & Tours.css
│   ├── Testimonials.js & Testimonials.css
│   ├── Contact.js & Contact.css
│   ├── WhatsAppButton.js & WhatsAppButton.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js & index.css
public/
└── index.html
package.json
.gitignore
README.md
```

## Component Overview

### Header
- Sticky navigation bar
- Mobile hamburger menu
- Quick access booking button
- Smooth scroll links

### Hero Section
- Full-height banner with gradient
- Eye-catching heading
- Feature highlights
- Call-to-action buttons
- Statistics display

### Tours Section
- Grid layout with tour cards
- Tour details (price, duration, highlights)
- Star ratings and reviews count
- Book Now buttons
- Custom tour CTA

### Testimonials
- Interactive carousel
- Previous/Next navigation
- Indicator dots
- Customer ratings
- Verified badges
- Statistics cards

### Contact Section
- Booking request form with validation
- Contact information cards
- Multiple contact methods (phone, email, WhatsApp)
- Business hours display
- Social media links

### WhatsApp Button
- Fixed position floating button
- Hover animations
- Direct WhatsApp chat link
- Tooltip on hover

### Footer
- Multi-column layout
- Quick links
- Social media icons
- Legal links
- Copyright info

## Configuration

### GitHub Pages Deployment

The app is configured for GitHub Pages with `"homepage": "./"` in package.json.

**To deploy:**
1. Push to GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" or your default branch
5. Your site will be live at `https://your-username.github.io/artours`

### Customization

**Update Contact Information:**
Edit in `src/components/Contact.js`:
- Phone numbers
- Email address
- Office location
- Business hours

**Modify Tours:**
Edit tour data in `src/components/Tours.js`:
```javascript
const tours = [
  {
    name: 'Tour Name',
    price: '$1000',
    duration: '12 hours',
    // ... more fields
  },
  // ... more tours
];
```

**Update Colors:**
Modify CSS variables in `src/index.css`:
```css
:root {
  --primary: #0F3A5C;
  --secondary: #00A8A8;
  --accent: #FF8C42;
  /* ... more variables */
}
```

## Best Practices Implemented

✅ **Performance**
- Lazy loading ready
- Optimized animations
- Minimal CSS footprint
- No unused dependencies

✅ **Accessibility**
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states

✅ **Security**
- Content Security Policy headers
- Form input validation
- Safe external links (noopener, noreferrer)
- No hardcoded sensitive data

✅ **SEO**
- Semantic HTML
- Meta tags in index.html
- Descriptive headings
- Alt text ready for images

✅ **Responsive Design**
- Mobile-first approach
- Breakpoints at 768px
- Flexible grid layouts
- Touch-friendly buttons

## Contact Integration

### WhatsApp
The WhatsApp button uses the WhatsApp Business API format:
```
https://wa.me/[PHONE_NUMBER]?text=[MESSAGE]
```

Update phone number in:
- `src/components/Contact.js`
- `src/components/WhatsAppButton.js`

### Email
Update email in `src/components/Contact.js`:
```javascript
<a href="mailto:info@artours.com.au">Send Email</a>
```

### Phone Call
Phone numbers can be called directly via `tel:` protocol

## Future Enhancements

- 🗺️ Embedded Google Maps for locations
- 📸 Image gallery for tour showcase
- 🎬 Video integration for tour previews
- 💳 Direct payment integration
- 📅 Calendar/availability system
- 🌍 Multi-language support
- 🔔 SMS notifications
- 💬 Live chat support
- ⭐ Review management system

## Performance Metrics

- **Lighthouse Score**: Optimized for 90+
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 4s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.8s

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved © 2024 AR Tours Melbourne

## Support

For support or inquiries:
- 📞 Phone: +61 3 9485 5290
- 💬 WhatsApp: +61 479 146 937
- ✉️ Email: info@artours.com.au
- 📍 Melbourne, Victoria, Australia

---

**Built with React | Deployed on GitHub Pages | Secure by Default**
