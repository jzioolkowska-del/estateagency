import Image from "next/image";
import { notFound } from "next/navigation";
import { findOfferBySlug } from "@/app/oferty/data";

export default async function OfferGalleryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offer = findOfferBySlug(slug);
  if (!offer) return notFound();

  const images = offer.gallery && offer.gallery.length > 0
    ? offer.gallery
    : [offer.image, offer.image, offer.image, offer.image, offer.image, offer.image];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Galeria</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div key={i} className="relative aspect-video rounded-md overflow-hidden border bg-card">
            <Image src={src} alt={`${offer.alt} ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
