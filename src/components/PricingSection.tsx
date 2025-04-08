
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: "Gratuito",
    price: "R$0",
    description: "Perfeito para quem está começando",
    features: [
      "5 posts por mês",
      "Geração básica de conteúdo",
      "Legendas simples",
      "Download de imagens",
      "Acesso à comunidade"
    ],
    buttonText: "Começar grátis",
    buttonLink: "/cadastro",
    popular: false,
  },
  {
    name: "Pro",
    price: "R$99",
    period: "/mês",
    description: "Para negócios que buscam crescimento",
    features: [
      "Posts ilimitados por mês",
      "Personalização por cor e tom de voz",
      "Upload do seu logo nas imagens",
      "Agendamento com 1 clique",
      "Pacotes para datas comemorativas",
      "Templates premium",
      "IA que aprende seu estilo"
    ],
    buttonText: "Assinar plano Pro",
    buttonLink: "/cadastro",
    popular: true,
  },
  {
    name: "Plus",
    price: "R$149",
    period: "/mês",
    description: "Solução completa para profissionais",
    features: [
      "Tudo do plano Pro",
      "Acesso premium ao marketplace",
      "Geração de vídeos curtos",
      "Relatórios de desempenho",
      "Acesso prioritário a novas features",
      "Suporte premium"
    ],
    buttonText: "Assinar plano Plus",
    buttonLink: "/cadastro",
    popular: false,
    soon: true,
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos <span className="gradient-text">acessíveis</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta às necessidades do seu negócio e comece a criar conteúdo de qualidade hoje mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col h-full ${
                plan.popular ? "border-brand-purple shadow-lg shadow-brand-purple/10" : "border-gray-200"
              } ${plan.soon ? "opacity-80" : ""}`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="flex items-end gap-1 my-3">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-gray-500">{plan.period}</span>}
                    </div>
                  </div>
                  {plan.popular && <Badge className="bg-brand-purple">Popular</Badge>}
                  {plan.soon && <Badge variant="outline">Em breve</Badge>}
                </div>
                <p className="text-gray-500">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90" 
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  disabled={plan.soon}
                >
                  <Link to={plan.buttonLink} className="w-full">
                    {plan.buttonText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
