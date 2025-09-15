import React from "react";
import SummaryCard from "@/components/ui/summary-card";
import Header from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page = () => {
  const label = [
    {
      name: "Main Job - Tech Company",
      amount: 2200,
      frequency: "Monthly",
      status: "Active",
    },
    {
      name: "Freelance Projects",
      amount: 250,
      frequency: "Variable",
      status: "Active",
    },
    {
      name: "Investment Returns",
      amount: 50,
      frequency: "Monthly",
      status: "Active",
    },
  ];

  return (
    <div className="flex flex-col w-full m-4 gap-4">
      <Header />
      <div className="flex gap-4 ">
        <SummaryCard />
      </div>
      <Card className="bg-black/25">
        <CardHeader>
          <CardTitle className="">Income Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {label.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-4 rounded-lg border border-white/25 hover:bg-white/5 "
              >
                <div>
                  <h3 className="font-medium ">{item.name}</h3>
                  <p className="text-sm text-white/50">
                    {item.frequency} • {item.status}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-400">${item.amount}</p>
                  <p className="text-xs ">per month</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Page;
