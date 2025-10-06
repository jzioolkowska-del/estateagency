import { Suspense } from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import DzialkiProperties from "@/components/sections/dzialki-properties";

export default function DzialkiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto flex-1 px-4 py-10">
        <h1 className="text-4xl font-bold text-foreground">Działki</h1>
        <p className="mt-3 text-muted-foreground">
          Przeglądaj dostępne działki w naszej ofercie. Wkrótce pojawi się tutaj pełna lista ofert.
        </p>
        <div className="mt-8">
          <Suspense fallback={<div className="text-center py-8">Ładowanie ofert...</div>}>
            <DzialkiProperties />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}