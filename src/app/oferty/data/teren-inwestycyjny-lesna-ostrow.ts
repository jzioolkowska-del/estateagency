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

export const terenInwestycyjnyLesnaOstrow: Offer = {
  slug: "teren-inwestycyjny-lesna-ostrow",
  image: "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/sign/photos/zacharzew-orto1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2I2NjM0YS02NjhiLTQzNTctOTBjZC0yOGE5MjE4MTNjYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvemFjaGFyemV3LW9ydG8xLndlYnAiLCJpYXQiOjE3NTk3Mzk1MTksImV4cCI6MTc5MTI3NTUxOX0.aOQdCrklAHviE_Egw4ZGq_eZpBsaJTWws7AUthUsCiY",
  alt: "Teren inwestycyjny w Zacharzewie",
  type: "Działka",
  price: "1 100 000 zł",
  title: "Teren inwestycyjny – ul. Leśna, gm. Ostrów Wlkp.",
  location: "Zacharzew",
  bedrooms: 0,
  bathrooms: 0,
  area: 5421,
  pricePerM2: "203 zł/m²",
  offerNo: "DZ-003",
  description: `Teren inwestycyjny – Zacharzew, ul. Leśna, gmina Ostrów Wielkopolski
Na sprzedaż atrakcyjna działka inwestycyjna położona w miejscowości Zacharzew, przy ul. Leśnej, w gminie Ostrów Wielkopolski.
Powierzchnia: 5421 m²
Cena: 1 100 000 zł
Nieruchomość doskonale nadaje się pod różne cele inwestycyjne dzięki korzystnej lokalizacji i dostępowi do mediów.`,
  gallery: [
    "https://tacurodzkkmfyjgkzqya.supabase.co/storage/v1/object/sign/photos/zacharzew-orto1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2I2NjM0YS02NjhiLTQzNTctOTBjZC0yOGE5MjE4MTNjYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvemFjaGFyemV3LW9ydG8xLndlYnAiLCJpYXQiOjE3NTk3Mzk1MTksImV4cCI6MTc5MTI3NTUxOX0.aOQdCrklAHviE_Egw4ZGq_eZpBsaJTWws7AUthUsCiY"
  ]
};
