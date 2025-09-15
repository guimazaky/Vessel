import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import SignOut from "@/components/sign-out";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/login");
  else redirect("/dashboard");

  return (
    <div className="main center flex-col gap-8 text-8xl">
      Vessel
      <SignOut />
    </div>
  );
};
export default Page;
