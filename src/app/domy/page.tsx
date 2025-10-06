import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

export default function DomyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto flex-1 px-4 py-10">
        <h1 className="text-4xl font-bold text-foreground">Domy</h1>
        <p className="mt-3 text-muted-foreground">
          Przeglądaj dostępne domy w naszej ofercie. Wkrótce pojawi się tutaj pełna lista ofert.
        </p>
        <div className="mt-6 rounded-lg border border-border bg-secondary p-4">
          <p className="font-medium text-foreground">Aktualnie brak ofert domów.</p>
          <p className="mt-1 text-muted-foreground">Zajrzyj do nas wkrótce lub skontaktuj się z nami, a pomożemy znaleźć odpowiednią nieruchomość.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}