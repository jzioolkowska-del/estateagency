import { TrendingUp, Scale, Handshake } from 'lucide-react';

const ServicesGrid = () => {
  return (
    <section className="py-16 bg-secondary scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 !whitespace-pre-line">Nasze atuty

          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg text-accent-foreground shadow-sm flex flex-col p-8 !bg-white">
            <div className="bg-accent-foreground/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 shrink-0">
              <TrendingUp className="h-6 w-6 !text-[#f6b37f]" />
            </div>
            <h3 className="font-semibold text-xl mb-4">Profesjonalne Doradztwo</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Dzięki naszemu doświadczeniu i wiedzy rynku nieruchomości, oferujemy fachowe doradztwo w zakresie strategii sprzedaży oraz inwestycji.
            </p>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col p-8">
            <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 shrink-0">
              <Scale className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-xl mb-4 text-foreground">Opieka Prawna</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Weryfikujemy własność nieruchomości, hipoteki, obciążenia osób trzecich oraz komorników, zapewniając pełne wsparcie prawne.
            </p>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col p-8">
            <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 shrink-0">
              <Handshake className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-xl mb-4 text-foreground">Elastyczność i Indywidualne Podejście</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dostosowujemy nasze usługi do Twoich potrzeb, oferując elastyczne rozwiązania i indywidualne podejście do każdej transakcji.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default ServicesGrid;