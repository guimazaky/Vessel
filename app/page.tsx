import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import SignOut from "@/components/sign-out";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/login");

  return (
    <div className="main center flex-col gap-8 text-8xl">
      Vessel
      <SignOut />
      <h1 className="text-2xl">{session.user?.email}</h1>
    </div>
  );
};
export default Page;
