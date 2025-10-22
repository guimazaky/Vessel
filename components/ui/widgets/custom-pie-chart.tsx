"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartConfig,
  ChartTooltipContent,
} from "@/components/ui/shadcn/chart";
import { Pie, PieChart } from "recharts";

interface CustomPieChartProps {
  data: { category: string; percentage: number; fill: string }[];
  config: ChartConfig;
}

const CustomPieChart = ({ data, config }: CustomPieChartProps) => {
  const chartData =
    data?.length && data.length > 0
      ? data
      : [{ category: "Sem dados", percentage: 100, fill: "#8884d8" }];

  return (
    <div className="flex w-full">
      <Card className="bg-black/25 w-full">
        <CardHeader>
          <CardTitle className="text-lg">Gastos por Categoria</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={config}
            className="mx-auto aspect-square max-h-60 w-full"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;

                  const item = payload[0];

                  return (
                    <div className="bg-black/60 rounded-lg px-2 py-1 text-xs text-white">
                      {item.payload.category}: {Math.round(Number(item.value))}%
                    </div>
                  );
                }}
              />
              <Pie
                data={chartData}
                dataKey="percentage"
                nameKey="category"
                innerRadius={40}
                strokeWidth={10}
              />
              <ChartLegend
                content={<ChartLegendContent />}
                className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
export default CustomPieChart;
