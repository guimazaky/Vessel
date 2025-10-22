"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/shadcn/chart";

interface CustomBarChartProps {
  chartData?:
    | {
        month: string;
        income: number;
        expenses: number;
      }[]
    | null;
}

const chartConfig = {
  income: {
    label: "Income",
    color: "#16a249",
  },
  expenses: {
    label: "Expenses",
    color: "#3b82f6",
  },
} satisfies ChartConfig;

const CustomBarChart: React.FC<CustomBarChartProps> = ({ chartData }) => {
  const data = chartData?.length
    ? chartData
    : [
        { month: "Jan", income: 0, expenses: 0 },
        { month: "Feb", income: 0, expenses: 0 },
        { month: "Mar", income: 0, expenses: 0 },
      ];

  return (
    <div className="flex w-full">
      <Card className="bg-black/25 w-full">
        <CardHeader>
          <CardTitle className="text-lg">Ganhos/Gastos</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="max-h-60 w-full">
            <BarChart accessibilityLayer data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                tick={{ fontSize: 15 }}
              />
              <YAxis axisLine={false} tickLine={false} width={25} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="income" fill="var(--color-income)" radius={4} />
              <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomBarChart;
