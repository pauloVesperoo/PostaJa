
import { Card } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    text: "Em 2 minutos criei conteúdo profissional para a semana inteira. Economizei tempo e dinheiro que gastaria com um designer.",
    author: "Marina Silva",
    role: "Proprietária de Salão de Beleza",
    stars: 5
  },
  {
    text: "Nunca mais precisei me preocupar com o que postar. A IA entende meu tipo de negócio e gera exatamente o que eu preciso.",
    author: "Carlos Oliveira",
    role: "Dono de Restaurante",
    stars: 5
  },
  {
    text: "As legendas são perfeitas para o meu público. Os posts geram muito mais engajamento que os que eu fazia antes.",
    author: "Fernanda Costa",
    role: "Personal Trainer",
    stars: 4
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-gradient-radial from-brand-purple/10 to-brand-blue/5">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos <span className="gradient-text">clientes dizem</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como o ContentAI está ajudando donos de negócios locais a crescerem nas redes sociais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border border-gray-100 hover:border-brand-purple/20 transition-all hover:shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.stars ? "text-yellow-400" : "text-gray-300"}`}
                    fill={i < testimonial.stars ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
