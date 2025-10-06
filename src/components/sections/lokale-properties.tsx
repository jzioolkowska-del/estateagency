"use client";

import Image from 'next/image';
import { MapPin, Square as SquareIcon } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Independent data for Lokale page only
const lokaleData = [
{
  slug: "lokal-uslugowy-kozmin-wlkp",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759589241087.png",
  alt: "Lokal uslugowy - Kozmin Wlkp.",
  type: "Lokal usługowy",
  price: "1 349 zł",
  title: "Lokal usługowy - Koźmin Wlkp. 36m²",
  location: "Koźmin Wlkp.",
  area: 36
}];


const LokaleProperties = ({ limit }: {limit?: number;} = {}) => {
  const searchParams = useSearchParams();
  const city = searchParams.get('city') || '';
  const maxPrice = searchParams.get('maxPrice') || '';

  // Parse price string to number
  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/\s+|zł/g, ''), 10);
  };

  // Filter properties based on search parameters
  let filteredProperties = lokaleData.filter((property) => {
    const matchesCity = city === '' || property.location.toLowerCase().includes(city.toLowerCase());
    const matchesPrice = maxPrice === '' || parsePrice(property.price) <= parseInt(maxPrice, 10);
    return matchesCity && matchesPrice;
  });

  // Apply limit if provided
  if (limit) {
    filteredProperties = filteredProperties.slice(0, limit);
  }

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
            {filteredProperties.map((property, index) =>
            <Link href={`/oferty/${property.slug}`} key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 block">
                <div className="relative overflow-hidden">
                  <Image
                  src={property.image}
                  alt={property.alt}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />

                  <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                    {property.price}
                  </div>
                  <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm font-medium !whitespace-pre-line">
                    {property.type}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-foreground mb-1 line-clamp-2 !whitespace-pre-line !whitespace-pre-line">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-3 !whitespace-pre-line">
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
            )}
          </div>
        )}
      </div>
    </section>);

};

export default LokaleProperties;