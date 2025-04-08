
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define our translation content
type Translations = {
  [key: string]: {
    nav: {
      home: string;
      features: string;
      pricing: string;
      login: string;
      startFree: string;
    };
    hero: {
      badge: string;
      title: string;
      titleHighlight: string;
      description: string;
      startFree: string;
      demo: string;
      businesses: string;
    };
  };
};

// Available languages
export type Language = 'pt-BR' | 'en-US' | 'es-ES';

// Translations dictionary
const translations: Translations = {
  'pt-BR': {
    nav: {
      home: 'Início',
      features: 'Recursos',
      pricing: 'Preços',
      login: 'Login',
      startFree: 'Comece Grátis',
    },
    hero: {
      badge: 'Ferramenta de IA para redes sociais',
      title: 'Seu conteúdo de Instagram pronto em',
      titleHighlight: '2 minutos',
      description: 'Para donos de negócios locais que não têm tempo. Gere ideias, artes e legendas com IA e agende postagens com um clique.',
      startFree: 'Comece de graça',
      demo: 'Ver demonstração',
      businesses: 'negócios locais aprovam',
    },
  },
  'en-US': {
    nav: {
      home: 'Home',
      features: 'Features',
      pricing: 'Pricing',
      login: 'Login',
      startFree: 'Start Free',
    },
    hero: {
      badge: 'AI Tool for Social Media',
      title: 'Your Instagram content ready in',
      titleHighlight: '2 minutes',
      description: 'For local business owners who don\'t have time. Generate ideas, designs, and captions with AI and schedule posts with one click.',
      startFree: 'Start for free',
      demo: 'See demo',
      businesses: 'local businesses approve',
    },
  },
  'es-ES': {
    nav: {
      home: 'Inicio',
      features: 'Funciones',
      pricing: 'Precios',
      login: 'Iniciar sesión',
      startFree: 'Empezar gratis',
    },
    hero: {
      badge: 'Herramienta de IA para redes sociales',
      title: 'Tu contenido de Instagram listo en',
      titleHighlight: '2 minutos',
      description: 'Para dueños de negocios locales que no tienen tiempo. Genera ideas, diseños y descripciones con IA y programa publicaciones con un clic.',
      startFree: 'Comienza gratis',
      demo: 'Ver demostración',
      businesses: 'negocios locales lo aprueban',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (section: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

  // Translation function
  const t = (section: string, key: string): string => {
    if (!translations[language]) return '';
    return translations[language][section]?.[key] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
