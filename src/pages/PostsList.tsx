
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarIcon, Edit, Instagram, Search, Trash2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import ProfileSidebar from "@/components/profile/ProfileSidebar";

// Exemplo de dados para posts publicados
const publishedPostsData = [
  {
    id: 1,
    image: "/placeholder.svg",
    caption: "Novo menu de verão disponível agora! Experimente nossas deliciosas novidades.",
    platform: "Instagram",
    publishedDate: new Date(2025, 3, 8),
    engagement: {
      likes: 145,
      comments: 23,
      shares: 5
    }
  },
  {
    id: 2,
    image: "/placeholder.svg",
    caption: "Horário especial de funcionamento neste feriado. Estamos esperando por você!",
    platform: "Instagram",
    publishedDate: new Date(2025, 3, 5),
    engagement: {
      likes: 98,
      comments: 12,
      shares: 2
    }
  },
  {
    id: 3,
    image: "/placeholder.svg",
    caption: "Desconto especial para quem vier com um amigo neste fim de semana!",
    platform: "Instagram",
    publishedDate: new Date(2025, 3, 1),
    engagement: {
      likes: 220,
      comments: 32,
      shares: 15
    }
  }
];

const PostsList = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredPosts = publishedPostsData.filter(post => {
    if (search && !post.caption.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    
    if (filter !== "all" && post.platform.toLowerCase() !== filter) {
      return false;
    }
    
    return true;
  });

  return (
    <ProfileSidebar>
      <h1 className="text-2xl font-bold mb-6">Meus Posts</h1>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input 
            placeholder="Pesquisar posts..." 
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-48">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por plataforma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas plataformas</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button 
          onClick={() => window.location.href = "/create-post"}
          className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90"
        >
          Criar Novo Post
        </Button>
      </div>
      
      <div className="space-y-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
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
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
                      <Instagram size={12} className="mr-1" />
                      {post.platform}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="text-sm text-gray-500 flex items-center">
                    <CalendarIcon size={14} className="mr-1" />
                    {format(post.publishedDate, "dd/MM/yyyy", { locale: ptBR })}
                  </div>
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {post.engagement.likes} likes
                    </div>
                    <div className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {post.engagement.comments} comentários
                    </div>
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
          ))
        ) : (
          <Card className="p-8 text-center">
            <p className="text-gray-500">Nenhum post encontrado.</p>
          </Card>
        )}
      </div>
    </ProfileSidebar>
  );
};

export default PostsList;
