import React from "react";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/ui/auth/login-form";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <div className="flex flex-col">
      <LoginForm />
    </div>
  );
};

export default Page;
