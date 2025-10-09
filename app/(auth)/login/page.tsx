import React from "react";

import { LoginForm } from "@/components/ui/auth/login-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex flex-col">
      <LoginForm session={session} />
    </div>
  );
};

export default Page;
