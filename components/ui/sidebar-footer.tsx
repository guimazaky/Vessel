import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";

const SidebarFooter = () => {
  return (
    <div className="flex items-center bg-white/5 border border-white/10 m-2 mb-4 p-4 rounded-lg h-20 gap-2">
      <Avatar className="w-10 h-10">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-sm">Guilherme Akiyama</h1>
      <LogOut className="cursor-pointer" />
    </div>
  );
};
export default SidebarFooter;
