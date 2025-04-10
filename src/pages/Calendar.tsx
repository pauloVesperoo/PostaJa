
import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  Instagram,
  Clock,
  Calendar as CalendarIcon,
  Edit,
  Trash2
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import sampleImage1 from '../assets/sample-post-1.png';

// Sample data for scheduled posts
const sampleScheduledPosts = [
  {
    id: 1,
    date: new Date(2025, 3, 12), // April 12, 2025
    image: sampleImage1,
    caption: "✨ Seu prato favorito acabou de ficar ainda melhor! Nova promoção de terça: 2 pratos pelo preço de 1!",
    time: "10:30",
  },
  {
    id: 2,
    date: new Date(2025, 3, 15), // April 15, 2025
    image: sampleImage1,
    caption: "🍽️ Novidades no cardápio! Venha experimentar nossos novos sabores que vão te surpreender.",
    time: "14:00",
  },
  {
    id: 3,
    date: new Date(2025, 3, 20), // April 20, 2025
    image: sampleImage1,
    caption: "🎉 Final de semana chegando! Venha comemorar conosco com pratos especiais.",
    time: "18:30",
  }
];

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Function to get posts scheduled for a specific date
  const getPostsForDate = (day: Date) => {
    return sampleScheduledPosts.filter(
      post => 
        post.date.getDate() === day.getDate() && 
        post.date.getMonth() === day.getMonth() &&
        post.date.getFullYear() === day.getFullYear()
    );
  };
  
  // Function to handle date selection
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
  };
  
  // Function to show post details
  const showPostDetails = (post: any) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };
  
  // Function to highlight dates with scheduled posts
  const isDayWithPost = (day: Date) => {
    return sampleScheduledPosts.some(
      post => 
        post.date.getDate() === day.getDate() && 
        post.date.getMonth() === day.getMonth() &&
        post.date.getFullYear() === day.getFullYear()
    );
  };

  // Get posts for the selected date
  const postsForSelectedDate = date ? getPostsForDate(date) : [];

  return (
    <ProfileSidebar>
      <h1 className="text-2xl font-bold mb-6">Calendário de Publicações</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
        {/* Calendar Column - Now taking more space */}
        <div className="md:col-span-5">
          <Card className="p-4">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              className="rounded-md border w-full p-5 pointer-events-auto text-base"
              locale={ptBR}
              modifiers={{
                withPost: isDayWithPost
              }}
              modifiersStyles={{
                withPost: { 
                  backgroundColor: "rgba(124, 58, 237, 0.1)",
                  fontWeight: "bold",
                  borderRadius: "0.375rem"
                }
              }}
            />
          </Card>
        </div>
        
        {/* Posts for Selected Date */}
        <div className="md:col-span-2">
          <Card className="p-4 h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">
                {date ? (
                  <span className="flex items-center">
                    <CalendarIcon className="mr-2 h-5 w-5 text-brand-purple" />
                    {format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  </span>
                ) : "Selecione uma data"}
              </h2>
            </div>
            
            {postsForSelectedDate.length > 0 ? (
              <div className="space-y-4">
                {postsForSelectedDate.map((post) => (
                  <Card key={post.id} className="p-3 cursor-pointer hover:shadow-md transition-shadow" onClick={() => showPostDetails(post)}>
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 rounded-md overflow-hidden">
                        <img src={post.image} alt="Post preview" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium line-clamp-2">{post.caption}</p>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.time}</span>
                          <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-200">Agendado</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <Instagram className="h-12 w-12 text-gray-300 mb-2" />
                <p className="text-gray-500">Nenhuma publicação agendada para esta data</p>
                <Button className="mt-4 bg-brand-purple hover:bg-brand-purple/90">
                  Agendar nova publicação
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>

      {/* Post Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Detalhes da Publicação</DialogTitle>
            <DialogDescription>
              Publicação agendada para {selectedPost && format(selectedPost.date, "dd/MM/yyyy", { locale: ptBR })} às {selectedPost?.time}
            </DialogDescription>
          </DialogHeader>
          
          {selectedPost && (
            <div className="space-y-4">
              <div className="rounded-md overflow-hidden">
                <img src={selectedPost.image} alt="Post preview" className="w-full h-auto" />
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-1">Legenda</h3>
                <p className="text-sm bg-gray-50 p-3 rounded-md">{selectedPost.caption}</p>
              </div>
              
              <div className="flex justify-between pt-4">
                <Button variant="outline" className="flex items-center">
                  <Edit className="mr-2 h-4 w-4" />
                  Editar
                </Button>
                <Button variant="destructive" className="flex items-center">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Excluir
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </ProfileSidebar>
  );
};

export default Calendar;
