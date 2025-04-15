
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
import { Instagram, Facebook, Twitter, Linkedin, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SocialNetworksTab = () => {
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      instagram: "@minhaempresa",
      facebook: "minhaempresa",
      twitter: "@minhaempresa",
      linkedin: "minhaempresa",
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Redes Sociais Conectadas</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
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
                control={form.control}
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
                control={form.control}
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
                control={form.control}
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
  );
};

export default SocialNetworksTab;
