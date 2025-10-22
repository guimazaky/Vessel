import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Label } from "@/components/ui/shadcn/label";
import { Input } from "@/components/ui/shadcn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";

import AddButton from "@/components/ui/widgets/add-button";
import {
  handleCreateCategory,
  handleCreateExpense,
  handleDeleteCategory,
  handleDeleteExpenses,
} from "@/lib/actions/expenses-actions";
import ColorPicker from "@/components/ui/widgets/color-picker";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/dialog";
import DeleteButton from "@/components/ui/widgets/delete-button";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area";

interface CategoryItem {
  id: string;
  name: string;
  color: string;
}

interface ExpenseItem {
  id: string;
  name: string;
  value: number;
  frequency: string;
  categoryId: string | null;
}

interface CardProps {
  categories: CategoryItem[];
  expenses: ExpenseItem[];
}

const ExpensesBigCard = ({ categories, expenses }: CardProps) => {
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.value,
    0,
  );

  return (
    <div>
      <Card className="bg-black/25">
        <CardHeader className="flex justify-between">
          <CardTitle className="text-2xl">Gastos</CardTitle>
          <div className="flex gap-4">
            <AddButton
              triggerLabel="Adicionar gasto"
              title="Adicionar novo gasto"
              onSubmit={handleCreateExpense}
              submitLabel="Adicionar"
            >
              <div className="flex flex-col gap-2">
                <Label>Nome</Label>
                <Input
                  name="name"
                  placeholder="Roupas, Almoço, Transporte"
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

              <div className="flex flex-col gap-2">
                <Label>Categoria</Label>
                <Select
                  name="categoryId"
                  defaultValue={categories[0]?.id}
                  required
                >
                  <SelectTrigger className="w-[180px] border border-white/25">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>

                  <SelectContent className="bg-background">
                    {categories.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        <div
                          className="inline-block w-3 h-3 mr-2 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </AddButton>

            <AddButton
              triggerLabel="Criar categoria"
              title="Criar nova categoria"
              onSubmit={handleCreateCategory}
              submitLabel="Criar"
            >
              <div className="flex flex-col gap-2">
                <Label>Nome da Categoria</Label>
                <Input
                  name="name"
                  placeholder="Saúde, Alimentação, Lazer"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <ColorPicker name="color" />
              </div>
            </AddButton>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {categories.map((item) => {
              const categoryExpenses = expenses.filter(
                (e) => e.categoryId === item.id,
              );
              const categoryTotal = categoryExpenses.reduce(
                (acc, e) => acc + e.value,
                0,
              );
              const percent =
                totalExpenses > 0
                  ? ((categoryTotal / totalExpenses) * 100).toFixed(1)
                  : "0";

              return (
                <div
                  key={item.id}
                  className="flex items-center p-2 px-4 rounded-lg transition-colors border border-white/25 cursor-pointer gap-4"
                >
                  <Dialog>
                    <DialogTrigger className="flex w-full">
                      <div className="rounded-lg hover:bg-white/10 flex justify-between w-full p-2">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <div className="flex flex-col items-start">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-white/50">
                              {percent}% de todos os gastos
                            </p>
                          </div>
                        </div>

                        <div className="text-right flex flex-col items-end gap-2 w-40">
                          <p className="text-sm font-medium">
                            R${" "}
                            {categoryTotal.toLocaleString("pt-BR", {
                              minimumFractionDigits: 2,
                            })}
                          </p>
                          <div className="w-full bg-black/50 rounded-full h-2">
                            <div
                              className="h-2 rounded-full transition-all duration-300"
                              style={{
                                backgroundColor: item.color,
                                width: `${percent}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>

                    <DialogContent className="border-white/25">
                      <DialogHeader>
                        <DialogTitle>
                          <div className="flex items-center space-x-3">
                            <div
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <h3 className="font-medium">{item.name}</h3>
                          </div>
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="w-full h-100 p-4">
                        <div className="flex flex-col gap-2">
                          {categoryExpenses.length === 0 ? (
                            <p className="text-sm text-white/50 text-center">
                              Nenhum gasto nesta categoria.
                            </p>
                          ) : (
                            categoryExpenses.map((expense) => (
                              <div
                                key={expense.id}
                                className="flex flex-col border-1 rounded-lg border-white/10 pb-2 mb-2"
                              >
                                <div className="flex justify-between items-center gap-2 px-4 p-2 ">
                                  <div className="flex justify-between w-full center">
                                    <div>
                                      <h1 className="text-lg font-medium">
                                        {expense.name}
                                      </h1>
                                      <p className="text-white/50">
                                        {expense.frequency}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-lg font-bold">
                                        {expense.value.toFixed(2)} R$
                                      </p>
                                    </div>
                                  </div>

                                  <DeleteButton
                                    title="Excluir gasto??"
                                    hiddenFields={[
                                      { name: "expensesId", value: expense.id },
                                    ]}
                                    onSubmit={handleDeleteExpenses}
                                  />
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>

                  <DeleteButton
                    title="Excluir categoria?"
                    hiddenFields={[{ name: "categoryId", value: item.id }]}
                    onSubmit={handleDeleteCategory}
                  />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpensesBigCard;
