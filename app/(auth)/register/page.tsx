import React from "react";
import { RegisterForm } from "@/components/ui/auth/register-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div>
      <RegisterForm session={session} />
    </div>
  );
};
export default Page;
