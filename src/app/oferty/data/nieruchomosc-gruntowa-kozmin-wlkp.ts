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

export const nieruchomoscGruntowaKozminWlkp: Offer = {
  slug: "nieruchomosc-gruntowa-kozmin-wlkp",
  image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/sign/photos/ink1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2I2NjM0YS02NjhiLTQzNTctOTBjZC0yOGE5MjE4MTNjYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvaW5rMS53ZWJwIiwiaWF0IjoxNzU5NzM5MzkwLCJleHAiOjE3OTEyNzUzOTB9.UqW9lFWtkZF-mZHt2RkA6RPdUm8QXALXLOQliEmcoPs",
  alt: "Nieruchomość gruntowa z zabudowaniami",
  type: "Działka",
  price: "1 100 000 zł",
  title: "Nieruchomość gruntowa z zabudowaniami, gm. Koźmin Wlkp.",
  location: "Czarny Sad",
  bedrooms: 0,
  bathrooms: 0,
  area: 5500,
  pricePerM2: "200 zł/m²",
  offerNo: "DZ-002",
  description: `Na sprzedaż nieruchomość gruntowa z zabudowaniami – Czarny Sad, gmina Koźmin Wielkopolski
Przedmiotem sprzedaży jest działka o numerze ewidencyjnym 84, położona w miejscowości Czarny Sad, gmina Koźmin Wielkopolski.
📌 Parametry nieruchomości:
powierzchnia gruntu: 0,5500 ha (5500 m²),
zabudowa: 2 budynki mieszkalne oraz 3 budynki gospodarcze,
dojazd bezpośrednio z drogi asfaltowej,
działka częściowo ogrodzona,
spokojna lokalizacja z dogodnym dostępem do Koźmina Wielkopolskiego i okolicznych miejscowości.
💰 Cena: 398 000 zł
Nieruchomość daje szerokie możliwości wykorzystania – zarówno jako teren inwestycyjny, gospodarstwo, jak i miejsce do zamieszkania z zabudową gospodarczą.`,
  gallery: [
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/sign/photos/ink1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2I2NjM0YS02NjhiLTQzNTctOTBjZC0yOGE5MjE4MTNjYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvaW5rMS53ZWJwIiwiaWF0IjoxNzU5NzM5MzkwLCJleHAiOjE3OTEyNzUzOTB9.UqW9lFWtkZF-mZHt2RkA6RPdUm8QXALXLOQliEmcoPs",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/photos/ink2.webp",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/photos/ink%203.webp",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/photos/ink%204.webp",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/photos/ink%205.webp",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/photos/ink%206.webp",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/photos/ink%207.webp",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/photos/ink%208.webp",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/photos/ink%209.webp",
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/public/photos/ink10.webp"
  ]
};
