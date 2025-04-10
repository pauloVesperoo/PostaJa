
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, Image, Instagram, Facebook, Linkedin, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const CreatePost = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["instagram"]);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("12:00");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const togglePlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const handleSchedule = () => {
    if (!date) {
      toast({
        title: "Data necessária",
        description: "Por favor, selecione uma data para agendar o post.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simular agendamento
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Post agendado com sucesso",
        description: "Seu post foi agendado e aparecerá no calendário."
      });
    }, 1500);
  };

  const isPlatformSelected = (platform: string) => selectedPlatforms.includes(platform);

  return (
    <ProfileSidebar>
      <h1 className="text-2xl font-bold mb-6">Criar Novo Post</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Conteúdo do Post</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="image-upload">Imagem do Post</Label>
                <div className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-50">
                  <div className="space-y-2 text-center">
                    <div className="mx-auto h-12 w-12 text-gray-400 flex items-center justify-center">
                      <Image size={32} />
                    </div>
                    <div className="text-sm text-gray-600">
                      <label htmlFor="file-upload" className="cursor-pointer text-brand-purple hover:text-brand-purple/80">
                        <span>Clique para fazer upload</span>
                        <Input 
                          id="file-upload" 
                          name="file-upload" 
                          type="file" 
                          className="sr-only"
                          accept="image/*" 
                        />
                      </label>
                      <p className="text-xs mt-1">PNG, JPG, GIF até 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Label htmlFor="caption">Legenda</Label>
                <Textarea 
                  id="caption" 
                  placeholder="Digite a legenda do seu post..."
                  className="mt-1 h-32"
                />
              </div>

              <div>
                <Label htmlFor="hashtags">Hashtags</Label>
                <Input 
                  id="hashtags" 
                  placeholder="#exemplo #hashtag #marketing"
                  className="mt-1"
                />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Opções Avançadas</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="content-type">Tipo de Conteúdo</Label>
                <Select defaultValue="image">
                  <SelectTrigger id="content-type" className="mt-1">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">Imagem</SelectItem>
                    <SelectItem value="carousel">Carrossel</SelectItem>
                    <SelectItem value="video">Vídeo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="location">Localização (opcional)</Label>
                <Input 
                  id="location" 
                  placeholder="Adicione uma localização"
                  className="mt-1"
                />
              </div>
            </div>
          </Card>
        </div>
        
        <div className="md:col-span-1 space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Plataformas</h2>
            
            <div className="space-y-3">
              <Button
                type="button"
                variant={isPlatformSelected("instagram") ? "default" : "outline"}
                className={`w-full justify-start ${isPlatformSelected("instagram") ? "bg-blue-600" : ""}`}
                onClick={() => togglePlatform("instagram")}
              >
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </Button>
              
              <Button
                type="button"
                variant={isPlatformSelected("facebook") ? "default" : "outline"}
                className={`w-full justify-start ${isPlatformSelected("facebook") ? "bg-blue-600" : ""}`}
                onClick={() => togglePlatform("facebook")}
              >
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
              
              <Button
                type="button"
                variant={isPlatformSelected("linkedin") ? "default" : "outline"}
                className={`w-full justify-start ${isPlatformSelected("linkedin") ? "bg-blue-700" : ""}`}
                onClick={() => togglePlatform("linkedin")}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              
              <Button
                type="button"
                variant={isPlatformSelected("twitter") ? "default" : "outline"}
                className={`w-full justify-start ${isPlatformSelected("twitter") ? "bg-blue-400" : ""}`}
                onClick={() => togglePlatform("twitter")}
              >
                <X className="mr-2 h-4 w-4" />
                Twitter
              </Button>
            </div>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Agendamento</h2>
            
            <div className="space-y-4">
              <div>
                <Label>Data</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal mt-1"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: ptBR }) : "Selecione uma data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label htmlFor="time">Hora</Label>
                <div className="flex items-center mt-1">
                  <Clock className="mr-2 h-4 w-4 text-gray-500" />
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 mt-4"
                onClick={handleSchedule}
                disabled={isLoading}
              >
                {isLoading ? "Agendando..." : "Agendar Post"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </ProfileSidebar>
  );
};

export default CreatePost;
