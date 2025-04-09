
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-r from-brand-purple to-brand-blue text-white">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para revolucionar o conteúdo do seu negócio?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Comece hoje mesmo a economizar tempo e criar conteúdo de qualidade com a ajuda da nossa IA.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-brand-purple hover:bg-white/90"
            onClick={scrollToPricing}
          >
            <span className="flex items-center gap-2">
              Ver planos <ArrowRight size={16} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
