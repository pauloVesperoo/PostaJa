
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader } from 'lucide-react';
import sampleImage1 from '../assets/sample-post-1.png';
import sampleImage2 from '../assets/sample-post-2.png';

const businessTypes = [
  { value: "restaurante", label: "Restaurante" },
  { value: "salao", label: "Salão de Beleza" },
  { value: "petshop", label: "Pet Shop" },
  { value: "fitness", label: "Academia/Personal" },
  { value: "varejo", label: "Loja de Varejo" },
];

const DemoSection = () => {
  const [businessType, setBusinessType] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Veja a <span className="gradient-text">magia acontecer</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experimente agora mesmo como é rápido criar conteúdo de qualidade para o seu negócio.
          </p>
        </div>

        <div className="glass-card p-8 max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de negócio</label>
              <Select onValueChange={(value) => setBusinessType(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o tipo do seu negócio" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              disabled={!businessType || isGenerating}
              className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90"
              onClick={handleGenerate}
            >
              {isGenerating ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Gerando conteúdo...
                </>
              ) : (
                "Gerar conteúdo agora"
              )}
            </Button>
            
            {showResults && (
              <div className="mt-8 animate-fade-in">
                <Tabs defaultValue="post1" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="post1">Post 1</TabsTrigger>
                    <TabsTrigger value="post2">Post 2</TabsTrigger>
                  </TabsList>
                  <TabsContent value="post1" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img 
                          src={sampleImage1} 
                          alt="Exemplo de post para Instagram" 
                          className="w-full h-auto rounded-lg shadow-md" 
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Legendas geradas:</h3>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="mb-4">✨ Seu prato favorito acabou de ficar ainda melhor! Nova promoção de terça: 2 pratos pelo preço de 1!</p>
                          <p className="text-sm text-gray-500 mb-2">Hashtags sugeridas:</p>
                          <p className="text-sm text-brand-purple">#promocao #restaurante #comidaboa #desconto #gastronomiabr</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" className="flex-1">Baixar</Button>
                          <Button className="flex-1 bg-brand-blue hover:bg-brand-blue/90">Agendar</Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="post2" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img 
                          src={sampleImage2} 
                          alt="Exemplo de post para Instagram" 
                          className="w-full h-auto rounded-lg shadow-md" 
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Legendas geradas:</h3>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="mb-4">🍽️ Novidades no cardápio! Venha experimentar nossos novos sabores que vão te surpreender. Esperamos por você!</p>
                          <p className="text-sm text-gray-500 mb-2">Hashtags sugeridas:</p>
                          <p className="text-sm text-brand-purple">#novocardapio #restaurantelocal #gastronomia #experimente #sabores</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" className="flex-1">Baixar</Button>
                          <Button className="flex-1 bg-brand-blue hover:bg-brand-blue/90">Agendar</Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
