"use server";

import React from "react";
import Dashboard from "@/components/ui/pages/dashboard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="w-full">
      <Dashboard session={session} />
    </div>
  );
};
export default Page;
