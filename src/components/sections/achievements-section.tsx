import { Award, Star, TrendingUp } from 'lucide-react';
import React from 'react';

const achievementsData = [
{
  icon: TrendingUp,
  value: "500+",
  title: "Sprzedanych nieruchomości",
  description: "W ciągu ostatnich 3 lat"
},
{
  icon: Star,
  value: "4.9/5",
  title: "Ocena klientów",
  description: "Na podstawie 200+ opinii"
},
{
  icon: Award,
  value: "15+",
  title: "Lat doświadczenia",
  description: "W branży nieruchomości"
}];


const AchievementsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center rounded-full border border-transparent bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-semibold mb-4 transition-colors hover:bg-secondary/80 !whitespace-pre-line">

          </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Dlaczego warto nam zaufać?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Liczby mówią same za siebie - to dzięki naszemu doświadczeniu i zaangażowaniu możemy zagwarantować najwyższą jakość usług.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievementsData.map((achievement, index) =>
          <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm text-center group transition-shadow duration-300 hover:shadow-lg">
                            <div className="p-8">
                                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                                    <achievement.icon className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="text-4xl font-bold text-accent mb-2">{achievement.value}</h3>
                                <h4 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h4>
                                <p className="text-muted-foreground text-sm">{achievement.description}</p>
                            </div>
                        </div>
          )}
                </div>
            </div>
        </section>);

};

export default AchievementsSection;