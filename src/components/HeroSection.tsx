
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gradient-radial from-brand-purple/10 to-brand-blue/5 pt-28 pb-16">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
              </span>
              {t('hero', 'badge')}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero', 'title')} <span className="gradient-text">{t('hero', 'titleHighlight')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              {t('hero', 'description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white font-medium">
                <Link to="/cadastro" className="flex items-center gap-2">
                  {t('hero', 'startFree')} <ArrowRight size={16} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/5">
                <Link to="/demo">{t('hero', 'demo')}</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs border-2 border-white">
                  😍
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs border-2 border-white">
                  🚀
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs border-2 border-white">
                  💯
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-brand-purple">500+</span> {t('hero', 'businesses')}
              </p>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl"></div>
            
            <div className="p-4 bg-white rounded-2xl shadow-lg relative">
              <img 
                src={heroImage} 
                alt="Interface da plataforma ContentAI" 
                className="w-full h-auto rounded-lg shadow-sm object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/600x400/e9d5ff/a855f7?text=ContentAI+Interface';
                }}
              />
              
              <div className="absolute -bottom-5 -right-5 bg-white rounded-lg p-3 shadow-lg">
                <div className="text-sm font-medium text-gray-800">Tempo para criar conteúdo</div>
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-bold text-brand-purple">-82%</span>
                  <span className="text-green-500 text-sm">mais rápido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
