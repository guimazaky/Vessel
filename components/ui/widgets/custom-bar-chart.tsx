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

const chartData = [
  { month: "January", income: 200, expenses: 152 },
  { month: "February", income: 218, expenses: 165 },
  { month: "March", income: 197, expenses: 149 },
  { month: "April", income: 210, expenses: 170 },
  { month: "May", income: 229, expenses: 181 },
  { month: "June", income: 220, expenses: 174 },
];
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

const CustomBarChart = () => {
  return (
    <div className="flex w-full">
      <Card className="bg-black/25 w-full">
        <CardHeader>
          <CardTitle className="text-lg">Income/Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <ChartContainer config={chartConfig} className="max-h-60 w-full ">
              <BarChart accessibilityLayer data={chartData}>
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
                <Bar
                  dataKey="expenses"
                  fill="var(--color-expenses)"
                  radius={4}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default CustomBarChart;
