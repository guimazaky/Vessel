import React from "react";
import { LoginForm } from "@/components/login-form";
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Page;
