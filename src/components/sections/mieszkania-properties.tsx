'use client';

import Image from 'next/image';
import { MapPin, Square as SquareIcon, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { properties } from "@/app/oferty/data";

const MieszkaniaProperties = () => {
  // These overrides modify properties from the imported properties array
  // Each override corresponds to a property by index (after filtering)
  const overrides = [
  { 
    slug: "nowe-mieszkanie-46-24-m2-krotoszyn",
    title: "Nowe mieszkanie z ogródkiem – os. Robińskich 8", 
    area: 46.24, 
    price: "368 920 zł",
    type: "z ogródkiem",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/Mieskania/SPRZEDANE-1.webp"
  },
  { 
    title: "Nowe mieszkanie z ogródkiem – os. Robińskich 8", 
    area: 46.07, 
    price: "368 560 zł",
    type: "z ogródkiem",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/Mieskania/SPRZEDANE-1.webp"
  },
  { 
    title: "Nowe mieszkanie z balkonem – os. Robińskich 8",
    area: 55.73,
    price: "445 840 zł",
    type: "z balkonem",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/Mieskania/rzut-3d.webp"
  },
  { 
    title: "Nowe mieszkanie z balkonem – os. Robińskich 8", 
    area: 46.07, 
    price: "368 560 zł",
    type: "z balkonem",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/Mieskania/rzut-rob2.webp"
  },
  { 
    title: "Nowe mieszkanie z ogródkiem – os. Robińskich 8", 
    area: 53.11, 
    price: "424 880 zł",
    type: "z ogródkiem",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/Mieskania/3d-poprawiony.webp"
  },
  { 
    title: "Nowy apartament os. Botanika", 
    area: 46.24, 
    price: "661 320 zł",
    type: "apartament",
    image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/Mieskania/SPRZEDANE1.webp"
  }];

  // Filter out "Przytulne mieszkanie z balkonem" and all Dzialki (plots/land) offers
  const dzialkiSlugs = [
    'dzialki-budowlane-polna-krotoszyn',
    'nieruchomosc-gruntowa-kozmin-wlkp',
    'teren-inwestycyjny-lesna-ostrow',
    'dzialka-inwestycyjna-ostrowska',
    'dzialka-rekreacyjna-rod',
    'dzialki-budowlane-rozdrazew',
    'dzialki-inwestycyjne-kozala-1',
    'dzialki-inwestycyjne-kozala-2',
    'dzialka-rolna-budowlana-gorzupska'
  ];

  const filteredProperties = properties.filter((prop) => 
    prop.slug !== "przytulne-mieszkanie-z-balkonem" && 
    !dzialkiSlugs.includes(prop.slug)
  );

  const modifiedProperties = filteredProperties.map((property, index) => {
    const override = overrides[index];
    if (override) {
      return {
        ...property,
        title: override.title,
        area: override.area,
        price: override.price,
        location: "Krotoszyn",
        type: override.type || "standardowe",
        ...(override.image && { image: override.image }),
        ...(override.slug && { slug: override.slug }),
      };
    }
    return {
      ...property,
      location: "Krotoszyn",
      type: "standardowe",
    };
  });

  // States for search filters
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Available types for dropdown
  const availableTypes = [
    { value: '', label: 'Wybierz typ' },
    { value: 'z ogródkiem', label: 'Z ogródkiem' },
    { value: 'z balkonem', label: 'Z balkonem' },
    { value: 'apartament', label: 'Apartament' },
    { value: 'standardowe', label: 'Standardowe' }
  ];

  // Function to parse price string to number (e.g., "368 920 zł" -> 368920)
  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/\s+|zł/g, ''), 10);
  };

  // Filtered properties based on search criteria
  const searchedProperties = modifiedProperties.filter((property) => {
    const matchesCity = city === '' || property.location.toLowerCase().includes(city.toLowerCase());
    const matchesType = type === '' || property.type === type;
    const matchesPrice = maxPrice === '' || parsePrice(property.price) <= parseInt(maxPrice, 10);
    return matchesCity && matchesType && matchesPrice;
  });

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Filters are applied via state, no additional action needed here
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Najnowsze oferty</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sprawdź nasze najnowsze propozycje nieruchomości. Każda z nich została starannie wybrana dla naszych klientów.
          </p>
        </div>

        {/* Search Section */}
        <form onSubmit={handleSearch} className="bg-card border rounded-lg p-6 mb-12 shadow-sm max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label htmlFor="city" className="text-sm font-medium text-foreground block">Miejscowość</label>
              <input
                id="city"
                type="text"
                placeholder="Wpisz miasto"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="type" className="text-sm font-medium text-foreground block">Typ nieruchomości</label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {availableTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="maxPrice" className="text-sm font-medium text-foreground block">Maksymalna cena</label>
              <div className="flex">
                <input
                  id="maxPrice"
                  type="text"
                  placeholder="500 000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value.replace(/\s/g, ''))}
                  className="flex-1 px-3 py-2 border border-input rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <span className="bg-muted px-3 py-2 border border-input rounded-r-md text-muted-foreground">zł</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium flex items-center justify-center gap-2 transition-colors md:mt-6"
            >
              <Search className="h-4 w-4" />
              Szukaj
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Kompleksowa obsługa klienta • Najlepsze ceny • Profesjonalna pomoc
          </p>
        </form>

        {/* Results */}
        {searchedProperties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Brak ofert pasujących do kryteriów wyszukiwania.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchedProperties.map((property, index) => (
              <Link
                href={`/oferty/${property.slug}`}
                key={index}
                className="rounded-lg border bg-card text-card-foreground shadow-sm group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 block"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title || 'Property image'}
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

export default MieszkaniaProperties;