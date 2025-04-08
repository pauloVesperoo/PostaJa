
import { CalendarDays, Image, Instagram, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: <Image className="text-brand-purple h-8 w-8" />,
    title: "Geração de conteúdo com IA",
    description: "Nossa IA cria posts completos com imagens, legendas e hashtags baseados no seu tipo de negócio."
  },
  {
    icon: <Instagram className="text-brand-purple h-8 w-8" />,
    title: "Agendamento direto para Instagram",
    description: "Agende suas publicações ou faça download dos arquivos prontos para postar quando quiser."
  },
  {
    icon: <CalendarDays className="text-brand-purple h-8 w-8" />,
    title: "Calendário de conteúdo inteligente",
    description: "Sugestões automáticas para datas comemorativas e eventos relevantes para o seu negócio."
  },
  {
    icon: <Zap className="text-brand-purple h-8 w-8" />,
    title: "Integração com freelancers",
    description: "Acesse nosso marketplace e contrate profissionais para personalizar ainda mais seu conteúdo."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos <span className="gradient-text">principais</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para criar conteúdo de qualidade sem esforço e manter suas redes sociais sempre atualizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border border-gray-100 hover:border-brand-purple/20 transition-all hover:shadow-md">
              <div className="h-14 w-14 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
