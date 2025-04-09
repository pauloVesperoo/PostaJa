
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const PricingSection = () => {
  const { t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const features = [
    "Posts ilimitados por mês",
    "Personalização por cor e tom de voz",
    "Upload do seu logo nas imagens",
    "Agendamento com 1 clique",
    "Pacotes para datas comemorativas",
    "Templates premium",
    "IA que aprende seu estilo",
    "Suporte prioritário",
    "Acesso a todas as plataformas"
  ];
  
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('pricing', 'title')} <span className="gradient-text">{t('pricing', 'highlight')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta às necessidades do seu negócio.
          </p>
          
          <div className="flex items-center justify-center space-x-3 mt-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg ${
                billingCycle === 'monthly'
                  ? 'bg-brand-purple text-white'
                  : 'bg-gray-100 text-gray-700'
              } transition-colors`}
            >
              {t('pricing', 'monthly')}
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-lg relative ${
                billingCycle === 'yearly'
                  ? 'bg-brand-purple text-white'
                  : 'bg-gray-100 text-gray-700'
              } transition-colors`}
            >
              {t('pricing', 'yearly')}
              <Badge className="absolute -top-3 -right-3 bg-green-500">{t('pricing', 'yearDiscount')}</Badge>
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-md border-brand-purple shadow-lg shadow-brand-purple/10">
            <CardHeader>
              <div>
                <h3 className="text-2xl font-bold">PostaJá Pro</h3>
                <div className="flex items-end gap-1 my-3">
                  {billingCycle === 'monthly' ? (
                    <>
                      <span className="text-4xl font-bold">{t('pricing', 'monthlyPrice')}</span>
                      <span className="text-gray-500">{t('pricing', 'perMonth')}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">{t('pricing', 'yearlyPrice')}</span>
                      <span className="text-gray-500">{t('pricing', 'perYear')}</span>
                    </>
                  )}
                </div>
                <p className="text-gray-600">
                  {billingCycle === 'monthly' 
                    ? t('pricing', 'monthlyDescription')
                    : t('pricing', 'yearlyDescription')
                  }
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90"
              >
                {t('pricing', 'subscribe')}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
