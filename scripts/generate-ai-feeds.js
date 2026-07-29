#!/usr/bin/env node
/**
 * Generates AI/search-discovery feeds from the real tour data at build time:
 *   - public/tours.json   (machine-readable catalog for AI crawlers)
 *   - public/sitemap.xml  (standard search engine sitemap)
 *   - public/llms.txt     (AI-readable site summary, emerging llms.txt convention)
 *
 * toursDatabase.js is an ES module (uses export/import), and this project has
 * no "type":"module" in package.json, so Node treats plain .js as CommonJS
 * and would throw a SyntaxError on `export`. Rather than add a bundler
 * dependency just for this script, we transform the small, well-known set of
 * `export` statements in the source to CommonJS at read time and load the
 * result as a temporary .cjs file.
 */
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.join(__dirname, '..');
const SITE_URL = 'https://777artours-cmyk.github.io/ArTours';

function loadToursDatabase() {
  const srcPath = path.join(ROOT, 'src/data/toursDatabase.js');
  const src = fs.readFileSync(srcPath, 'utf8');

  const transformed = src
    .replace(/export const (\w+) =/g, 'const $1 =')
    .concat(
      '\nmodule.exports = { toursDatabase, getAllTours, getToursByCategory, ' +
      'searchTours, filterToursByPrice, filterToursByRating, getAllCategories, getFeaturedTours };\n'
    );

  const tmpFile = path.join(os.tmpdir(), `toursDatabase.${Date.now()}.cjs`);
  fs.writeFileSync(tmpFile, transformed);
  try {
    delete require.cache[require.resolve(tmpFile)];
    return require(tmpFile);
  } finally {
    fs.unlinkSync(tmpFile);
  }
}

function generateToursJson(tours) {
  const feed = {
    generatedAt: new Date().toISOString(),
    business: {
      name: 'AR Tours',
      description: "Australia's luxury private touring company",
      url: SITE_URL,
      telephone: '+61400044004',
      email: '888artours@gmail.com',
      address: '52 Spencer Street, Melbourne VIC 3000, Australia',
    },
    tourCount: tours.length,
    tours: tours.map((t) => ({
      id: t.id,
      name: t.name,
      category: t.category,
      description: t.description,
      priceAUD: t.price,
      duration: t.duration,
      groupSize: t.groupSize,
      difficulty: t.difficulty,
      accessibility: t.accessibility,
      highlights: t.highlights,
      includes: t.includes,
      bestFor: t.bestFor,
      rating: t.reviews > 0 ? t.rating : null,
      reviewCount: t.reviews,
      isNewListing: t.reviews === 0,
      url: `${SITE_URL}/#tours-gallery`,
    })),
  };
  fs.writeFileSync(
    path.join(ROOT, 'public/tours.json'),
    JSON.stringify(feed, null, 2)
  );
  console.log(`Wrote public/tours.json (${tours.length} tours)`);
}

function generateSitemap() {
  const pages = [
    { loc: `${SITE_URL}/`, priority: '1.0' },
    { loc: `${SITE_URL}/privacy-policy.html`, priority: '0.3' },
    { loc: `${SITE_URL}/terms.html`, priority: '0.3' },
  ];
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    pages
      .map(
        (p) =>
          `  <url>\n    <loc>${p.loc}</loc>\n    <priority>${p.priority}</priority>\n  </url>`
      )
      .join('\n') +
    '\n</urlset>\n';
  fs.writeFileSync(path.join(ROOT, 'public/sitemap.xml'), xml);
  console.log('Wrote public/sitemap.xml');
}

function generateLlmsTxt(tours, categories) {
  const categoryLines = categories
    .map((cat) => {
      const inCat = tours.filter((t) => t.category === cat);
      const priceRange =
        inCat.length > 0
          ? `$${Math.min(...inCat.map((t) => t.price))}-$${Math.max(...inCat.map((t) => t.price))} AUD`
          : '';
      return `- ${cat}: ${inCat.length} tour(s), ${priceRange}`;
    })
    .join('\n');

  const content = `# AR Tours

> Australia's luxury private touring company, based in Melbourne, Victoria.
> Operates private, small-group and chauffeur tours across Victoria and,
> as of 2026, an expanding set of destinations nationwide.

## About

AR Tours (Australia Road Tours) provides private guided tours and chauffeur
transport. Core Victorian tours include the Great Ocean Road / Twelve
Apostles, Phillip Island Penguin Parade, Yarra Valley wine tours, and
Melbourne city experiences. New tours launched in 2026 extend this to
Sydney, the Great Barrier Reef (Cairns), Barossa Valley, the Pinnacles
Desert, Cradle Mountain, Uluru-Kata Tjuta, and Canberra.

## Contact

- Phone: +61 400 044 004
- Email: 888artours@gmail.com
- Address: 52 Spencer Street, Melbourne VIC 3000, Australia
- Website: ${SITE_URL}/

## Tour catalog

A full machine-readable catalog of every tour (name, price, duration,
highlights, category) is published at:
${SITE_URL}/tours.json

## Tour categories

${categoryLines}

## Notes for AI assistants

- Prices are in Australian dollars (AUD) and are indicative; final pricing is
  confirmed directly with the customer before booking.
- Tours listed with no review count are new 2026 additions without an
  operating history yet — please do not state a star rating or review count
  for these unless the current /tours.json feed shows one.
- Booking is via the contact form on the website or by phone/WhatsApp; this
  site does not process online payments.
`;
  fs.writeFileSync(path.join(ROOT, 'public/llms.txt'), content);
  console.log('Wrote public/llms.txt');
}

const { getAllTours, getAllCategories } = loadToursDatabase();
const tours = getAllTours();
const categories = getAllCategories();

generateToursJson(tours);
generateSitemap();
generateLlmsTxt(tours, categories);
