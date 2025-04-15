
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [desktopNotifications, setDesktopNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [theme, setTheme] = useState("system");
  const [language, setLanguage] = useState("pt-BR");

  const handleSaveAppearance = () => {
    toast.success("Preferências de aparência salvas com sucesso");
  };

  const handleSaveNotifications = () => {
    toast.success("Preferências de notificação salvas com sucesso");
  };

  const handleSaveLanguage = () => {
    toast.success("Idioma alterado com sucesso");
  };

  return (
    <ProfileSidebar>
      <h1 className="text-2xl font-bold mb-6">Configurações</h1>
      
      <Tabs defaultValue="notifications" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="appearance">Aparência</TabsTrigger>
          <TabsTrigger value="language">Idioma</TabsTrigger>
        </TabsList>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Notificações por Email</h3>
                  <p className="text-sm text-gray-500">Receba atualizações sobre seus posts agendados</p>
                </div>
                <Switch 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Notificações Desktop</h3>
                  <p className="text-sm text-gray-500">Receba notificações quando seus posts forem publicados</p>
                </div>
                <Switch 
                  checked={desktopNotifications} 
                  onCheckedChange={setDesktopNotifications}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Emails de Marketing</h3>
                  <p className="text-sm text-gray-500">Receba dicas, novidades e ofertas exclusivas</p>
                </div>
                <Switch 
                  checked={marketingEmails} 
                  onCheckedChange={setMarketingEmails}
                />
              </div>
              
              <Button onClick={handleSaveNotifications}>Salvar Preferências</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Aparência</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="theme">Tema</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger id="theme">
                    <SelectValue placeholder="Selecione um tema" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Claro</SelectItem>
                    <SelectItem value="dark">Escuro</SelectItem>
                    <SelectItem value="system">Sistema</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button onClick={handleSaveAppearance}>Salvar Preferências</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="language">
          <Card>
            <CardHeader>
              <CardTitle>Idioma</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="language">Idioma do Sistema</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Selecione um idioma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button onClick={handleSaveLanguage}>Salvar Preferências</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Sobre o Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Versão: 1.0.0</p>
            <p className="text-sm text-gray-500">Última atualização: 09/04/2025</p>
            <p className="text-sm">
              <a href="#" className="text-brand-purple hover:underline">Termos de Uso</a>
              {" • "}
              <a href="#" className="text-brand-purple hover:underline">Política de Privacidade</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </ProfileSidebar>
  );
};

export default Settings;
