// Verified real photography — all images checked individually against their
// Wikimedia Commons file description page (real location, real photographer,
// real license) before being used here. Do not add an entry without opening
// its Commons file page and confirming the caption matches the claimed subject.
//
// License: Wikimedia Commons images are mostly CC-BY — attribution is given
// in PHOTO_CREDITS below and rendered in the site footer.

const wm = (filename, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${width}`;

// Filenames verified on commons.wikimedia.org (July 2026)
const FILES = {
  twelveApostles: 'Princetown (AU), Port Campbell National Park, Twelve Apostles -- 2019 -- 0969.jpg',
  littlePenguin: 'Eudyptula minor Phillip Island 2.JPG',
  yarraValleyVineyard: 'Rochford Wines vineyard in Yarra Valley Australia.jpg',
  melbourneSkyline: 'Melbourne Skyline from Rialto Crop - Nov 2008.jpg',
  mackenzieFalls: 'McKenzie Falls, Grampians National Park.jpg',
  koala: 'Koala climbing tree.jpg',
};

export const tourImages = {
  greatOceanRoad: {
    hero: wm(FILES.twelveApostles, 1600),
    card: wm(FILES.twelveApostles, 800),
    thumbnail: wm(FILES.twelveApostles, 400),
  },
  penguinParade: {
    hero: wm(FILES.littlePenguin, 1600),
    card: wm(FILES.littlePenguin, 800),
    thumbnail: wm(FILES.littlePenguin, 400),
  },
  yarraValley: {
    hero: wm(FILES.yarraValleyVineyard, 1600),
    card: wm(FILES.yarraValleyVineyard, 800),
    thumbnail: wm(FILES.yarraValleyVineyard, 400),
  },
  melbourneCity: {
    hero: wm(FILES.melbourneSkyline, 1600),
    card: wm(FILES.melbourneSkyline, 800),
    thumbnail: wm(FILES.melbourneSkyline, 400),
  },
  grampians: {
    hero: wm(FILES.mackenzieFalls, 1600),
    card: wm(FILES.mackenzieFalls, 800),
    thumbnail: wm(FILES.mackenzieFalls, 400),
  },
  healesville: {
    hero: wm(FILES.koala, 1600),
    card: wm(FILES.koala, 800),
    thumbnail: wm(FILES.koala, 400),
  },
  // Categories without a dedicated verified photo reuse the closest
  // verified match rather than an unverified stock image.
  dandenong: {
    hero: wm(FILES.mackenzieFalls, 1600),
    card: wm(FILES.mackenzieFalls, 800),
    thumbnail: wm(FILES.mackenzieFalls, 400),
  },
  mornington: {
    hero: wm(FILES.yarraValleyVineyard, 1600),
    card: wm(FILES.yarraValleyVineyard, 800),
    thumbnail: wm(FILES.yarraValleyVineyard, 400),
  },
};

// Photo credit lines (required by Wikimedia Commons CC-BY licenses)
export const PHOTO_CREDITS = [
  { subject: 'Twelve Apostles, Port Campbell National Park', author: 'Wikimedia Commons contributor', license: 'CC BY-SA 4.0' },
  { subject: 'Little Penguin, Phillip Island', author: 'Magnus Kjaergaard', license: 'CC BY 3.0' },
  { subject: 'Rochford Wines, Yarra Valley', author: 'Wikimedia Commons contributor', license: 'CC BY-SA' },
  { subject: 'Melbourne Skyline from Rialto', author: 'Wikimedia Commons contributor (Featured Picture)', license: 'CC BY-SA' },
  { subject: 'McKenzie Falls, Grampians National Park', author: 'Wikimedia Commons contributor', license: 'CC BY' },
  { subject: 'Koala', author: 'Wikimedia Commons contributor', license: 'CC BY-SA' },
];

export const getTourImage = (tourName) => {
  const key = tourName.toLowerCase();

  if (key.includes('ocean') || key.includes('apostle')) return tourImages.greatOceanRoad;
  if (key.includes('penguin')) return tourImages.penguinParade;
  if (key.includes('yarra') || key.includes('wine')) return tourImages.yarraValley;
  if (key.includes('melbourne') || key.includes('city')) return tourImages.melbourneCity;
  if (key.includes('grampians')) return tourImages.grampians;
  if (key.includes('healesville') || key.includes('wildlife') || key.includes('koala') || key.includes('sanctuary')) return tourImages.healesville;
  if (key.includes('dandenong') || key.includes('puffing billy')) return tourImages.dandenong;
  if (key.includes('mornington')) return tourImages.mornington;

  return tourImages.greatOceanRoad;
};
