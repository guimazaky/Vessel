import React from "react";

function MonthCard() {
  return (
    <div className="border-2 border-white/25 rounded-2xl h-64 flex justify-between bg-[#07001E]">
      <div className="flex flex-col justify-between m-4 ">
        <div className="flex flex-col gap-2 ">
          <h1 className=" font-lexend text-4xl ">Month Balance:</h1>
          <span className="font-inter text-2xl text-white/75">Salario:</span>
          <input
            type="number"
            placeholder="2000R$"
            className=" font-lexend text-4xl text-green-400 w-40"
          />
          <span className="font-inter text-2xl text-white/75 ">Saldo:</span>
          <h1 className=" font-lexend text-4xl text-red-600">1.500R$</h1>
        </div>
      </div>
      <div className="flex flex-col justify-end m-4">
        <h2 className="font-lexend text-2xl">JAN</h2>
      </div>
    </div>
  );
}

export default MonthCard;
