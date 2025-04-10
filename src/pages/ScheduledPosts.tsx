
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import ProfileSidebar from "@/components/profile/ProfileSidebar";

// Exemplo de dados de posts agendados
const scheduledPostsData = [
  {
    id: 1,
    image: "/placeholder.svg",
    caption: "Promoção de terça-feira! Não perca essa oportunidade incrível de garantir seu desconto!",
    platform: "Instagram",
    scheduledDate: new Date(2025, 3, 15, 14, 30),
    hashtags: "#promocao #desconto #oportunidade"
  },
  {
    id: 2,
    image: "/placeholder.svg",
    caption: "Novos produtos chegando esta semana! Fique ligado nas novidades.",
    platform: "Instagram",
    scheduledDate: new Date(2025, 3, 17, 10, 0),
    hashtags: "#novidades #lancamento #produtos"
  },
  {
    id: 3,
    image: "/placeholder.svg",
    caption: "Fim de semana especial com promoções exclusivas para nossos seguidores!",
    platform: "Instagram",
    scheduledDate: new Date(2025, 3, 20, 16, 15),
    hashtags: "#fimdesemana #promocao #exclusivo"
  }
];

const ScheduledPosts = () => {
  const [view, setView] = useState<"all" | "date">("all");
  
  return (
    <ProfileSidebar>
      <h1 className="text-2xl font-bold mb-6">Posts Agendados</h1>
      
      <Tabs defaultValue="list" className="w-full mb-6">
        <TabsList>
          <TabsTrigger value="list">Lista</TabsTrigger>
          <TabsTrigger value="calendar">Calendário</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <Button 
                variant={view === "all" ? "default" : "outline"} 
                onClick={() => setView("all")}
                className="mr-2"
              >
                Todos
              </Button>
              <Button 
                variant={view === "date" ? "default" : "outline"} 
                onClick={() => setView("date")}
              >
                Por Data
              </Button>
            </div>
            <Button 
              onClick={() => window.location.href = "/create-post"} 
              className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90"
            >
              Agendar Novo Post
            </Button>
          </div>
          
          <div className="space-y-4">
            {scheduledPostsData.map((post) => (
              <Card key={post.id} className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                  <div className="md:col-span-1">
                    <img 
                      src={post.image} 
                      alt="Post" 
                      className="w-full h-auto rounded-md object-cover aspect-square"
                    />
                  </div>
                  <div className="md:col-span-3 flex flex-col justify-between">
                    <div>
                      <p className="line-clamp-2 text-sm">{post.caption}</p>
                      <p className="text-xs text-brand-purple mt-1">{post.hashtags}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {post.platform}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-1 flex flex-col justify-center">
                    <div className="flex items-center text-gray-500 text-sm">
                      <CalendarIcon size={14} className="mr-1" />
                      {format(post.scheduledDate, "dd/MM/yyyy", { locale: ptBR })}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Clock size={14} className="mr-1" />
                      {format(post.scheduledDate, "HH:mm", { locale: ptBR })}
                    </div>
                  </div>
                  <div className="md:col-span-1 flex items-center justify-end gap-2">
                    <Button variant="outline" size="icon">
                      <Edit size={16} />
                    </Button>
                    <Button variant="outline" size="icon" className="text-red-500 hover:text-red-700">
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="calendar">
          <Card className="p-4">
            <div className="text-center p-8">
              <p className="text-gray-500">
                Ver o calendário completo com todos os posts agendados
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => window.location.href = "/calendar"}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Ir para o Calendário
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </ProfileSidebar>
  );
};

export default ScheduledPosts;
