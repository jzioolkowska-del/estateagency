"use client";

import Image from 'next/image';
import { MapPin, Square as SquareIcon } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export const dzialkiData = [
  {
    slug: "dzialki-budowlane-polna-krotoszyn",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/sign/photos/ink-lut1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2I2NjM0YS02NjhiLTQzNTctOTBjZC0yOGE5MjE4MTNjYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvaW5rLWx1dDEud2VicCIsImlhdCI6MTc1OTczOTI5NSwiZXhwIjoxNzkxMjc1Mjk1fQ.equ1q07Noql1eCOGGip-IMIKQjMnwAeY047edgZJWPQ",
    alt: "Działki budowlane w Lutogniewie",
    type: "Działka",
    price: "199 780 zł",
    title: "Działki budowlane – ul. Polna, gm.Krotoszyn",
    location: "Lutogniew",
    area: 1427
  },
  {
    slug: "nieruchomosc-gruntowa-kozmin-wlkp",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/sign/photos/ink1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2I2NjM0YS02NjhiLTQzNTctOTBjZC0yOGE5MjE4MTNjYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvaW5rMS53ZWJwIiwiaWF0IjoxNzU5NzM5MzkwLCJleHAiOjE3OTEyNzUzOTB9.UqW9lFWtkZF-mZHt2RkA6RPdUm8QXALXLOQliEmcoPs",
    alt: "Nieruchomość gruntowa z zabudowaniami",
    type: "Działka",
    price: "1 100 000 zł",
    title: "Nieruchomość gruntowa z zabudowaniami, gm. Koźmin Wlkp.",
    location: "Czarny Sad",
    area: 5500
  },
  {
    slug: "teren-inwestycyjny-lesna-ostrow",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/sign/photos/zacharzew-orto1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2I2NjM0YS02NjhiLTQzNTctOTBjZC0yOGE5MjE4MTNjYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvemFjaGFyemV3LW9ydG8xLndlYnAiLCJpYXQiOjE3NTk3Mzk1MTksImV4cCI6MTc5MTI3NTUxOX0.aOQdCrklAHviE_Egw4ZGq_eZpBsaJTWws7AUthUsCiY",
    alt: "Teren inwestycyjny w Zacharzewie",
    type: "Działka",
    price: "1 100 000 zł",
    title: "Teren inwestycyjny – ul. Leśna, gm. Ostrów Wlkp.",
    location: "Zacharzew",
    area: 5421
  },
  {
    slug: "dzialka-inwestycyjna-ostrowska",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/sign/photos/rez-pdf1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2I2NjM0YS02NjhiLTQzNTctOTBjZC0yOGE5MjE4MTNjYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvcmV6LXBkZjEud2VicCIsImlhdCI6MTc1OTczOTY3NiwiZXhwIjoxNzkxMjc1Njc2fQ.q5dAgjSXO7MHVhCgyGUH_KL5fitbIe_aSnyuoyXksyk",
    alt: "Działka inwestycyjna przy ul. Ostrowskiej",
    type: "Działka",
    price: "1 709 155 zł",
    title: "Działka inwestycyjna – ul. Ostrowska",
    location: "Krotoszyn",
    area: 5195
  },
  {
    slug: "dzialka-rekreacyjna-rod",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/sign/photos/POGODY3-INK1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2I2NjM0YS02NjhiLTQzNTctOTBjZC0yOGE5MjE4MTNjYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvUE9HT0RZMy1JTksxLndlYnAiLCJpYXQiOjE3NTk3Mzk3NzcsImV4cCI6MTc5MTI3NTc3N30.zWIrsrnIxOzKRAi-5mMcDeJ5AL4C65mLEr8J84k-Uro",
    alt: "Działka rekreacyjna ROD",
    type: "Działka",
    price: "42 000 zł",
    title: "Działka rekreacyjna ROD",
    location: "Krotoszyn",
    area: 440
  },
  {
    slug: "dzialki-budowlane-rozdrazew",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/sign/photos/ink1%20(1).webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2I2NjM0YS02NjhiLTQzNTctOTBjZC0yOGE5MjE4MTNjYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvaW5rMSAoMSkud2VicCIsImlhdCI6MTc1OTc0MDAzNiwiZXhwIjoxNzkxMjc2MDM2fQ.KpBmPYLSyMWk6AsdP2ToaukoNbuKr9KxXKfhEq1iWaQ",
    alt: "Działki budowlane w Rozdrażewie",
    type: "Działka",
    price: "91 785 zł",
    title: "Działki budowlane",
    location: "Rozdrażew",
    area: 634
  },
  {
    slug: "dzialki-inwestycyjne-kozala-1",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/sign/photos/kozala-ink1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2I2NjM0YS02NjhiLTQzNTctOTBjZC0yOGE5MjE4MTNjYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3Mva296YWxhLWluazEud2VicCIsImlhdCI6MTc1OTc0MDA5OSwiZXhwIjoxNzkxMjc2MDk5fQ.Y_W057jUqfPj9G3c-IEa_nEdwadiduwMkLN-39boJEw",
    alt: "Działki inwestycyjne przy ul. Kozala",
    type: "Działka",
    price: "1 402 569 zł",
    title: "Działki inwestycyjne – ul. Kozala",
    location: "Krotoszyn",
    area: 7421
  },
  {
    slug: "dzialki-inwestycyjne-kozala-2",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/sign/photos/kozala-szymanowscy-ink-1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2I2NjM0YS02NjhiLTQzNTctOTBjZC0yOGE5MjE4MTNjYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3Mva296YWxhLXN6eW1hbm93c2N5LWluay0xLndlYnAiLCJpYXQiOjE3NTk3NDAxMzcsImV4cCI6MTc5MTI3NjEzN30.5SfUyoiy-9JhGcJwR1MDzRricG66xmWaFDHlxWYqrlo",
    alt: "Działki inwestycyjne przy ul. Kozala",
    type: "Działka",
    price: "722 343 zł",
    title: "Działki inwestycyjne – ul. Kozala",
    location: "Krotoszyn",
    area: 6627
  },
  {
    slug: "dzialka-rolna-budowlana-gorzupska",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/sign/photos/bitmapa1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2I2NjM0YS02NjhiLTQzNTctOTBjZC0yOGE5MjE4MTNjYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvYml0bWFwYTEud2VicCIsImlhdCI6MTc1OTc0MDI0MCwiZXhwIjoxNzkxMjc2MjQwfQ.lSQxJbmdg8HeFa8fmb704O3VIo0zZpAG1reQCxvkodw",
    alt: "Działka rolna/budowlana przy ul. Gorzupskiej",
    type: "Działka",
    price: "709 280 zł",
    title: "Działka rolna/budowlana – ul. Gorzupska",
    location: "Krotoszyn",
    area: 5456
  }
];

const DzialkiProperties = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get('city') || '';
  const maxPrice = searchParams.get('maxPrice') || '';

  // Parse price string to number
  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/\s+|zł/g, ''), 10);
  };

  // Filter properties based on search parameters
  const filteredProperties = dzialkiData.filter((property) => {
    const matchesCity = city === '' || property.location.toLowerCase().includes(city.toLowerCase());
    const matchesPrice = maxPrice === '' || parsePrice(property.price) <= parseInt(maxPrice, 10);
    return matchesCity && matchesPrice;
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Najnowsze oferty</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sprawdź nasze najnowsze propozycje nieruchomości. Każda z nich została starannie wybrana dla naszych klientów.
          </p>
        </div>
        
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Brak ofert pasujących do kryteriów wyszukiwania.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property, index) => (
              <Link href={`/oferty/${property.slug}`} key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 block">
                <div className="relative overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.alt}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                    {property.price}
                  </div>
                  <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm font-medium">
                    Sprzedaż
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-foreground mb-1 line-clamp-2">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <SquareIcon className="h-4 w-4 mr-1" />
                      <span>{property.area} m²</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DzialkiProperties;