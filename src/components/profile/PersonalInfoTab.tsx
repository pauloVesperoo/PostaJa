
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { User, Mail, Phone, Building, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const PersonalInfoTab = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      name: "João Silva",
      email: "joao.silva@exemplo.com",
      phone: "(11) 98765-4321",
      company: "Minha Empresa LTDA",
    },
  });

  const handleSubmit = (data: any) => {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações Pessoais</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
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
                control={form.control}
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
                control={form.control}
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
                control={form.control}
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
  );
};

export default PersonalInfoTab;
