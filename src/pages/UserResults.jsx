import Footer from "@/components/ui/footer";
import React from "react";
import NavbarProfile from "@/components/ui/navbarProfile";
import BalanceCard from "@/components/ui/balanceCard";
import MonthCard from "@/components/ui/monthCard";
import ExpensesCard from "@/components/ui/expensesCard";

function UserResults() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarProfile />
      <div className="flex-1 flex justify-center items-center gap-x-16">
        <div className=" rounded-xl h-160 w-120 flex flex-col justify-between">
          <BalanceCard />
          <MonthCard />
        </div>
        <div className="border-2 border-white/25 rounded-xl h-160 w-120">
          <ExpensesCard />
        </div>
        <div className="border-2 border-white/25 rounded-xl h-160 w-120"></div>
      </div>
      <Footer />
    </div>
  );
}

export default UserResults;
