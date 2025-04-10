
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Lock, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SecurityTab = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (data: any) => {
    setIsLoading(true);
    
    // Simulação de atualização
    setTimeout(() => {
      setIsLoading(false);
      form.reset({
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
    <Card>
      <CardHeader>
        <CardTitle>Segurança</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
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
                control={form.control}
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
                control={form.control}
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
  );
};

export default SecurityTab;
