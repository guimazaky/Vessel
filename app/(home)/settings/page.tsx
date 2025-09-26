import React from "react";
import SettingBigCard from "@/components/ui/widgets/setting-big-card";
import { Briefcase, DollarSign, TrendingUp } from "lucide-react";

const infos = [
  {
    title: "Configurações de conta",
    label1: "Seu Nome",
    value1: "Guilherme Akiyama ",
    label2: "Endereço de email",
    value2: "exemplo@email.com",
    label3: "Moeda",
    value3: "BRL",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col w-full m-8 gap-4">
      <div className="flex justify-between h-25 center ">
        <div>
          <h1 className="text-4xl font-bold">Configurações</h1>
          <span className="text-sm font-thin text-white/75">
            Informações de sua conta
          </span>
        </div>
      </div>
      <div>
        <SettingBigCard label={infos} />
      </div>
    </div>
  );
};
export default Page;
