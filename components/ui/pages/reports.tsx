import React from "react";
import CustomBarChart from "@/components/ui/widgets/custom-bar-chart";
import CustomPieChart from "@/components/ui/widgets/custom-pie-chart";
import CustomLineChart from "@/components/ui/widgets/custom-line-chart";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

import {
  getBarChartData,
  getPieChartData,
  getLineChartData,
} from "@/lib/actions/reports-actions";

type Session = typeof auth.$Infer.Session;

interface FormProps {
  session: Session | null;
}

const Reports = async ({ session }: FormProps) => {
  if (!session) redirect("/login");

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
    <div className="flex flex-col w-full m-8 gap-4 ml-72">
      <div className="flex justify-between h-25 center">
        <div>
          <h1 className="text-4xl font-bold">Relatórios financeiros</h1>
          <span className="text-sm font-thin text-white/75">
            Análises detalhadas do seu desempenho financeiro
          </span>
        </div>
      </div>

      <div className="flex w-full gap-4">
        <CustomBarChart chartData={barChartData} />
        <CustomPieChart data={pieChartData} config={pieChartConfig} />
        <CustomLineChart chartData={lineChartData} />
      </div>
    </div>
  );
};

export default Reports;
