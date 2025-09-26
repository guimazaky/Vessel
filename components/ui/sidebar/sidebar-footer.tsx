import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shadcn/avatar";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SidebarFooter = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="flex items-center bg-white/5 border border-white/10 m-2 mb-4 p-4 rounded-lg h-20 gap-2">
      <Avatar className="w-10 h-10">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-sm">Guilherme Akiyama</h1>
      <LogOut className="cursor-pointer" onClick={handleSignOut} />
    </div>
  );
};
export default SidebarFooter;
