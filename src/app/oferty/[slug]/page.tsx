import Image from "next/image";
import { MapPin, Bed, Bath, Square as SquareIcon, Phone, Mail } from "lucide-react";
import { notFound } from "next/navigation";
import { findOfferBySlug } from "@/app/oferty/data";
import PrintToPdfButton from "@/components/offer/print-to-pdf-button";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Gallery } from "@/components/offer/gallery";

export default async function OfferDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offer = findOfferBySlug(slug);
  if (!offer) return notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto flex-1 px-4 py-10">
        <div className="mb-4 flex items-center justify-end">
          <PrintToPdfButton fileName={`${offer.offerNo}.pdf`} slug={slug} targetId="offer-pdf" />
        </div>
        <div id="offer-pdf" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column: info */}
          <section className="lg:col-span-5 space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
                {offer.title}
              </h1>
              <p className="mt-2 text-xl text-foreground">
                Cena: <span className="font-bold text-primary">{offer.price}</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-lg border bg-card p-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Miejscowość</p>
                <p className="font-medium">{offer.location}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Rodzaj oferty</p>
                <p className="font-medium lowercase first-letter:uppercase">{offer.type}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Powierzchnia</p>
                <p className="font-medium">{offer.area} m²</p>
              </div>
              {offer.bedrooms > 0 &&
              <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Sypialnie</p>
                  <p className="font-medium">{offer.bedrooms}</p>
                </div>
              }
              {offer.floor !== undefined &&
              <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Piętro</p>
                  <p className="font-medium">{offer.floor}</p>
                </div>
              }
              {offer.pricePerM2 &&
              <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Cena za m²</p>
                  <p className="font-medium">{offer.pricePerM2}</p>
                </div>
              }
              {offer.bathrooms > 0 &&
              <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Łazienki</p>
                  <p className="font-medium">{offer.bathrooms}</p>
                </div>
              }
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Numer oferty</p>
                <p className="font-medium">{offer.offerNo}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+48698474320"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground shadow hover:opacity-90 transition">

                <Phone className="h-4 w-4" /> ZADZWOŃ: 698 474 320
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-foreground hover:bg-muted transition">

                <Mail className="h-4 w-4" /> WYŚLIJ WIADOMOŚĆ
              </a>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold mb-2">Opis</h3>
              {offer.description ?
              <div className="text-muted-foreground text-sm whitespace-pre-line">
                  {offer.description}
                </div> :

              <p className="text-muted-foreground text-sm !whitespace-pre-line">


              </p>
              }
            </div>
          </section>

          {/* Right column: gallery */}
          <section className="lg:col-span-7">
            <Gallery
              images={offer.gallery && offer.gallery.length > 0 ? offer.gallery : [offer.image]}
              alt={offer.alt} />


            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {offer.location}</div>
              {offer.bedrooms > 0 && <div className="flex items-center gap-2"><Bed className="h-4 w-4" /> {offer.bedrooms} pokoje</div>}
              {offer.bathrooms > 0 && <div className="flex items-center gap-2"><Bath className="h-4 w-4" /> {offer.bathrooms} łazienki</div>}
              <div className="flex items-center gap-2"><SquareIcon className="h-4 w-4" /> {offer.area} m²</div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
