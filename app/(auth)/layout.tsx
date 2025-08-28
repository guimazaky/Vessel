"use client";

import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="main ">
      <section className="center w-full">
        <div className="bg-white/5 border-1 border-white/50 shadow-white/25 shadow-sm p-4 rounded-lg">
          {children}
        </div>
      </section>
    </main>
  );
};
export default Layout;
