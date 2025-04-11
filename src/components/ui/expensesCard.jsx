import React from "react";
import { Button } from "./button";
import { Trash, Plus } from "lucide-react";

function ExpensesCard() {
  return (
    <div className=" flex flex-col items-center justify-center h-full space-y-20 bg-[#07001E]/25 rounded-2xl">
      <div className=" text-center flex flex-col gap-4">
        <span className="text-4xl font-inter ">Expenses:</span>
        <h1 className="text-5xl font-lexend text-red-600">-500R$</h1>
      </div>
      <div className="flex flex-col justify-start w-8/10 gap-2 border-white/50">
        <span className="text-2xl text-white/50 border-white/50 border-b-1 p-2 flex justify-between">
          agua: 250R$
          <Trash />
        </span>
        <span className="text-2xl text-white/50 border-white/50 border-b-1 p-2 flex justify-between">
          luz: 125R$
          <Trash />
        </span>
        <span className="text-2xl text-white/50 border-white/50 border-b-1 p-2 flex justify-between">
          gas: 125R$
          <Trash />
        </span>
      </div>
      <div className="flex  rounded-full h-12 w-12 items-center justify-center hover:border-2 cursor-pointer border-white/50">
        <Plus className="w-8 h-8" />
      </div>
    </div>
  );
}

export default ExpensesCard;
