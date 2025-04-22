import React from "react";
import { Button } from "./button";

function MonthCard() {
  return (
    <div className="border-2 border-white/25 rounded-2xl h-64 flex  bg-[#07001E]/25">
      <div className="flex m-4 w-full ">
        <div className="flex flex-1 flex-col  gap-4">
          <h1 className=" font-lexend text-4xl ">Month Income:</h1>
          <div className="flex flex-col gap-2 ">
            <span className="font-inter text-2xl text-white/75">Salary:</span>
            <div className="flex  items-center gap-4">
              <input
                type="number"
                placeholder="1.000$"
                className=" font-lexend text-5xl text-green-600 w-1/2 h-15 px-4  border-b-1 border-white/50"
              />
              <Button className="w-20 h-10  ">Apply</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthCard;
