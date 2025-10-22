import React from "react";
import { AppSidebar } from "@/components/ui/sidebar/app-sidebar";
import Settings from "@/components/ui/pages/settings";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      <AppSidebar session={session} />
      <Settings session={session} />
    </div>
  );
};
export default Page;
