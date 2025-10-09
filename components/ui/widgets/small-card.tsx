import React from "react";
import { LucideIcon } from "lucide-react";

interface IncomeItem {
  name: string;
  value: number | string;
  label?: string;
  icon: LucideIcon;
}

interface CardProps {
  label: IncomeItem[];
}

const SmallCard = ({ label }: CardProps) => {
  return (
    <div className="flex w-full gap-4 ">
      {label.map((item) => (
        <div
          className="flex justify-between items-center gap-6 bg-black/25 p-4 rounded-lg border border-white/15 w-full"
          key={item.name}
        >
          <div className="flex">
            <div>
              <span className="text-sm text-white/50">{item.name}</span>
              <h1 className="text-lg font-bold">R$ {item.value}</h1>
              <span className="text-sm text-white/50">{item.label}</span>
            </div>
          </div>

          <div className="bg-gradient-accent rounded-lg p-2">
            <item.icon color={"black"} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default SmallCard;
