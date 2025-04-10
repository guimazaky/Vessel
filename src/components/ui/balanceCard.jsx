import React from "react";

function BalanceCard() {
  return (
    <div className="border-2 border-white/25 rounded-2xl h-64 flex justify-between bg-[#07001E]">
      <div className="flex flex-col justify-between m-4 ">
        <div className="">
          <span className="font-inter text-2xl text-white/75">Nome:</span>
          <h1 className=" font-lexend text-4xl">Guilherme</h1>
        </div>

        <div>
          <span className="font-inter text-2xl text-white/75">Saldo:</span>
          <h1 className=" font-lexend text-4xl">1.500R$</h1>
        </div>
      </div>
      <div className="flex flex-col justify-end m-4">
        <span className="font-inter text-1xl text-white/75">mês/ano:</span>
        <h2 className="font-lexend text-2xl">01/25</h2>
      </div>
    </div>
  );
}

export default BalanceCard;
