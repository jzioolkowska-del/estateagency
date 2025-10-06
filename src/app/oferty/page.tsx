import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import FeaturedProperties from "@/components/sections/featured-properties";
import Link from "next/link";

export default function OffersIndexPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto flex-1 px-4 py-10">
        <div className="mb-4 text-sm text-muted-foreground">
          <Link href="/">Strona główna</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">Nieruchomości</span>
        </div>
        <h1 className="text-4xl font-bold text-foreground">Wszystkie oferty</h1>
        <p className="mt-3 text-muted-foreground">
          Przeglądaj najnowsze oferty nieruchomości. Kliknij kartę, aby zobaczyć szczegóły, galerię i lokalizację.
        </p>
        <div className="mt-8">
          <FeaturedProperties />
        </div>
      </main>
      <Footer />
    </div>
  );
}