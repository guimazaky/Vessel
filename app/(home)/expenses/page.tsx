import React from "react";
import SmallCard from "@/components/ui/widgets/small-card";
import { ShoppingCart, DollarSign, TrendingDown } from "lucide-react";
import ExpensesBigCard from "@/components/ui/widgets/expenses-big-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import { Label } from "@/components/ui/shadcn/label";
import { Input } from "@/components/ui/shadcn/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/shadcn/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";
import { Button } from "@/components/ui/shadcn/button";

const small = [
  {
    name: "Total Expenses",
    amount: "$1,300",
    label: "-8.2%\n" + "vs last month",
    icon: DollarSign,
  },
  {
    name: "Largest Category",
    amount: "$800",
    label: "Housing\n" + "61% of expenses",
    icon: ShoppingCart,
  },
  {
    name: "Daily Average",
    amount: "$43",
    label: "-$5\n" + "vs last month",
    icon: TrendingDown,
  },
];

const big = [
  {
    name: "Housing",
    amount: 800,
    percentage: 61,
    color: "bg-blue-500",
  },
  {
    name: "Food & Dining",
    amount: 250,
    percentage: 19,
    color: "bg-green-500",
  },
  {
    name: "Transportation",
    amount: 150,
    percentage: 12,
    color: "bg-yellow-500",
  },
  {
    name: "Entertainment",
    amount: 100,
    percentage: 8,
    color: "bg-red-500",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col w-full m-8 gap-4">
      <div className="flex justify-between h-25 center">
        <div>
          <h1 className="text-4xl font-bold">Expense Management</h1>
          <span className="text-sm font-thin text-white/75">
            Monitor and control your spending
          </span>
        </div>
        <div className="center bg-gradient-accent p-2 px-4 gap-2 rounded-lg cursor-pointer  ">
          <Dialog>
            <DialogTrigger className="text-black text-md hover:text-white cursor-pointer">
              Add Expense
            </DialogTrigger>
            <DialogContent className="gap-4 border border-white/25">
              <DialogHeader>
                <DialogTitle>Add New Expense</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-2">
                <Label>Expense Name</Label>
                <Input
                  id="income-name"
                  placeholder="Rent, Groceries, Utilities"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Expense Value</Label>
                <Input
                  id="income-value"
                  type="number"
                  placeholder="Enter amount"
                  required
                />
              </div>
              <div className="flex justify-between space-y-3">
                <RadioGroup defaultValue="option-one">
                  <Label>Select Category</Label>
                  <div className="flex items-center space-x-2 ">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label>Housing</Label>
                  </div>
                  <div className="flex items-center space-x-2 ">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label>Food</Label>
                  </div>
                  <div className="flex items-center space-x-2 ">
                    <RadioGroupItem value="option-three" id="option-three" />
                    <Label>Transportation</Label>
                  </div>
                  <div className="flex items-center space-x-2 ">
                    <RadioGroupItem value="option-four" id="option-four" />
                    <Label>Entertainment</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[180px] border border-white/25">
                    <SelectValue placeholder="Expense Period" />
                  </SelectTrigger>
                  <SelectContent className="bg-background">
                    <SelectItem value="daily" className="cursor-pointer">
                      Daily
                    </SelectItem>
                    <SelectItem value="monthly" className="cursor-pointer">
                      Monthly
                    </SelectItem>
                    <SelectItem value="yearly" className="cursor-pointer">
                      Yearly
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
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
                  Add Expense
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <SmallCard label={small} />
        <ExpensesBigCard label={big} />
      </div>
    </div>
  );
};
export default Page;
