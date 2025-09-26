"use client";

import React, { ReactNode } from "react";

import { AppSidebar } from "@/components/ui/sidebar/app-sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="main">
      <section className="flex w-screen ">
        <AppSidebar />

        <div className="flex  ml-64 w-full ">
          <div className="flex flex-1 ">{children}</div>
        </div>
      </section>
    </main>
  );
};
export default Layout;
