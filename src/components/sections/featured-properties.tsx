import Image from 'next/image';
import { MapPin, Square as SquareIcon } from 'lucide-react';
import Link from 'next/link';
import { properties, type Offer } from "@/app/oferty/data";

const FeaturedProperties = ({ limit = properties.length, customProperties }: {limit?: number; customProperties?: Offer[];}) => {
  const propsToUse = customProperties || properties;
  return (
    <section id="nieruchomosci" className="py-16 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Najnowsze oferty</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sprawdź nasze najnowsze propozycje nieruchomości. Każda z nich została starannie wybrana dla naszych klientów.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(limit ? propsToUse.slice(0, limit) : propsToUse).map((property, index) => (
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
                  {property.type}
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
      </div>
    </section>
  );
};

export default FeaturedProperties;