"use client";

import React, { ReactNode } from "react";

import { AppSidebar } from "@/components/app-sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="main">
      <section className="flex w-screen">
        <AppSidebar />

        <div className="flex  w-screen">
          <div className="flex flex-1">{children}</div>
        </div>
      </section>
    </main>
  );
};
export default Layout;
