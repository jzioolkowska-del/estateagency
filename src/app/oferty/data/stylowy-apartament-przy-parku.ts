// Temporary inline type definition - remove once src/app/oferty/types.ts is created
type Offer = {
  slug: string;
  image: string;
  alt: string;
  type: string;
  price: string;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  floor?: number;
  pricePerM2: string;
  offerNo: string;
  description: string;
  gallery: string[];
};

export const stylowyApartamentPrzyParku: Offer = {
  slug: "stylowy-apartament-przy-parku",
  image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/Mieskania/MPKR_02_PE-1-scaled.webp",
  alt: "Nowe mieszkanie z ogródkiem – os. Robińskich 8, Krotoszyn",
  type: "Mieszkanie",
  price: "424 880 zł",
  title: "Nowe mieszkanie z ogródkiem – os. Robińskich 8, Krotoszyn",
  location: "Krotoszyn",
  bedrooms: 2,
  bathrooms: 1,
  area: 53.11,
  floor: 0,
  pricePerM2: "8 000 zł/m²",
  offerNo: "NR-003579",
  gallery: [
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/Mieskania/MPKR_02_PE-1-scaled.webp",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/Mieskania/dji_fly_20250718_180302_70_1752854604672_photo_optimized-1-scaled%20(1).webp",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/Mieskania/dji_fly_20250531_143744_47_1748695393888_photo_optimized-1-scaled.webp",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/Mieskania/dji_fly_20250531_143858_48_1748695390147_photo_optimized-1-scaled.webp",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/Mieskania/rob-1-1-scaled.webp",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/Mieskania/rzut-projekt-scaled.webp"
  ],
  description: `Na sprzedaż atrakcyjne mieszkanie o powierzchni 53,11 m² zlokalizowane na parterze nowoczesnego budynku deweloperskiego na zamkniętym i monitorowanym osiedlu w Krotoszynie.
Układ mieszkania:
salon z aneksem kuchennym – przestronny i jasny, z wyjściem do ogródka,
2 sypialnie, idealne dla rodziny lub jako dodatkowy pokój do pracy,
łazienka,
korytarz z miejscem na szafę w zabudowie.
Atuty nieruchomości:
ogród o powierzchni 91 m² – ogrodzony siatką, pięknie nasłonechniony, idealny na relaks i spotkania na świeżym powietrzu,
winda w budynku,
darmowy parking dla mieszkańców,
skrytki lokatorskie,
plac zabaw dla dzieci,
monitoring oraz zamknięty teren osiedla zapewniający bezpieczeństwo i komfort.
Mieszkanie zostanie oddane do użytku latem 2026 roku.
To doskonała propozycja dla osób szukających komfortu nowoczesnego mieszkania z dużym ogrodem w spokojnej i dobrze skomunikowanej części Krotoszyna.`
};
