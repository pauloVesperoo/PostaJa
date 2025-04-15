
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold gradient-text">ContentAI</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Conteúdo para redes sociais gerado por IA para negócios locais.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Produto</h3>
            <ul className="space-y-3">
              <li><Link to="/recursos" className="text-gray-600 hover:text-brand-purple transition-colors">Recursos</Link></li>
              <li><Link to="/precos" className="text-gray-600 hover:text-brand-purple transition-colors">Preços</Link></li>
              <li><Link to="/demo" className="text-gray-600 hover:text-brand-purple transition-colors">Demo</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-brand-purple transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><Link to="/sobre" className="text-gray-600 hover:text-brand-purple transition-colors">Sobre nós</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-brand-purple transition-colors">Blog</Link></li>
              <li><Link to="/carreiras" className="text-gray-600 hover:text-brand-purple transition-colors">Carreiras</Link></li>
              <li><Link to="/contato" className="text-gray-600 hover:text-brand-purple transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/termos" className="text-gray-600 hover:text-brand-purple transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="text-gray-600 hover:text-brand-purple transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-brand-purple transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ContentAI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
