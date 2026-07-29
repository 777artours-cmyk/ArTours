// Comprehensive Tours Database - Real Melbourne & Victoria Tours
export const toursDatabase = {
  // GREAT OCEAN ROAD TOURS
  greatOceanRoad: [
    {
      id: 'gor-full-day',
      category: 'Great Ocean Road',
      name: 'Great Ocean Road Full Day Tour - 12 Apostles Experience',
      price: 185,
      rating: 4.9,
      reviews: 2847,
      duration: '12-13 hours',
      groupSize: 'Small groups (max 12)',
      image: '🌊',
      description: 'Experience Australia\'s most iconic coastal drive. See the famous 12 Apostles, Loch Ard Gorge, and pristine beaches with expert commentary.',
      highlights: [
        'Visit 12 Apostles limestone formations',
        'Loch Ard Gorge historical site',
        'Otway Rainforest walk',
        'Torquay surf beach stop',
        'Morning tea & lunch included',
        'Professional photography opportunities',
        'Wildlife spotting (koalas, kangaroos)'
      ],
      includes: ['Guided tour', 'Light refreshments', 'Professional guide', 'Complimentary photos'],
      notIncludes: ['Lunch (available for purchase)', 'Hotel pickup'],
      bestFor: ['Families', 'Couples', 'First-time visitors'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Meeting Point: Flinders Street Station, Melbourne CBD',
      departureTime: '8:00 AM',
      returnTime: '8:30 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['iconic', 'beaches', 'nature', 'photography']
    },
    {
      id: 'gor-sunset',
      category: 'Great Ocean Road',
      name: 'Great Ocean Road Sunset Experience',
      price: 195,
      rating: 4.8,
      reviews: 1923,
      duration: '8-9 hours',
      groupSize: 'Small groups (max 10)',
      image: '🌅',
      description: 'Witness the magical sunset at the 12 Apostles. Perfect for photographers and romantic getaways.',
      highlights: [
        'Sunset at 12 Apostles',
        'Fewer crowds than day tours',
        'Professional photography guidance',
        'Cocktail/wine & cheese included',
        'Cosy group atmosphere'
      ],
      includes: ['Guide', 'Refreshments', 'Photography tips'],
      notIncludes: ['Dinner', 'Transport from hotel'],
      bestFor: ['Couples', 'Photographers', 'Sunset lovers'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Flinders Street Station, Melbourne',
      departureTime: '2:00 PM',
      returnTime: '11:00 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['romantic', 'sunset', 'photography', 'intimate']
    },
  ],

  // PENGUIN PARADE & PHILLIP ISLAND
  penguinParade: [
    {
      id: 'penguin-classic',
      category: 'Penguin Parade',
      name: 'Phillip Island Penguin Parade - Classic Experience',
      price: 178,
      rating: 4.9,
      reviews: 3421,
      duration: '10-12 hours',
      groupSize: 'Groups up to 20',
      image: '🐧',
      description: 'Watch the famous little penguin parade at sunset. See dozens of penguins return to shore at Phillip Island.',
      highlights: [
        'See 50+ little penguins return to shore',
        'Phillip Island penguin parade (sunset)',
        'Nobbies Nature Reserve walk',
        'Seal spotting opportunities',
        'Premium seating included',
        'Expert wildlife guide',
        'Informative pre-parade briefing'
      ],
      includes: ['Entry to penguin parade', 'Expert guide', 'Viewing area access', 'Light snacks'],
      notIncludes: ['Meals', 'Hotel transfer'],
      bestFor: ['Families', 'Children', 'Nature lovers', 'Wildlife enthusiasts'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Southern Cross Station, Melbourne CBD',
      departureTime: '1:00 PM',
      returnTime: '9:00 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['wildlife', 'family-friendly', 'nature', 'penguins']
    },
    {
      id: 'penguin-vip',
      category: 'Penguin Parade',
      name: 'Penguin Parade VIP Experience - Premium Seating',
      price: 295,
      rating: 4.95,
      reviews: 892,
      duration: '10-12 hours',
      groupSize: 'Small groups (max 8)',
      image: '🐧👑',
      description: 'Exclusive VIP access to premium viewing areas with gourmet refreshments and intimate group sizes.',
      highlights: [
        'VIP viewing platform with best views',
        'Private guide exclusively for your group',
        'Gourmet refreshments & wine',
        'Nobbies premium reserve walk',
        'Seal spotting from exclusive area',
        'Limited to 8 people per group',
        'Professional wildlife photography'
      ],
      includes: ['VIP entry', 'Gourmet snacks', 'Premium guide', 'Wi-Fi onboard'],
      notIncludes: ['Dinner', 'Hotel pickup'],
      bestFor: ['Couples', 'Special occasions', 'Premium travelers'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Southbank, Melbourne',
      departureTime: '12:30 PM',
      returnTime: '9:30 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['vip', 'luxury', 'exclusive', 'premium']
    },
  ],

  // YARRA VALLEY WINE TOURS
  yarraValley: [
    {
      id: 'wine-classic',
      category: 'Wine Tours',
      name: 'Yarra Valley Wine Tour - 3 Wineries',
      price: 165,
      rating: 4.85,
      reviews: 2156,
      duration: '6-7 hours',
      groupSize: 'Groups up to 15',
      image: '🍷',
      description: 'Visit 3 premium wineries in the Yarra Valley. Taste award-winning wines and enjoy lunch at a cellar door.',
      highlights: [
        'Visit 3 premium wineries',
        'Wine tastings at each winery',
        'Lunch at a cellar door restaurant',
        'Expert sommelier guide',
        'Behind-the-scenes winery tours',
        'Cheese & charcuterie platter',
        'Learn about Australian wines'
      ],
      includes: ['Wine tastings', 'Lunch', 'Expert guide', 'Transport'],
      notIncludes: ['Alcohol purchases', 'Hotel pickup'],
      bestFor: ['Wine lovers', 'Food enthusiasts', 'Adults'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Collins Street, Melbourne CBD',
      departureTime: '9:00 AM',
      returnTime: '4:30 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['wine', 'food', 'gourmet', 'tasting']
    },
    {
      id: 'wine-deluxe',
      category: 'Wine Tours',
      name: 'Yarra Valley Deluxe Experience - 5 Wineries & Spa',
      price: 325,
      rating: 4.9,
      reviews: 654,
      duration: '8-9 hours',
      groupSize: 'Small groups (max 8)',
      image: '🍷✨',
      description: 'Premium wine experience with 5 wineries, gourmet multi-course lunch, and spa treatment included.',
      highlights: [
        'Visit 5 exclusive wineries',
        'Multi-course gourmet lunch',
        'Wine pairing with each course',
        'Spa treatment (massage/facial)',
        'Private sommelier',
        'Luxury transport (limo)',
        'Complimentary wine bottle to take home'
      ],
      includes: ['All tastings', 'Gourmet lunch', 'Spa', 'Luxury transport', 'Wine bottle'],
      notIncludes: ['Hotel pickup', 'Additional purchases'],
      bestFor: ['Luxury travelers', 'Special occasions', 'Couples'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Your hotel (includes pickup)',
      departureTime: '9:00 AM',
      returnTime: '6:00 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['luxury', 'wine', 'spa', 'gourmet']
    },
  ],

  // DANDENONG RANGES & PUFFING BILLY
  dandenongRanges: [
    {
      id: 'dandenong-classic',
      category: 'Day Trips',
      name: 'Dandenong Ranges & Puffing Billy Railway Tour',
      price: 139,
      rating: 4.88,
      reviews: 1876,
      duration: '5-6 hours',
      groupSize: 'Groups up to 18',
      image: '🚂',
      description: 'Ride the historic Puffing Billy steam railway and explore charming mountain villages.',
      highlights: [
        'Puffing Billy steam railway ride (7.5km)',
        'Belgrave & Emerald village exploration',
        'Sherbrooke Falls visit',
        'Fern Gully National Park walk',
        'Mountain village tea & scones',
        'Photo stops at scenic locations',
        'Local history & nature interpretation'
      ],
      includes: ['Railway ticket', 'Morning tea', 'Guide', 'Vehicle'],
      notIncludes: ['Lunch', 'Hotel transfer'],
      bestFor: ['Families', 'Train enthusiasts', 'History lovers'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Spencer Street, Melbourne',
      departureTime: '8:30 AM',
      returnTime: '2:30 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['heritage', 'family', 'scenic', 'railway']
    },
  ],

  // PRIVATE TOURS & TRANSFERS
  privateTransfers: [
    {
      id: 'private-chauffeur-4hr',
      category: 'Private Transfers',
      name: 'Private Chauffeur Service - 4 Hours',
      price: 450,
      rating: 4.95,
      reviews: 1240,
      duration: '4 hours',
      groupSize: 'Up to 6 passengers',
      image: '🚗',
      description: 'Premium private chauffeur service. Explore Melbourne at your own pace with a professional driver.',
      highlights: [
        'Professional, courteous chauffeur',
        'Luxury vehicle (Mercedes/BMW)',
        'Flexible itinerary',
        'Stop at your chosen locations',
        'Local insights & recommendations',
        'Climate-controlled comfort',
        'Premium amenities onboard'
      ],
      includes: ['Luxury vehicle', 'Professional driver', 'Bottled water', 'WiFi'],
      notIncludes: ['Attraction entries', 'Meals'],
      bestFor: ['Business travelers', 'Special events', 'Groups', 'Airport transfers'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Your location',
      departureTime: 'Flexible',
      returnTime: 'Flexible',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['luxury', 'private', 'flexible', 'comfort']
    },
    {
      id: 'private-full-day-tour',
      category: 'Private Tours',
      name: 'Private Full Day Custom Tour - Melbourne & Surrounds',
      price: 950,
      rating: 4.9,
      reviews: 687,
      duration: '8-10 hours',
      groupSize: 'Up to 8 passengers',
      image: '🗺️',
      description: 'Bespoke private tour tailored to your interests. Visit hidden gems, museums, or nature spots.',
      highlights: [
        'Completely customizable itinerary',
        'Expert local guide',
        'Luxury vehicle with WiFi',
        'Gourmet lunch included',
        'Photography opportunities',
        'Skip-the-line access to attractions',
        'Personalized recommendations'
      ],
      includes: ['Luxury transport', 'Expert guide', 'Lunch', 'Entry to 2-3 attractions'],
      notIncludes: ['Additional attraction entries', 'Alcohol'],
      bestFor: ['Private groups', 'Special interests', 'VIP travelers', 'Families'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Your hotel',
      departureTime: '9:00 AM',
      returnTime: '7:00 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['private', 'custom', 'luxury', 'personalized']
    },
  ],

  // MELBOURNE CITY TOURS
  melbourneCityTours: [
    {
      id: 'melbourne-street-art',
      category: 'City Tours',
      name: 'Melbourne Street Art & Laneways Walking Tour',
      price: 89,
      rating: 4.87,
      reviews: 2934,
      duration: '2.5-3 hours',
      groupSize: 'Groups up to 20',
      image: '🎨',
      description: 'Discover Melbourne\'s vibrant street art scene. Explore famous laneways and meet local artists.',
      highlights: [
        'Hosier Lane famous murals',
        'AC/DC Lane history',
        'ACCA gallery district',
        'Hidden laneways exploration',
        'Street art photography tips',
        'Local artist insights',
        'Coffee stop in trendy cafe'
      ],
      includes: ['Walking tour', 'Expert guide', 'Coffee', 'Souvenir map'],
      notIncludes: ['Meals', 'Gallery entries'],
      bestFor: ['Art lovers', 'Instagram enthusiasts', 'Creative types'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Federation Square, Melbourne',
      departureTime: '10:00 AM',
      returnTime: '1:00 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['art', 'walking', 'cultural', 'urban']
    },
    {
      id: 'melbourne-food-tour',
      category: 'City Tours',
      name: 'Melbourne Food & Cafe Culture Tour',
      price: 125,
      rating: 4.89,
      reviews: 1654,
      duration: '3-4 hours',
      groupSize: 'Groups up to 12',
      image: '☕',
      description: 'Experience Melbourne\'s world-famous coffee culture and local food scene.',
      highlights: [
        'Visit 4-5 local cafes',
        'Coffee tasting & barista tips',
        'Gourmet food sampling',
        'Laneway food markets',
        'Meet local cafe owners',
        'Learn about specialty coffee',
        'Sweet treats & desserts'
      ],
      includes: ['Food tastings', 'Coffee samples', 'Expert guide'],
      notIncludes: ['Lunch', 'Additional purchases'],
      bestFor: ['Food lovers', 'Coffee enthusiasts', 'Foodies'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Bourke Street, Melbourne',
      departureTime: '9:30 AM',
      returnTime: '1:00 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['food', 'coffee', 'culture', 'tasting']
    },
  ],

  // WILDLIFE EXPERIENCES
  wildlifeTours: [
    {
      id: 'healesville-sanctuary',
      category: 'Wildlife',
      name: 'Healesville Sanctuary & Yarra Valley Tour',
      price: 145,
      rating: 4.86,
      reviews: 1456,
      duration: '5-6 hours',
      groupSize: 'Groups up to 20',
      image: '🐨',
      description: 'Get up close with Australian wildlife at Healesville Sanctuary. Pet a koala and see native animals.',
      highlights: [
        'Koala encounters & petting',
        'Wombat close encounters',
        'Bird shows & demonstrations',
        'Kangaroo feeding',
        'Aboriginal cultural performances',
        'Wine tasting (Yarra Valley)',
        'Picnic lunch included'
      ],
      includes: ['Sanctuary entry', 'Guide', 'Lunch', 'Wine tasting'],
      notIncludes: ['Koala cuddles (photo)', 'Extra purchases'],
      bestFor: ['Families', 'Animal lovers', 'Nature enthusiasts'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Southbank, Melbourne',
      departureTime: '8:30 AM',
      returnTime: '2:30 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['wildlife', 'family', 'animals', 'nature']
    },
    {
      id: 'moonlit-sanctuary',
      category: 'Wildlife',
      name: 'Moonlit Sanctuary - Nocturnal Wildlife Experience',
      price: 189,
      rating: 4.88,
      reviews: 892,
      duration: '2-3 hours',
      groupSize: 'Groups up to 25',
      image: '🦘🌙',
      description: 'Experience Australia\'s nocturnal animals. Hand-feed kangaroos and see exotic wildlife at night.',
      highlights: [
        'Hand-feed kangaroos',
        'Nocturnal animal viewing',
        'Wombat encounters',
        'Guided night walk',
        'Animal keeper talks',
        'Photography opportunities',
        'Spotlight safari experience'
      ],
      includes: ['Entry', 'Guide', 'Kangaroo food', 'Torch'],
      notIncludes: ['Dinner', 'Hotel pickup'],
      bestFor: ['Families', 'Night owls', 'Photographers'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Designated pickup point',
      departureTime: '7:00 PM',
      returnTime: '10:00 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['wildlife', 'nocturnal', 'adventure', 'family']
    },
  ],

  // GRAMPIANS NATIONAL PARK
  grampians: [
    {
      id: 'grampians-full-day',
      category: 'Nature & Hiking',
      name: 'Grampians National Park Full Day Adventure',
      price: 189,
      rating: 4.84,
      reviews: 987,
      duration: '10-11 hours',
      groupSize: 'Groups up to 16',
      image: '🏔️',
      description: 'Explore stunning Grampians National Park. Hiking, Aboriginal sites, and panoramic views.',
      highlights: [
        'MacKenzie Falls waterfall hike',
        'Boroka Lookout panoramic views',
        'Aboriginal cultural sites',
        'Wonderland Loop hike',
        'Picturesque valleys & peaks',
        'Wildlife spotting',
        'Gourmet lunch included'
      ],
      includes: ['Guide', 'Park entry', 'Lunch', 'Transport'],
      notIncludes: ['Hotel pickup', 'Additional activities'],
      bestFor: ['Hikers', 'Nature lovers', 'Adventure seekers'],
      difficulty: 'Moderate',
      accessibility: true,
      meetingPoint: 'Spencer Street Station',
      departureTime: '7:30 AM',
      returnTime: '6:30 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['hiking', 'nature', 'adventure', 'parks']
    },
  ],

  // MORNINGTON PENINSULA
  morningtonPeninsula: [
    {
      id: 'mornington-wine-beach',
      category: 'Day Trips',
      name: 'Mornington Peninsula Wine & Beach Day Tour',
      price: 175,
      rating: 4.86,
      reviews: 1234,
      duration: '8-9 hours',
      groupSize: 'Groups up to 14',
      image: '🍷🏖️',
      description: 'Wine tasting at premium wineries and relax at beautiful Mornington beaches.',
      highlights: [
        'Visit 2-3 premium wineries',
        'Wine tastings & education',
        'Merricks General Store',
        'Scenic beach walks',
        'Gourmet lunch',
        'Hot springs spa visit',
        'Sunset views'
      ],
      includes: ['Wine tastings', 'Lunch', 'Spa entry', 'Guide'],
      notIncludes: ['Wine purchases', 'Hotel pickup'],
      bestFor: ['Couples', 'Wine lovers', 'Relaxation seekers'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Collins Street, Melbourne',
      departureTime: '9:00 AM',
      returnTime: '6:00 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['wine', 'beach', 'relaxation', 'scenic']
    },
  ],

  // ABORIGINAL CULTURAL EXPERIENCES
  aboriginalTours: [
    {
      id: 'aboriginal-cultural',
      category: 'Cultural Tours',
      name: 'Aboriginal Cultural Experience & Dreamtime Stories',
      price: 225,
      rating: 4.92,
      reviews: 765,
      duration: '4-5 hours',
      groupSize: 'Groups up to 10',
      image: '🎭',
      description: 'Learn about Aboriginal culture with Indigenous guides. Hear ancient Dreamtime stories and traditions.',
      highlights: [
        'Indigenous guide from Kulin nation',
        'Sacred site visits',
        'Dreamtime story telling',
        'Bush tucker sampling',
        'Traditional art workshop',
        'Ceremonial experiences',
        'Connection to land & culture'
      ],
      includes: ['Expert guide', 'Bush tucker', 'Art workshop', 'Transport'],
      notIncludes: ['Meals', 'Souvenirs'],
      bestFor: ['Cultural enthusiasts', 'Families', 'Respectful travelers'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Southbank, Melbourne',
      departureTime: '10:00 AM',
      returnTime: '3:00 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['cultural', 'aboriginal', 'heritage', 'authentic']
    },
  ],

  // ADVENTURE TOURS
  adventureTours: [
    {
      id: 'adventure-rock-climbing',
      category: 'Adventure',
      name: 'Rock Climbing & Abseiling Experience - Grampians',
      price: 235,
      rating: 4.87,
      reviews: 543,
      duration: '6-7 hours',
      groupSize: 'Groups up to 8',
      image: '🧗',
      description: 'Adventure seekers! Rock climbing and abseiling lessons with professional guides.',
      highlights: [
        'Professional rock climbing instruction',
        'Abseiling down cliff faces',
        'Safety equipment & training',
        'Stunning Grampians scenery',
        'Multiple difficulty levels',
        'Lunch & refreshments',
        'Photography of your adventure'
      ],
      includes: ['Equipment', 'Guide', 'Lunch', 'Safety gear'],
      notIncludes: ['Hotel pickup', 'Extra activities'],
      bestFor: ['Adventure seekers', 'Thrill lovers', 'Fitness enthusiasts'],
      difficulty: 'Hard',
      accessibility: false,
      meetingPoint: 'Grampians National Park',
      departureTime: '8:00 AM',
      returnTime: '3:30 PM',
      startDate: '2024-01-01',
      verified: true,
      operator: 'AR Tours',
      tags: ['adventure', 'sports', 'adrenaline', 'outdoor']
    },
  ],

  // NATIONAL EXPANSION — new private tours outside Victoria. These are new
  // AR Tours offerings without an operating history, so rating/reviews are
  // left at 0 rather than inventing numbers; the UI shows a "New tour" badge
  // instead of a star rating for these until real reviews come in.
  newSouthWales: [
    {
      id: 'nsw-sydney-harbour',
      category: 'New South Wales',
      name: 'Sydney Harbour & Opera House Private Tour',
      price: 450,
      rating: 0,
      reviews: 0,
      duration: '6-7 hours',
      groupSize: 'Private (up to 7 passengers)',
      image: '🎭',
      description: 'A private chauffeur-guided tour of Sydney\'s icons: the Opera House, Harbour Bridge, Circular Quay, and The Rocks, with time at Bondi Beach.',
      highlights: [
        'Sydney Opera House exterior & forecourt',
        'Sydney Harbour Bridge lookout',
        'The Rocks historic precinct',
        'Bondi Beach and coastal walk',
        'Private, air-conditioned vehicle',
        'Flexible stops for photography'
      ],
      includes: ['Private vehicle & driver-guide', 'Hotel pickup & drop-off'],
      notIncludes: ['Opera House interior tour tickets', 'Meals'],
      bestFor: ['Couples', 'Families', 'First-time Sydney visitors'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Sydney CBD hotel pickup',
      departureTime: '9:00 AM',
      returnTime: '4:00 PM',
      startDate: '2026-08-01',
      verified: false,
      operator: 'AR Tours',
      tags: ['sydney', 'icons', 'harbour', 'new']
    },
  ],

  queensland: [
    {
      id: 'qld-reef-cairns',
      category: 'Queensland',
      name: 'Great Barrier Reef Private Day Tour (Cairns)',
      price: 520,
      rating: 0,
      reviews: 0,
      duration: 'Full day (approx. 8 hours)',
      groupSize: 'Private (up to 7 passengers)',
      image: '🐠',
      description: 'A private, small-group day trip from Cairns out to the Great Barrier Reef, with snorkelling and reef-viewing arranged through licensed reef operators.',
      highlights: [
        'Transfer to reef vessel departure point',
        'Snorkelling on the Great Barrier Reef',
        'Marine park entry arranged',
        'Underwater photography opportunities',
        'Lunch aboard included'
      ],
      includes: ['Hotel transfer', 'Reef vessel transfer coordination', 'Lunch'],
      notIncludes: ['Diving certification courses', 'Wetsuit hire (available on request)'],
      bestFor: ['Snorkellers', 'Divers', 'Nature lovers'],
      difficulty: 'Easy',
      accessibility: false,
      meetingPoint: 'Cairns hotel pickup',
      departureTime: '7:00 AM',
      returnTime: '5:30 PM',
      startDate: '2026-08-01',
      verified: false,
      operator: 'AR Tours',
      tags: ['queensland', 'reef', 'snorkelling', 'new']
    },
  ],

  southAustralia: [
    {
      id: 'sa-barossa-valley',
      category: 'South Australia',
      name: 'Barossa Valley Private Wine Tour',
      price: 480,
      rating: 0,
      reviews: 0,
      duration: '8 hours',
      groupSize: 'Private (up to 7 passengers)',
      image: '🍇',
      description: 'A private day tour through one of Australia\'s most celebrated wine regions, visiting Barossa Valley cellar doors with a personal driver-guide.',
      highlights: [
        'Visits to Barossa Valley cellar doors',
        'Views from Mengler Hill lookout',
        'Local produce & cheese tasting',
        'Flexible itinerary based on your preferences'
      ],
      includes: ['Private vehicle & driver', 'Cellar door tasting fees (selected venues)'],
      notIncludes: ['Lunch', 'Wine purchases'],
      bestFor: ['Wine enthusiasts', 'Couples', 'Small groups'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Adelaide hotel pickup',
      departureTime: '9:00 AM',
      returnTime: '5:00 PM',
      startDate: '2026-08-01',
      verified: false,
      operator: 'AR Tours',
      tags: ['south australia', 'wine', 'barossa', 'new']
    },
  ],

  westernAustralia: [
    {
      id: 'wa-pinnacles-desert',
      category: 'Western Australia',
      name: 'Pinnacles Desert Private Day Tour',
      price: 460,
      rating: 0,
      reviews: 0,
      duration: '9-10 hours',
      groupSize: 'Private (up to 7 passengers)',
      image: '🏜️',
      description: 'A private day tour from Perth to the otherworldly limestone formations of the Pinnacles Desert in Nambung National Park, with coastal stops en route.',
      highlights: [
        'Pinnacles Desert, Nambung National Park',
        'Coastal towns en route (Lancelin/Cervantes)',
        'Sunset viewing option available',
        'Private, air-conditioned vehicle'
      ],
      includes: ['Private vehicle & driver-guide', 'National park entry fee'],
      notIncludes: ['Meals'],
      bestFor: ['Photographers', 'Couples', 'Nature lovers'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Perth hotel pickup',
      departureTime: '8:00 AM',
      returnTime: '6:00 PM',
      startDate: '2026-08-01',
      verified: false,
      operator: 'AR Tours',
      tags: ['western australia', 'pinnacles', 'desert', 'new']
    },
  ],

  tasmania: [
    {
      id: 'tas-cradle-mountain',
      category: 'Tasmania',
      name: 'Cradle Mountain Private Day Tour',
      price: 490,
      rating: 0,
      reviews: 0,
      duration: 'Full day',
      groupSize: 'Private (up to 7 passengers)',
      image: '🏔️',
      description: 'A private tour into Cradle Mountain-Lake St Clair National Park, one of Tasmania\'s most iconic wilderness landscapes, with time at Dove Lake.',
      highlights: [
        'Dove Lake circuit (walking, weather permitting)',
        'Cradle Mountain viewpoints',
        'Tasmanian wildlife spotting',
        'Flexible pace with a private driver-guide'
      ],
      includes: ['Private vehicle & driver-guide', 'National park entry fee'],
      notIncludes: ['Meals', 'Overnight accommodation'],
      bestFor: ['Hikers', 'Nature lovers', 'Photographers'],
      difficulty: 'Moderate',
      accessibility: false,
      meetingPoint: 'Launceston or Devonport pickup',
      departureTime: '8:00 AM',
      returnTime: '6:00 PM',
      startDate: '2026-08-01',
      verified: false,
      operator: 'AR Tours',
      tags: ['tasmania', 'cradle mountain', 'wilderness', 'new']
    },
  ],

  northernTerritory: [
    {
      id: 'nt-uluru',
      category: 'Northern Territory',
      name: 'Uluru-Kata Tjuta Private Tour',
      price: 550,
      rating: 0,
      reviews: 0,
      duration: 'Full day',
      groupSize: 'Private (up to 7 passengers)',
      image: '🪨',
      description: 'A private tour of Uluru-Kata Tjuta National Park with a personal driver-guide, including the Uluru base walk and sunset or sunrise viewing.',
      highlights: [
        'Uluru base walk (in full or part, as preferred)',
        'Kata Tjuta viewing area',
        'Sunrise or sunset viewing option',
        'Cultural context shared respectfully, with reference to Anangu traditional owners'
      ],
      includes: ['Private vehicle & driver-guide', 'National park entry fee'],
      notIncludes: ['Meals', 'Accommodation'],
      bestFor: ['Couples', 'Photographers', 'Cultural travellers'],
      difficulty: 'Moderate',
      accessibility: false,
      meetingPoint: 'Ayers Rock Resort / Yulara pickup',
      departureTime: 'Varies with sunrise/sunset',
      returnTime: 'Varies with sunrise/sunset',
      startDate: '2026-08-01',
      verified: false,
      operator: 'AR Tours',
      tags: ['northern territory', 'uluru', 'red centre', 'new']
    },
  ],

  act: [
    {
      id: 'act-canberra',
      category: 'Australian Capital Territory',
      name: 'Canberra National Capital Private Tour',
      price: 400,
      rating: 0,
      reviews: 0,
      duration: '6 hours',
      groupSize: 'Private (up to 7 passengers)',
      image: '🏛️',
      description: 'A private tour of Canberra\'s national institutions, including Parliament House, the Australian War Memorial, and Lake Burley Griffin.',
      highlights: [
        'Parliament House (exterior and public areas)',
        'Australian War Memorial',
        'Lake Burley Griffin lookout',
        'National Gallery of Australia (exterior, optional stop)'
      ],
      includes: ['Private vehicle & driver-guide'],
      notIncludes: ['Museum/gallery ticketed exhibitions', 'Meals'],
      bestFor: ['Families', 'History enthusiasts', 'School groups'],
      difficulty: 'Easy',
      accessibility: true,
      meetingPoint: 'Canberra hotel pickup',
      departureTime: '9:00 AM',
      returnTime: '3:00 PM',
      startDate: '2026-08-01',
      verified: false,
      operator: 'AR Tours',
      tags: ['canberra', 'act', 'capital', 'new']
    },
  ],
};

// Helper function to get all tours
export const getAllTours = () => {
  return Object.values(toursDatabase).flat();
};

// Helper function to get tours by category
export const getToursByCategory = (category) => {
  return Object.values(toursDatabase)
    .flat()
    .filter(tour => tour.category === category);
};

// Helper function to search tours
export const searchTours = (query) => {
  const lowerQuery = query.toLowerCase();
  return Object.values(toursDatabase)
    .flat()
    .filter(tour =>
      tour.name.toLowerCase().includes(lowerQuery) ||
      tour.description.toLowerCase().includes(lowerQuery) ||
      tour.category.toLowerCase().includes(lowerQuery) ||
      tour.tags.some(tag => tag.includes(lowerQuery))
    );
};

// Helper function to filter tours by price
export const filterToursByPrice = (minPrice, maxPrice) => {
  return Object.values(toursDatabase)
    .flat()
    .filter(tour => tour.price >= minPrice && tour.price <= maxPrice);
};

// Helper function to filter by rating
export const filterToursByRating = (minRating) => {
  return Object.values(toursDatabase)
    .flat()
    .filter(tour => tour.rating >= minRating)
    .sort((a, b) => b.rating - a.rating);
};

// Get all categories
export const getAllCategories = () => {
  const categories = new Set();
  Object.values(toursDatabase)
    .flat()
    .forEach(tour => categories.add(tour.category));
  return Array.from(categories).sort();
};

// Get featured tours (highest rated)
export const getFeaturedTours = () => {
  return Object.values(toursDatabase)
    .flat()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
};
