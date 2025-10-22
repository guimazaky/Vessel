import React from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUserIncomes } from "@/lib/actions/income-actions";
import IncomeBigCard from "@/components/ui/widgets/income-big-card";
import SmallCard from "@/components/ui/widgets/small-card";
import { ArrowUp, DollarSign } from "lucide-react";

type Session = typeof auth.$Infer.Session;

interface FormProps {
  session: Session | null;
}

async function getIncomes({ session }: FormProps) {
  if (!session) {
    redirect("/login");
  }

  const incomes = await getUserIncomes(session.user.id);

  const big = incomes.map((i) => ({
    id: i.id,
    name: i.name,
    value: parseFloat(i.value.toFixed(2)),
    frequency: frequencyLabels[i.frequency],
  }));

  const totalIncome = incomes.reduce((acc, i) => acc + i.value, 0);

  const biggestIncome = incomes.reduce(
    (prev, curr) => (prev.value > curr.value ? prev : curr),
    { id: "", name: "", value: 0, frequency: "MONTHLY" },
  );

  const small = [
    {
      name: "Ganho total",
      value: totalIncome.toFixed(2),
      icon: DollarSign,
      color: "text-green-500",
    },
    {
      name: "Maior ganho",
      value: biggestIncome.value,
      label: biggestIncome.name,
      icon: ArrowUp,
      color: "text-green-500",
    },
  ];

  return { big, small };
}

const frequencyLabels: Record<string, string> = {
  DAILY: "Diário",
  MONTHLY: "Mensal",
  UNIQUE: "Único",
};

const Income = async ({ session }: FormProps) => {
  if (!session) redirect("/login");

  const { big, small } = await getIncomes({ session });

  return (
    <div className="flex flex-col w-full m-8 gap-4 ml-72">
      <div className="flex justify-between h-25  center  ">
        <div>
          <h1 className="text-4xl font-bold">Controle de ganhos</h1>
          <span className="text-sm font-thin text-white/75">
            Acompanhe e gerencie todas as suas fontes de renda.
          </span>
        </div>
        <div className="flex gap-4"></div>
      </div>
      <div className="flex flex-col gap-4 ">
        <SmallCard label={small} />
        <IncomeBigCard label={big} />
      </div>
    </div>
  );
};
export default Income;
