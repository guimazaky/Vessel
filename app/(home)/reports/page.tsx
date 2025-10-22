import React from "react";

import Reports from "@/components/ui/pages/reports";
import { AppSidebar } from "@/components/ui/sidebar/app-sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      <AppSidebar session={session} />
      <Reports session={session} />
    </div>
  );
};
export default Page;
