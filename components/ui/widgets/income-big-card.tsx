import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";

interface IncomeItem {
  name: string;
  amount: number;
  frequency: string;
  status: string;
}

interface CardProps {
  label: IncomeItem[];
}

const IncomeBigCard = ({ label }: CardProps) => {
  return (
    <div>
      <Card className="bg-black/25">
        <CardHeader>
          <CardTitle className="">Income Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {label.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-4 rounded-lg border border-white/25 hover:bg-white/5 "
              >
                <div>
                  <h3 className="font-medium ">{item.name}</h3>
                  <p className="text-sm text-white/50">
                    {item.frequency} • {item.status}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-400">${item.amount}</p>
                  <p className="text-xs ">per month</p>
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
