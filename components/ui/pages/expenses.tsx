import React from "react";
import SmallCard from "@/components/ui/widgets/small-card";
import { ArrowUp, DollarSign } from "lucide-react";
import ExpensesBigCard from "@/components/ui/widgets/expenses-big-card";
import { redirect } from "next/navigation";
import {
  getUserCategories,
  getUserExpense,
} from "@/lib/actions/expenses-actions";
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

interface FormProps {
  session: Session | null;
}

async function getCategories({ session }: FormProps) {
  if (!session) {
    redirect("/login");
  }

  const categories = await getUserCategories(session.user.id);

  const categoriesLabel = categories.map((i) => ({
    id: i.id,
    name: i.name,
    color: i.color,
  }));

  return { categoriesLabel };
}

async function getExpenses({ session }: FormProps) {
  if (!session) redirect("/login");

  const expenses = await getUserExpense(session.user.id);

  const expensesLabel = expenses.map((i) => ({
    id: i.id,
    name: i.name,
    value: i.value,
    frequency: frequencyLabels[i.frequency],
    categoryId: i.categoryId,
  }));

  const totalExpense = expenses.reduce((acc, i) => acc + i.value, 0);

  const biggestExpense = expenses.reduce(
    (prev, curr) => (prev.value > curr.value ? prev : curr),
    { id: "", name: "", value: 0, frequency: "MONTHLY" },
  );

  const small = [
    {
      name: "Gasto total",
      value: totalExpense.toFixed(2),
      icon: DollarSign,
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

  return { expensesLabel, small };
}

const frequencyLabels: Record<string, string> = {
  DAILY: "diário",
  MONTHLY: "mensal",
  UNIQUE: "único",
};

const Expenses = async ({ session }: FormProps) => {
  if (!session) redirect("/login");

  const { categoriesLabel } = await getCategories({ session });
  const { expensesLabel, small } = await getExpenses({ session });

  return (
    <div className="flex flex-col w-full m-8 gap-4 ml-72">
      <div className="flex justify-between h-25  center  ">
        <div>
          <h1 className="text-4xl font-bold">Controle de gastos</h1>
          <span className="text-sm font-thin text-white/75">
            Acompanhe e gerencie todas as suas fontes de gastos.
          </span>
        </div>
        <div className="flex gap-4"></div>
      </div>
      <div className="flex flex-col gap-4 ">
        <SmallCard label={small} />
        <ExpensesBigCard
          categories={categoriesLabel}
          expenses={expensesLabel}
        />
      </div>
    </div>
  );
};
export default Expenses;
