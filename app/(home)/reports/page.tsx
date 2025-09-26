import React from "react";
import SmallCard from "@/components/ui/widgets/small-card";
import { BarChart3, Calendar, TrendingUp } from "lucide-react";
import CustomBarChart from "@/components/ui/widgets/custom-bar-chart";
import CustomPieChart from "@/components/ui/widgets/custom-pie-chart";
import CustomLineChart from "@/components/ui/widgets/custom-line-chart";

const small = [
  {
    name: "Monthly Trend",
    amount: "+12.5%",
    icon: TrendingUp,
  },
  {
    name: "Average Savings",
    amount: "$1,200",
    icon: BarChart3,
  },
  {
    name: "Best Month",
    amount: "April",
    icon: Calendar,
  },
];

const Page = () => {
  return (
    <div className="flex flex-col w-full m-8 gap-4">
      <div className="flex justify-between h-25 center ">
        <div>
          <h1 className="text-4xl font-bold">Financial Reports</h1>
          <span className="text-sm font-thin text-white/75">
            Detailed insights into your financial performance
          </span>
        </div>
      </div>
      <div>
        <SmallCard label={small} />
      </div>

      <div className="flex w-full gap-4">
        <CustomBarChart />
        <CustomPieChart />
        <CustomLineChart />
      </div>
    </div>
  );
};
export default Page;
