
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import ProfileHeader from "@/components/profile/ProfileHeader";
import PersonalInfoTab from "@/components/profile/PersonalInfoTab";
import SecurityTab from "@/components/profile/SecurityTab";
import SocialNetworksTab from "@/components/profile/SocialNetworksTab";
import DangerZone from "@/components/profile/DangerZone";

const Profile = () => {
  return (
    <ProfileSidebar>
      <h1 className="text-2xl font-bold mb-6">Meu Perfil</h1>
      
      <div className="mb-6">
        <ProfileHeader />
      </div>
      
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="personal">Informações Pessoais</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
          <TabsTrigger value="social">Redes Sociais</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal">
          <PersonalInfoTab />
        </TabsContent>
        
        <TabsContent value="security">
          <SecurityTab />
        </TabsContent>
        
        <TabsContent value="social">
          <SocialNetworksTab />
        </TabsContent>
      </Tabs>
      
      <DangerZone />
    </ProfileSidebar>
  );
};

export default Profile;
