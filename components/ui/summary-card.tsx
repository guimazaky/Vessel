import React from "react";
import { Briefcase, DollarSign, TrendingUp } from "lucide-react";

const SummaryCard = () => {
  const label = [
    {
      name: "Total Income",
      icon: DollarSign,
      value: "$2,500",
      change: "+12.5% this month",
    },
    {
      name: "Primary Source",
      icon: Briefcase,
      value: "$2,200",
      change: "Stable",
    },
    {
      name: "Growth Rate",
      icon: TrendingUp,
      value: "+8.3%",
      change: "Compared to last month",
    },
  ];
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
              <h1 className="text-lg font-bold">{item.value}</h1>
              <span className="text-sm text-white/50">{item.change}</span>
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
export default SummaryCard;
