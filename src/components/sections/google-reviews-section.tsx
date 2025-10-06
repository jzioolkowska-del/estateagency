import Link from "next/link";

// Server Component: Google Reviews embed for PIOTROWSKI NIERUCHOMOŚCI
// Uses Google Maps place CID to show the business panel with reviews accessible.
// Note: This is a simple embed without API keys. Clicking "Zobacz wszystkie opinie" opens full reviews on Google.

const GOOGLE_CID = "12936575774429207378"; // from rldimm param in user's link
const REVIEWS_URL =
  "https://www.google.com/search?sa=X&sca_esv=2e3a0442facbf014&tbm=lcl&sxsrf=AE3TifPTkEWojRS-IeAbmBxP9sbMcsVKnw:1758807296454&q=PIOTROWSKI+NIERUCHOMO%C5%9ACI+Opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLI0NjM1NzU3NzExsjQyMDc2t9jAyPiKUSHA0z8kyD882NtTwc_TNSjU2cPf1__oLGdPBf-CzLzM1EWsBJUAAKcLlBphAAAA&rldimm=12936575774429207378&hl=pl-PL&ved=2ahUKEwi5sIjhg_SPAxVsFxAIHXL6ElEQ9fQKegQIRxAF&cshid=1758807303892708&biw=1536&bih=730&dpr=1.25#lkt=LocalPoiReviews";

export default function GoogleReviewsSection() {
  const mapsEmbedSrc = `https://www.google.com/maps?cid=${GOOGLE_CID}&output=embed&hl=pl`;

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">Opinie klientów</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Sprawdź, co mówią o nas klienci w Google. Dbamy o transparentność i
              najwyższą jakość obsługi.
            </p>
          </div>
          <Link
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-accent-foreground shadow transition-colors hover:opacity-90"
          >
            Zobacz wszystkie opinie
          </Link>
        </div>

        {/* Map moved to Nasza lokalizacja section */}
      </div>
    </section>
  );
}