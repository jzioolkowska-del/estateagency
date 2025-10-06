import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import MieszkaniaProperties from "@/components/sections/mieszkania-properties";

export default function MieszkaniaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto flex-1 px-4 py-10">
        <h1 className="text-4xl font-bold text-foreground">Mieszkania</h1>
        <p className="mt-3 text-muted-foreground">
          Przeglądaj dostępne mieszkania w naszej ofercie. Wkrótce pojawi się tutaj pełna lista ofert.
        </p>
        <div className="mt-8">
          <MieszkaniaProperties />
        </div>
      </main>
      <Footer />
    </div>
  );
}