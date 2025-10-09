import React from "react";
import { AppSidebar } from "@/components/ui/sidebar/app-sidebar";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Expenses from "@/components/ui/pages/expenses";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex w-full">
      <AppSidebar />
      <Expenses />
    </div>
  );
};
export default Page;
