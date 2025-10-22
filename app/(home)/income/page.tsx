import React from "react";
import Income from "@/components/ui/pages/income";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { AppSidebar } from "@/components/ui/sidebar/app-sidebar";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex w-full">
      <AppSidebar session={session} />
      <Income session={session} />
    </div>
  );
};
export default Page;
