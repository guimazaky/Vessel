import React from "react";

import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className=" h-30  center justify-between px-8">
      <div>
        <h1 className="text-3xl font-bold">Income Management</h1>
        <span className="text-sm font-thin text-white/75">
          Track and manage all your income sources
        </span>
      </div>
      <div className="center bg-gradient-accent p-2 px-4 gap-2 rounded-lg cursor-pointer  ">
        <Dialog>
          <DialogTrigger className="text-black text-md hover:text-white cursor-pointer">
            Add Income
          </DialogTrigger>
          <DialogContent className="gap-4 border border-white/25">
            <DialogHeader>
              <DialogTitle>Add New Income Source</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-2">
              <Label>Income Name</Label>
              <Input
                id="income-name"
                placeholder="Main Job, Freelance, Investment"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Income Value</Label>
              <Input
                id="income-value"
                type="number"
                placeholder="Enter amount"
                required
              />
            </div>
            <div className="space-y-3">
              <RadioGroup defaultValue="option-one">
                <Label>Income Type</Label>
                <div className="flex items-center space-x-2 ">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label>Main Salary</Label>
                </div>
                <div className="flex items-center space-x-2 ">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label>Additional Source</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-[180px] border border-white/25">
                  <SelectValue placeholder="Payment Period" />
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
                Add Income
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
export default Header;
