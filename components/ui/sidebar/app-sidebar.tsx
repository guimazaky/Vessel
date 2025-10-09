"use client";

import React from "react";

import SidebarHeader from "@/components/ui/sidebar/sidebar-header";
import SidebarContent from "@/components/ui/sidebar/sidebar-content";
import SidebarFooter from "@/components/ui/sidebar/sidebar-footer";

export const AppSidebar = () => {
  return (
    <div className="w-64 border-r border-white/20 bg-black/25 backdrop-blur-sm flex flex-col fixed justify-between h-screen">
      <div>
        <SidebarHeader />
        <SidebarContent />
      </div>

      <SidebarFooter />
    </div>
  );
};
