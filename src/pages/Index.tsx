
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import PlatformsSection from "@/components/PlatformsSection";
import FaqSection from "@/components/FaqSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="stats">
          <StatsSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="platforms">
          <PlatformsSection />
        </section>
        <section id="testimonials">
          <TestimonialSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="faq">
          <FaqSection />
        </section>
        <section id="cta">
          <CtaSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
