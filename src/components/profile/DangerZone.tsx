
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DangerZone = () => {
  return (
    <Card className="border border-red-100 mt-8">
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
  );
};

export default DangerZone;
