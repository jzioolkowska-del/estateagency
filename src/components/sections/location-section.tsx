import { MapPin } from 'lucide-react';
import Link from 'next/link';

const LocationSection = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-4xl mx-auto">
          <div className="p-8 text-center">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nasza lokalizacja
            </h3>
            <p className="text-muted-foreground mb-4">
              Osiedle Robińskich 7, 63-700 Krotoszyn
            </p>
            <div className="overflow-hidden rounded-md border bg-white shadow-sm">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  title="Mapa Google - PIOTROWSKI NIERUCHOMOŚCI"
                  src={`https://www.google.com/maps?cid=12936575774429207378&output=embed&hl=pl`}
                  loading="lazy"
                  className="absolute left-0 top-0 h-full w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="https://www.google.com/maps?cid=12936575774429207378"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-accent-foreground shadow transition-colors hover:opacity-90"
              >
                Otwórz w Mapach Google
              </Link>
              <Link
                href="https://www.google.com/search?sa=X&sca_esv=2e3a0442facbf014&tbm=lcl&sxsrf=AE3TifPTkEWojRS-IeAbmBxP9sbMcsVKnw:1758807296454&q=PIOTROWSKI+NIERUCHOMO%C5%9ACI+Opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLI0NjM1NzU3NzExsjQyMDc2t9jAyPiKUSHA0z8kyD882NtTwc_TNSjU2cPf1__oLGdPBf-CzLzM1EWsBJUAAKcLlBphAAAA&rldimm=12936575774429207378&hl=pl-PL&ved=2ahUKEwi5sIjhg_SPAxVsFxAIHXL6ElEQ9fQKegQIRxAF&cshid=1758807303892708&biw=1536&bih=730&dpr=1.25#lkt=LocalPoiReviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-accent px-4 py-2 text-accent shadow-sm transition-colors hover:bg-accent/10"
              >
                Zobacz opinie na Google
              </Link>
            </div>
          </div>
        </div>
        {/* trust badges removed as requested */}
      </div>
    </section>
  );
};

export default LocationSection;