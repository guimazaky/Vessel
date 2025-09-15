import React from "react";

import SidebarHeader from "@/components/ui/sidebar-header";
import SidebarContent from "@/components/ui/sidebar-content";
import SidebarFooter from "@/components/ui/sidebar-footer";

export const AppSidebar = () => {
  return (
    <div className="w-64 border-r border-white/20 bg-black/25 backdrop-blur-sm flex flex-col justify-between">
      <div>
        <SidebarHeader />
        <SidebarContent />
      </div>

      <SidebarFooter />
    </div>
  );
};
