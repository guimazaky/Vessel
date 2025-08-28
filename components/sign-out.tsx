"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const SignOut = () => {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <div>
      <Button onClick={handleSignOut} className="cursor-pointer">
        Sign Out
      </Button>
    </div>
  );
};
export default SignOut;
