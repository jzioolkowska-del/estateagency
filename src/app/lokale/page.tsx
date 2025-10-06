import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import LokaleProperties from "@/components/sections/lokale-properties";
import { Suspense } from "react";

export default function LokalePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto flex-1 px-4 py-10">
        <h1 className="text-4xl font-bold text-foreground">Lokale</h1>
        <p className="mt-3 text-muted-foreground">
          Przeglądaj dostępne lokale użytkowe w naszej ofercie. Wkrótce pojawi się tutaj pełna lista ofert.
        </p>
        <div className="mt-8">
          <Suspense fallback={<div className="text-center py-12 text-muted-foreground">Ładowanie ofert...</div>}>
            <LokaleProperties />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}