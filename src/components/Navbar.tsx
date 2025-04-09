
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const getFlagEmoji = (lang: Language): string => {
    switch (lang) {
      case 'pt-BR':
        return '🇧🇷';
      case 'en-US':
        return '🇺🇸';
      case 'es-ES':
        return '🇪🇸';
      default:
        return '';
    }
  };

  return (
    <nav className="py-4 px-6 md:px-12 w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" onClick={() => scrollToSection('hero')} className="flex items-center">
            <span className="text-xl md:text-2xl font-bold gradient-text">PostaJá</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-700 hover:text-brand-purple transition-colors"
          >
            {t('nav', 'features')}
          </button>
          <button 
            onClick={() => scrollToSection('platforms')} 
            className="text-gray-700 hover:text-brand-purple transition-colors"
          >
            {t('nav', 'platforms')}
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-gray-700 hover:text-brand-purple transition-colors"
          >
            {t('nav', 'pricing')}
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-gray-700 hover:text-brand-purple transition-colors"
          >
            {t('nav', 'faq')}
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                {getFlagEmoji(language)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange('pt-BR')} className="cursor-pointer">
                <span className="mr-2">🇧🇷</span> Português
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('en-US')} className="cursor-pointer">
                <span className="mr-2">🇺🇸</span> English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('es-ES')} className="cursor-pointer">
                <span className="mr-2">🇪🇸</span> Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                {getFlagEmoji(language)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange('pt-BR')} className="cursor-pointer">
                <span className="mr-2">🇧🇷</span> Português
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('en-US')} className="cursor-pointer">
                <span className="mr-2">🇺🇸</span> English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('es-ES')} className="cursor-pointer">
                <span className="mr-2">🇪🇸</span> Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white p-6 shadow-lg z-40 flex flex-col gap-4 animate-fade-in">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-gray-700 hover:text-brand-purple transition-colors py-2 border-b text-left"
          >
            {t('nav', 'home')}
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-700 hover:text-brand-purple transition-colors py-2 border-b text-left"
          >
            {t('nav', 'features')}
          </button>
          <button 
            onClick={() => scrollToSection('platforms')} 
            className="text-gray-700 hover:text-brand-purple transition-colors py-2 border-b text-left"
          >
            {t('nav', 'platforms')}
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-gray-700 hover:text-brand-purple transition-colors py-2 border-b text-left"
          >
            {t('nav', 'pricing')}
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-gray-700 hover:text-brand-purple transition-colors py-2 border-b text-left"
          >
            {t('nav', 'faq')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
