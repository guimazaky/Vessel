import React from "react";
import { Wallet } from "lucide-react";

const SidebarHeader = () => {
  return (
    <div className=" h-25 border-b border-white/20 flex  items-center justify-between ">
      <div className="flex center font-semibold text-2xl p-4 gap-4">
        <div className="bg-gradient-accent p-2 rounded-lg">
          <Wallet color="#000000" strokeWidth={2} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl ">Vessel</h1>
          <span className="text-sm font-thin text-white/50">
            Controle financeiro
          </span>
        </div>
      </div>
    </div>
  );
};
export default SidebarHeader;
