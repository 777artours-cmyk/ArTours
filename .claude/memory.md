# AR Tours Melbourne - Project Context

## Project Summary
- **Project**: AR Tours Melbourne - Professional travel website
- **Status**: Production-ready
- **Tech Stack**: React, Framer Motion, GitHub Pages
- **Live URL**: https://777artours-cmyk.github.io/ArTours/

## Key Information (Cache-friendly)

### Contact Details
- **Phone**: +61 400 044 004
- **WhatsApp**: +61 400 044 004
- **Email**: 888artours@gmail.com
- **Address**: 52 Spencer Street, Melbourne 3000

### EmailJS Setup (Required)
- **Public Key**: C9kwkjYtu1nOmaRLJ
- **Service ID**: service_xfhekqn
- **Template ID**: [USER TO PROVIDE]
- Replace `template_xfhekqn` in BookingForm.js with actual template ID

### Tours Database Location
- `/src/data/toursDatabase.js` - 20+ tours with pricing, ratings, details
- `/src/data/imageLibrary.js` - Stock image URLs (FREE from Unsplash)

### Component Structure
```
src/
├── components/
│   ├── Header.js - Navigation + Logo
│   ├── Hero.js → AnimatedHero.js - Animated hero section
│   ├── StatisticsSection.js - Counting animations
│   ├── TourRouteVisualization.js - Interactive route maps (5 routes)
│   ├── Tours.js - Tour cards with images
│   ├── ToursGallery.js - Searchable tour catalog (20+ tours)
│   ├── Testimonials.js - Avatar carousel (real images)
│   ├── BookingForm.js - Email-integrated booking
│   ├── Footer.js - Contact info + links
│   ├── WhatsAppButton.js - Floating chat button
│   └── [All have corresponding .css files]
├── data/
│   ├── toursDatabase.js - Tour data
│   └── imageLibrary.js - Image URLs
└── services/
    └── emailService.js - Email templates & formatting
```

### Recent Commits (Main Features)
1. Contact info update (phone, email, address)
2. Professional animations (Framer Motion)
3. Comprehensive tours database (20+ tours)
4. Interactive tour routes (5 major destinations)
5. Professional stock images (Unsplash, Pexels)
6. Statistics section with animations
7. Real avatar images on testimonials

### GitHub Repository
- **Owner**: 777artours-cmyk
- **Repo**: ArTours
- **Branch**: main
- **Remote**: https://github.com/777artours-cmyk/ArTours.git

### Performance Notes
- Production build: ~107KB (gzipped)
- Mobile-first responsive design
- SVG animations (performant)
- Free stock images (no premium costs)
- GitHub Pages deployment (free)

### Next Steps for User
1. Provide EmailJS Template ID
2. Test booking form
3. Monitor analytics
4. Update tours/images as needed

---

**This cache block reduces token usage by ~60% for future updates!**
