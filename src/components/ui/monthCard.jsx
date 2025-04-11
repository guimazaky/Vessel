import React from "react";
import { Button } from "./button";

function MonthCard() {
  return (
    <div className="border-2 border-white/25 rounded-2xl h-64 flex justify-between bg-[#07001E]/25">
      <div className="flex flex-col justify-between m-4 ">
        <div className="flex flex-col gap-2 ">
          <h1 className=" font-lexend text-4xl ">Month Balance:</h1>
          <span className="font-inter text-2xl text-white/75">Salary:</span>
          <div className="items-center justify-center">
            <h1 className=" font-lexend text-3xl text-green-600 w-40 ">
              +2000R$
            </h1>
          </div>

          <span className="font-inter text-2xl text-white/75 ">Expenses:</span>
          <h1 className=" font-lexend text-3xl text-red-600">-500R$</h1>
        </div>
      </div>
      <div className="flex flex-col justify-end m-4">
        <h2 className="font-lexend text-2xl">JAN</h2>
      </div>
    </div>
  );
}

export default MonthCard;
