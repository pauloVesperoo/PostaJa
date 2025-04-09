
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, Image, Instagram, Loader, LogOut, PlusCircle, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import sampleImage1 from '../assets/sample-post-1.png';
import sampleImage2 from '../assets/sample-post-2.png';

const businessTypes = [
  { value: "restaurante", label: "Restaurante" },
  { value: "salao", label: "Salão de Beleza" },
  { value: "petshop", label: "Pet Shop" },
  { value: "fitness", label: "Academia/Personal" },
  { value: "varejo", label: "Loja de Varejo" },
];

const Dashboard = () => {
  const [businessType, setBusinessType] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!businessType) {
      toast({
        title: "Tipo de negócio necessário",
        description: "Por favor, selecione o tipo do seu negócio para gerar conteúdo.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setShowContent(true);
      
      toast({
        title: "Conteúdo gerado com sucesso",
        description: "Seus posts foram criados. Você pode visualizá-los agora.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:flex flex-col">
        <div className="mb-10">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold gradient-text">PostaJá</span>
          </Link>
        </div>
        
        <nav className="flex-1 space-y-1">
          <Link 
            to="/dashboard" 
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-purple/10 text-brand-purple"
          >
            <PlusCircle className="h-5 w-5" />
            <span>Criar conteúdo</span>
          </Link>
          <Link 
            to="/calendario" 
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <CalendarDays className="h-5 w-5" />
            <span>Calendário</span>
          </Link>
          <Link 
            to="/biblioteca" 
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <Image className="h-5 w-5" />
            <span>Minha biblioteca</span>
          </Link>
          <Link 
            to="/instagram" 
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <Instagram className="h-5 w-5" />
            <span>Conectar Instagram</span>
          </Link>
        </nav>
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <Link 
            to="/configuracoes" 
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <Settings className="h-5 w-5" />
            <span>Configurações</span>
          </Link>
          <Link 
            to="/perfil" 
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <User className="h-5 w-5" />
            <span>Meu perfil</span>
          </Link>
          <Link 
            to="/logout" 
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="h-5 w-5" />
            <span>Sair</span>
          </Link>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Criar conteúdo</h1>
          
          <Card className="p-6 mb-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de negócio
                </label>
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Personalização (opcional)
                </label>
                <Input 
                  placeholder="Ex: Promover um novo prato, destacar um serviço específico..." 
                />
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <div className="flex items-center">
                    <Loader className="animate-spin mr-2" size={16} />
                    <span>Gerando conteúdo...</span>
                  </div>
                ) : "Gerar conteúdo agora"}
              </Button>
            </div>
          </Card>
          
          {showContent && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold mb-4">Seu conteúdo está pronto!</h2>
              
              <Tabs defaultValue="post1" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="post1">Post 1</TabsTrigger>
                  <TabsTrigger value="post2">Post 2</TabsTrigger>
                </TabsList>
                
                <TabsContent value="post1">
                  <Card className="p-6">
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
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                          <p className="mb-4">✨ Seu prato favorito acabou de ficar ainda melhor! Nova promoção de terça: 2 pratos pelo preço de 1!</p>
                          <p className="text-sm text-gray-500 mb-2">Hashtags sugeridas:</p>
                          <p className="text-sm text-brand-purple">#promocao #restaurante #comidaboa #desconto #gastronomiabr</p>
                        </div>
                        <div className="flex gap-2 mt-6">
                          <Button variant="outline" className="flex-1">Editar</Button>
                          <Button variant="outline" className="flex-1">Baixar</Button>
                          <Button className="flex-1 bg-brand-blue hover:bg-brand-blue/90">Agendar</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="post2">
                  <Card className="p-6">
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
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                          <p className="mb-4">🍽️ Novidades no cardápio! Venha experimentar nossos novos sabores que vão te surpreender. Esperamos por você!</p>
                          <p className="text-sm text-gray-500 mb-2">Hashtags sugeridas:</p>
                          <p className="text-sm text-brand-purple">#novocardapio #restaurantelocal #gastronomia #experimente #sabores</p>
                        </div>
                        <div className="flex gap-2 mt-6">
                          <Button variant="outline" className="flex-1">Editar</Button>
                          <Button variant="outline" className="flex-1">Baixar</Button>
                          <Button className="flex-1 bg-brand-blue hover:bg-brand-blue/90">Agendar</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
