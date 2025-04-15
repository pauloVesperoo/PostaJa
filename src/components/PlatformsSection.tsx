
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const PlatformsSection = () => {
  const { t } = useLanguage();
  
  const platforms = [
    {
      icon: <Instagram className="text-pink-600 h-8 w-8" />,
      name: "Instagram",
      description: t('platforms', 'instagram')
    },
    {
      icon: <Facebook className="text-blue-600 h-8 w-8" />,
      name: "Facebook",
      description: t('platforms', 'facebook')
    },
    {
      icon: <Twitter className="text-blue-400 h-8 w-8" />,
      name: "X (Twitter)",
      description: t('platforms', 'twitter')
    },
    {
      icon: <Linkedin className="text-blue-700 h-8 w-8" />,
      name: "LinkedIn",
      description: t('platforms', 'linkedin')
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="platforms">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('platforms', 'title')} <span className="gradient-text">sociais</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('platforms', 'subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <Card key={index} className="p-6 border border-gray-100 hover:border-brand-purple/20 transition-all hover:shadow-md">
              <div className="h-14 w-14 rounded-lg bg-gray-100 flex items-center justify-center mb-5">
                {platform.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
              <p className="text-gray-600">{platform.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
