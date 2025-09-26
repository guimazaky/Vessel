"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/shadcn/chart";
import { Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

const chartData = [
  { category: "1", percentage: 61, fill: "var(--color-1)" },
  { category: "2", percentage: 19, fill: "var(--color-2)" },
  { category: "3", percentage: 12, fill: "var(--color-3)" },
  { category: "4", percentage: 8, fill: "var(--color-4)" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  1: {
    label: "Housing",
    color: "#3b82f6",
  },
  2: {
    label: "Food & Dining",
    color: "#22c55e",
  },
  3: {
    label: "Transportation",
    color: "#eab308",
  },
  4: {
    label: "Entertainment",
    color: "#ef4444",
  },
} satisfies ChartConfig;

const CustomPieChart = () => {
  return (
    <div className="flex w-full ">
      <Card className="bg-black/25 w-full">
        <CardHeader>
          <CardTitle className="text-lg">Expenses categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-60 w-full"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="percentage"
                  nameKey="category"
                  innerRadius={40}
                  strokeWidth={10}
                  activeIndex={0}
                />
                <ChartLegend
                  content={<ChartLegendContent nameKey="category" />}
                  className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
                />
              </PieChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default CustomPieChart;
