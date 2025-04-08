
import { ArrowUpIcon, CalendarDaysIcon, ClockIcon } from 'lucide-react';

const stats = [
  {
    icon: <ClockIcon className="h-8 w-8 text-brand-purple" />,
    value: "82%",
    label: "economia de tempo",
    description: "Crie conteúdo em minutos, não em horas"
  },
  {
    icon: <ArrowUpIcon className="h-8 w-8 text-brand-purple" />,
    value: "47%",
    label: "mais engajamento",
    description: "Conteúdo otimizado para seu público"
  },
  {
    icon: <CalendarDaysIcon className="h-8 w-8 text-brand-purple" />,
    value: "30+",
    label: "posts/mês",
    description: "Posts ilimitados no plano Pro"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-brand-purple/10 mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-brand-purple mb-2">{stat.value}</div>
              <div className="text-lg font-medium mb-2">{stat.label}</div>
              <div className="text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
