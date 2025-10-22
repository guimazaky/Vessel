import React from "react";
import SettingBigCard from "@/components/ui/widgets/setting-big-card";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUserInfo } from "@/lib/actions/auth-actions";

type Session = typeof auth.$Infer.Session;

interface FormProps {
  session: Session | null;
}

async function getInfos({ session }: FormProps) {
  if (!session) {
    redirect("/login");
  }

  const userInfos = await getUserInfo(session.user.id);

  if (!userInfos) return { label: null };

  const label = [
    {
      title: "Configurações de conta",
      label1: "Seu Nome",
      value1: userInfos.name,
      label2: "Endereço de email",
      value2: userInfos.email,
      label3: "Moeda",
      value3: "BRL",
    },
  ];

  return { label };
}

const Page = async ({ session }: FormProps) => {
  if (!session) redirect("/login");

  const { label } = await getInfos({ session });

  return (
    <div className="flex flex-col w-full m-8 gap-4 ml-72">
      <div className="flex justify-between h-25 center ">
        <div>
          <h1 className="text-4xl font-bold">Configurações</h1>
          <span className="text-sm font-thin text-white/75">
            Informações de sua conta
          </span>
        </div>
      </div>
      <div>
        <SettingBigCard label={label} />
      </div>
    </div>
  );
};
export default Page;
