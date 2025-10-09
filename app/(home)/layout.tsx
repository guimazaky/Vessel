"use server";

import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="main">
      <section className="flex w-screen ">
        <div className="flex w-full ">
          <div className="flex flex-1 ">{children}</div>
        </div>
      </section>
    </main>
  );
};
export default Layout;
