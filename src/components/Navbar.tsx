
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-12 w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold gradient-text">ContentAI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-brand-purple transition-colors">
            Início
          </Link>
          <Link to="/recursos" className="text-gray-700 hover:text-brand-purple transition-colors">
            Recursos
          </Link>
          <Link to="/precos" className="text-gray-700 hover:text-brand-purple transition-colors">
            Preços
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-brand-purple transition-colors">
            Login
          </Link>
          <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90">
            <Link to="/cadastro">Comece Grátis</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
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
          <Link 
            to="/" 
            className="text-gray-700 hover:text-brand-purple transition-colors py-2 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            to="/recursos" 
            className="text-gray-700 hover:text-brand-purple transition-colors py-2 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Recursos
          </Link>
          <Link 
            to="/precos" 
            className="text-gray-700 hover:text-brand-purple transition-colors py-2 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Preços
          </Link>
          <Link 
            to="/login" 
            className="text-gray-700 hover:text-brand-purple transition-colors py-2 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
          <Button 
            className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/cadastro">Comece Grátis</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
