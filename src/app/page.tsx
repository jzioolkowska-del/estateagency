import Navigation from '@/components/sections/navigation';
import ContactFormSection from '@/components/sections/contact-form-section';
import Footer from '@/components/sections/footer';
import HeroSection from '@/components/sections/hero-section';
import FeaturedProperties from '@/components/sections/featured-properties';
import FeaturesSection from '@/components/sections/features-section';
import AchievementsSection from '@/components/sections/achievements-section';
import ServicesGrid from '@/components/sections/services-grid';
import ContactInfoSection from '@/components/sections/contact-info-section';
import LocationSection from '@/components/sections/location-section';
import GoogleReviewsSection from '@/components/sections/google-reviews-section';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProperties />
        <FeaturesSection />
        <AchievementsSection />
        <GoogleReviewsSection />
        <ServicesGrid />
        <ContactInfoSection />
        <section id="kontakt">
          <ContactFormSection />
        </section>
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}