"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import { Label } from "@/components/ui/shadcn/label";
import { Input } from "@/components/ui/shadcn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";
import { Button } from "@/components/ui/shadcn/button";
import { handleCreateIncome } from "@/lib/actions/income-actions";

const AddButton = () => {
  const [open, setOpen] = useState(false);

  const [frequency, setFrequency] = useState("MONTHLY");

  return (
    <div className="center bg-gradient-accent p-2 px-4 gap-8 rounded-lg cursor-pointer  ">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="text-black text-md hover:text-white cursor-pointer">
          Adicionar ganho
        </DialogTrigger>
        <DialogContent className="gap-4 border border-white/25">
          <form action={handleCreateIncome}>
            <DialogHeader className="my-2">
              <DialogTitle>Add New Income Source</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col my-4 gap-2">
              <Label>Income Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Main Job, Freelance, Investment"
                required
              />
            </div>
            <div className="flex flex-col my-4  gap-2">
              <Label>Income Value</Label>
              <Input
                id="value"
                name="value"
                type="number"
                step="0.01"
                placeholder="Enter amount"
                required
              />
            </div>

            <div>
              <input type="hidden" name="frequency" value={frequency} />
              <Select name="frequency" onValueChange={setFrequency}>
                <SelectTrigger className="w-[180px] border border-white/25">
                  <SelectValue placeholder="Frequência" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  <SelectItem value="DAILY" className="cursor-pointer">
                    Diário
                  </SelectItem>
                  <SelectItem value="MONTHLY" className="cursor-pointer">
                    Mensal
                  </SelectItem>
                  <SelectItem value="ANNUAL" className="cursor-pointer">
                    Anual
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end space-x-2 pt-4 ">
              <Button
                variant="outline"
                type="button"
                className="border border-white/25 cursor-pointer"
                onClick={() => setOpen(false)}
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
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AddButton;
