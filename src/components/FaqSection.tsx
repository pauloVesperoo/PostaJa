
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: "O que é o PostaJá?",
      answer: "O PostaJá é uma plataforma de criação de conteúdo para redes sociais baseada em IA que permite gerar ideias, imagens e legendas para suas postagens de forma rápida e eficiente."
    },
    {
      question: "Como funciona a assinatura?",
      answer: "Oferecemos dois planos de assinatura: mensal por R$49,90/mês ou anual por R$479,90/ano (economia de 20%). Ambos dão acesso completo a todas as funcionalidades da plataforma."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento. Se cancelar uma assinatura anual, você manterá acesso até o final do período pago."
    },
    {
      question: "Quais redes sociais são suportadas?",
      answer: "Atualmente suportamos Instagram, Facebook, Twitter (X) e LinkedIn. Estamos constantemente adicionando suporte a novas plataformas."
    },
    {
      question: "Os posts são totalmente personalizáveis?",
      answer: "Sim! Você pode personalizar cores, fontes, logos e todo o conteúdo que a IA gera para que se alinhe perfeitamente com a identidade visual do seu negócio."
    },
    {
      question: "Preciso de conhecimento em design?",
      answer: "Não! O PostaJá foi criado justamente para que você não precise de conhecimentos avançados em design. Nossa IA cuida de tudo para você."
    }
  ];
  
  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('faq', 'title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('faq', 'subtitle')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
