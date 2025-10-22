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
  ChartTooltipContent,
  ChartConfig,
  ChartTooltip,
} from "../shadcn/chart";
import {
  CartesianGrid,
  LabelList,
  Line,
  XAxis,
  LineChart,
  YAxis,
} from "recharts";

interface CustomLineChartProps {
  chartData: { month: string; profit: number }[];
}

const chartConfig: ChartConfig = {
  profit: { label: "Profit", color: "#16a249" },
};

const CustomLineChart = ({ chartData }: CustomLineChartProps) => {
  const data = chartData?.length
    ? chartData
    : [
        { month: "Jan", profit: 0 },
        { month: "Feb", profit: 0 },
        { month: "Mar", profit: 0 },
      ];

  return (
    <div className="flex w-full">
      <Card className="bg-black/25 w-full">
        <CardHeader>
          <CardTitle className="text-lg">Lucro</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="max-h-60">
            <LineChart data={data} margin={{ top: 20, left: 12, right: 12 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis axisLine={false} tickLine={false} width={25} />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />

              <Line
                dataKey="profit"
                type="natural"
                stroke="var(--color-profit)"
                strokeWidth={2}
                dot={{ fill: "var(--color-profit)" }}
                activeDot={{ r: 6 }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-white"
                  fontSize={12}
                  formatter={(value: number) => `R$${Math.round(value)}`}
                />
              </Line>
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomLineChart;
