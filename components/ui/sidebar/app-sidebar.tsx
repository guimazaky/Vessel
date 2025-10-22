import React from "react";
import SidebarHeader from "@/components/ui/sidebar/sidebar-header";
import SidebarContent from "@/components/ui/sidebar/sidebar-content";
import SidebarFooter from "@/components/ui/sidebar/sidebar-footer";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

import { getUserInfo } from "@/lib/actions/auth-actions";

type Session = typeof auth.$Infer.Session;

interface FormProps {
  session: Session | null;
}

async function getInfos({ session }: FormProps) {
  if (!session) {
    redirect("/login");
  }

  const userInfos = await getUserInfo(session.user.id);

  if (!userInfos) return { label: [] };

  const label = [
    {
      name: userInfos.name,
      email: userInfos.email,
    },
  ];

  return { label };
}

export const AppSidebar = async ({ session }: FormProps) => {
  if (!session) redirect("/login");

  const { label } = await getInfos({ session });

  return (
    <div className="w-64 border-r border-white/20 bg-black/25 backdrop-blur-sm flex flex-col fixed justify-between h-screen">
      <div>
        <SidebarHeader />
        <SidebarContent />
      </div>

      <SidebarFooter label={label} />
    </div>
  );
};
