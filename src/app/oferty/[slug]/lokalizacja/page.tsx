import { notFound } from "next/navigation";
import { findOfferBySlug } from "@/app/oferty/data";
import { MapPin } from "lucide-react";

export default function OfferLocationPage({ params }: { params: { slug: string } }) {
  const offer = findOfferBySlug(params.slug);
  if (!offer) return notFound();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Lokalizacja</h2>
      <div className="rounded-lg border bg-card p-4">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span>{offer.location}</span>
        </div>
        <div className="aspect-video w-full rounded-md bg-muted flex items-center justify-center text-muted-foreground">
          {/* Map placeholder - integrate Google Maps later */}
          <span>Mapa lokalizacji (wkrótce)</span>
        </div>
      </div>
    </div>
  );
}