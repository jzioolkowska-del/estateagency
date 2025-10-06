import { ThumbsUp, ShieldCheck, CircleDollarSign, Plane, Users, Handshake } from "lucide-react";

const features = [
{
  icon: ThumbsUp,
  title: "Kompleksowa Obsługa Nieruchomości",
  description:
  "Jeśli chcesz sprzedać swoją nieruchomość – nie mogłeś trafić lepiej. Doświadczenie pozwoli nam doradzić Ci, jak efektywnie i opłacalnie sprzedać Twoje mieszkanie, dom lub działkę."
},
{
  icon: ShieldCheck,
  title: "Pośrednictwo i bezpieczeństwo transakcji",
  description:
  "Oferujemy sprawdzone i zrozumiałe umowy pośrednictwa oraz sprzedaży, które są zawierane u notariusza, gwarantując bezpieczeństwo transakcji."
},
{
  icon: CircleDollarSign,
  title: "Wycena nieruchomości",
  description:
  "Analizujemy stan wewnętrzny i zewnętrzny nieruchomości, jej lokalizację oraz wyposażenie, aby dostarczyć dokładną wycenę sporządzoną przez zespół fachowców."
},
{
  icon: Plane,
  title: "Usługi dronem",
  description:
  "Oferujemy zdjęcia oraz filmy wysokiej jakości. Posiadamy wszelkie uprawnienia dotyczące wykonywania lotów wymagane przez Urząd Lotnictwa Cywilnego."
},
{
  icon: Users,
  title: "Doradztwo prawne",
  description:
  "Doradzamy we wszelkich formalnościach związanych z transakcją, w tym w kwestiach obciążeń hipotecznych czy prawa własności."
},
{
  icon: Handshake,
  title: "Korzystna sprzedaż",
  description:
  "Aktywnie uczestniczymy w negocjacjach cenowych, doradzamy najlepszą strategię i zabezpieczamy interesy sprzedającego."
}];


const FeaturesSection = () => {
  return (
    <section id="uslugi" className="py-16 !bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-brand-dark-text)] !whitespace-pre-line !whitespace-pre-line">Usługi

        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col p-8">
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 shrink-0">
                  <IconComponent className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>);

          })}
        </div>
      </div>
    </section>);

};

export default FeaturesSection;