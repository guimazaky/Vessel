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
  ChartTooltip,
  ChartTooltipContent,
} from "../shadcn/chart";
import {
  CartesianGrid,
  LabelList,
  Line,
  XAxis,
  LineChart,
  Area,
  YAxis,
} from "recharts";

const chartData = [
  { month: "January", profit: 48 },
  { month: "February", profit: 53 },
  { month: "March", profit: 48 },
  { month: "April", profit: 20 },
  { month: "May", profit: 48 },
  { month: "June", profit: 46 },
];
const chartConfig = {
  profit: {
    label: "Profit",
    color: "#16a249",
  },
} satisfies ChartConfig;

const CustomLineChart = () => {
  return (
    <div className="flex w-full">
      <Card className="bg-black/25 w-full">
        <CardHeader>
          <CardTitle className="text-lg">Profit</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <ChartContainer config={chartConfig} className="max-h-60">
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  top: 20,
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
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
                  dot={{
                    fill: "var(--color-profit)",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-white"
                    fontSize={12}
                  />
                </Line>
              </LineChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default CustomLineChart;
