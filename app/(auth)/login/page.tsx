import React from "react";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/login-form";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="flex flex-col">
      <LoginForm />
    </div>
  );
};

export default Page;
