
import { Link } from "react-router-dom";
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
import {
  Camera,
  Instagram,
  FileText,
  Clock,
  CalendarDays,
  Users,
  Settings,
  LogOut,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

type ProfileSidebarProps = {
  children: React.ReactNode;
};

const ProfileSidebar = ({ children }: ProfileSidebarProps) => {
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
                <Link to="/settings">
                  <SidebarMenuButton>
                    <Settings />
                    <span>Configurações</span>
                  </SidebarMenuButton>
                </Link>
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
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ProfileSidebar;
