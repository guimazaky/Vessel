import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import DeleteButton from "@/components/ui/widgets/delete-button";
import AddButton from "@/components/ui/widgets/add-button";

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
          <AddButton />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {label.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-4 rounded-lg border border-white/25 hover:bg-white/5 "
              >
                <div>
                  <h3 className="font-medium text-xl">{item.name}</h3>
                  <p className="text-sm text-white/50">{item.frequency}</p>
                </div>
                <div className="text-right flex center gap-4">
                  <div>
                    <p className="font-semibold text-green-400 text-xl">
                      R$ {item.value}
                    </p>
                  </div>
                  <DeleteButton incomeId={item.id} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncomeBigCard;
