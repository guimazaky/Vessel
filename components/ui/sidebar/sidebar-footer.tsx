"use client";

import { redirect } from "next/navigation";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shadcn/avatar";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/actions/auth-actions";

interface userInfos {
  name: string;
  email: string;
}

interface CardProps {
  label: userInfos[];
}

const SidebarFooter = ({ label }: CardProps) => {
  const handleSignOut = async () => {
    await signOut();
    redirect("/login");
  };

  return (
    <div>
      {label.map((item) => (
        <div
          className="flex  justify-between items-center bg-white/5 border border-white/10 m-2 mb-4 p-4 rounded-lg h-20 gap-2"
          key={item.name}
        >
          <div className="flex center gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="text-sm">{item.name}</h1>
          </div>

          <div>
            <LogOut className="cursor-pointer" onClick={handleSignOut} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default SidebarFooter;
