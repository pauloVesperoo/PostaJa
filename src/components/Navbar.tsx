
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            Recursos
          </button>
          <button 
            onClick={() => scrollToSection('platforms')} 
            className="text-gray-700 hover:text-brand-purple transition-colors"
          >
            Plataformas
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-gray-700 hover:text-brand-purple transition-colors"
          >
            Preços
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-gray-700 hover:text-brand-purple transition-colors"
          >
            FAQ
          </button>
          
          <Link to="/dashboard">
            <Button className="bg-brand-purple hover:bg-brand-purple/90">
              Dashboard
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-2">
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
            Início
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-700 hover:text-brand-purple transition-colors py-2 border-b text-left"
          >
            Recursos
          </button>
          <button 
            onClick={() => scrollToSection('platforms')} 
            className="text-gray-700 hover:text-brand-purple transition-colors py-2 border-b text-left"
          >
            Plataformas
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-gray-700 hover:text-brand-purple transition-colors py-2 border-b text-left"
          >
            Preços
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-gray-700 hover:text-brand-purple transition-colors py-2 border-b text-left"
          >
            FAQ
          </button>
          <Link 
            to="/dashboard"
            className="text-brand-purple hover:text-brand-purple/90 py-2 text-left font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
