#!/usr/bin/env node

/**
 * Local Tour Update Script
 * Updates tours without needing API calls - saves tokens!
 * Usage: node scripts/update-tour.js
 */

const fs = require('fs');
const path = require('path');

const TOURS_DB_PATH = path.join(__dirname, '../src/data/toursDatabase.js');

// Example: Add new tour
function addNewTour() {
  const newTour = {
    id: 'custom-tour',
    category: 'Custom Tours',
    name: 'Custom Experience - Your Design',
    price: 1500,
    rating: 5.0,
    reviews: 0,
    duration: 'Flexible',
    groupSize: 'Up to 20 people',
    image: '🎯',
    description: 'Create your perfect Australian adventure tailored to your interests.',
    highlights: [
      'Fully customizable itinerary',
      'Expert local guides',
      'Luxury transportation',
      'Gourmet meals included',
      'Photography opportunities',
    ],
    includes: ['Guide', 'Transport', 'Meals', 'Equipment'],
    notIncludes: ['Additional activities'],
    bestFor: ['Groups', 'Events', 'Corporate'],
    difficulty: 'Easy',
    accessibility: true,
    verified: true,
    operator: 'AR Tours Melbourne',
    tags: ['custom', 'flexible', 'luxury'],
  };

  console.log('✅ New tour structure created (add to toursDatabase.js):');
  console.log(JSON.stringify(newTour, null, 2));
}

// Example: Update contact info
function updateContactInfo() {
  const contactUpdates = {
    phone: '+61 400 044 004',
    whatsapp: '+61 400 044 004',
    email: '888artours@gmail.com',
    address: '52 Spencer Street, Melbourne 3000',
  };

  console.log('✅ Contact info (update in components that reference these):');
  console.log(JSON.stringify(contactUpdates, null, 2));
}

// Example: Add new image
function addNewImage() {
  const imageUpdate = {
    tourName: 'New Tour Name',
    heroImage: 'https://images.unsplash.com/photo-XXXXX?w=1200&h=400&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-XXXXX?w=600&h=400&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-XXXXX?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-XXXXX?w=500&h=400&fit=crop',
    ],
  };

  console.log('✅ Image update template (add to imageLibrary.js):');
  console.log(JSON.stringify(imageUpdate, null, 2));
}

// Example: Update tour pricing
function updateTourPrices() {
  const priceUpdates = {
    'Great Ocean Road': 195,
    'Penguin Parade': 185,
    'Yarra Valley': 175,
    'Melbourne City': 95,
  };

  console.log('✅ Price updates (edit toursDatabase.js):');
  console.log(JSON.stringify(priceUpdates, null, 2));
}

// Main menu
console.log('\n🚀 AR Tours - Local Update Script (Token-Saving)\n');
console.log('This script helps you update tours without using API tokens!\n');

const args = process.argv.slice(2);
const command = args[0] || 'help';

switch (command) {
  case 'add-tour':
    addNewTour();
    break;
  case 'update-contact':
    updateContactInfo();
    break;
  case 'add-image':
    addNewImage();
    break;
  case 'update-prices':
    updateTourPrices();
    break;
  case 'help':
  default:
    console.log('Available commands:');
    console.log('  node scripts/update-tour.js add-tour      - Create new tour structure');
    console.log('  node scripts/update-tour.js update-contact - Update contact details');
    console.log('  node scripts/update-tour.js add-image      - Add new tour images');
    console.log('  node scripts/update-tour.js update-prices  - Update tour pricing\n');
    break;
}

console.log('\n💡 Tip: These scripts help you make updates locally without API calls!');
console.log('Then just run: npm run build && git push\n');
