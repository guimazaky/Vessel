import React from "react";
import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const option = {
    title: {
      show: false,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "Expenses",
        type: "bar",
        barWidth: "30%",
        data: [50, 60, 150, 100, 120, 155, 80, 60, 52, 100, 120, 150],
        itemStyle: {
          color: "#FC4B08",
          borderRadius: [100, 100, 0, 0],
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-full text-center gap-4 items-center">
      <span className="text-4xl text-white/50 font-inter">Year:</span>
      <h1 className="text-5xl font-lexend">2025</h1>
      <ReactECharts option={option} style={{ height: "400px", width: "90%" }} />
    </div>
  );
};

export default BarChart;
