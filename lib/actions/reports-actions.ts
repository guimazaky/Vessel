"use server";

import { PrismaClient } from "@/lib/generated/prisma";
import { ChartConfig } from "@/components/ui/shadcn/chart";

const prisma = new PrismaClient();

export async function getBarChartData(userId: string) {
  const [incomes, expenses] = await Promise.all([
    prisma.income.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
    }),
    prisma.expenses.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
    }),
  ]);

  const incomeGrouped = incomes.reduce(
    (acc, income) => {
      const date = new Date(income.createdAt);
      const monthKey = `${date.getFullYear()}-${String(
        date.getMonth() + 1,
      ).padStart(2, "0")}`;
      if (!acc[monthKey]) acc[monthKey] = 0;
      acc[monthKey] += income.value;
      return acc;
    },
    {} as Record<string, number>,
  );

  const expenseGrouped = expenses.reduce(
    (acc, expense) => {
      const date = new Date(expense.createdAt);
      const monthKey = `${date.getFullYear()}-${String(
        date.getMonth() + 1,
      ).padStart(2, "0")}`;
      if (!acc[monthKey]) acc[monthKey] = 0;
      acc[monthKey] += expense.value;
      return acc;
    },
    {} as Record<string, number>,
  );

  const allMonths = new Set([
    ...Object.keys(incomeGrouped),
    ...Object.keys(expenseGrouped),
  ]);

  const chartData = Array.from(allMonths)
    .sort((a, b) => a.localeCompare(b)) // ordena por data (ano-mês)
    .map((key) => {
      const formattedMonth = new Date(`${key}-01`).toLocaleString("pt-BR", {
        month: "long",
      });

      return {
        month: formattedMonth,
        income: parseFloat((incomeGrouped[key] || 0).toFixed(2)),
        expenses: parseFloat((expenseGrouped[key] || 0).toFixed(2)),
      };
    });

  return chartData;
}

export interface PieChartCategory {
  id: string;
  name: string;
  color: string;
  value: number;
  percentage: number;
}

export async function getPieChartData(userId: string) {
  const [categories, expenses] = await Promise.all([
    prisma.category.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
    }),
    prisma.expenses.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
    }),
  ]);

  const totalExpenses = expenses.reduce((acc, e) => acc + e.value, 0);

  const chartData = categories.map((cat, index) => {
    const categoryTotal = expenses
      .filter((e) => e.categoryId === cat.id)
      .reduce((acc, e) => acc + e.value, 0);

    return {
      category: cat.name,
      percentage: totalExpenses
        ? parseFloat(((categoryTotal / totalExpenses) * 100).toFixed(1))
        : 0,
      fill: cat.color,
    };
  });

  const chartConfig: ChartConfig = categories.reduce((acc, cat) => {
    acc[cat.name] = { label: cat.name, color: cat.color };
    return acc;
  }, {} as ChartConfig);

  return { chartData, chartConfig };
}

export async function getLineChartData(userId: string) {
  const [incomes, expenses] = await Promise.all([
    prisma.income.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
    }),
    prisma.expenses.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
    }),
  ]);

  const incomeGrouped = incomes.reduce(
    (acc, income) => {
      const date = new Date(income.createdAt);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      if (!acc[monthKey]) acc[monthKey] = 0;
      acc[monthKey] += income.value;
      return acc;
    },
    {} as Record<string, number>,
  );

  const expenseGrouped = expenses.reduce(
    (acc, expense) => {
      const date = new Date(expense.createdAt);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      if (!acc[monthKey]) acc[monthKey] = 0;
      acc[monthKey] += expense.value;
      return acc;
    },
    {} as Record<string, number>,
  );

  const allMonths = new Set([
    ...Object.keys(incomeGrouped),
    ...Object.keys(expenseGrouped),
  ]);

  const chartData = Array.from(allMonths)
    .sort((a, b) => a.localeCompare(b))
    .map((key) => {
      const formattedMonth = new Date(`${key}-01`).toLocaleString("pt-BR", {
        month: "long",
      });

      const income = incomeGrouped[key] || 0;
      const expenses = expenseGrouped[key] || 0;
      const profit = income - expenses; // Lucro = ganhos - gastos

      return {
        month: formattedMonth,
        income: parseFloat(income.toFixed(2)),
        expenses: parseFloat(expenses.toFixed(2)),
        profit: parseFloat(profit.toFixed(2)),
      };
    });

  return chartData;
}
