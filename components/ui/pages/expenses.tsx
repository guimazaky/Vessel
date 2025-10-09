import React from "react";
import SmallCard from "@/components/ui/widgets/small-card";
import { ArrowUp, DollarSign } from "lucide-react";
import ExpensesBigCard from "@/components/ui/widgets/expenses-big-card";

const small = [
  {
    name: "Gasto total",
    value: 1,
    label: "+12% this month",
    icon: DollarSign,
  },
  {
    name: "Maior gasto",
    value: 1,
    label: "teste",
    icon: ArrowUp,
  },
];

const big = [
  {
    name: "Housing",
    value: 800,
    percentage: 61,
    color: "#00ffff",
  },
  {
    name: "Food & Dining",
    value: 250,
    percentage: 19,
    color: "#ffff00",
  },
  {
    name: "Transportation",
    value: 150,
    percentage: 12,
    color: "#ff0000",
  },
  {
    name: "Entertainment",
    value: 100,
    percentage: 8,
    color: "#00ff00",
  },
];

const Expenses = () => {
  return (
    <div className="flex flex-col w-full m-8 gap-4 ml-72">
      <div className="flex justify-between h-25  center  ">
        <div>
          <h1 className="text-4xl font-bold">Controle de gastos</h1>
          <span className="text-sm font-thin text-white/75">
            Acompanhe e gerencie todas as suas fontes de gastos.
          </span>
        </div>
        <div className="flex gap-4"></div>
      </div>
      <div className="flex flex-col gap-4 ">
        <SmallCard label={small} />
        <ExpensesBigCard label={big} />
      </div>
    </div>
  );
};
export default Expenses;
