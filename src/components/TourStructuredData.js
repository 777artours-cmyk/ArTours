import { useEffect } from 'react';
import { getAllTours } from '../data/toursDatabase';

const SCRIPT_ID = 'tour-catalog-jsonld';

// Injects schema.org Product/Offer structured data for every tour so search
// engines and AI assistants can parse individual listings, not just the
// business-level TravelAgency schema in index.html. Rendered from the live
// tour data (not duplicated by hand) so it can never drift out of sync with
// what's actually on the page.
function TourStructuredData() {
  useEffect(() => {
    const tours = getAllTours();

    const itemList = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: tours.map((tour, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: tour.name,
          description: tour.description,
          category: tour.category,
          offers: {
            '@type': 'Offer',
            price: tour.price,
            priceCurrency: 'AUD',
            availability: 'https://schema.org/InStock',
          },
          ...(tour.reviews > 0
            ? {
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: tour.rating,
                  reviewCount: tour.reviews,
                },
              }
            : {}),
        },
      })),
    };

    let script = document.getElementById(SCRIPT_ID);
    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(itemList);

    return () => {
      // Leave the tag in place across re-renders of this component; only the
      // content is refreshed above. No cleanup needed on unmount since this
      // component lives for the lifetime of the app.
    };
  }, []);

  return null;
}

export default TourStructuredData;
