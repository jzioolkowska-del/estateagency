import { MapPin, Bed, Bath, Square as SquareIcon } from "lucide-react";
import { lokalUslugowy } from "./data/lokal-uslugowy-kozmin-wlkp";
import { noweMieszkanie4624m2Krotoszyn } from "./data/nowe-mieszkanie-46-24-m2-krotoszyn";
import { nowoczesneMieszkanieWCentrum } from "./data/nowoczesne-mieszkanie-w-centrum";
import { eleganckiApartamentZTarasem } from "./data/elegancki-apartament-z-tarasem";
import { luksusowyPenthouse } from "./data/luksusowy-penthouse";
import { przestrzonneMieszkanieRodzinne } from "./data/przestronne-mieszkanie-rodzinne";
import { stylowyApartamentPrzyParku } from "./data/stylowy-apartament-przy-parku";
import { nowoczesnyLoftWKamienicy } from "./data/nowoczesny-loft-w-kamienicy";
import { dzialkiBudowlanePolnaKrotoszyn } from "./data/dzialki-budowlane-polna-krotoszyn";
import { nieruchomoscGruntowaKozminWlkp } from "./data/nieruchomosc-gruntowa-kozmin-wlkp";
import { terenInwestycyjnyLesnaOstrow } from "./data/teren-inwestycyjny-lesna-ostrow";
import { dzialkaInwestycyjnaOstrowska } from "./data/dzialka-inwestycyjna-ostrowska";
import { dzialkaRekreacyjnaRod } from "./data/dzialka-rekreacyjna-rod";
import { dzialkiBudowlaneRozdrazew } from "./data/dzialki-budowlane-rozdrazew";
import { dzialkiInwestycyjneKozala1 } from "./data/dzialki-inwestycyjne-kozala-1";
import { dzialkiInwestycyjneKozala2 } from "./data/dzialki-inwestycyjne-kozala-2";
import { dzialkaRolnaBudowlanaGorzupska } from "./data/dzialka-rolna-budowlana-gorzupska";

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export type Offer = {
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
  pricePerM2?: string;
  offerNo?: string;
  gallery?: string[];
  coordinates?: { lat: number; lng: number };
  description?: string;
  slug: string;
};

export const properties: Offer[] = [
  lokalUslugowy,
  noweMieszkanie4624m2Krotoszyn,
  nowoczesneMieszkanieWCentrum,
  eleganckiApartamentZTarasem,
  luksusowyPenthouse,
  przestrzonneMieszkanieRodzinne,
  stylowyApartamentPrzyParku,
  nowoczesnyLoftWKamienicy,
  dzialkiBudowlanePolnaKrotoszyn,
  nieruchomoscGruntowaKozminWlkp,
  terenInwestycyjnyLesnaOstrow,
  dzialkaInwestycyjnaOstrowska,
  dzialkaRekreacyjnaRod,
  dzialkiBudowlaneRozdrazew,
  dzialkiInwestycyjneKozala1,
  dzialkiInwestycyjneKozala2,
  dzialkaRolnaBudowlanaGorzupska
];

export const findOfferBySlug = (slug: string) =>
  properties.find((p) => p.slug === slug);
