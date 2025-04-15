
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProfileHeader = () => {
  return (
    <Card className="mb-6">
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
  );
};

export default ProfileHeader;
