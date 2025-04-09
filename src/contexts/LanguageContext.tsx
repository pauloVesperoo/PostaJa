
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define our translation content
type Translations = {
  [key: string]: {
    nav: {
      home: string;
      features: string;
      pricing: string;
      platforms: string;
      faq: string;
    };
    hero: {
      badge: string;
      title: string;
      titleHighlight: string;
      description: string;
    };
    pricing: {
      title: string;
      highlight: string;
      monthly: string;
      yearly: string;
      monthlyPrice: string;
      yearlyPrice: string;
      perMonth: string;
      perYear: string;
      monthlyDescription: string;
      yearlyDescription: string;
      subscribe: string;
      yearDiscount: string;
    };
    platforms: {
      title: string;
      subtitle: string;
      instagram: string;
      facebook: string;
      twitter: string;
      linkedin: string;
    };
    faq: {
      title: string;
      subtitle: string;
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
      platforms: 'Plataformas',
      faq: 'FAQ',
    },
    hero: {
      badge: 'Ferramenta de IA para redes sociais',
      title: 'Seu conteúdo para redes sociais pronto em',
      titleHighlight: '2 minutos',
      description: 'Para donos de negócios locais que não têm tempo. Gere ideias, artes e legendas com IA e agende postagens com um clique.',
    },
    pricing: {
      title: 'Planos',
      highlight: 'acessíveis',
      monthly: 'Mensal',
      yearly: 'Anual',
      monthlyPrice: 'R$49,90',
      yearlyPrice: 'R$479,90',
      perMonth: '/mês',
      perYear: '/ano',
      monthlyDescription: 'Pague mensalmente e tenha acesso a todas as funcionalidades',
      yearlyDescription: 'Economize 2 meses pagando anualmente',
      subscribe: 'Assinar agora',
      yearDiscount: 'Economize 20%',
    },
    platforms: {
      title: 'Plataformas',
      subtitle: 'Compatível com as principais redes sociais',
      instagram: 'Crie posts atrativos para Instagram com templates otimizados',
      facebook: 'Alcance seu público no Facebook com conteúdo personalizado',
      twitter: 'Tweets rápidos e relevantes para X (Twitter)',
      linkedin: 'Conteúdo profissional para sua presença no LinkedIn',
    },
    faq: {
      title: 'Perguntas frequentes',
      subtitle: 'Respostas para as dúvidas mais comuns sobre o PostaJá',
    }
  },
  'en-US': {
    nav: {
      home: 'Home',
      features: 'Features',
      pricing: 'Pricing',
      platforms: 'Platforms',
      faq: 'FAQ',
    },
    hero: {
      badge: 'AI Tool for Social Media',
      title: 'Your social media content ready in',
      titleHighlight: '2 minutes',
      description: 'For local business owners who don\'t have time. Generate ideas, designs, and captions with AI and schedule posts with one click.',
    },
    pricing: {
      title: 'Affordable',
      highlight: 'plans',
      monthly: 'Monthly',
      yearly: 'Yearly',
      monthlyPrice: '$9.99',
      yearlyPrice: '$95.90',
      perMonth: '/month',
      perYear: '/year',
      monthlyDescription: 'Pay monthly and get access to all features',
      yearlyDescription: 'Save 2 months by paying yearly',
      subscribe: 'Subscribe now',
      yearDiscount: 'Save 20%',
    },
    platforms: {
      title: 'Platforms',
      subtitle: 'Compatible with major social networks',
      instagram: 'Create attractive Instagram posts with optimized templates',
      facebook: 'Reach your audience on Facebook with customized content',
      twitter: 'Quick and relevant tweets for X (Twitter)',
      linkedin: 'Professional content for your LinkedIn presence',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to common questions about PostaJá',
    }
  },
  'es-ES': {
    nav: {
      home: 'Inicio',
      features: 'Funciones',
      pricing: 'Precios',
      platforms: 'Plataformas',
      faq: 'Preguntas',
    },
    hero: {
      badge: 'Herramienta de IA para redes sociales',
      title: 'Tu contenido para redes sociales listo en',
      titleHighlight: '2 minutos',
      description: 'Para dueños de negocios locales que no tienen tiempo. Genera ideas, diseños y descripciones con IA y programa publicaciones con un clic.',
    },
    pricing: {
      title: 'Planes',
      highlight: 'accesibles',
      monthly: 'Mensual',
      yearly: 'Anual',
      monthlyPrice: '€9.99',
      yearlyPrice: '€95.90',
      perMonth: '/mes',
      perYear: '/año',
      monthlyDescription: 'Paga mensualmente y obtén acceso a todas las funciones',
      yearlyDescription: 'Ahorra 2 meses pagando anualmente',
      subscribe: 'Suscríbete ahora',
      yearDiscount: 'Ahorra 20%',
    },
    platforms: {
      title: 'Plataformas',
      subtitle: 'Compatible con las principales redes sociales',
      instagram: 'Crea publicaciones atractivas para Instagram con plantillas optimizadas',
      facebook: 'Llega a tu audiencia en Facebook con contenido personalizado',
      twitter: 'Tweets rápidos y relevantes para X (Twitter)',
      linkedin: 'Contenido profesional para tu presencia en LinkedIn',
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle: 'Respuestas a preguntas comunes sobre PostaJá',
    }
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
