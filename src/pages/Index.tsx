
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

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
        <section id="demo">
          <DemoSection />
        </section>
        <section id="testimonials">
          <TestimonialSection />
        </section>
        <section id="pricing">
          <PricingSection />
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
