"use client";

import React from "react";
import { Briefcase, DollarSign, TrendingDown } from "lucide-react";
import { redirect } from "next/navigation";
import ExpensesBigCard from "@/components/ui/widgets/expenses-big-card";
import CustomLineChart from "@/components/ui/widgets/custom-line-chart";
import { AppSidebar } from "@/components/ui/sidebar/app-sidebar";
import SmallCard from "@/components/ui/widgets/small-card";
import CustomBarChart from "@/components/ui/widgets/custom-bar-chart";
import CustomPieChart from "@/components/ui/widgets/custom-pie-chart";
import { auth } from "@/lib/auth";

const small = [
  {
    name: "Total Income",
    amount: "$2,500",
    label: "+12.5% this month",
    icon: DollarSign,
  },
  {
    name: "Primary Source",
    amount: "$2,200",
    label: "Stable",
    icon: Briefcase,
  },
  {
    name: "Total Expenses",
    amount: "$1,300",
    label: "-8.2%\n" + "vs last month",
    icon: DollarSign,
  },
  {
    name: "Daily Average",
    amount: "$43",
    label: "-$5\n" + "vs last month",
    icon: TrendingDown,
  },
];

const big = [
  {
    name: "Housing",
    amount: 800,
    percentage: 61,
    color: "bg-blue-500",
  },
  {
    name: "Food & Dining",
    amount: 250,
    percentage: 19,
    color: "bg-green-500",
  },
  {
    name: "Transportation",
    amount: 150,
    percentage: 12,
    color: "bg-yellow-500",
  },
  {
    name: "Entertainment",
    amount: 100,
    percentage: 8,
    color: "bg-red-500",
  },
];

type Session = typeof auth.$Infer.Session;

interface FormProps extends React.ComponentProps<"div"> {
  session: Session | null;
}

const Dashboard = ({ session }: FormProps) => {
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex w-full">
      <div>
        <AppSidebar />
      </div>
      <div className="flex flex-col w-full m-8 gap-4 ml-72">
        <div className="flex justify-between h-25 center ">
          <div>
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <span className="text-sm font-thin text-white/75">
              Bem-vindo de volta! Aqui está sua visão geral financeira deste
              mês.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SmallCard label={small} />
          <div className="flex gap-4">
            <CustomBarChart />
            <CustomPieChart />
            <CustomLineChart />
          </div>
          <ExpensesBigCard label={big} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
