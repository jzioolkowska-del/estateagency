'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactInfoSection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-foreground">Jak jeszcze możemy Ci pomóc?</h2>
            <p className="text-muted-foreground mb-8">
              Nasz doświadczony zespół ekspertów nieruchomości jest gotowy, aby pomóc Ci znaleźć idealną nieruchomość lub sprzedać Twoją obecną.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Telefon</h3>
                  <p className="text-muted-foreground">+48 698 474 320</p>
                  <p className="text-muted-foreground text-sm">Pon-Pt 8:00-20:00 • Sob 8:00-14:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">biuro@piotrowski-krotoszyn.pl</p>
                  <p className="text-muted-foreground text-sm !whitespace-pre-line"></p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Biuro</h3>
                  <p className="text-muted-foreground">Osiedle Robińskich 7, 63-700 Krotoszyn</p>
                  <p className="text-muted-foreground text-sm">Pon-Pt: 8:00-20:00</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="mt-8 px-8 h-11 !whitespace-pre-line !whitespace-pre-line" onClick={scrollToContact}>Skontaktuj się z nami

            </Button>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/87babdff-4b6e-4481-a55f-eb7c1dc5d9ad/visual-edit-uploads/1759587394656-0osxnvjyfu7.webp"
                alt=""
                width={582}
                height={388}
                className="w-full h-auto object-cover" />

              <div className="bg-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3 !whitespace-pre-line !whitespace-pre-line"></h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 !whitespace-pre-line">

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ContactInfoSection;