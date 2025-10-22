import React from "react";
import { redirect } from "next/navigation";
import CustomLineChart from "@/components/ui/widgets/custom-line-chart";
import CustomBarChart from "@/components/ui/widgets/custom-bar-chart";
import CustomPieChart from "@/components/ui/widgets/custom-pie-chart";
import { auth } from "@/lib/auth";
import SmallCard from "@/components/ui/widgets/small-card";
import { getUserIncomes } from "@/lib/actions/income-actions";
import { ArrowUp, DollarSign } from "lucide-react";
import { getUserExpense } from "@/lib/actions/expenses-actions";
import {
  getBarChartData,
  getLineChartData,
  getPieChartData,
} from "@/lib/actions/reports-actions";

type Session = typeof auth.$Infer.Session;

interface FormProps extends React.ComponentProps<"div"> {
  session: Session | null;
}

async function getIncomes({ session }: FormProps) {
  if (!session) {
    redirect("/login");
  }

  const incomes = await getUserIncomes(session.user.id);

  const expenses = await getUserExpense(session.user.id);

  const totalIncome = incomes.reduce((acc, i) => acc + i.value, 0);

  const totalExpense = expenses.reduce((acc, i) => acc + i.value, 0);

  const biggestIncome = incomes.reduce(
    (prev, curr) => (prev.value > curr.value ? prev : curr),
    { id: "", name: "", value: 0, frequency: "MONTHLY" },
  );
  const biggestExpense = expenses.reduce(
    (prev, curr) => (prev.value > curr.value ? prev : curr),
    { id: "", name: "", value: 0, frequency: "MONTHLY" },
  );

  const small = [
    {
      name: "Ganho total",
      value: totalIncome.toFixed(2),
      icon: DollarSign,
      color: "text-green-500",
    },
    {
      name: "Maior ganho",
      value: biggestIncome.value,
      label: biggestIncome.name,
      icon: ArrowUp,
      color: "text-green-500",
    },
    {
      name: "Gasto total",
      value: totalExpense.toFixed(2),
      icon: ArrowUp,
      color: "text-red-500",
    },
    {
      name: "Maior gasto",
      value: biggestExpense.value,
      label: biggestExpense.name,
      icon: ArrowUp,
      color: "text-red-500",
    },
  ];

  return { small };
}

const Dashboard = async ({ session }: FormProps) => {
  if (!session) redirect("/login");

  const { small } = await getIncomes({ session });
  const [
    barChartData,
    { chartData: pieChartData, chartConfig: pieChartConfig },
    lineChartData,
  ] = await Promise.all([
    getBarChartData(session.user.id),
    getPieChartData(session.user.id),
    getLineChartData(session.user.id),
  ]);

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full m-8 gap-4 ml-72">
        <div className="flex justify-between h-25 center ">
          <div>
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <span className="text-sm font-thin text-white/75">
              Bem-vindo! Aqui está sua visão geral financeira deste mês.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SmallCard label={small} />
          <div className="flex gap-4">
            <CustomBarChart chartData={barChartData} />
            <CustomPieChart data={pieChartData} config={pieChartConfig} />
            <CustomLineChart chartData={lineChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
