import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Button } from "@/components/ui/shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import { Label } from "@/components/ui/shadcn/label";
import { Input } from "@/components/ui/shadcn/input";
import ColorPicker from "@/components/ui/widgets/color-picker";

interface ExpensesItem {
  name: string;
  amount: number;
  percentage: number;
  color: string;
}

interface CardProps {
  label: ExpensesItem[];
}

const ExpensesBigCard = ({ label }: CardProps) => {
  return (
    <div>
      <Card className="bg-black/25">
        <CardHeader className="flex justify-between">
          <CardTitle>Income Sources</CardTitle>
          <div>
            <Dialog>
              <DialogTrigger className="center bg-gradient-accent p-2 px-4 gap-2 rounded-lg cursor-pointer text-black hover:text-white">
                Create Category
              </DialogTrigger>
              <DialogContent className="gap-4 border border-white/25">
                <DialogHeader>
                  <DialogTitle>Create New Category</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                  <Label>Category Name</Label>
                  <Input
                    id="income-name"
                    placeholder="Housing, Food, Entertainment"
                    required
                  />
                </div>
                <ColorPicker />

                <div className="flex justify-end space-x-2 pt-4 ">
                  <Button
                    variant="outline"
                    type="button"
                    className="border border-white/25 cursor-pointer"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    className="bg-gradient-accent hover:shadow-glow cursor-pointer"
                  >
                    Crete Category
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {label.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-4 rounded-lg   transition-colors border border-white/25 hover:bg-white/5"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                  <div>
                    <h3 className="font-medium ">{item.name}</h3>
                    <p className="text-sm text-white/50">
                      {item.percentage}% of total expenses
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold ">${item.amount}</p>
                  <div className="w-40 bg-black/50 rounded-full h-2 mt-1">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default ExpensesBigCard;
