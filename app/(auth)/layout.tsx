"use server";

import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="main ">
      <section className="center w-full flex flex-col gap-10">
        <div className="bg-background  p-8 rounded-lg">{children}</div>
      </section>
    </main>
  );
};
export default Layout;
