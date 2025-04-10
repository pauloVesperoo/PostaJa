import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Mail,
  Lock,
  Bell,
  Camera,
  Save,
  CreditCard,
  Building,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  FileText,
  Clock,
  CalendarDays,
  Users,
  Settings,
  LogOut
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const profileForm = useForm({
    defaultValues: {
      name: "João Silva",
      email: "joao.silva@exemplo.com",
      phone: "(11) 98765-4321",
      company: "Minha Empresa LTDA",
      instagram: "@minhaempresa",
      facebook: "minhaempresa",
      twitter: "@minhaempresa",
      linkedin: "minhaempresa",
    },
  });

  const passwordForm = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handleProfileSubmit = (data: any) => {
    setIsLoading(true);
    
    // Simulação de atualização
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: "Perfil atualizado",
        description: "Suas informações foram atualizadas com sucesso.",
      });
    }, 1500);
  };

  const handlePasswordSubmit = (data: any) => {
    setIsLoading(true);
    
    // Simulação de atualização
    setTimeout(() => {
      setIsLoading(false);
      passwordForm.reset({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      
      toast({
        title: "Senha atualizada",
        description: "Sua senha foi alterada com sucesso.",
      });
    }, 1500);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader>
            <Link to="/" className="flex items-center px-2 py-3">
              <span className="text-xl font-bold gradient-text">PostaJá</span>
            </Link>
            
            {/* Highlighted Buttons for Main Functions */}
            <div className="space-y-2 mt-2">
              <Button 
                className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90"
                onClick={() => alert("Criar conteúdo com IA")}
              >
                <Camera className="mr-2 h-5 w-5" />
                Criar com IA
              </Button>
              
              <Button 
                className="w-full bg-gradient-to-r from-brand-blue to-green-500 hover:opacity-90"
                onClick={() => alert("Agendar post")}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Agendar Post
              </Button>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link to="/dashboard">
                  <SidebarMenuButton>
                    <FileText />
                    <span>Posts</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Clock />
                  <span>Agendados</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <CalendarDays />
                  <span>Calendário</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users />
                  <span>Contas</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter>
            <SidebarSeparator />
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  <span>Configurações</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <Link to="/profile">
                  <SidebarMenuButton className="bg-gray-100 dark:bg-gray-800">
                    <User />
                    <span>Meu perfil</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton className="text-red-500 hover:text-red-600">
                  <LogOut />
                  <span>Sair</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        
        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Meu Perfil</h1>
            
            <div className="mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                    <div className="relative">
                      <Avatar className="w-24 h-24 border-4 border-white shadow-md">
                        <AvatarImage src="https://i.pravatar.cc/150?img=33" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="absolute bottom-0 right-0 rounded-full h-8 w-8 shadow-md"
                        onClick={() => alert("Alterar foto")}
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">João Silva</h2>
                      <p className="text-gray-500">joao.silva@exemplo.com</p>
                      <p className="text-sm text-gray-500 mt-1">Plano Pro • Renovação em 15/05/2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="personal">Informações Pessoais</TabsTrigger>
                <TabsTrigger value="security">Segurança</TabsTrigger>
                <TabsTrigger value="social">Redes Sociais</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Informações Pessoais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...profileForm}>
                      <form onSubmit={profileForm.handleSubmit(handleProfileSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={profileForm.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nome Completo</FormLabel>
                                <FormControl>
                                  <div className="flex">
                                    <User className="mr-2 h-4 w-4 opacity-50 self-center" />
                                    <Input {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={profileForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                  <div className="flex">
                                    <Mail className="mr-2 h-4 w-4 opacity-50 self-center" />
                                    <Input {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={profileForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Telefone</FormLabel>
                                <FormControl>
                                  <div className="flex">
                                    <Phone className="mr-2 h-4 w-4 opacity-50 self-center" />
                                    <Input {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={profileForm.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Empresa</FormLabel>
                                <FormControl>
                                  <div className="flex">
                                    <Building className="mr-2 h-4 w-4 opacity-50 self-center" />
                                    <Input {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="bg-gradient-to-r from-brand-purple to-brand-blue"
                          disabled={isLoading}
                        >
                          {isLoading ? 
                            "Salvando..." : 
                            <>
                              <Save className="mr-2 h-4 w-4" />
                              Salvar alterações
                            </>
                          }
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Segurança</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...passwordForm}>
                      <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)} className="space-y-6">
                        <div className="space-y-4">
                          <FormField
                            control={passwordForm.control}
                            name="currentPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Senha Atual</FormLabel>
                                <FormControl>
                                  <div className="flex">
                                    <Lock className="mr-2 h-4 w-4 opacity-50 self-center" />
                                    <Input type="password" {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={passwordForm.control}
                            name="newPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nova Senha</FormLabel>
                                <FormControl>
                                  <div className="flex">
                                    <Lock className="mr-2 h-4 w-4 opacity-50 self-center" />
                                    <Input type="password" {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={passwordForm.control}
                            name="confirmPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Confirme a Nova Senha</FormLabel>
                                <FormControl>
                                  <div className="flex">
                                    <Lock className="mr-2 h-4 w-4 opacity-50 self-center" />
                                    <Input type="password" {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="bg-gradient-to-r from-brand-purple to-brand-blue"
                          disabled={isLoading}
                        >
                          {isLoading ? 
                            "Atualizando..." : 
                            <>
                              <Save className="mr-2 h-4 w-4" />
                              Atualizar senha
                            </>
                          }
                        </Button>
                      </form>
                    </Form>
                    
                    <div className="border-t mt-8 pt-6">
                      <h3 className="text-lg font-medium mb-4">Notificações</h3>
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <Label className="text-base">Notificações por e-mail</Label>
                            <p className="text-sm text-gray-500">Receber lembretes e atualizações por e-mail</p>
                          </div>
                          <div className="flex items-center h-8">
                            <Button variant="outline" size="sm">Configurar</Button>
                          </div>
                        </div>
                        
                        <div className="flex items-start justify-between">
                          <div>
                            <Label className="text-base">Autenticação em duas etapas</Label>
                            <p className="text-sm text-gray-500">Adicionar uma camada extra de segurança à sua conta</p>
                          </div>
                          <div className="flex items-center h-8">
                            <Button variant="outline" size="sm">Ativar</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="social">
                <Card>
                  <CardHeader>
                    <CardTitle>Redes Sociais Conectadas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...profileForm}>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={profileForm.control}
                            name="instagram"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Instagram</FormLabel>
                                <FormControl>
                                  <div className="flex">
                                    <Instagram className="mr-2 h-4 w-4 opacity-50 self-center" />
                                    <Input {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={profileForm.control}
                            name="facebook"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Facebook</FormLabel>
                                <FormControl>
                                  <div className="flex">
                                    <Facebook className="mr-2 h-4 w-4 opacity-50 self-center" />
                                    <Input {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={profileForm.control}
                            name="twitter"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Twitter</FormLabel>
                                <FormControl>
                                  <div className="flex">
                                    <Twitter className="mr-2 h-4 w-4 opacity-50 self-center" />
                                    <Input {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={profileForm.control}
                            name="linkedin"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>LinkedIn</FormLabel>
                                <FormControl>
                                  <div className="flex">
                                    <Linkedin className="mr-2 h-4 w-4 opacity-50 self-center" />
                                    <Input {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="bg-gradient-to-r from-brand-purple to-brand-blue"
                          onClick={(e) => {
                            e.preventDefault();
                            toast({
                              title: "Redes sociais atualizadas",
                              description: "Suas redes sociais foram atualizadas com sucesso.",
                            });
                          }}
                        >
                          <Save className="mr-2 h-4 w-4" />
                          Salvar alterações
                        </Button>
                        
                        <div className="border-t mt-8 pt-6">
                          <h3 className="text-lg font-medium mb-4">Conectar Novas Contas</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="flex items-center justify-center gap-2">
                              <Instagram className="h-4 w-4" />
                              <span>Adicionar Instagram</span>
                            </Button>
                            <Button variant="outline" className="flex items-center justify-center gap-2">
                              <Twitter className="h-4 w-4" />
                              <span>Adicionar Twitter</span>
                            </Button>
                          </div>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8">
              <Card className="border border-red-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-red-500">Zona de Perigo</h3>
                      <p className="text-sm text-gray-500 mt-1">Ações que podem afetar permanentemente sua conta</p>
                    </div>
                    <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50 mt-4 md:mt-0">
                      Excluir Conta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Profile;
