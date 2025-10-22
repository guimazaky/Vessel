import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import DeleteButton from "@/components/ui/widgets/delete-button";
import AddButton from "@/components/ui/widgets/add-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";
import { Label } from "@/components/ui/shadcn/label";
import { Input } from "@/components/ui/shadcn/input";
import {
  handleCreateIncome,
  handleDeleteIncome,
} from "@/lib/actions/income-actions";

interface IncomeItem {
  id: string;
  name: string;
  value: number;
  frequency: string;
}

interface CardProps {
  label: IncomeItem[];
}

const IncomeBigCard = ({ label }: CardProps) => {
  return (
    <div>
      <Card className="bg-black/25">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-2xl">Fontes de Renda</CardTitle>

          <AddButton
            triggerLabel="Adicionar ganho"
            title="Adicionar novo ganho"
            onSubmit={handleCreateIncome}
            submitLabel="Adicionar"
          >
            <div className="flex flex-col gap-2">
              <Label>Nome</Label>
              <Input
                name="name"
                placeholder="Main Job, Freelance, Investment"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Valor</Label>
              <Input
                name="value"
                type="number"
                step="0.01"
                placeholder="Quantidade"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Frequência</Label>
              <Select name="frequency" defaultValue="MONTHLY">
                <SelectTrigger className="w-[180px] border border-white/25">
                  <SelectValue placeholder="Frequência" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  <SelectItem value="UNIQUE">Único</SelectItem>
                  <SelectItem value="DAILY">Diário</SelectItem>
                  <SelectItem value="MONTHLY">Mensal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AddButton>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {label.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-4 rounded-lg border border-white/25 hover:bg-white/5 cursor-pointer transition-colors gap-4"
              >
                <div className="flex justify-between w-full">
                  <div>
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-sm text-white/50">{item.frequency}</p>
                  </div>
                  <div className="text-right flex items-center gap-4">
                    <p className="font-semibold text-green-400 text-xl">
                      R$ {item.value.toFixed(2)}
                    </p>
                  </div>
                </div>

                <DeleteButton
                  title="Excluir ganho?"
                  onSubmit={handleDeleteIncome}
                  hiddenFields={[{ name: "incomeId", value: item.id }]}
                  submitLabel="Excluir ganho"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncomeBigCard;
